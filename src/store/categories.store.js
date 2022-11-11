
import { defineStore } from 'pinia'
import API from '@/composables/API'

export const useCategoriesStore = defineStore('categories',{
    state: () => ({
        categoriesList: [],
    }),
    actions:{
        async loadCategoriesList(){
            if(this.categoriesList.length) return
            const categories = JSON.parse(localStorage.getItem('allCategories') || null ) 
            if(!categories){
                var response = await API.get("api/CategoriesDef/GetFullList")
                if( response.status == 200 ){
                    localStorage.setItem('allCategories',JSON.stringify(response.data))
                    this.categoriesList = response.data.Categories
                }
            }
            else{
                this.categoriesList = categories.Categories
            }
            return response
        },
    }
})