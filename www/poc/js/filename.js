Vue.component("file-name", {
  data: function() {
    return {
      name: '',
      extra: '',
      reduction: '',
      barlow: '',
      polarizer: '',
      immersion: '',
      magn: '0',
      magnfraction: '7',
    }
  },
  computed: {
    filename() {
      filename = "";
      if (this.name) filename += this.name + "-";
      filename += this.magn + '.' + this.magnfraction + "x-";
      if (this.reduction) filename += this.reduction + "-"
      if (this.barlow) filename += this.barlow + "-"
      if (this.polarizer) filename += this.polarizer + "-";
      if (this.immersion) filename += this.immersion + "-";
      if (this.extra) filename += this.extra + "-";
      fd = new Date();
      filename += filedate = fd.getFullYear().toString().slice(-2)+("0"+(fd.getMonth()+1)).slice(-2)+("0"+(fd.getDay())).slice(-2)+"-"+("0"+fd.getHours()).slice(-2)+":"+("0"+fd.getMinutes()).slice(-2)+":"+("0"+fd.getSeconds()).slice(-2);
//      this.$emit("setfname", filename);
      return (filename + ".jpg");
    }
  },
  updated: function() {
    this.$emit("setfname", this.filename);
  },
  mounted: function() {
    this.$emit("setfname", this.filename);
  },
  methods: {

  },
  template: `
<div id="fn-settings">
  <h3><slot></slot></h3>
  <input v-model="name" placeholder="description"><br>
  <input v-model="extra" placeholder="extra text">
  <button-bar v-bind:selected.sync="magn" v-bind:buttons="$cfg.magn">Magnification</button-bar>
  <button-bar v-bind:selected.sync="magnfraction" v-bind:buttons="$cfg.magnfraction">Magnification-fraction</button-bar>
  <button-bar v-bind:selected.sync="reduction" v-bind:buttons="$cfg.reduction">Reduction</button-bar>
  <button-bar v-bind:selected.sync="barlow" v-bind:buttons="$cfg.barlow">Barlow</button-bar>
  <button-bar v-bind:selected.sync="polarizer" v-bind:buttons="$cfg.polarizer">Polarizer</button-bar>
  <button-bar v-bind:selected.sync="immersion" v-bind:buttons="$cfg.immersion">Immersion</button-bar>
</div>
`
})
