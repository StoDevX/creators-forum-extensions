<?php

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\UserWasRegistered;

return function (Dispatcher $events) {
     $events->listen(UserWasRegistered::class, function (UserWasRegistered $event) {
        //Set email settings
        $event->user->setPreference("notify_postMentioned_email",true);
        $event->user->setPreference("notify_userMentioned_email",true);
        $event->user->setPreference("notify_newPost_email",true);
        $event->user->save();

    });
    
};