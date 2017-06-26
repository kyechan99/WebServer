/**
 * Created by kyech on 2017-06-23.
 */

var myboard = new Vue({
    el: '#myboard',
    data: {
        isWriting: false
    },
    methods: {
        wantWrite : function() {
            this.isWriting = this.isWriting ? false : true;
        }
    }
})
