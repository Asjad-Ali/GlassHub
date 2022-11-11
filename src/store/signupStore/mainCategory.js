import { defineStore } from 'pinia'
import useToast from '@/global_components/Toast/useToast'
import API from '@/APi/axios_instance'
import {  ref } from "@vue/reactivity";
export const useMainCategoryStore = defineStore('categoryStoreSignup',{
    state: () => ({
        mainCategoryList:   ref([]),
        RegistrationCategories:[]      
 
    }),
     
    actions:{
                    // Mian category functions    
        async loadCategory(){
            // if(this.mainCategoryList.length) return
            try{
                this.mainCategoryLoader = true
                const response = await API.get('/api/CategoriesDef/GetFullList')
                this.mainCategoryLoader = false
                if(response.status == 200) {
                    this.mainCategoryList = response.data
                }
                return  true
            }catch(error){
                return false
            }
            
        },

        async getRegistrationCategories(RegD_id){
            const response = await API.get('/api/registrationcategories/get-by-RegD?RegD_id='+RegD_id)
            if(response.status == 200) {
                this.RegistrationCategories = response.data
            }
        },  

        async insertCategories(payload){
            const response = await API.post('/api/registrationcategories/insert', payload)
        },  
    }
})