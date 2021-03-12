<?php

namespace api\picture;

use api\control\RaspicamControl as CamControl;

class RaspicamProvider implements ProviderInterface
{
	static private $mediadir = "/var/www/html/media";

	function getStreamImage()
    {
	    header("Access-Control-Allow-Origin: *");
	    header("Content-Type: image/jpeg");
	    readfile("/dev/shm/mjpeg/cam.jpg");
    }

    // @TODO: logic to only get the file, return it, and delete it from media
	  function getShotImage()
    {
	    $cc = new CamControl;

	    $cc->takeImage();

	    $files = scandir(self::$mediadir, SCANDIR_SORT_DESCENDING);
	    foreach ($files as $file) {
		    if (!strchr($file, ".th."))
			    break;
	    }
	    if (strchr($file, ".jpg")) {
		    header("Access-Control-Allow-Origin: *");
		    header("Content-Type: image/jpeg");
		    $fname = self::$mediadir."/".$file;
		    readfile($fname);
	    } else {
	    	echo "";
	    }
    }
}
