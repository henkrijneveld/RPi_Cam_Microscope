<?php
//The exec/fswebcam log will be in error.log.
// for testing: change to www-data user with:
// su -l www-data -s /bin/bash
// get further with;
// usermod -a -G groupname username
exec('/usr/bin/fswebcam -r 1280x720 --timestamp "%Y-%m-%d %H:%M:%S" /var/www/html/api/picture/image.jpg');

$image = file_get_contents('/var/www/html/api/picture/image.jpg');
header('content-type: image/jpeg');
echo $image;
