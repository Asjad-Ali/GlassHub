<template>
  <div class="card mb-10 pb-10 mb-xxl-8">
    <div class="card-body pb-0">
      <div class="row mb-10">
        <div class="col-md-8">
          <h1 class="pb-2">Add New User</h1>
        </div>
        <div class="col-md-4 text-right text-hover-white"></div>
      </div>

       <div class="row">
            <div class="col-md-12">
              <h4 class="pb-2">User Details</h4>
              <div
                class="separator separator-dashed border-gray-300 my-2"
              ></div>
            </div>
         </div>
      <div class="row">
          <div class="col-md-6 mb-5">
          <label class="form-label required">Name</label>
          <input
            type="text"
            maxlength="50"
            v-model.trim="validate.user_name.$model"
            :class="{'error':validate.user_name.$error}"
            class="form-control form-control-lg form-control-solid"
          />
          <template v-if="validate.user_name.$error">
            <div class="text_error" v-for="(error, index) in validate.user_name.$errors" :key="index">{{error.$message}}</div>
          </template>
        </div>
        <div class="col-md-6 mb-5">
          <label class="form-label required">Email</label>
          <input
             type="email"
             maxlength="50"
             v-model.trim="validate.user_email.$model"
            :class="{'error':validate.user_email.$error}"
            class="form-control form-control-lg form-control-solid "
          />
          <template v-if="validate.user_email.$error">
           <div class="text_error" v-for="(error, index) in validate.user_email.$errors" :key="index">{{error.$message}}</div>
          </template>
        </div>
             <div class="col-md-6 mb-5">
          <label class="form-label required">Password</label>
          <input
            type="password"
            name=""
            maxlength="50"
            v-model.trim="validate.user_password.$model"
            :class="{'error':validate.user_password.$error}" 
            class="form-control form-control-lg form-control-solid"
            autocomplete="new-password"
          />
          <template v-if="validate.user_password.$error">
           <div class="text_error" v-for="(error, index) in validate.user_password.$errors" :key="index">{{error.$message}}</div>
          </template>
      </div>  
        <div class="col-md-6  mb-5">
          <label class="form-label required">Designation</label>
          <input
            type="text"
            name=""
            maxlength="50"
            v-model.trim="validate.user_designation.$model"
            :class="{'error':validate.user_designation.$error}"
            class="form-control form-control-lg form-control-solid"
          />
          <template v-if="validate.user_designation.$error">
           <div class="text_error" v-for="(error, index) in validate.user_designation.$errors" :key="index">{{error.$message}}</div>
          </template>
      </div>  
        <div class="col-md-6 mb-5">
          <label class="form-label required">Phone</label>
            <div style="position: relative;"  :class="{'error':validate.user_phone.$error}">
                  <input type="tel"  maxlength="20"  v-model="formData.user_phone"   class="form-control form-control-lg form-control-solid" id="telephone">
                 <!-- <span style="position:absolute;left:50px;top:14px;" v-if="!route.params.id">{{p_code}}</span> -->
             </div>
          <template v-if="validate.user_phone.$error">
           <div class="text_error" v-for="(error, index) in validate.user_phone.$errors" :key="index">{{error.$message}}</div>
          </template>
      </div>  
      <div class="col-md-6 mb-5">
          <div style="display: flex;justify-content: space-between;">
           <label class="form-label required">Role</label>
           <!-- <a   @click="ShowModel()" style="cursor:pointer"> Add New</a> -->
        <div  class="rolOptions">
           <i class="fa fa-plus-square" @click="ShowModel()"></i>
           <i  v-if="formData.role != ''" class="fa fa-pencil"  @click="EditRole()"></i>
           <i  v-if="formData.role != ''" class="fa fa-trash" @click="DeleteRole(formData.role)"></i>
        </div> 
          </div>
          <select name="" 
           v-model.trim="validate.role.$model"
          :class="{'error':validate.role.$error}" 
          class="form-select form-select-lg form-select-solid">
            <option value="">Select</option>
            <option :value="rol.Role_id" v-for="(rol , index ) in roles" :key="index">{{ rol.Role_name}}</option>
          </select>
          <!-- <div class="text-right mt-1">
            <a  @click="EditRole()"  style="color:red;cursor:pointer" > Edit Role</a>
          </div> -->
           <template v-if="validate.role.$error">
           <div class="text_error" v-for="(error, index) in validate.role.$errors" :key="index">{{error.$message}}</div>
          </template>
      </div>
  
         <div class="col-md-6 mb-5">
          <label class="form-label required">Is Active</label>
          <input
            type="checkbox"
            name=""
            v-model="formData.Isactive"
            class="form-check-input mb-5 mx-2"
          />
      </div>  

          <div class="text-right text-hover-white mt-4">
              <button  v-if="route.params.id"   :disabled="disabled"   @click="save()" class="btn btn-primary w-100 text-hover-white">
                Update <Loader v-if="disabled"></Loader></button>
              <button v-else @click="save()" :disabled="disabled"  class="btn btn-primary w-100 text-hover-white">Add User <Loader v-if="disabled"></Loader> </button>
        </div>
      </div>
    </div>
  </div>  
 <teleport to="body">
     <add-permission v-if="open_model" :edit="Edit_id" @closeModel="closeModel"></add-permission>   
