import { defineStore } from "pinia";
import APi from '@/APi/axios_instance'
import showToast from '@/global_components/Toast/useToast'

export const ForgetPassword = defineStore({
    id: 'forgetpassword',
    state: () => ({
        otp:'',
        Account_type: localStorage.getItem('act_type')
    }),
    actions: {
        async ExistEmail(payload) {
            try {
                let res = ''
                await APi.get('/api/signup/EmailNotExist?email=' + payload).then(response => {
                    res = response.data.emailExist[0].email_exist
                    // if(response.data.Account_type[0].Account_type)
                    localStorage.setItem('act_type',response.data?.Account_type[0]?.Account_type)
                        //    console.log(res);
                })
                return res
            } catch (error) {
                return false
            }
        },

        async send_email(payload) {
            try {
                localStorage.setItem('email',payload)
                await APi.get('/api/Forgot_logs/forgot_OTP/' + payload).then(response=>{
                    if(response.status==200){
                    showToast(response.data,'success');
                    }
                })
                return true
            } catch (error) {
                // console.log(error.message)
                return error.message
            }
        },

        async verify_otp(payload) {
            try {
                let dataRep="";
                await APi.get('/api/Forgot_logs/VerifyOTP/' + payload.otp +'/'+payload.email)
                    .then((response) => {
                        console.log(response);
                        if(response.status==200){
                        localStorage.setItem('otp', payload.otp);
                        localStorage.setItem('act_type',response.data?.Account_type);
                        showToast('OTP verified','success');
                        }
                        if(response.status==201){
                            showToast(response.data);
                            dataRep=response.data;
                        }
                    })
                    if(dataRep=="Invalid OTP"){
                    return false;
                    }
                    else{
                        return true;
                    }
            } catch (error) {
                showToast(error.message)
            }
        },

        async setRegistrationSetting(){
            let resp = await APi.get('/api/RegistrationSetting/GetAccountBase/'+ localStorage.getItem('act_type'))
            return resp;
          },
         
        async comfirm_password(payload) {
            this.otp = localStorage.getItem('otp')
            const email = localStorage.getItem('verifyemail')
            try {
                await APi.post('/api/Forgot_logs/forgot_password', {
                    Email_otp: this.otp,
                    User_email: email,
                    User_password: payload,
                }).then(response=>{
                        if(response.status==200){
                        showToast(response.data,'success');
                        this.$router.push('/login')
                        }
                        if(response.status==201){
                            showToast(response.data)
                        }
                })
              
            } catch (error) {
                showToast(error.message)
            }
        },

    }
})