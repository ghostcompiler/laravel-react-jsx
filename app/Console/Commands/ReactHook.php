<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

#[Signature('make:hook {name}')]
#[Description('Create a new React hook')]
class ReactHook extends Command
{
    public function handle(): int
    {
        $name = trim($this->argument('name'), '/');

        $segments = explode('/', $name);
        $file = array_pop($segments);

        // Ensure hook starts with "use"
        if (! Str::startsWith($file, 'use')) {
            $file = 'use'.Str::studly($file);
        }

        $segments[] = $file;

        $relativePath = implode('/', $segments).'.js';
        $path = resource_path("js/hooks/{$relativePath}");

        if (File::exists($path)) {
            $this->components->error('Hook already exists.');

            return self::FAILURE;
        }

        File::ensureDirectoryExists(dirname($path));

        File::put($path, <<<JS
import { useState } from "react";

export default function {$file}(initialValue = null) {
    const [state, setState] = useState(initialValue);

    return {
        state,
        setState,
    };
}
JS);

        $this->components->info("Hook [resources/js/hooks/{$relativePath}] created successfully.");

        return self::SUCCESS;
    }
}
