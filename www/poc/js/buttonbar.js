Vue.component("button-bar", {
  data: function() {
    return {
      selected: this.buttons[0]
    }
  },
  props: {
    buttons: {
      type: Array,
      required: true
    }
  },
  computed: {

  },
  methods: {

  },
  template: `
<div>
  <slot></slot>: 
  <input    style="margin-right: 10px;" 
            type="button" 
            v-for="btn in buttons"
            v-bind:key="btn"
            v-bind:value="btn"
            v-bind:style="btn === selected ? 'color: red;' : 'color: inherit;'"
            v-on:click="selected = btn"/>
  <br/>
  <p>{{ selected }}</p>
</div>
`
})
