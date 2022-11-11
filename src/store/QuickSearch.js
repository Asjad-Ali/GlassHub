import { defineStore } from "pinia";
import Api from '@/APi/axios_instance'
import {Account} from '@/store/SwitchAccount'
import { useAuthStore } from "@/store/auth";
import showToast from "@/global_components/Toast/useToast";
export const QuickSearch = defineStore({
    id: 'QuickSearch',
    state: () => ({
       QuickSearchList:[],
    }),
    actions:{
    async loadQuickList(payload){
        const SwitchAccount =Account()
        const auth = useAuthStore()
      //   await Api.get(`api/general/search-menue-list?User_id=${auth.user.User_id}&RegD_id=${SwitchAccount.Account_detail[0]?.RegD_id}`)
         await Api.get(`/api/general/searching-tips?RegD_id=${SwitchAccount.User_role[0]?.RegD_id}&Role_id=${SwitchAccount.User_role[0]?.Role_id}&Account_type=0&search=${payload}`)
         .then(response=>{
            this.QuickSearchList= response.data
         }).catch(error=>{
            showToast(error.response.data)
         })
      }      
    }
})

