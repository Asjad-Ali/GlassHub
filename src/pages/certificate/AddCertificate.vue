<template>
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
                    <div id="kt_toolbar_container" class="container-xxl py-5">
                        <div class="row gy-0 gx-10">
                            <div class="col-xl-9 pd-30 bg-w">
                                <h1 class="pb-2"> {{ route.params.id ? 'Edit Certificate' : 'Add Certificate' }}  </h1>
                                <div class="separator separator-dashed border-gray-300 my-8"></div>
                                <PageLoader v-if="loader" />
                                <div v-else class="row">
                                    <div class="col-md-6 pb-5">
                                        <label class="form-label required">Category</label>
                                        <select name="business_type" v-model="validate.category.$model" class="form-select form-select-lg form-select-solid"  :class="{'errorborder':validate.category.$error}" >                       
                                            <option :value="cat.Cat_id"  v-for="(cat, index ) in regStore.regCategories" :key="index">{{cat.Cat_name}}</option>
                                        </select> 
                                        <template v-if="validate.category.$error">
                                            <div v-for="(errors , index) in validate.category.$errors" :key="index" class="text-error mt-2">{{errors.$message}}</div>
                                        </template>
                                    </div>
                                    <div class="col-md-6 pb-5">
                                        <label class="form-label required">Regulatory Authority</label>
                                        <select @change="getCertificateList($event)"  v-model="validate.regulatory_authority.$model"   :class="{'errorborder':validate.regulatory_authority.$error}" class="form-select form-select-lg form-select-solid">
                                            <option :value="list.RegD_id" v-for="(list ,index) in reg_list " :key="index">{{list.Fullname}}</option>
                                        </select>
                                            <template v-if="validate.regulatory_authority.$error">
                                            <div v-for="(errors , index) in validate.regulatory_authority.$errors" :key="index" class="text-error mt-2">{{errors.$message}}</div>
                                        </template>
                                    </div>
                                    <div class="col-md-6 pb-5">
                                        <label class="form-label required">Certificate Name</label>
                                        <select @change="getCertificateName($event)" v-model="validate.offering_cer_id.$model"   :class="{'errorborder':validate.offering_cer_id.$error}" class="form-select form-select-lg form-select-solid">
                                            <option :value="list.Offering_id" v-for="(list ,index) in certificate_name_list " :key="index">{{list.Offering_name}}</option>
                                        </select>
                                        <template v-if="validate.offering_cer_id.$error">
                                            <div v-for="(errors , index) in validate.offering_cer_id.$errors" :key="index" class="text-error mt-2">{{errors.$message}}</div>
                                        </template>
                                    </div>
                                    <div class="col-md-6 pb-5">
                                        <label class="form-label required">Reference No.<small>(Certificate No)</small></label>
                                        <input name=""  v-model="validate.reference_no.$model" maxlength="50"  :class="{'errorborder':validate.reference_no.$error}"  placeholder="00-000-000000" class="form-control form-control-lg form-control-solid">
                                            <template v-if="validate.reference_no.$error">
                                            <div v-for="(errors , index) in validate.reference_no.$errors" :key="index" class="text-error mt-2">{{errors.$message}}</div>
                                        </template>
                                    </div>
                                    <div class="col-md-6 pb-5">
                                        <label class="form-label required">Issuance Date</label>
                                        <input name="" type="date" :max="currentDate()" data-date="" data-date-format=" YYYY MMMM DD" v-model="validate.issuance_date.$model" :class="{'errorborder':validate.issuance_date.$error}" placeholder="mm-dd-yyyy" class="form-control form-control-lg form-control-solid">
                                        <template v-if="validate.issuance_date.$error">
                                            <div v-for="(errors , index) in validate.issuance_date.$errors" :key="index" class="text-error mt-2">{{errors.$message}}</div>
                                        </template>
                                    </div>
                                    <div class="col-md-6 pb-5">
                                        <label class="form-label required"> Organization Name</label>
                                        <input name=""  v-model="validate.issued_to.$model" maxlength="50"  :class="{'errorborder':validate.issued_to.$error}"  placeholder="Your organization name" class="form-control form-control-lg form-control-solid">
                                        <template v-if="validate.issued_to.$error">
                                            <div v-for="(errors , index) in validate.issued_to.$errors" :key="index" class="text-error mt-2">{{errors.$message}}</div>
                                        </template>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row certification-validation">
                                            <div v-show="!formData.lifetime_validation" class="col-md-4 pb-5">
                                                <label class="form-label required">Validity From</label>
                                                <input name="" type="date"    v-model="formData.validity_from"   :class="{'errorborder':formDataError.validity_from}"  placeholder="mm-dd-yyyy" class="form-control form-control-lg form-control-solid">
                                                <div class="text-danger"> {{ formDataError.validity_from }} </div>
                                            </div>
                                            <div v-show="!formData.lifetime_validation" class="col-md-4 pb-5">
                                                <label class="form-label required">To</label>
                                                <input name="" type="date"   v-model="formData.validity_to"   :class="{'errorborder':formDataError.validity_to}" placeholder="mm-dd-yyyy" class="form-control form-control-lg form-control-solid">
                                                <div class="text-danger"> {{ formDataError.validity_to }} </div>
                                            </div>
                                            <div class="col-md-4 pb-5">
                                                <label class="d-flex mb-5 cursor-pointer h-100">
                                                    <span class="d-flex align-items-center me-2">
                                                        <!--begin::Description-->
                                                        <span class="d-flex flex-column">
                                                            <span class="fw-bolder text-gray-800 text-hover-primary fs-5">Lifetime Validation?</span>
                                                        </span>
                                                    </span>
                                                    <span class="form-check form-check-custom form-check-solid">
                                                        <input   
                                                        class="form-check-input" type="checkbox" name="account_plan" value="" v-model="formData.lifetime_validation">
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="separator separator-dashed border-gray-300 my-8"></div>
                                    <div class="col-md-12 pb-5">
                                        <label class="form-label">Upload Certificate</label>
                                            <a :href="letter" target="_blank" style="font-size: 20px;margin-left: 15px;">view  </a>
                                        <input type="file" :class="{'in-valid border-danger':formDataError.upload_certificate}"   @change="onFileChange($event)" 
                                            name="" class="form-control form-control-lg form-control-solid" :placeholder="filename" id="file_input">
                                        <div class="text-danger"> {{ formDataError.upload_certificate }} </div>
                                        <span>PDF, JPG, DOC, DOCX</span>
                                    </div>
                                    <div class="col-md-12 pb-5">
                                        <label class="form-label required">Description</label>
                                        <textarea   v-model="validate.description.$model" maxlength="250"  :class="{'errorborder':validate.description.$error}" placeholder="Write a brief description..." class="form-control form-control-lg form-control-solid"></textarea>
                                        <template v-if="validate.description.$error">
                                                <div v-for="(errors , index) in validate.description.$errors" :key="index" class="text-error mt-2">{{errors.$message}}</div>
                                            </template>
                                    </div>
                                    <div class="col-md-12 pb-5 text-right">

                                        <router-link to="/certificate"> <button type="button" class="btn btn-lg btn-secondary me-3 d-inline-block" > Cancel </button> </router-link>
                                        <button v-if="route.params.id" :disabled="disabled" type="button" class="btn btn-lg btn-primary me-3 d-inline-block" data-kt-stepper-action="submit" @click="save()"> Update
                                        <s-loader v-if="disabled"></s-loader>
                                        </button>
                                        <button v-else :disabled="disabled" type="button" class="btn btn-lg btn-primary me-3 d-inline-block" data-kt-stepper-action="submit" @click="save()"> ADD 
                                            <s-loader v-if="disabled"></s-loader>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 aside-profile-details">
                                <projects-help-text  :helpText="regStore?.helpText" ></projects-help-text>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end::Toolbar-->
                    </div>
        </div>
    </div>
