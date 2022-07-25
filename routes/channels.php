<?php

use App\Broadcasting\ChatChannel;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('chat', ChatChannel::class);
