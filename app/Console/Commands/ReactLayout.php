<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

#[Signature('make:layout {name}')]
#[Description('Create a new React layout component')]
class ReactLayout extends Command
{
    public function handle(): int
    {
        $name = trim($this->argument('name'), '/');
        if (! str_ends_with($name, '.jsx')) {
            $name .= '.jsx';
        }
        $path = resource_path("js/layouts/{$name}");
        if (File::exists($path)) {
            $this->components->error('Layout already exists.');

            return self::FAILURE;
        }
        File::ensureDirectoryExists(dirname($path));
        $componentName = class_basename(str_replace('.jsx', '', $name));
        File::put($path, <<<JSX
export default ({ children }) => {
    return (
        <div>
            <header>
                <h2>{$componentName} Layout</h2>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}
JSX);
        $this->components->info("Layout [resources/js/layouts/{$name}] created successfully.");

        return self::SUCCESS;
    }
}
