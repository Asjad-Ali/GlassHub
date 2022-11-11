import { useRouter } from "vue-router";
export default  function permission(){
    let menu =JSON.parse(localStorage.getItem('menuAccess'))
   let permission= menu.find(({Menue_location})=>'/'+Menue_location==useRouter().currentRoute._value.path)
   return permission
}