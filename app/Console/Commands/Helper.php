<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

#[Signature('make:helper {name}')]
#[Description('Create a new helper file')]
class Helper extends Command
{
    public function handle(): int
    {
        $name = trim($this->argument('name'), '/');

        $segments = explode('/', $name);
        $file = array_pop($segments);

        if (! str_ends_with($file, '.php')) {
            $file .= '.php';
        }

        $baseName = pathinfo($file, PATHINFO_FILENAME);
        $file = Str::ucfirst($baseName).'.php';
        $segments[] = $file;

        $name = implode('/', $segments);

        $path = app_path("Helpers/{$name}");

        if (File::exists($path)) {
            $this->components->error('Helper file already exists.');

            return self::FAILURE;
        }

        File::ensureDirectoryExists(dirname($path));

        $functionName = Str::ucfirst(Str::snake(pathinfo($name, PATHINFO_FILENAME)));

        File::put($path, <<<PHP
<?php

if (! function_exists('{$functionName}')) {
    function {$functionName}(): void
    {
        //
    }
}
PHP);

        $this->components->info("Helper [app/Helpers/{$name}] created successfully.");

        return self::SUCCESS;
    }
}
