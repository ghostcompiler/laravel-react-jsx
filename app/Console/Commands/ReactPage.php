<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

#[Signature('make:page {name}')]
#[Description('Create a new React Inertia page')]
class ReactPage extends Command
{
    public function handle(): int
    {
        $name = trim($this->argument('name'), '/');
        if (! str_ends_with($name, '.jsx')) {
            $name .= '.jsx';
        }
        $path = resource_path("js/pages/{$name}");
        if (File::exists($path)) {
            $this->components->error('Page already exists.');

            return self::FAILURE;
        }
        File::ensureDirectoryExists(dirname($path));
        $componentName = class_basename(str_replace('.jsx', '', $name));
        File::put($path, <<<JSX
export default () => {
    return (
        <div>
            <h1>{$componentName} Page</h1>
        </div>
    );
}
JSX);
        $this->components->info("View [resources/js/pages/{$name}] created successfully.");

        return self::SUCCESS;
    }
}
