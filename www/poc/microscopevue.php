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
      <div id="navbar">
        <div id="savefile">
          <save-file :filename="fname"></save-file>
          <a class="buttonstyle" @click="selectAll()">Show all</a>
          <a class="buttonstyle" @click="selectCamera()">Camera fullscreen</a>
          <div id="applogo">Camera on {{hostname}}</div>
        </div>
      </div>
      <div class="container" :class="displayLayout" ref="gridcontainer">
        <div class="camera" id="camerapicture">
          <zoomable-image :maxwidth="camerawidth"></zoomable-image>
        </div>
        <div class="file" id="filename">
          <file-name v-on:setfname="fname = $event">Filename</file-name>
        </div>
        <div class="config" id="configuration">
          <configuration-pane>Config settings</configuration-pane>
        </div>
      </div>
    </div>
  <script type="text/javascript" src="js/config.js"></script>
  <script type="text/javascript" src="js/buttonbar.js"></script>
  <script type="text/javascript" src="js/filename.js"></script>
  <script type="text/javascript" src="js/zoomableimage.js"></script>
  <script type="text/javascript" src="js/savefile.js"></script>
  <script type="text/javascript" src="js/configuration.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
</body>
</html>