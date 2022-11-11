<template>
  <div class="card mb-10 mb-xxl-8">
    <div class="card-body pb-10">
      <div class="row mb-10">
        <div class="col-md-12">
          <h1 class="pb-2">Business Information</h1>
          <div class="separator separator-dashed border-gray-300 my-3"></div>
        </div>
      </div>
      <div class="row">
        <div class="row mb-6">
          <!--begin::Label-->
          <label class="col-lg-4 col-form-label fw-bold fs-6"
            >Company Logo</label
          >
          <!--end::Label-->
          <!--begin::Col-->
          <div class="col-lg-8">
            <!--begin::Image input-->
            <div
              class="image-input image-input-outline"
              data-kt-image-input="true"
              style="background-image: url(assets/media/avatars/blank.png)"
            >
              <!--begin::Preview existing avatar-->
              <div
                class="image-input-wrapper w-125px h-125px"
                 :style='{ backgroundImage: `url("${UserImage}")` }'
              ></div>
              <!--end::Preview existing avatar-->
              <!--begin::Label-->
              <label
                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                data-kt-image-input-action="change"
                data-bs-toggle="tooltip"
                title="Change avatar"
              >
                <i class="fas fa-pencil-alt"></i>
                <!--begin::Inputs-->
                <input type="file" name="avatar"   @change="profileimage($event)" accept=".png, .jpg, .jpeg" />
                <input type="hidden" name="avatar_remove" />
                <!--end::Inputs-->
              </label>
              <!--end::Label-->
              <!--begin::Cancel-->
              <span
                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                data-kt-image-input-action="cancel"
                data-bs-toggle="tooltip"
                title="Cancel avatar"
              >
                <i class="fa fa-close"></i>
              </span>
              <!--end::Cancel-->
              <!--begin::Remove-->
              <span
                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                data-kt-image-input-action="remove"
                data-bs-toggle="tooltip"
                title="Remove avatar"
              >
                <i class="fa fa-close"></i>
              </span>
              <!--end::Remove-->
            </div>
            <!--end::Image input-->
            <!--begin::Hint-->
            <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
            <!--end::Hint-->
          </div>
          <!--end::Col-->
        </div>
        <div class="col-md-4 pb-5">
          <label class="form-label required">Company Name</label>
          <input
            type="text"
            name=""
            maxlength="50"
            v-model.trim="validate.company_name.$model"
            :class="{ 'border-theme-6': validate.company_name.$error }"
            class="form-control form-control-lg form-control-solid"
          />
          <template v-if="validate.company_name.$error">
            <div
              v-for="(error, index) in validate.company_name.$errors"
              :key="index"
              class="text-theme-6 mt-2"
            >
              {{ error.$message }}
            </div>
          </template>
        </div>
        <div class="col-md-4 pb-5">
          <label class="form-label required">Company Size</label>
          <select
            name="company_size"
            v-model.trim="validate.company_size.$model"
            :class="{ 'border-theme-6': validate.company_size.$error }"
            class="form-select form-select-lg form-select-solid"
          >
            <option value="5-10">5 - 10</option>
            <option value="11-20">11 - 20</option>
            <option value="21-40" selected>21 - 40</option>
            <option value="41-70">41 - 70</option>
             <option value="70 Above">70 Above</option>
            <option value="100 Above">100 Above</option>
          </select>
          <template v-if="validate.company_size.$error">
            <div
              v-for="(error, index) in validate.company_size.$errors"
              :key="index"
              class="text-theme-6 mt-2"
            >
              {{ error.$message }}
            </div>
          </template>
        </div>

        <div class="col-md-4 pb-5">
          <label class="form-label required">Start Date</label>
          <input
            name=""
            v-model.trim="validate.start_date.$model"
            :class="{ 'border-theme-6': validate.start_date.$error }"
            class="form-control form-control-lg form-control-solid"
          />
          <template v-if="validate.start_date.$error">
            <div
              v-for="(error, index) in validate.start_date.$errors"
              :key="index"
              class="text-theme-6 mt-2"
            >
              {{ error.$message }}
            </div>
          </template>
        </div>
        <div class="col-md-4 pb-5">
          <label class="form-label required">Company Email</label>
          <input
            type="email"
            maxlength="50"
            v-model.trim="validate.company_email.$model"  
            :class="{ 'border-theme-6': validate.company_email.$error }"
            name=""
            class="form-control form-control-lg form-control-solid"
          />
          <template v-if="validate.company_email.$error">
            <div
              v-for="(error, index) in validate.company_email.$errors"
              :key="index"
              class="text-theme-6 mt-2"
            >
              {{ error.$message }}
            </div>
          </template>
        </div>
        <div class="col-md-4 pb-5">
          <label class="required fs-6 fw-bold mb-2">Global Presence</label>
          <select   v-model="global_presence" :class="{'border border-danger':validate.Country_id.$error}"  class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
            <template  v-for="(list,index) in cun_list" :key="index">
                  <option v-if="list.count_name!=''" :value="list.id" >{{list.name}}</option>
            </template>                                
         </select>
          <div v-for="(error, index) in validate.Country_id.$errors" :key="index" class="mt-1">
            <span class="text-danger ">{{error.$message}}</span>
          </div>
          <div class="compliances_added mt-2">
            <template  v-for="(val , index2) in count_name" :key="index2">
              <p style="margin-right:3px"><span @click="remove_catgory(index2)"  style="margin-right:2px">x</span>{{val}}</p>
            </template>
         </div>
          <!-- <input
            name=""
            v-model.trim="validate.global_presence.$model"
            :class="{ 'border-theme-6': validate.global_presence.$error }"
            class="form-control form-control-lg form-control-solid"
          />
          <template v-if="validate.global_presence.$error">
            <div
              v-for="(error, index) in validate.global_presence.$errors"
              :key="index"
              class="text-theme-6 mt-2"
            >
              {{ error.$message }}
            </div>
          </template> -->
          <!-- <div class="gloabal-presenseaddbtn">
            <button class="btn btn-primary">+</button>
          </div>
          <div class="globalpresenes_added">
            <p><span>x</span> Turky</p>
            <p><span>x</span> USA</p>
            <p><span>x</span> China</p>
          </div> -->
        </div>
        <div class="col-md-4 pb-5">
          <label class="form-label required"
            ><a
              class="fa fa-map-marker"
              aria-hidden="true"
              style="color: #5241a1; font-size: 20px"
              href="https://www.google.com/maps/place/PARATECH+Software+Solutions+(Pvt.)+Ltd./@31.4726997,74.3744779,17z/data=!3m1!4b1!4m5!3m4!1s0x39190674013debd3:0x589391755c4fb701!8m2!3d31.47269!4d74.3766497"
              target="_blank"
            ></a>
            Head Office Address</label
          >
          <input
            name=""
            v-model.trim="validate.office_address.$model"
            maxlength="250"
            :class="{ 'border-theme-6': validate.office_address.$error }"
            class="form-control form-control-lg form-control-solid"
          />
          <template v-if="validate.office_address.$error">
            <div
              v-for="(error, index) in validate.office_address.$errors"
              :key="index"
              class="text-theme-6 mt-2"
            >
              {{ error.$message }}
            </div>
          </template>
        </div>

        <div class="col-md-4 pb-5">
          <label class="form-label required">
            <a
              class="fa fa-map-marker"
              aria-hidden="true"
              style="color: #5241a1; font-size: 20px"
              href="https://www.google.com/maps/place/PARATECH+Software+Solutions+(Pvt.)+Ltd./@31.4726997,74.3744779,17z/data=!3m1!4b1!4m5!3m4!1s0x39190674013debd3:0x589391755c4fb701!8m2!3d31.47269!4d74.3766497"
              target="_blank"
            ></a>
            Branch Office Address</label
          >
          <template v-for="(branch, index) in formData.branch_address" :key="index">
           <input
            name=""
             maxlength="250"
            v-model.trim="branch.Office_address"
            class="form-control form-control-lg form-control-solid"
             :class="{'border border-danger': s_validate.branch_address.$each.$response.$errors[index].Office_address.length,}"
          />
             <div class="text-danger mt-2" v-for="error in s_validate.branch_address.$each.$response.$errors[index].Office_address" :key="error">
                {{ error.$message }}
             </div>
          <!-- <template v-if="validate.branch_address.$error">
            <div
              v-for="(error, index) in validate.branch_address.$errors"
              :key="index"
              class="text-theme-6 mt-2"
            >
              {{ error.$message }}
            </div>
          </template> -->
          <div class="text-right mt-3">
            <button v-if="index+1!= formData.branch_address.length" class="btn btn-xs btn-primary" @click="removeBranchAddress(index)">-</button>
            <button v-if="index+1==formData.branch_address.length" class="btn btn-xs btn-primary" @click="save_BranchAddress()">+</button>
          </div>
          </template>
       
          <!-- <label class="form-label"
            ><a
              class="fa fa-map-marker"
              aria-hidden="true"
              style="color: #5241a1; font-size: 20px"
              href="https://www.google.com/maps/place/PARATECH+Software+Solutions+(Pvt.)+Ltd./@31.4726997,74.3744779,17z/data=!3m1!4b1!4m5!3m4!1s0x39190674013debd3:0x589391755c4fb701!8m2!3d31.47269!4d74.3766497"
              target="_blank"
            ></a>
            Branch Office Address</label
          >
          <input
            name=""
            v-model.trim="validate.Branch_address.$model"
            :class="{ 'border-theme-6': validate.Branch_address.$error }"
            class="form-control form-control-lg form-control-solid"
            value="869 Saint Johns Pl. Brooklyn, NY 11216"
          />
          <template v-if="validate.Branch_address.$error">
            <div
              v-for="(error, index) in validate.Branch_address.$errors"
              :key="index"
              class="text-theme-6 mt-2"
            >
              {{ error.$message }}
            </div>
          </template>
          <div class="text-right mt-3">
            <p class="remove_option">remove</p>
          </div> -->
        </div>
        <div class="col-md-4 pb-5">
          <label class="form-label required">Website</label>
          <input
            type="text"
             maxlength="250"
            v-model.trim="validate.web_site.$model"
            :class="{ 'border-theme-6': validate.web_site.$error }"
            name=""
            class="form-control form-control-lg form-control-solid"
          />
          <template v-if="validate.web_site.$error">
            <div
              v-for="(error, index) in validate.web_site.$errors"
              :key="index"
              class="text-theme-6 mt-2"
            >
              {{ error.$message }}
            </div>
          </template>
        </div>

        <div class="col-md-4 pb-5">
           <label class="form-label">Social_media_url</label>
          <div v-for="(list,index) in  formData.Social_media" :key="index">
              <input
              name=""
              v-model.trim="list.Social_media_url"
               maxlength="250"
              class="form-control form-control-lg form-control-solid"
             />
            <div class="text-right mt-3">
            <button v-if="index+1!= formData.Social_media.length" class="btn btn-xs btn-primary" @click="removeURL(index)">-</button>
            <button v-if="index+1==formData.Social_media.length" class="btn btn-xs btn-primary" :disabled="formData.Social_media.length > 5" @click="addURL()">+</button>
            </div>   
          </div>
        </div>
      </div>

      <div class="row mb-10 mt-20">
        <div class="col-md-12">
          <h1 class="pb-2">Accout Type And Business Category</h1>
          <div class="separator separator-dashed border-gray-300 my-3"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 pb-5">
          <label class="form-label required">Account Type: </label>
          <div class="mb-0 accounttype_ofwizerd">
            <label v-for="(account,index) in accountsName" :key="index" class="d-flex mb-5 cursor-none">
              <span
                class="checkboxx mb-0 form-check form-check-custom form-check-solid">
                <input
                  class="form-check-input"
                  type="radio"
                  name="account_type"
                  :value="account"
                  v-model="formData.account_type"
                  disabled
                />
              </span>
              <span class="type_title d-flex align-items-center me-2">
                <span class="d-flex flex-column">
                  <span class="fw-bolder ms-2 text-gray-800 text-hover-primary fs-5"> {{ account }} </span>
                </span>
              </span>
            </label>
          </div>
          <div class="fv-plugins-message-container invalid-feedback"></div>
          <!-- <template v-if="validate.account_type.$error">
            <div
              v-for="(error, index) in validate.account_type.$errors"
              :key="index"
              class="text-theme-6 mt-2"
            >
              {{ error.$message }}
            </div>
          </template> -->
        </div>
        <CategoriesForm  :submit="submitCat"   @formData="CatInfo_form" />
      </div>

      <div class="row mb-10 mt-20">
        <div class="col-md-12">
          <h1 class="pb-2">Documents</h1>
          <div class="separator separator-dashed border-gray-300 my-3"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 pb-5">
          <label class="form-label required">Company Formation</label>
          <a
            class="image-link mb-2"
            style="padding-left: 70%"
            href="assets/img/avatars/titlehead.PNG"
            target="_blank"
            ><b>View Document</b></a
          >
          <input
            type="file"
            @change="company_formation_file($event)"
            class="form-control form-control-lg form-control-solid"
          />
          <span>PDF, Doc, Docx, JPG</span>
        </div>
        <div class="col-md-4 pb-5">
          <label class="form-label required">TAX Documents</label>
          <a
            class="image-link mb-2"
            style="padding-left: 70%"
            href="assets/img/avatars/titlehead.PNG"
            target="_blank"
            ><b>View Document</b></a
          >
          <input
            type="file"
            @change="Tax_Documents_file($event)"
            class="form-control form-control-lg form-control-solid"
          />
          <span>PDF, Doc, Docx, JPG</span>
        </div>
        <div class="col-md-4 pb-5">
          <label class="form-label required">Authorization Latter</label>
          <a
            class="image-link mb-2"
            style="padding-left: 70%"
            href="assets/img/avatars/titlehead.PNG"
            target="_blank"
            ><b>View Document</b></a
          >
          <input
            type="file"
            @change="authorization_latter_file($event)"
            class="form-control form-control-lg form-control-solid"
          />
          <span>PDF, Doc, Docx, JPG</span>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-right mb-5 pt-10 edit_btn_link">
          <router-link to="/company-profile"> <button type="button"   class="btn btn-light btn-active-light-primary me-2"
            >Cancel</button></router-link> 
          <button @click="save()" class="btn btn-sm btn-primary me-2" :disabled="loader"
            >Update Profile  <SLoader v-if="loader"></SLoader></button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesForm from '@/components/profile/edit-company-profile/CategoriesForm.vue'
