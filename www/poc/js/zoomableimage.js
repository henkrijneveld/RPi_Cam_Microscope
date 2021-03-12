Vue.component("zoomable-image", {
  data: function() {
    return {
      vheight: 0,
      vwidth: 500,
      iheight: 3040,
      iwidth: 4056,
      height: 450,
      width: 600,
      dragactive: false,
      top: 20,
      left: 50,
      multiplier: 0,
      centerh: 0,
      centerw: 0,

      pict: "",
      isLoaded: false,
      timer: null
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  computed: {
    zoomperc() {
      return (this.multiplier * 100).toFixed(0) + '%';
    }
  },
  props: {
    maxwidth: Number
  },
  watch: {
    maxwidth: function (newwidth, oldwith) {
      this.isLoaded = false;
      this.vwidth = newwidth;
    }
  },
  created: function () {
    this.vheight = this.vwidth;
    this.timer = setInterval(() => this.loadpic(), 750);
  },
  methods: {
    loadpic: function() {
      axios
          .get(this.$cfg.hostname + this.$cfg.streamEndpoint, { responseType: 'arraybuffer'})
          .then(response => {
            const base64 = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    '',
                ),
            );
            this.pict = "data:;base64," + base64;
          })
          .catch(error => {console.log(error);})
    },
    center: function () {
      this.centerh = this.iheight / 2;
      this.centerw = this.iwidth / 2;
      this.setupsizes(this.multiplier);
    },
    init: function(event) {
      if (!this.isLoaded) {
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;
        let maxHeight = window.innerHeight - 140;

        this.vwidth = this.maxwidth;
        this.iheight = event.currentTarget.naturalHeight;
        this.iwidth = event.currentTarget.naturalWidth;
        this.vheight = this.vwidth * this.iheight / this.iwidth;
        if (maxHeight > 100 && this.vheight > maxHeight) {
          this.vheight = maxHeight;
          this.vwidth = this.iwidth * this.vheight / this.iheight;
        }
        this.centerh = this.iheight / 2;
        this.centerw = this.iwidth / 2;
        this.setupsizes(this.vheight / this.iheight);
        this.isLoaded = true;
      }
    },
    dofit: function () {
      this.setupsizes(this.vheight / this.iheight);
    },
    doquart: function () {
      this.setupsizes(0.25);
    },
    dohalf: function () {
      this.setupsizes(0.5);
    },
    dofull: function () {
      this.setupsizes(1);
    },
    dodouble: function () {
      this.setupsizes(2);
    },
    mousedown: function (event) {
      this.dragactive = true;
    },
    mouseup: function (event) {
      this.dragactive = false;
    },
    mousemove: function (event) {
      if (this.dragactive) {
        this.top += event.movementY;
        this.left += event.movementX;
        this.centerh -= event.movementY / this.multiplier;
        this.centerw -= event.movementX / this.multiplier;
      }
    },
    setupsizes: function (multiplier) {
      this.multiplier = multiplier;
      this.height = this.iheight * multiplier;
      this.width = this.iwidth * multiplier;
      this.top = this.vheight / 2 - this.centerh * multiplier;
      this.left = this.vwidth / 2 - this.centerw * multiplier;
    }
  },
  template: `
<div id="zi-picture">
  <h3 v-if="$slots.default"><slot></slot></h3>
  <div :style="[isLoaded ? {'display': 'block'} : {'display': 'none'}]">
    <div class="zi-camimg" id="zi-camdiv" :style="{width: vwidth + 'px', height: vheight + 'px'}">
      <img  v-on:load="init"
            v-bind:style="{top: top + 'px', left: left + 'px'}"  
            v-on:mousemove.prevent="mousemove" 
            v-on:mousedown.prevent="mousedown" 
            v-on:mouseup.prevent="mouseup" 
            id="zi-campic" 
            :src="pict" 
            v-bind:height="height" 
    />
    </div>
    <div class="zi-buttons">
      <button v-on:click="center">Center</button>
      <button v-on:click="dofit">Fit</button>
      <button v-on:click="doquart">25%</button>
      <button v-on:click="dohalf">50%</button>
      <button v-on:click="dofull">100%</button>
      <button v-on:click="dodouble">200%</button>
      <div style="display: inline-block; margin-left: 10px;">zoom: {{ zoomperc }}</div>
    </div>
  </div>
</div>
`
})
