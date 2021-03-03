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
  <div id="camerapicture">
    <zoomable-image :vwidth="500">Raspicam 12 MB</zoomable-image>
  </div>
  <div id="filename">
    <file-name>Filename</file-name>
  </div>
  <script type="text/javascript" src="js/filename.js"></script>
  <script type="text/javascript" src="js/zoomableimage.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
</body>
</html>