import { useVuelidate } from "@vuelidate/core";
import { required, email ,helpers} from "@vuelidate/validators";
import { reactive, toRefs ,watch,ref,onMounted, computed} from "vue";
import {mapState} from 'pinia'
import SLoader from '@/global_components/loader/SLoader.vue'
import {useAuthStore} from '@/store/auth'
import {Account} from '@/store/SwitchAccount'
import Api from '@/APi/axios_instance'
import {useRouter} from 'vue-router'
import showToast from '@/global_components/Toast/useToast'
export default {
  props:['edit'],
     components:{
       SLoader,
       CategoriesForm
    },
   computed:{
      ...mapState(Account,{
         Account_detail:'Account_detail'
      })
    },
    watch:{
      Account_1(){
       this.formData.RegD_id=this.Account_detail[0].RegD_id;
      }
    },
  setup(props) {
   const router = useRouter()
   const loader = ref(false);
   const submitCat = ref (false)
   const auth = useAuthStore();
   const global_presence = ref(null);
   const cun_list = ref([]);
   const count_name= ref([]);
   const UserImage = ref (null);
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})   
   const accountsName = ['Organization', 'Supplier', 'Freelancer', 'AuditFirm', 'Regulator']
    const formData = reactive({
      RegD_id:null,
      company_name: null,
      company_size: null,
      CR_number:null,
      start_date: null,
      company_logo:null,
      company_email:null,
      Country_id:[],
      Social_media:[
        { Social_media_url:null},
      ],
      office_address:null,
      Head_office_long:null,
      Head_office_lat:null,
      branch_address:[],
      web_site:null,
      account_type:'',
      main_category:null,
      sub_category2:null,
      sub_category:null,
      company_formation:null,
      Tax_Documents:null,
      authorization_latter:null,
    });
    //  let pass2 =helpers.regex(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi)
    const rules = {
      company_name: { required },
      company_size: { required },
      start_date: { required },
      company_email: { required,email },
      Country_id: { required },
      office_address: { required },
      web_site:{ 
        // pass2:helpers.withMessage(`not a valid email`,pass2),
        required
        },
      // account_type:{required},
      // main_category:{ required},
      // sub_category2:{ required},
      // sub_category:{ required},
      // company_formation:{ required},
      // Tax_Documents:{ required},
      // authorization_latter:{ required}
    };

    const s_rules={
     branch_address: {
        $each: helpers.forEach({
          Office_address: {
            required:helpers.withMessage('Office_address Required',required)
          },
        })
      }
}

