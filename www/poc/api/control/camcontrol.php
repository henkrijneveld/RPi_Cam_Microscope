<?php
include_once "../../autoloader.php"; // somewhat clunky, acceptable for the time being

use api\control\RaspicamControl as CamControl;

$cc = new CamControl;

$cc->takeImage();

