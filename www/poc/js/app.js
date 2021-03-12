var vm = new Vue({
    el: '#microscopeapp',
    data: {
        fname: 'testname',
        displayLayout: 'layout-all',
        camerawidth: 500,
        hostname: 'unknown'
    },
    mounted: function() {
      this.hostname = location.hostname
      this.selectAll();
    },
    created: function() {
        window.addEventListener("resize", this.resizeWindow);
    },
    destroyed: function() {
        window.removeEventListener("resize", this.resizeWindow);
    },
    methods: {
        resizeWindow (event) {
            if (this.displayLayout === 'layout-all') {
                this.selectAll();
            } else {
                this.selectCamera();
            }
        },
        selectAll: function() {
            this.displayLayout = 'layout-all';
            this.camerawidth = this.$refs.gridcontainer.clientWidth - 520;
        },
        selectCamera: function() {
            this.displayLayout = 'layout-camera';
            this.camerawidth = this.$refs.gridcontainer.clientWidth - 20;
        }
    }
})

