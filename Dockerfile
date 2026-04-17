FROM composer:2 AS vendor

WORKDIR /app

COPY . .

RUN composer install \
    --no-interaction \
    --no-progress \
    --prefer-dist \
    --no-dev \
    --no-scripts \
    --optimize-autoloader

FROM node:20-bookworm-slim AS assets

WORKDIR /app

COPY . .

RUN npm install && npm run build:ssr

FROM php:8.3-cli-bookworm AS runtime

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    unzip \
    libzip-dev \
    libicu-dev \
    libpq-dev \
    libonig-dev \
    libsqlite3-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql pdo_sqlite mbstring zip intl opcache \
    && rm -rf /var/lib/apt/lists/*

COPY --from=assets /usr/local/bin/node /usr/local/bin/node

ENV APP_ENV=production \
    APP_DEBUG=false \
    PORT=8080

COPY . .
COPY --from=vendor /app/vendor ./vendor
COPY --from=assets /app/node_modules ./node_modules
COPY --from=assets /app/public/build ./public/build
COPY --from=assets /app/bootstrap/ssr ./bootstrap/ssr

RUN mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views bootstrap/cache database \
    && touch database/database.sqlite \
    && chown -R www-data:www-data storage bootstrap/cache database

EXPOSE 8080

CMD ["sh", "-lc", "php artisan migrate --force; if [ -f bootstrap/ssr/app.js ] || [ -f bootstrap/ssr/ssr.js ]; then echo 'Starting Inertia SSR...'; php artisan inertia:start-ssr > /tmp/inertia-ssr.log 2>&1 & SSR_PID=$!; sleep 2; if ! kill -0 $SSR_PID 2>/dev/null; then echo 'SSR failed to start'; cat /tmp/inertia-ssr.log; fi; else echo 'No SSR bundle found'; fi; exec php artisan serve --host=0.0.0.0 --port=\"${PORT:-8080}\""]