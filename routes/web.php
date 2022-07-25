<?php

use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;

Route::controller(ChatController::class)->group(function () {
    Route::get('/', 'index');
    Route::get('/messages', 'messages');
    Route::post('/send', 'send');
});