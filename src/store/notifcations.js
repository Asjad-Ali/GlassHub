import { defineStore } from "pinia";
import APi from '@/APi/axios_instance'
import showToast from "@/global_components/Toast/useToast";
export const notification = defineStore({
    id: 'notification',
    state: () => ({
     notification:null
    }),
    // actions: {
    //     async FatchNotification(payload) {
    //         try{
    //             const resp = await APi(`api/general/notifications?RegD_id=${payload.RegD_id}&Category_id=${payload.cat}`)
    //             this.notification=resp.data
    //         }catch(error){
    //             showToast(error.response.data)     
    //         } 
    //     }
    // }
})

