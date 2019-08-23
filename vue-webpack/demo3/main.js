import Vue from 'vue'
import App from './src/App.vue'
console.log(process.env.BASE_API)
console.error('aaaaaaaaaaaa')
new Vue({
    el:"#app",
    template:"<App/>",
    components:{App}
})