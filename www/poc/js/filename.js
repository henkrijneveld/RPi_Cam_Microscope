Vue.component("file-name", {
  data: function() {
    return {
      name: '',
      extra: '',
      oculair: 'N/A'
    }
  },
  computed: {
    filename() {
      filename = "";
      if (this.name) filename += this.name + "-";
      if (this.extra) filename += this.extra + "-";
      if (this.oculair) filename += this.oculair + "-"
      fd = new Date();
      filename += filedate = fd.getFullYear().toString().slice(-2)+("0"+(fd.getMonth()+1)).slice(-2)+("0"+(fd.getDay())).slice(-2)+"-"+("0"+fd.getHours()).slice(-2)+":"+("0"+fd.getMinutes()).slice(-2)+":"+("0"+fd.getSeconds()).slice(-2);
      return (filename + ".jpg");
    }
  },
  methods: {

  },
  template: `
<div id="fn-settings">
  <h2><slot></slot></h2>
  <input v-model="name" placeholder="description">
  <h3>Oculair</h3>
  <input type="radio" v-model="oculair" value="N/A">None
  <input type="radio" v-model="oculair" value="0.3x">0.3x
  <input type="radio" v-model="oculair" value="0.5x">0.5x
  <input type="radio" v-model="oculair" value="1.0x">1.0x
  <input type="radio" v-model="oculair" value="2.0x">2.0x
  <br />
<p>Magnification</p>
<p>Barlow</p>
  <input v-model="extra" placeholder="extra text">
<p>Filename: {{filename}}</p>
</div>
`
})
