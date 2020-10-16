import Vue from "vue"
import filterPrice from "./filterPrice"


// Vue.filter("filterPrice",filterPrice)
// Vue.filter("filterTime",filterTime)

let obj={
    filterPrice
}
for(let i in obj){
    Vue.filter(i,obj[i])
}