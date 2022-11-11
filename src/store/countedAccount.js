import { defineStore } from 'pinia';
import Api from '@/APi/axios_instance'
import showToast from '@/global_components/Toast/useToast';
export const countedAcc= defineStore({
    id:'countedAcc',
    state: () => ({
        SocialAccount:''
    }),
  getters:{
    getSocialAccount(state){
       return state.SocialAccount
    }
  },
    actions: {
       async getAccount(id){
        await Api.get('/api/profile/connected-account?User_id='+id)
        .then(response=>{
            this.SocialAccount= response.data[0]
        })
        .catch(error=>{
            showToast(error.message)
        }) 
    },
        
        async updateSocialAccount(payload){
             await Api.post('/api/profile/update-concectedaccount',payload)
             .then()
             .catch(error=>{
                showToast(error.message)
             })
    }
}
})