</template>

<script>
import Api from '@/APi/axios_instance'
import ProjectsHelpText from "@/components/global/HelpText.vue"
import SLoader from '@/global_components/loader/SLoader.vue'
import PageLoader from "@/global_components/loader/PageLoader.vue"
import {useVuelidate } from "@vuelidate/core";
import {required ,helpers} from "@vuelidate/validators";
import {computed, onMounted, reactive, ref, toRefs, watch } from 'vue';
import { useRouter ,useRoute  } from "vue-router";
import {useAuthStore} from '@/store/auth'
import {Account} from '@/store/SwitchAccount'
import {useRegisterationStore } from "@/store/registeration.store";
import showToast from '@/global_components/Toast/useToast'
import API from '@/composables/API';
import useToast from '@/global_components/Toast/useToast'

export default {
    components: {
        ProjectsHelpText,
        SLoader,
        PageLoader
    },
    props:['id'],
    setup() {
        const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
        const auth =useAuthStore()
        const SwitchAccount = computed(()=> Account().Account_detail[0])
        const regStore = useRegisterationStore()
        const router = useRouter()
        const route = useRoute()
         const Certificate_id = ref(0)
         const reg_list =ref([])
         const categoryList= ref('')
         let loader = ref(false)
         let certificate_name_list = ref([])
       
         const disabled=ref(false);
         const letter =ref(null);
         let filename =ref(null);
         const formData = reactive({
             category:null,
             regulatory_authority:'',
             certificate_name:'',
             offering_cer_id:'',
             reference_no:'',
             issuance_date:'',
             issued_to:'',
             validity_from: null,
             validity_to: null,
            lifetime_validation:false,
            upload_certificate:'',
            description:'',
         })
    const formDataError = reactive({
        validity_from: null,
        validity_to: null,
        upload_certificate: null,
    })
    watch(SwitchAccount,()=>{
        regStore.loadRegistrationHelpText(`${SwitchAccount.value.Account_type}/Add Certificate/null/null`)
    })

    watch(formData,(current) => {
        current.validity_from ? formDataError.validity_from = null : formDataError.validity_from = 'Validity from required' 
        current.validity_to ? formDataError.validity_to = null : formDataError.validity_to = 'Validity to required'
        if(current.lifetime_validation) {
            formDataError.validity_from = null
            formDataError.validity_to = null
            current.validity_to = null
            current.validity_from = null
        }
    })

    const rules = {
        category:{
            required:helpers.withMessage('category is required', required)
            },
        regulatory_authority:{required:helpers.withMessage('Regulatory Authority is required',required)},
        offering_cer_id:{required:helpers.withMessage('category name is required', required)},
        reference_no:{required:helpers.withMessage('reference_no is required', required)},
        issuance_date:{required:helpers.withMessage('reference no is required', required)},
        issued_to:{required:helpers.withMessage('organization name is required', required)},
        // upload_certificate:{required:helpers.withMessage('upload_certificate is required', required)},
        description:{required:helpers.withMessage('description is required', required)},
    }

   const validate = useVuelidate(rules , toRefs(formData))

   const urlToObject= async()=> {
    let index = letter.value.indexOf("--")
    if(index > 0){
    const response = await fetch(letter.value);
    const blob = await response.blob();
    let name = letter.value.substr(index+2,letter.value.length)
    filename.value = name
    formData.upload_certificate = new File([blob],  name,{type:"image/png", lastModified:new Date().getTime(),});
    let container = new DataTransfer(); 
    container.items.add(formData.upload_certificate);
    document.querySelector('#file_input').files = container.files;
    }
}

   const currentDate =()=>{
    let date = new Date().toISOString().slice(0, 10)
    return date
   }

    const GetCategory =  async ()=>{
        regStore.loadRegCategoriesList(SwitchAccount.value.RegD_id)
    }
    
    
 const get_reg= async()=>{
       await Api.get('/api/compliance/get-all-regulator')
       .then(response=>{
           reg_list.value= response.data;
       })
       .catch(()=>{
         showToast('Internal Server error on regulatory authority')
       })
 }
    const onFileChange = (e) => {
        var files = e.target.files || e.dataTransfer.files;
        const fileSize = Math.floor(files[0]?.size/1024);
        if(fileSize>300)
        {
            e.target.value =""
            formDataError.upload_certificate = 'file size exceed 300 kb'
            formData.upload_certificate=null
        } else{
            formData.upload_certificate = files[0];
            formDataError.upload_certificate = null
        }
        letter.value=URL.createObjectURL(files[0])
    };

   const InsertUpdate = async ()=>{
       let create_certificate = new FormData();
       create_certificate.append('Certificate_file',formData.upload_certificate)
       let data = {
           Certificate_id:Certificate_id.value,
           Cat_id:formData.category,
           RegD_id:SwitchAccount.value.RegD_id,
           RegM_id:auth.user.RegM_id,
           Authority_id:formData.regulatory_authority,
           Certificate_name:formData.certificate_name,
           offering_cer_id:formData.offering_cer_id,
           Ref_no:formData.reference_no,   
           Issued_date:formData.issuance_date,
           Issued_to:formData.issued_to,
           Validity_from:formData.validity_from,
           Validity_to:formData.validity_to,
           Lifetime_valid:formData.lifetime_validation,
        //    Certificate_file:formData.upload_certificate,
           Description:formData.description,
           Isactive:currentUser.Isactive,
           Isexpire:false,
           Verified:false,
           Verified_by:1,
           Verified_status:0,
           Verified_status_name:'panding',
           Account_type:SwitchAccount.value.Account_type,
           Createdby:auth.user.User_id,
           Updatedby:auth.user.User_id,       
       }
        create_certificate.append('data', JSON.stringify(data))
        await Api.post('/api/Certificate/InsertUpdate',create_certificate)
         .then(response=>{
           if(response.status==200)
           {
            if(Certificate_id.value){
              showToast('certificate update successfully','success')
            }else{
               showToast('certificate add successfully','success')
            }
               
               router.push('/certificate')
           }
       }) 
       .catch(error=>{
         disabled.value=false
         showToast(error.response.data)
       })
   }

      const Edit = async (id)=>{
        loader.value = true
        console.log(id)
        await Api.get('/api/Certificate/GetById/' + id)
        .then(response=>{
            getCertificateNameOnEdit(response.data.Authority_id)
            loader.value = false
            let data = response.data;
            Certificate_id.value=data.Certificate_id
            formData.category = data.Cat_id;
            formData.regulatory_authority=data.Authority_id;
            formData.offering_cer_id=data.offering_cer_id;
            formData.certificate_name=data.Certificate_name;
            formData.reference_no = data.Ref_no;
            formData.issuance_date=data.Issued_date.substring(0,10); 
            formData.lifetime_validation= data.Lifetime_valid;
            formData.issued_to= data.Issued_to;
            formData.description=data.Description; 
            letter.value =data.certificate_file;
            if(data.Validity_from){
               formData.validity_from= data.Validity_from.substring(0,10);
            }
            if(data.Validity_to){
                  formData.validity_to= data.Validity_to.substring(0,10);
            }
            urlToObject();
        })
        .catch(error=>{
             loader.value = false
             showToast(error.response.data)
        })
        
      }
    const getCertificateList = async (e) =>{
        const response = await API.get(`api/compliance/get-certificate?RegD_id=${e.target.value}`)
        if(response.status == 200){
            certificate_name_list.value = response.data
        }else{
            useToast(response)
        }
    }
    const getCertificateNameOnEdit = async (id) =>{
        const response = await API.get(`api/compliance/get-certificate?RegD_id=${id}`)
        if(response.status == 200){
            certificate_name_list.value = response.data
        }else{
            useToast(response)
        }
    }
    const getCertificateName = (e) =>{
        const index = certificate_name_list.value.findIndex(x => x.Offering_id === e.target.value)
        formData.certificate_name = certificate_name_list.value[index].Offering_name
        console.log(formData.certificate_name)
    }
   const save = ()=>{
     validate.value.$touch();
      if (!validate.value.$invalid) {
          if(!formData.lifetime_validation){
              if(formData.validity_from){
                  disabled.value=true
                  InsertUpdate()
              }else{
                  formData.validity_from = '.'
                  formData.validity_from = ''
              }
          }else {
              InsertUpdate()
              disabled.value=true
          }
      }
   }



   onMounted(()=>{
  
    GetCategory()
    get_reg()
   
    if(route.params.id)
    {
      Edit(route.params.id)
    }
  
   })

        return{
            letter,
            filename,
            formDataError,
           formData,
           validate,
           categoryList,
           Certificate_id,
           disabled,
           router,
           route,
           reg_list,
           GetCategory,
           save,
           onFileChange,
           InsertUpdate,
           Edit,
           currentDate,
           regStore,
           loader,
           getCertificateList,
           certificate_name_list,
           getCertificateName
           
        }
    },
}
</script>
<style scoped>
.errorborder
{
    border:  1px solid red;
}
.text-error{
    color: red;
}
</style>