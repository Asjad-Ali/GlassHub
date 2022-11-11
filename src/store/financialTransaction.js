import { defineStore } from "pinia";
import Api from '@/APi/axios_instance'
import showToast from '@/global_components/Toast/useToast'
import {useAuthStore} from '@/store/auth'
import {Account} from '@/store/SwitchAccount'
export const financail = defineStore({
  id:'financial',
  state: () => ({
     financailTransaction:[],
     SummerList:[],
     loader: false
}),
actions: {
   async getFinancial(payload){
    this.loader = true
    const switchAccout = Account().Account_detail[0]
    const response = await Api.get(`/api/financial/get-transaction-list?Pay_start_date=${payload.start_time}&Pay_end_date=${payload.end_time}&RegD_id=${switchAccout.RegD_id}&Account_id=${switchAccout.Account_type}`)
    this.loader = false
    if(response.status==200){
        this.financailTransaction= response.data
    }else{
        showToast(response)
    } 
},

async getsummer(payload){
    this.loader = true
    const switchAccout = Account().Account_detail[0]
    const response = await Api.get(`/api/financial/get-summary-report?Pay_start_date=${payload.start_time}&Pay_end_date=${payload.end_time}&RegD_id=${switchAccout.RegD_id}&Account_id=${switchAccout.Account_type}`)
    this.loader = false
    if(response.status==200){
        this.SummerList= response.data
    }else{
        showToast(response)
    } 
}

}

})