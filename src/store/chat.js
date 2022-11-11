
import { defineStore } from "pinia";
import Api from '@/APi/axios_instance'
import showToast from '@/global_components/Toast/useToast'
import {useAuthStore} from '@/store/auth'
import {Account} from '@/store/SwitchAccount'
import Socket from "@/global_components/webSocket/chat_websocket_send";
export const chat = defineStore({
    id: 'chat',
    state: () => ({
         chat_data:[],
         user_list:[],
         RegD_frm:'',
         RegD_to:'',
    }),
    actions: {

        async GetMessage(payload){
            this.RegD_frm =payload.RegD_frm
            this.RegD_to=payload.RegD_to
            await Api.get(`/api/general/get-massage-data?is_admin=false&regd_id_frm=${payload.RegD_frm}&regd_id_to=${payload.RegD_to}&admin_user_id=null`)
            .then(response=>{
                this.chat_data=response.data
            })
         },
        async getUserList (payload){
            const switchAccount = Account().Account_detail[0]
          const response= await Api.get(`/api/general/get-registered-acount-list?Account_id=${switchAccount.Account_type}&regd_id=${switchAccount.RegD_id}&Search=${payload}`)
           this.user_list = response.data
        },
        async sendMessage(payload){
            Socket(payload)
                //    await Api.post('/api/general/send-massage',payload).then(response =>{
                //         this.GetMessage({RegD_frm:this.RegD_frm,RegD_to:this.RegD_to})
                //       })
                //       .catch(error=>{
                //        showToast(error.message)
                //       })
                   }
    }    
})