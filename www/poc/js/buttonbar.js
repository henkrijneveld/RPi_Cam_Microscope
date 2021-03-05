Vue.component("button-bar", {
  data: function() {
    return {
      selected: 'no value',
    }
  },
  props: {
    buttons: Array
  },
  computed: {

  },
  methods: {
    buttonselected: function (buttonname) {
      if (buttonname !== "None") {
        this.selected = buttonname;
      } else {
        this.selected = "";
      }
    }
  },
  template: `
<div>
  <slot></slot>: 
  <input v-bind:style="btn == selected ? 'color: red;' : 'color: inherit;'" type="button" v-for="btn in buttons" v-bind:value="btn" v-on:click="buttonselected(btn)"/>
  <br/>
  <p>{{ selected }}</p>
</div>
`
})
