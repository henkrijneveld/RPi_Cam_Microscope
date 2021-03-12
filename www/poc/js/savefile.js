Vue.component("configuration-pane", {
    data: function() {
        return {
        }
    },
    methods: {
    },
    template: `
<div class="cf-settings">
<h3 v-if="$slots.default"><slot></slot></h3>
</div>
`
})
