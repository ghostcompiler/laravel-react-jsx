<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('welcome');
});

Route::get('/demo', function () {
    return inertia('welcome');
});
