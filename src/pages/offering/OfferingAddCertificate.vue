<template>
  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
          <div id="kt_toolbar_container" class="container-xxl py-5">
            <div class="row gy-0 gx-10">
              <div class="col-xl-9 pd-30 bg-w">
                <h1 class="pb-2">Add Certificate</h1>
                <div
                  class="separator separator-dashed border-gray-300 my-8"></div>
                <div class="row">                             
                  <div class="col-md-6 pb-5">
                      <label class="form-label required">Certificate Name</label>
                      <input v-model="formData.Offering_name" maxlength="50" name="" placeholder="e.g. Cyber Security Certificate" class="form-control form-control-lg form-control-solid">
                      <div class="text-danger"> {{ formDataError.Offering_name }} </div>
                  </div>
                  <div class="col-md-6 pb-5">
                      <label class="form-label required"> Category</label>
                      <select @change="getCategoryName($event)" v-model="formData.Cat_id" name="" class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                          <option selected disabled value="">Select One</option>
                          <option v-for="cat in regStore.regCategories" :value="cat.Cat_id" :key="cat.Cat_id" selected=""> {{ cat.Cat_name }} </option>
                      </select>
                          <div class="text-danger"> {{ formDataError.Cat_id }} </div>
                  </div>
                  <div class="col-md-6 pb-5">
                      <label class="form-label required">Companies who can get</label>
                      <input v-model="formData.Comp_can_get" maxlength="50" name="" placeholder="e.g. Paratech" class="form-control form-control-lg form-control-solid">
                      <div class="text-danger"> {{ formDataError.Comp_can_get }} </div>
                  </div>
                  <div class="col-md-6 pb-5">
                      <div class="form-label required">Certificate Compliance  <router-link class="float-end" to="add_compliance"><a  target="_blank" class="badge badge-primary">Add</a></router-link></div>
                      <select @change="getCertificateName($event)" v-model="formData.Compliance_id" name="business_type" class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                          <option selected disabled value="">Select One</option>
                          <option v-for="compliance in store.complianceList" :key="compliance.Compliance_id" :value="compliance.Compliance_id"> {{ compliance.Compliance_name }} </option>
                      </select>
                      <div class="text-danger"> {{ formDataError.Compliance_id }} </div>
                  </div>
                  <div class="col-md-6 pb-5">
                      <div class="form-label required">Authorized Audit Firms   
                          <!-- <a href="request-registeration.html" target="_blank" class="badge float-end badge-primary">Add</a>   -->
                      </div>
                      <select @change="getAuditName($event)" v-model="formData.Auth_auditfirm_id" name="business_type" class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                          <option selected disabled value="">Select One</option>
                          <option v-for="audit in store.auditsList" :key="audit.RegD_id" :value="audit.RegD_id"> {{ audit.Fullname }}  </option>
                      </select>
                          <div class="text-danger"> {{ formDataError.Auth_auditfirm_id }} </div>
                  </div>
 
                  <div class="col-md-6 pb-5">
                      <label class="form-label required">Ceritificate Validity</label>
                      <div class="table-responsive">													
                          <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                              <thead>
                                  <tr class="text-bolder text-muted">
                                      <th class="min-w-100px">Select</th>
                                      <th class="min-w-160px">Duration </th>
                                      <th class="min-w-100px text-center">Fee</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>
                                          <div class="d-flex align-items-center">
                                              <input v-model="formData.Validity_Annual"  class="form-check-input" type="checkbox">
                                          </div>
                                      </td>
                                      <td>                                                            
                                          <p class="text-muted fw-bold text-muted d-block fs-7">Annual</p>
                                      </td>
                                      <td  class="text-end">
                                          <div class="d-flex justify-content-end">
                                              <div class="input-group w-75">
                                                  <span class="input-group-text ">$</span>
                                                  <input maxlength="10" @focus="formData.Validity_price_Anl = null" v-model="formData.Validity_price_Anl"  type="text" class="form-control form-control-lg form-control-solid p-0" 
                                                  :readonly="!formData.Validity_Annual" plaholder="6598" aria-label="Amount (to the nearest dollar)">
                                                  <span class="input-group-text">.00</span>
                                              </div>
                                          </div>
                                          <div class="text-danger"> {{ formDataError.Validity_price_Anl }} </div>
                                      </td>
                                  </tr>  
                                  <tr>
                                      <td>
                                          <div class="d-flex align-items-center">
                                              <input v-model="formData.Validity_Month" class="form-check-input" type="checkbox">
                                          </div>
                                      </td>
                                      <td>                                                            
                                          <p class="text-muted fw-bold text-muted d-block fs-7">Monthly</p>
                                      </td>
                                      <td  class="text-right">
                                          <div class="d-flex justify-content-end">
                                              <div class="input-group w-75" >
                                                  <span class="input-group-text ">$</span>
                                                  <input maxlength="10" @focus="formData.Validity_price_Mth = null"  v-model="formData.Validity_price_Mth" type="text" class="form-control form-control-lg form-control-solid p-0" 
                                                  :readonly="!formData.Validity_Month" plaholder="6598" aria-label="Amount (to the nearest dollar)">
                                                  <span class="input-group-text">.00</span>
                                              </div>
                                          </div>
                                          <div class="text-danger"> {{ formDataError.Validity_price_Mth }} </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div class="d-flex align-items-center">
                                              <input v-model="formData.Validity_Lifetime" class="form-check-input" type="checkbox">
                                          </div>
                                      </td>
                                      <td>                                                            
                                          <p class="text-muted fw-bold text-muted d-block fs-7">Life Time</p>
                                      </td>
                                      <td class="text-right">
                                          <div class="d-flex justify-content-end">
                                              <div class="input-group w-75">
                                                  <span class="input-group-text ">$</span>
                                                  <input maxlength="10"  @focus="formData.Validity_pice_Ltime = null" v-model="formData.Validity_pice_Ltime" type="text" class="form-control form-control-lg form-control-solid p-0" 
                                                  :readonly="!formData.Validity_Lifetime" plaholder="6598" aria-label="Amount (to the nearest dollar)">
                                                  <span class="input-group-text">.00</span>
                                              </div>
                                          </div>
                                          <div class="text-danger"> {{ formDataError.Validity_pice_Ltime }} </div>
                                      </td>
                                  </tr>
                              </tbody>                                                
                          </table>                                            
                      </div>
                  </div>
                    <div class="col-md-12 pb-5">
                    <label class="d-flex">
                        <span class="d-flex align-items-center me-2">								
                            <span class="d-flex flex-column">
                                <span class="fw-bolder text-gray-800 text-hover-primary cursor-pointer fs-5">During audit process any verification required ? </span>
                            </span>
                        </span>
                        <span class="form-check form-check-custom form-check-solid">
                            <input v-model="formData.is_regulator_verification" class="form-check-input cursor-pointer" type="checkbox" name="account_plan">
                        </span>
                    </label>
                  </div> 
                  <div class="col-md-12 pb-5">
                      <label class="d-flex mb-5 h-100">
                          <span class="d-flex align-items-center me-2">								
                              <span class="d-flex flex-column">
                                  <span class="fw-bolder text-gray-800 text-hover-primary cursor-pointer fs-5">Any Training Required?</span>
                              </span>
                          </span>
                          <span class="form-check form-check-custom form-check-solid">
                              <input v-model="formData.Is_training_req"  class="form-check-input cursor-pointer" type="checkbox" name="account_plan" />
                          </span>
                      </label>
                  </div>
                  <div class="row" v-show="formData.Is_training_req">
                      <div class="col-md-6">
                          <label class="form-label required">Training Fees</label>
                          <div class="input-group input-group-lg w-75">
                              <span class="input-group-text ">$</span>
                              <input maxlength="10" v-model="formData.Training_fee" name="" placeholder="100" class="form-control form-control-lg form-control-solid">
                              <span class="input-group-text">.00</span>
                          </div>
                          <div class="text-danger"> {{ formDataError.Training_fee }} </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-label required">Authorized Trainers
                              <a @click="openAddTrainerModalFun"  class="badge float-end badge-primary cursor-pointer"  >Add</a>
                              <a v-show="formData.Trainer_id" @click="openAddTrainerModalFun2(formData.Trainer_id)" class="badge float-end badge-primary cursor-pointer me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_2">Edit</a>
                              </div>
                          <select v-model="formData.Trainer_id" name="business_type" class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                          <option  selected disabled value="">Select One</option>
                              <option v-for="trainer in store.trainerList" :key="trainer.Trainer_id" :value="trainer.Trainer_id"> {{ trainer.Trainer_name }} </option>
                          </select>
                          <div class="text-danger"> {{ formDataError.Trainer_id }} </div>

                      </div>
                  </div>
                      <div class="col-md-12">
                          <label class="d-flex mb-5  h-100">
                              <span class="d-flex align-items-center me-2">								
                                  <span class="d-flex flex-column">
                                      <span class="fw-bolder text-gray-800 text-hover-primary cursor-pointer fs-5">Physical Inspection Required? </span>
                                  </span>
                              </span>
                              <span class="form-check form-check-custom form-check-solid">
                                  <input v-model="formData.Is_inspection" class="form-check-input cursor-pointer" type="checkbox" name="account_plan">
                              </span>
                          </label>  
                      </div>
                      
                      <div class="col-md-4" v-show="formData.Is_inspection">
                          <label class="form-label required">Inspection Charges</label>
                          <div class="input-group input-group-lg">
                              <span class="input-group-text ">$</span>
                              <input maxlength="10" v-model="formData.Inspection_chrg" name="" placeholder="100" class="form-control form-control-lg form-control-solid">
                              <span class="input-group-text">.00</span>
                          </div>
                          <div class="text-danger"> {{ formDataError.Inspection_chrg }} </div>
                      </div>
                      <div class="col-md-12 pb-5 text-right">
                          <router-link to="/offering_all_certificates"><button type="button" class="btn btn-lg btn-secondary me-3 d-inline-block" >CANCEL</button></router-link>
                          <button  @click="addOfferingCertificate()" type="button" class="btn btn-lg btn-primary me-3 d-inline-block" 
                          data-kt-stepper-action="submit">
                          <loader v-if="store.btnLoader"></loader><span v-else> {{ $route.params.id ? 'Update' : 'Add' }} </span></button>

                      </div>
                </div>
              </div>
              <div class="col-xl-3 aside-profile-details">
                <!-- <HelpText /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
        <teleport to="body">
            <AddTrainerModal v-if="openAddTrainerModal" :id="trainerId"  @closeAddTrainerModal="closeAddTrainerModal" />
        </teleport>  
    </div>
  </div>
