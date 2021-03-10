Vue.component("save-file", {
    data: function() {
        return {
        }
    },
    props: {
        filename: {
            type: String,
            required: true
        }
    },
    methods: {
./stop      },
    template: `
<div class="savefile">
<h3><slot></slot></h3>
save the file: {{filename}}
</div>
`
})
