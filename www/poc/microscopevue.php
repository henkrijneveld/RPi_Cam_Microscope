<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Testfoto</title>
  <link rel="stylesheet" href="css/style.css">
  <script type="text/javascript" src="js/vue.js"></script>
  <script type="text/javascript" src="js/axios.min.js"></script>
</head>
<body>
    <div id="microscopeapp">
      <div id="camerapicture">
        <zoomable-image :vwidth="500">Raspicam 12 MB</zoomable-image>
      </div>
      <div id="filename">
        <file-name v-on:setfname="fname = $event">Picture settings</file-name>
      </div>
      <div id="savefile">
        <save-file :filename="fname">Saving</save-file>
      </div>
    </div>
  <script type="text/javascript" src="js/config.js"></script>
  <script type="text/javascript" src="js/buttonbar.js"></script>
  <script type="text/javascript" src="js/filename.js"></script>
  <script type="text/javascript" src="js/zoomableimage.js"></script>
  <script type="text/javascript" src="js/savefile.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
</body>
</html>