watch(props,()=>{
  //  clearForm()
   EditCompany()
})
const CatInfo_form= (value)=>{
}

watch(global_presence ,()=>{
  if(global_presence.value!=null)
   add_country()
})

// const clearForm=()=>{
//       global_presence.value=null
//       cun_list.value =[]
//       count_name.value= []
//       formData.RegD_id=null
//       formData.company_name= null
//       formData.company_size= null
//       formData.CR_number=null
//       formData.start_date= null
//       formData.company_logo=null
//       formData.company_email=null
//       formData.Country_id=[]
//       formData.Social_media=[
//         { Social_media_url:null}
//       ]
//       formData.office_address=null
//       formData.Head_office_long=null
//       formData.Head_office_lat=null
//       formData.branch_address=[]
//       formData.web_site=null
//       formData.account_type=[]
//       formData.main_category=null
//       formData.sub_category2=null
//       formData.sub_category=null
//       formData.company_formation=null
//       formData.Tax_Documents=null
//       formData.authorization_latter=null
// }

    const urlToObject= async()=> {
    const response = await fetch(UserImage.value);
    const blob = await response.blob();
    let index = UserImage.value.indexOf("--")
    let name = UserImage.value.substr(index+2,UserImage.value.length)
    formData.company_logo = new File([blob],  name,{type:"image/png", lastModified:new Date().getTime(),});
}
    const s_validate = useVuelidate(s_rules,toRefs(formData))
    const validate = useVuelidate(rules, toRefs(formData));

    const save = () => {
      validate.value.$touch();
      if (!validate.value.$invalid) {
        loader.value= true
        submitCat.value = !submitCat.value
        updateProfile();
      }
    };

    const profileimage = (e) => {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files[0])
      if (!files.length) return;
       formData.company_logo=files[0];
       UserImage.value=URL.createObjectURL(files[0])
    };

    const company_formation_file = (e) => {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      formData.company_formation = files[0];
    };
    
    const Tax_Documents_file = (e) => {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      formData.Tax_Documents = files[0];
    };

    const authorization_latter_file = (e) => {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      formData.authorization_latter = files[0];
    };


     const add_country = ()=>{
        let c_list = cun_list.value.filter((row)=> global_presence.value==row.id)
        if(formData.Country_id.includes(parseInt(c_list[0].id))){ 
            return false
        }else{
            formData.Country_id.push(parseInt(c_list[0].id))
            count_name.value.push(c_list[0].name)
        }
     }

     const remove_catgory=(index)=>{
         formData.Country_id.splice(index, 1);
         count_name.value.splice(index,1)
         global_presence.value=null
     }
  
