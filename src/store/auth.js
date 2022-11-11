import { defineStore } from 'pinia';
import Api from '@/APi/axios_instance'
import showToast from '@/global_components/Toast/useToast';
import { Account } from "@/store/SwitchAccount";
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    access_token: localStorage.getItem('user_access_token'),
    isLoggedIn: localStorage.getItem('isLoggedIn'),
    user:JSON.parse(localStorage.getItem('UserInfo')),
    error_message:null,
    loader:false,
    account:JSON.parse(localStorage.getItem('Account')),
    header_manu:JSON.parse(localStorage.getItem('menuAccess') || null ) ,
    UserRole:JSON.parse(localStorage.getItem('User_role') || null ) ,
    term_condition:null,
  }),
  actions: {
    logout() {
      localStorage.clear()
      this.access_token = '';
      this.account=null
      this.user=null
      this.UserRole=null
      this.isLoggedIn = false;
      this.error_message=null;
      this.loader=false;
      this.$router.push({ name: 'login' });
      location.reload()
    },

    async login(data,value=true) {
      this.error_message=null;
      this.loader=true
      try {
        const result = await Api.post('/api/User/Login',data);
        if(result.message=='Network Error'){
         return false;
        } 
        const access_token = result?.data?.token;
        const UserInfo =result?.data?.User;
        const account = result?.data?.accoutns;
        const user_role = result?.data?.userrole;
        const sessionexpiry = result?.data?.sessionExpiry;
        if(value){
          const SwitchAccount=account?.filter( (data) => { return data.RegD_id==UserInfo.RegD_id});
          localStorage.setItem('switch_account',JSON.stringify(SwitchAccount))
          // localStorage.setItem('socket','wss://apis.glasshub.ai/websockets?RegD_id='+SwitchAccount[0]?.RegD_id+'&Account_Type='+SwitchAccount[0]?.Account_type+'&Category_ids='+UserInfo?.cat_ids)
         }
        localStorage.setItem('user_access_token',access_token);
        localStorage.setItem('UserInfo', JSON.stringify( UserInfo));
        localStorage.setItem('Account', JSON.stringify(account));
        localStorage.setItem('User_role',JSON.stringify(user_role));
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('expirytime',sessionexpiry)
        this.access_token = access_token;
        this.isLoggedIn = true;
        this.account=account;
        this.user=UserInfo;
        this.UserRole= user_role;
        return result
      } catch (error) {
        const message = error?.response?.data?.method 
        this.error_message=message;
        this.loader=false;
        if(error.response.data.method){
          showToast( error.response.data.method) 
        }else{
          if(error.message)
          {
            showToast( error.message) 
          }
        }
      }
    },
    async loginwithSocial(data ,value=true) {
      this.error_message=null;
      this.loader=true
      try {
        const result = await Api.post('/api/User/LoginWithSocialMedia',data);
        const access_token = result?.data?.token;
        const UserInfo =result?.data?.User;
        const account = result?.data?.accoutns;
        const user_role = result?.data?.userrole;
        const sessionexpiry = result?.data?.sessionExpiry;
        if(value){
          const SwitchAccount=account?.filter( (data) => { return data.RegD_id==UserInfo.RegD_id});
          localStorage.setItem('switch_account',JSON.stringify(SwitchAccount))
          // localStorage.setItem('socket','wss://apis.glasshub.ai/websockets?RegD_id='+SwitchAccount[0]?.RegD_id+'&Account_Type='+SwitchAccount[0]?.Account_type+'&Category_ids='+UserInfo?.cat_ids)
         }
        localStorage.setItem('user_access_token',access_token);
        localStorage.setItem('UserInfo', JSON.stringify( UserInfo));
        localStorage.setItem('Account', JSON.stringify(account));
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('User_role',JSON.stringify(user_role));
        localStorage.setItem('expirytime',sessionexpiry)
       this.access_token = access_token;
        this.isLoggedIn = true;
        this.account=account;
        this.user=UserInfo;
        this.UserRole= user_role;
        window.location.href="dashboard"
        // this.$router.push({ name: 'dashboard' });
      } catch (error) {
        const message = error?.response?.data?.method
        this.error_message=message;
        this.loader=false;    
        showToast(error.response.data.method)
      }
    },

    async  Manu(){ 
      const switch_account = Account()
      await Api.get(`/api/menueaccess/get-by-role-id?RegD_id=${switch_account.User_role[0].RegD_id}&User_id=${switch_account.User_role[0].User_id}`)
      .then((response) => {
            if(response.status == 200 ){
            localStorage.setItem('menuAccess',JSON.stringify(response.data))
            this.header_manu = response.data;
          }
        }).catch( error => {
           showToast(error.response.data)
        })
      },

      async FatchTerm(data) {
        try{
          this.loader = true
          let resp = await Api.get(`/api/userlegal/latest-legal?Account_id=${data?.acc_id}&Page_Name=${data?.page_id}`);
          this.loader = false
          this.term_condition=null;
           this.term_condition = resp.data[0]?.Description;
        }catch(error){
          showToast(error.response.data)
        }
      
      },
      async user_profile(){
        await Api.get('/api/profile/profile-by-id?User_id=' + this.user.User_id)
         .then(response=>{
          let data ={
            User_email :response.data[0].User_email,
            User_password:response.data[0].User_password,
          }
          this.login(data,false)
         })
         .catch(error=>{
           showToast(error.response.data)
         })
      }
    }
});