</teleport>           
</template>
<script>
import getCountryCode from '@/composables/getCountryCode';
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/intlTelInput.js';
import intlTelInput from 'intl-tel-input';
import Loader from '@/global_components/loader/SLoader.vue'
import AddPermission from '@/components/add-new-user/AddPermission.vue'
import { useVuelidate } from "@vuelidate/core";
import { required ,helpers, email,minLength} from "@vuelidate/validators";
import showToast from '@/global_components/Toast/useToast'
import {ref,onMounted,reactive,computed} from "vue"
import { useAuthStore } from '@/store/auth'
import {Account} from '@/store/SwitchAccount'
import { useRouter,useRoute} from 'vue-router';
import Api from '@/APi/axios_instance'
import sweetalert from '@/global_components/sweetAlert/SweetAlert'

export default{
  components: {AddPermission,Loader},
  setup() {
    
    const auth = useAuthStore()
    const router = useRouter()
    const route = useRoute()
    const account_info = Account()
    const open_model = ref(false)
    const roles = ref('')
    const Edit_id = ref('') 
    const User_id = ref(0)
    const disabled =ref(false)
    const passwordHintMessage = ref('');
    const passwpord_lentgh = ref('');
    const error_message = ref('');
    const current_country = ref('')
    const formData = reactive({
      user_name:'',
      user_phone:"",
      user_designation:'',
      Isactive:true,
      user_password:'',
      user_email:'',
      role:'',
    })

   let pass2 =helpers.regex()
         const  passwordHint=()=>{
               Api.get('/api/RegistrationSetting/GetAccountBase/'+ account_info.Account_detail[0].Account_type).then((resp) => {
              if(resp.data && resp.data.RegistrationSettingM &&  resp.data.RegistrationSettingM.length > 0){
                  let validationData=resp.data.RegistrationSettingM[0]
                   passwordHintMessage.value = validationData.Psw_hint
                  if(validationData.Psw_type==0){
                    pass2 = helpers.regex();
                     passwpord_lentgh.value= validationData.Psw_length
                  }else if(validationData.Psw_type==1){
                     pass2 = helpers.regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
                      passwpord_lentgh.value= validationData.Psw_length
                      error_message.value="Password must contain at least one letter and one number"
                  }else if(validationData.Psw_type==2){
                    pass2 = helpers.regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/)
                      passwpord_lentgh.value= validationData.Psw_length
                      error_message.value="Password must contain at least one special character, one number, one letter and uppercase letter"
                  }
              }
            }).catch(()=>{
             showToast('internal server error')
            })
        }



    const rules = computed(()=>{
    return { user_name:{required:helpers.withMessage('User Name is Required',required)},
      user_password:{
           required:helpers.withMessage('Password is Required',required),
           minLength:helpers.withMessage(`${passwordHintMessage.value}` , minLength(passwpord_lentgh.value)),
           pass2:helpers.withMessage(`${error_message.value}`,pass2),
          },
      user_designation:{required:helpers.withMessage('User Designation is Required',required)},
      user_phone:{required:helpers.withMessage('User Phone is Required',required)},
      user_email:{email,required:helpers.withMessage('User Email is Required',required)},
      role:{required:helpers.withMessage('User Role is Required',required)}
    }
    })

    const validate = useVuelidate(rules, formData)

    const ShowModel = ()=>{
     open_model.value = !open_model.value
    }
    const closeModel =(event)=>{
     open_model.value=event
      Edit_id.value=''
      GetRoles();
    }

  
    const GetRoles = async ()=>{
    
      await Api.get( '/api/roles/all-roles?RegD_id=' + account_info.Account_Id)
       .then(response=>{
        roles.value=response.data
       })
       .catch(error=>{
         showToast(error.message)
       })
    }

    const CreateUser= async()=>{
         await Api.post( '/api/users/InsertUpdate',{
          User_id:User_id.value,
          Updated_by:auth.user.User_id,
          Created_by:auth.user.User_id,
          User_fullname:formData.user_name,
          User_designation:formData.user_designation,
          User_email:formData.user_email,
          User_phone:formData.user_phone,
          User_password:formData.user_password,
          User_Role:formData.role,
          User_isactive:formData.Isactive,
          RegM_id:auth.user.RegM_id,
          Fullname:auth.user.Fullname,
          Designation:auth.user.Designation,
          Email:null,
          Phone:auth.user.Phone,
          Password:auth.user.Password,
          Term_accept:auth.user.Term_accept,
          Google_token:auth.user.Google_token,
          Facebook_token:auth.user.Facebook_token,
          Linkedin_token:auth.user.Linkedin_token,
          Isactive:auth.user.Isactive,
          RegD_id:auth.user.RegD_id,
          Account_type:account_info.Account_detail[0].Account_type,
          Account_type_name:account_info.Account_detail[0].Account_type_name,
          CR_number:account_info.Account_detail[0].CR_number,
          Account_status:account_info.Account_detail[0].Account_status,
          Authorized:account_info.Account_detail[0].Authorized,
          Phone_otp:account_info.Account_detail[0].Phone_otp,
          Email_otp:account_info.Account_detail[0].Email_otp,
          RegD_Role:account_info.Account_detail[0].RegD_Role
         })
         .then(response=>{
            if(response.status==200){
                disabled.value=false
               router.push('/user-list')
            }
         })
         .catch(error=>{
            disabled.value=false
           showToast(error.message)
         })
    }

    const EditUser=async(id)=>{
      await Api.get('/api/profile/profile-by-id?User_id=' + id)
       .then(response=>{
          let UserList=response.data[0];
          formData.user_name=UserList.User_fullname;
          formData.user_email=UserList.User_email;
          formData.user_designation=UserList.User_designation;
          formData.role=UserList.User_Role;
          formData.user_phone= UserList.User_phone;
          setphone()
          formData.user_password=UserList.User_password;
          formData.Isactive=UserList.User_isactive;
       })
       .catch(error=>{
         showToast(error.message)
       })
    }

    const  EditRole=()=>{
        open_model.value = !open_model.value
        Edit_id.value= formData.role;
    }

   const DeleteRole = async(id)=>{
       const value = await sweetalert('warning',true,'yes','No',true,'Are you sure you would like to Delete this recorde?')
        if(value.isConfirmed){
          await  Api.delete('/api/roles/delete?Role_id='+id)
         .then(res=>{
          if(res.status==200){
            showToast('delete successfully' , 'success')
            GetRoles()
          }
         })
         .catch(error=>{
           showToast(error.response.data)
         })
      }
   }

    const save= ()=>{
         validate.value.$touch();
         if(!validate.value.$invalid){
            disabled.value=true
            CreateUser()
         }
    }
 
const setphone=()=>{
  setTimeout(()=>{
    const input = document.querySelector("#telephone");
     intlTelInput(input, {
          // any initialisation options go here
           preferredCountries: [current_country.value]
            // mode: "international",
        });
  })
}

const currentLocation= ()=>{
    Api.get('https://ipinfo.io/json?token=af0391037d7bdc').then(response=>{
       current_country.value=response.data.country
       formData.user_phone =  getCountryCode(current_country.value)
       setphone()
    })
}
     onMounted(()=>{
       if(route.params.id) {
         User_id.value=route.params.id
         EditUser(route.params.id)
       }  
       setphone()
       GetRoles()
       passwordHint()
       currentLocation()
     })

    return{
      
      auth,
      formData,
      open_model,
      validate,
      roles,
      route,
      Edit_id,
      save,
      GetRoles,
      ShowModel,
      closeModel,
      EditRole,
      // phone,
      // p_code,
      // phoneCode,
      disabled,
      DeleteRole

    }
  },
}
</script>
<style scoped>
.rolOptions i{
font-size: 22px;
color: #5241a1;
margin-left: 10px;
display: inline-block;
cursor: pointer;
}
.rolOptions .fa-pen-to-square{
  color: rgb(36, 139, 36);
}
.rolOptions  .fa-trash-can{
  color: red;
}
.error{
  border: 1px solid red;
}
.text_error{
  color: red;
  margin-top: 5px;
}

</style>

<style>
.iti--allow-dropdown{
  width: 100% !important;
} 
</style>