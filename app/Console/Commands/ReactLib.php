<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

#[Signature('make:lib {name}')]
#[Description('Create a new JS utility library file')]
class ReactLib extends Command
{
    public function handle(): int
    {
        $name = trim($this->argument('name'), '/');

        if (! str_ends_with($name, '.js')) {
            $name .= '.js';
        }

        $path = resource_path("js/lib/{$name}");

        if (File::exists($path)) {
            $this->components->error('Lib file already exists.');

            return self::FAILURE;
        }

        File::ensureDirectoryExists(dirname($path));

        $fileName = class_basename(str_replace('.js', '', $name));

        File::put($path, <<<JS
/**
 * {$fileName} utility
 */

export function {$fileName}() {
    //
}
JS);

        $this->components->info("Lib [resources/js/lib/{$name}] created successfully.");

        return self::SUCCESS;
    }
}
