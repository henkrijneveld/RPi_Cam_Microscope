<?php

namespace api\picture;


class WebcamProvider extends Provider
{
    function getImage()
    {

        exec('/usr/bin/fswebcam -r 1280x720 --no-banner /tmp/webcam/image1280.jpg');
        // exec('/usr/bin/fswebcam -l 1 -b -r 320x240 --no-banner /tmp/webcam/image320.jpg');
        // exec('/usr/bin/fswebcam -r 320x240 --no-banner /tmp/webcam/image320.jpg');

        $image = file_get_contents('/tmp/webcam/image1280.jpg');

        header('content-type: image/jpeg');
        echo $image;
    }
}