<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

#[Signature('make:component {name}')]
#[Description('Create a new React component')]
class ReactComponent extends Command
{
    public function handle(): int
    {
        $name = trim($this->argument('name'), '/');
        if (! str_ends_with($name, '.jsx')) {
            $name .= '.jsx';
        }
        $path = resource_path("js/components/{$name}");
        if (File::exists($path)) {
            $this->components->error('Component already exists.');

            return self::FAILURE;
        }
        File::ensureDirectoryExists(dirname($path));
        $componentName = class_basename(str_replace('.jsx', '', $name));
        File::put($path, <<<JSX
export default ({ children, ...props }) => {
    return (
        <div {...props}>
            {children ?? "{$componentName} Component"}
        </div>
    );
}
JSX);
        $this->components->info("Component [resources/js/components/{$name}] created successfully.");

        return self::SUCCESS;
    }
}
