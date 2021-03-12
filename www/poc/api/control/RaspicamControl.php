<?php

namespace api\control;

// @TODO: Move all magic values to a configuration file.
// for the moment the default for RPI_... is used

class RaspicamControl
{
	static private $fifofile = "/var/www/html/FIFO";

	private function send($command)
	{
		$pipe = fopen(self::$fifofile, "w");
		fwrite($pipe, $command . "\n");
		fclose($pipe);
	}

	public function takeImage()
	{
		$this->send("im");
		sleep(1);
	}
}


