<template>
      <div class="modal fade" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" id="askformoreques">
        <div class="modal-dialog modal-lg mt-20">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Certificate View</h5>
                    <!--begin::Close-->
                    <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>
                <div class="modal-body cursor-none">
                   <PageLoader v-if="store.singleCertificateLoader" />
                   <div v-else>
                    <div class="row">                             
                    <div class="col-md-6 pb-5">
                        <label class="form-label required">Certificate Name</label>
                        <input v-model="formData.Offering_name" maxlength="50" name="" placeholder="e.g. Cyber Security Certificate" class="form-control form-control-lg form-control-solid">
                    </div>
                    <div class="col-md-6 pb-5">
                        <label class="form-label required"> Category</label>
                        <input v-model="formData.Cat_name" maxlength="50" name="" placeholder="e.g. Cyber Security Certificate" class="form-control form-control-lg form-control-solid">
                    </div>
                    <div class="col-md-6 pb-5">
                        <label class="form-label required">Companies who can get</label>
                        <input v-model="formData.Comp_can_get" maxlength="50" name="" placeholder="e.g. Paratech" class="form-control form-control-lg form-control-solid">
                    </div>
                    <div class="col-md-6 pb-5">
                        <div class="form-label required">Certificate Compliance  </div>
                        <input v-model="formData.Compliance_name" maxlength="50" name="" placeholder="e.g. Paratech" class="form-control form-control-lg form-control-solid">
                    </div>
                    <div class="col-md-6 pb-5">
                        <div class="form-label required">Authorized Audit Firms   
                            <!-- <a href="request-registeration.html" target="_blank" class="badge float-end badge-primary">Add</a>   -->
                        </div>
                        <input v-model="formData.Auth_auditfirm_name" maxlength="50" name="" placeholder="e.g. Paratech" class="form-control form-control-lg form-control-solid">
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
                        </div>
                        <div class="col-md-6">
                            <div class="form-label required">Authorized Trainers
                                <a @click="openAddTrainerModalFun"  class="badge float-end badge-primary cursor-pointer"  >Add</a>
                                <a v-show="formData.Trainer_id"  class="badge float-end badge-primary cursor-pointer me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_2">Edit</a>
                                </div>
                            <select v-model="formData.Trainer_id" name="business_type" class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                            <option  selected disabled value="">Select One</option>
                                <option v-for="trainer in store.trainerList" :key="trainer.Trainer_id" :value="trainer.Trainer_id"> {{ trainer.Trainer_name }} </option>
                            </select>
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
                        </div>
                    </div>
                   </div>
                </div>

                <div class="modal-footer text-end">
                    <button @click="CloseModel" class="btn btn-secondary">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineEmits } from "vue";
import PageLoader from "@/global_components/loader/PageLoader.vue";
import { useAuditStore } from "@/store/audit.store";

const store = useAuditStore()
const emit = defineEmits(['closeCertificateView'])
const CloseModel = () => {
    emit('closeCertificateView', false)
}

const formData = computed(() => {
    return store.auditSingleCertificate[0]
})
console.log(formData.value)
</script>
