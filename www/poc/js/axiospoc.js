Vue.component("axios-poc", {
  data: function() {
    return {
        info: null,
        loaded: false,
        webcampic: "",
        timer: null
    }
  },
  mounted () {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {this.info = response.data.bpi; this.loaded = true})
        .catch(error => {console.log(error); this.loaded = false;})
        .finally(() => {});
  },
  created() {
    this.interval = setInterval(() => this.loadpic(), 500);
  }
  ,
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    loadpic: function() {
      axios
          .get('http://localhost/api/picture/showpic.php', { responseType: 'arraybuffer'})
          .then(response => {
            const base64 = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    '',
                ),
            );
            this.webcampic = "data:;base64," + base64;
          })
          .catch(error => {console.log(error);})
    }

  },
  template: `
<div v-if="loaded" id="contents">
Hello
<div
v-for="currency in info"
class="currency"
>
{{currency.description}}:
<span class="lighten">
<span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }} 
</span>
</div>
<div>
<img width="400px" :src="webcampic" />
</div>
</div>
`
})