const edit_cunty=(data)=>{
          setTimeout(() => {
              formData.Country_id=[]
              count_name.value=[]
              global_presence.value=null
                 let num = data.substring(0,data.length-1) 
                 let ids = num.split(',')
            for (let value of ids){
                 cun_list.value.filter(row=>{
                     if(parseInt(value) == row.id)
                     {    
                            count_name.value.push(row.name)
                           global_presence.value=row.id
                         
                     }
                 })
                 formData.Country_id.push(parseInt(value));  
             }      
          });   
}


const AddBranchAddress = ()=>{
    formData.branch_address.push({
            Office_address: null,
            Office_lat: 0,
            Office_long: 0,
    },)
}
const Set_branch_office =(data)=>{
  for (let value of data){
       formData.branch_address.push({
            Office_address: value.Office_address,
            Office_lat: value.Office_lat,
            Office_long:value.Office_long,
       },)   
  }
   
}

 const save_BranchAddress=()=>{
         s_validate.value.$touch();
         if(!s_validate.value.$invalid){
         AddBranchAddress()
         }
  }

const removeBranchAddress=(index)=>{
   formData.branch_address.splice(index,1)
}


const addURL=()=>{
    formData.Social_media.push({
    Social_media_url:null
    },)
}

const removeURL=(index)=>{
    formData.Social_media.splice(index,1)
}

 const  EditCompany =()=>{
   let Reg_d = props.edit.RegistrationD[0]
   formData.CR_number=Reg_d.CR_number
   formData.RegD_id=Reg_d.RegD_id
   formData.company_name=Reg_d.Company_name;
   formData.company_size=Reg_d.Company_size;
   formData.start_date=Reg_d.Start_date.substr(0,10);
   edit_cunty(Reg_d.Country_id)
   formData.web_site=Reg_d.Website_url
   formData.office_address=Reg_d.Head_office_address
   UserImage.value= Reg_d.company_logo
   urlToObject();
   formData.Head_office_long= Reg_d.Head_office_long
   formData.Head_office_lat = Reg_d.Head_office_lat
   formData.account_type = Reg_d.Account_type_name 
   if(Reg_d.Email){ formData.company_email=Reg_d.Email}
    formData.branch_address=[]
   Set_branch_office(props.edit.Office_Branches)

    if(Reg_d.Social_media_url1!= "undefined" && Reg_d.Social_media_url1!= "null"){formData.Social_media[0].Social_media_url=Reg_d.Social_media_url1}
    if(Reg_d.Social_media_url2 != "undefined" && Reg_d.Social_media_url2!= "null"){formData.Social_media.push({Social_media_url:Reg_d.Social_media_url2})}
    if(Reg_d.Social_media_url3 != "undefined" && Reg_d.Social_media_url3!= "null"){formData.Social_media.push({Social_media_url:Reg_d.Social_media_url3})}
    if(Reg_d.Social_media_url4 != "undefined"&& Reg_d.Social_media_url4!= "null"){formData.Social_media.push({Social_media_url:Reg_d.Social_media_url4})}
    if(Reg_d.Social_media_url5 != "undefined" && Reg_d.Social_media_url5!= "null"){formData.Social_media.push({Social_media_url:Reg_d.Social_media_url5})}
    if(Reg_d.Social_media_url6 != "undefined" && Reg_d.Social_media_url6!= "null"){formData.Social_media.push({Social_media_url:Reg_d.Social_media_url6})}
    
  }
  

