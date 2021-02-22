Vue.component("axios-poc", {
  data: function() {
    return {
        info: null,
        loaded: false
    }
  },
  mounted () {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {this.info = response.data.bpi; this.loaded = true})
        .catch(error => {console.log(error); this.loaded = false;})
        .finally(() => {})
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  methods: {

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
</div>
`
})
