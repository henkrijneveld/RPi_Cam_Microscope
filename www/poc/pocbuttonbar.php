<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Testbuttonbar</title>
  <link rel="stylesheet" href="css/style.css">
  <script type="text/javascript" src="js/vue.js"></script>
</head>
<body>
  <div id="buttontest">
    <button-bar v-bind:buttons="['None','0.3x','0.5x','1.0x','2.0x']">Oculair</button-bar>
  </div>
  <script type="text/javascript" src="js/buttonbar.js"></script>
  <script>
      var buttontest = new Vue( {el: '#buttontest' });
  </script>
</body>
</html>