</template>


<script setup>
// import HelpText from "@/components/global/HelpText.vue"
import loader from '@/global_components/loader/SLoader.vue'
import { useOfferingCertificateStore } from "@/store/offeringCertificates.store";
import AddTrainerModal from "@/components/offering/AddTrainerModal.vue";
import {  computed, reactive, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import {Account} from '@/store/SwitchAccount'
import { useRegisterationStore } from '@/store/registeration.store';
const { onMounted, ref }=require("vue");
const store = useOfferingCertificateStore()
const regStore = useRegisterationStore()

const SwitchAccount = computed(()=> Account().Account_detail[0]) 
const openAddTrainerModal = ref(false)
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const route = useRoute()
const router = useRouter()

let trainerId = ref(0)
    let formData = reactive({
        Offering_id: 0,
        Offering_name:'',
        Cat_id:'',
        Cat_name:'',
        Compliance_id:'',
        Compliance_name:'',
        Auth_auditfirm_id: '',
        Auth_auditfirm_name: '',
        RegD_id: account.value[0].RegD_id,
        RegM_id: account.value[0].RegM_id,
        RegM_name: currentUser.User_fullname,
        Validity_Annual: false,
        Validity_Month: false,
        Validity_Lifetime: false,
        Validity_name_Anl: "Annual",
        Validity_price_Anl: '',
        Validity_name_Mth: "Monthly",
        Validity_price_Mth: '',
        Validity_name_Ltime: "Life Time",
        Validity_pice_Ltime: '',
        Is_training_req: false,
        Training_fee:'',
        Trainer_id:'',
        Is_inspection: false,
        Inspection_chrg:'',
        Created_by: currentUser.User_id,
        Updated_by: currentUser.User_id,
        Comp_can_get:'',
        is_regulator_verification: false
    })

    if(route.params.id){
        const data = JSON.parse(localStorage.getItem('editOfferingCertificate'))
        formData.Offering_id = data.Offering_id ,
        formData.Offering_name = data.Offering_name ,
        formData.Cat_id = data.Cat_id ,
        formData.Cat_name = data.Cat_name ,
        formData.Compliance_id = data.Compliance_id ,
        formData.Compliance_name = data.Compliance_name ,
        formData.Auth_auditfirm_id = data.Auth_auditfirm_id
        formData.Auth_auditfirm_name = data.Auth_auditfirm_name
        formData.RegD_id = data.RegD_id ,
        formData.RegM_id = data.RegM_id ,
        formData.RegM_name = data.RegM_name ,
        formData.Validity_Annual = data.Validity_Annual,
        formData.Validity_Month = data.Validity_Month,
        formData.Validity_Lifetime = data.Validity_Lifetime,
        formData.Validity_name_Anl = data.Validity_name_Anl,
        formData.Validity_price_Anl = data.Validity_price_Anl,
        formData.Validity_name_Mth = data.Validity_name_Mth,
        formData.Validity_price_Mth = data.Validity_price_Mth,
        formData.Validity_name_Ltime = data.Validity_name_Ltime,
        formData.Validity_pice_Ltime = data.Validity_pice_Ltime,
        formData.Is_training_req = data.Is_training_req,
        formData.Training_fee = data.Training_fee ,
        formData.Trainer_id = data.Trainer_id ,
        formData.Is_inspection = data.Is_inspection,
        formData.Inspection_chrg = data.Inspection_chrg ,
        formData.Created_by = currentUser.User_id,
        formData.Updated_by = currentUser.User_id,
        formData.Comp_can_get = data.Comp_can_get
    }
    const formDataError = reactive({
        Validity_price_Anl: null,
        Validity_pice_Ltime: null,
        Validity_price_Mth: null,
        Inspection_chrg: null,
        Training_fee: null,
        Trainer_id: null,
        Offering_name: null,
        Cat_id: null,
        Comp_can_get: null,
        Compliance_id: null,
        Auth_auditfirm_id: null
    })


watch(SwitchAccount,()=>{
  if(SwitchAccount.value.Account_type!=4){
    router.push('dashboard')
  }
})

const openAddTrainerModalFun =()=>{
    openAddTrainerModal.value = true
}
const openAddTrainerModalFun2 =(index)=>{
    openAddTrainerModal.value = true
    trainerId.value = index
}

const closeAddTrainerModal =(event)=>{
    openAddTrainerModal.value = event
}






    watch( formData ,(current) =>{
        console.log(current.Offering_name)
        formDataError.Offering_name = current.Offering_name ? null : "Certificate name is Required"
        formDataError.Cat_id = current.Cat_id ? null : "Category is Required"
        formDataError.Comp_can_get = current.Comp_can_get ? null : "Company is Required"
        formDataError.Compliance_id = current.Compliance_id ? null : "Certificate Compliance is Required"
        formDataError.Auth_auditfirm_id = current.Auth_auditfirm_id ? null : "Audit Firm is Required"

        if(current.Validity_Annual ){
            current.Validity_name_Anl = "Annual"
            formDataError.Validity_price_Anl = current.Validity_price_Anl ? null : "Price is required"
        } else {
            current.Validity_price_Anl = ''
            current.Validity_name_Anl = null
            formDataError.Validity_price_Anl = null
        }
        if(current.Validity_Lifetime ){
            current.Validity_name_Ltime = "Life Time"
            formDataError.Validity_pice_Ltime = current.Validity_pice_Ltime ? null : "Price is required"
        } else {
            current.Validity_pice_Ltime = ''
            current.Validity_name_Ltime = null
            formDataError.Validity_pice_Ltime = null
        }
        if(current.Validity_Month ){
            current.Validity_name_Mth = "Monthly"
            formDataError.Validity_price_Mth = current.Validity_price_Mth ? null : "Price is required"
        } else {
            current.Validity_price_Mth = ''
            current.Validity_name_Mth = null
            formDataError.Validity_price_Mth = null
        }
        if( !current.Is_training_req ){
            current.Trainer_id = null
            current.Training_fee = null
        }else{
            formDataError.Trainer_id = current.Trainer_id ? null : "Trainer is required"
            formDataError.Training_fee = current.Training_fee ? null : "Trainer Fee is required"
        }

        if( !current.Is_inspection ){
            current.Inspection_chrg = null
        }else{
            formDataError.Inspection_chrg = current.Inspection_chrg ? null : "Inspection Charge is required"
        }
    } )

    const addOfferingCertificate = () => {
        if( formData.Offering_name ){
            store.insertUpdateOfferingCertificate(formData).then( response => {
                if(response.status == 200){
                    console.log("in router push")
                    router.push({ path: '/offering_all_certificates' })
                }
            })
        } else{
            formData.Offering_name = '.'
            formData.Offering_name = ''
        }
    }
    const getCategoryName = (e) => {
        formData.Cat_name = e.target.options[e.target.options.selectedIndex].text;
    }
    const getCertificateName = (e) => {
        formData.Compliance_name = e.target.options[e.target.options.selectedIndex].text;
    }
    const getAuditName = (e) => {
        formData.Auth_auditfirm_name = e.target.options[e.target.options.selectedIndex].text;
    }






onMounted(() => {
    store.loadOfferingCertificate();
    regStore.loadRegCategoriesList(account.value[0].RegD_id).then( () => {
        store.loadComplianceCertificatesList(account.value[0].RegD_id)
    } ).then( () => {
        store.loadAuditsList()
        store.loadTrainerList(account.value[0].RegD_id)
    } )
} )
</script>

<style>

</style>