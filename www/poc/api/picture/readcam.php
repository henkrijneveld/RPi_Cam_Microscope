<?php
//The exec/fswebcam log will be in error.log.ls webcam
// for testing: change to www-data user with:
// su -l www-data -s /bin/bash
// get further with;
// usermod -a -G groupname username
// memory mount
// https://www.jamescoyle.net/how-to/943-create-a-ram-disk-in-linux
// check ramfs with df -a


// probleem: rechten in tmp
exec('/usr/bin/fswebcam -r 1280x720 --no-banner /tmp/webcam/image1280.jpg');
// exec('/usr/bin/fswebcam -l 1 -b -r 320x240 --no-banner /tmp/webcam/image320.jpg');
// exec('/usr/bin/fswebcam -r 320x240 --no-banner /tmp/webcam/image320.jpg');


$image = file_get_contents('/tmp/webcam/image1280.jpg');

header('content-type: image/jpeg');
echo $image;