const updateProfile = async()=>{
    let company_profile = new FormData()
    let data={
       RegistrationD:{
        CR_number:formData.CR_number,
        RegD_id:formData.RegD_id,
        Comp_email:formData.company_email,
        Company_name:formData.company_name,
        Company_size:formData.company_size,
        Start_date:formData.start_date,
        Country_id:formData.Country_id,
        Head_office_address:formData.office_address,
        Head_office_lat:formData.Head_office_lat,
        Head_office_long:formData.Head_office_long,
        Website_url:formData.web_site,
        Social_media_url1:formData.Social_media[0]?.Social_media_url,
        Social_media_url2:formData.Social_media[1]?.Social_media_url,
        Social_media_url3:formData.Social_media[2]?.Social_media_url,
        Social_media_url4:formData.Social_media[3]?.Social_media_url,
        Social_media_url5:formData.Social_media[4]?.Social_media_url,
        Social_media_url6:formData.Social_media[5]?.Social_media_url,
        Updated_by:auth.user.User_id
      },
      Office_Branches:formData.branch_address
    } 

    company_profile.append('Company_logo', formData.company_logo)
    company_profile.append('data',JSON.stringify(data))
    await Api.post('/api/profile/update-comp',company_profile)
    .then(response=>{
      if(response.status==200)
      {
        showToast('Profile Update SuccessFully','success')
         router.push('company-profile')
      }
    })
      .catch(error=>{
        loader.value= false
        showToast(error.message)
      })
}



const GetCountries = async()=>{
    await Api.get('api/Signup/GetCountry')
    .then(response=>{
      cun_list.value= response.data;
    })
    .catch(error=>{
      showToast('Internal server error on countries')
    })
}

onMounted(()=>{
  GetCountries()
})

    return {
      loader,
      save_BranchAddress,
      UserImage,
      profileimage,
      formData,
      save,
      s_validate,
      validate,
      count_name,
      global_presence,
      cun_list,
      company_formation_file,
      Tax_Documents_file,
      authorization_latter_file,
      AddBranchAddress,
      removeBranchAddress,
      remove_catgory,
      addURL,
      removeURL,
      accountsName,
      account,
      CatInfo_form,
      submitCat
    };
  },
};
</script>

<style scoped>
.border-theme-6 {
  border: 1px solid red;
}
.text-theme-6 {
  color: red;
}
</style>
