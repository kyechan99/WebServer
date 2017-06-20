var login = new Vue({
    el: '#login',
    data: {
        pw_seen: false,
        signup_seen: false
    },
    methods: {
        pw_see : function() {
            this.pw_seen = this.pw_seen ? false : true;
        },
        signup_see : function() {
            this.signup_seen = this.signup_seen ? false : true;
        },
        login_check : function() {

        },
        signup_check : function() {

        }
    }
})
