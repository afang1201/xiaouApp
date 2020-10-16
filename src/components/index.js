import Vue from "vue"
import goBack from "../components/goback.vue"
import lunBo from '../components/lunbo.vue'
// Vue.component("goBack",goBack)
// Vue.component("toSearch",toSearch)

let obj = {
    goBack,
    lunBo
}

for(let i in obj){
    Vue.component(i,obj[i])
}
