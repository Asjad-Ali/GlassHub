
import { defineStore } from "pinia";
import Api from '@/APi/axios_instance'
import showToast from '@/global_components/Toast/useToast'
import {useAuthStore} from '@/store/auth'
import {Account} from '@/store/SwitchAccount'
export const profile = defineStore({
    id: 'profile',
    state: () => ({
        company_info:'',  
        RegistrationDocument:'',
        AdditionalDoc:'',
        user_detail:'',
    }),
    actions: {

        async GetUser(){
      
            const auth = useAuthStore()
            await Api.get('/api/profile/profile-by-id?User_id='+ auth.user.User_id)
            .then(response=>{
              this.user_detail=response.data[0];
              let data ={
                User_email :response.data[0].User_email,
                User_password:response.data[0].User_password,
              }
              
              var url_string = window.location.href; 
              var url = new URL(url_string);
              var val = url.searchParams.get("switchAccout");
              if(val){
                auth.login(data,false)
              }
            })
            .catch(error=>{
              showToast(error.message)
            })
         },

        async getSetting(){
            const SwitchAccount = Account()
                      await Api.get('/api/profile/comp-profile?RegD_id='+SwitchAccount.Account_detail[0].RegD_id)
                      .then(response =>{
                          if(response.status==200){
                            this.company_info=response.data[0][0];
                            this.RegistrationDocument =response.data[1].RegistrationDocument;
                            this.AdditionalDoc = response.data[1].AdditionalDoc;
                          }
                      })
                      .catch(error=>{
                       showToast(error.message)
                      })
                   },
              }

    
})