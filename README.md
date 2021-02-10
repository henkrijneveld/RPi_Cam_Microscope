This repository is based on the RPi_Cam_Web_Interface.

Modifications are made to use the 12MP HQ Cam on a 0.5X CMount lens.
The webinterface is/will be optimized for use of this camera in this way.

**Running the software**

1) Start the webserver on the PI. Login with vnc or ssh, go to ~/RPi_Cam_Microscope on the raspberry, and execute ./start.sh

2) Open webbrowser on client machine / PC and go to the raspberry IP or URL in /html

3) For debugging:
    - Activate the debug helper in firefox if it is not.
    - Click the little grey bug in the url bar of firefox. 
    - Select "Debug"
    - Bug will turn green.
    - Go to the URL to debug and start debugging
    


**Installation with PHP Storm**

It is based on development on a Linux system, and the PI with the cam connected.

1) Make the PI fixed on an IP (dhcp in router). Give it a symbolic name in the hosts file
2) Clone this repo on development PC: git clone ssh://git@github.com/henkrijneveld/RPi_Cam_Microscope RPi_Cam_Microscope
3) Make ssh available on PI
4) Add a host add tools -> deployment -> configuration. Use SFTP and add an ssh configuration. Make the rootpath on PI to RPi_Cam2. Mappings from development directory to . on Pi. Create the destination directory on the Pi.
5) Upload everything from development system to PI
6) chmod +x the shell scripts
7) On **RASPBERRY**, run ./install.sh. I Prefer autostart on no
8) It must be visible on http://\<ip raspberry>/html
9) Create second remote host Cam_Raspberry_html to /var/www/html. Map this to www on the development system
10) In /var/www on raspberry do: "sudo chmod g+w -R html"
11) Make this second remote host the default
12) Make sure the user you use in SSH is member of the group www-data (sudo usermod -a -G www-data pi, followed by sudo shutdown -r now)
13) tip: you can go to the pi with tools->Start ssh session...
14) To correct problem: https://intellij-support.jetbrains.com/hc/en-us/community/posts/207036445-Auto-upload-Failed-to-change-timestamp-of-the-file
chown the owner of the files from www-data to pi. In /var : sudo chown -R pi www
15) Install xdebug on PI with: https://xdebug.org/wizard
16) enable in the correct php.ini:
    [xdebug]
    
    remote_port=9000
    
    remote_host=\<ip of development machine\>
    
    remote_enable=on
    
17) Enable ports in ufw on raspberry (including 9000)
18) For remote debugging, install xdebug helper on firefox. Follow the steps outlined in PHP Storm including the validator 
(this is not necessary when the remote system runs in docker on the same machine as PHPStorm)
19) The contents for /var/www are in wwwroot. This way we keep maximum compatibility with the original RPi_Cam software

**Do not forget to go to ~/RPi_Cam_Microscope on the raspberry, and execute ./start.sh after booting**

========================

**Additional Docs**

Most recent raspimjpeg source:

https://github.com/roberttidey/userland/tree/master/host_applications/linux/apps/raspicam

========================

**Some observations and other**

Network speed: measured with iperf, using pi as server. Do not forget opening port 5001 on pi (sudo ufw allow 5001). Ip address PI will be different for wlan then for eth (!)

Test with pi 3B+: eth up/download 94 Mbit/s; wlan up/download 39 Mbit/s. Seems in line with observation: eth is around 2x faster for transfer of large images then wlan.

---
www/poc can be run in testenvironment without pi, by using the included docker-compose. Just open terminal in www/poc, and run ./start.sh. Open localhost/microscopevue.php in browser. Don't forget to enable the mock api's in the source ;)

========================

**The original Readme:**

Web based interface for controlling the Raspberry Pi Camera, includes motion detection, time lapse, and image and video recording.
Current version 6.6.11
All information on this project can be found here: http://www.raspberrypi.org/forums/viewtopic.php?f=43&t=63276

The wiki page can be found here:

http://elinux.org/RPi-Cam-Web-Interface

This includes the installation instructions at the top and full technical details.
For latest change details see:

https://github.com/silvanmelchior/RPi_Cam_Web_Interface/commits/master
  
This version has updates for php7.3 / Buster. May need further changes for nginx
