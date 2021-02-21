Vue.component("axios-poc", {
  data: function() {
    return {
        info: null
    }
  },
  mounted () {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  methods: {

  },
  template: `
<div id="contents">
<div
v-for="Currency in info"
class="currency"
>
{{currency.description}}:
<span class="lighten">
<span v-html="currenct.symbol"></span>{{ currency.rate_float }} <!-- | currencydecimal }} -->
</span>
</div>
</div>
`
})
