import Vue from "vue"
import App from "./app"

// ?? je sais plus exactement ce que ca fait
Vue.config.productionTip = false

export const app = new Vue({
    el: "#app",
    render: h => h(App),
})