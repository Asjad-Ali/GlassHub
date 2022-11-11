<template>
    <div class="aside-profile-details ms-4">
        <div class="card d-flex flex-row-fluid flex-center">
            <form class="card-body w-100 w-xl-700px px-9" id="kt_create_account_form">
                <div data-kt-stepper-element="content" class="current">
                    <div class="row mb-5">
                        <div>
                            <h2 class="fw-bolder text-dark">Assessment Controls</h2>
                        </div>
                        <hr>

                        <div v-if="store.auditReport.rpt_assessment_control.length" class="card-body p-2 cursor-none">
                            <div class="row mb-2">
                                <div class="col-md-6 text-start">
                                    <button type="button" v-show="currentControl>0"  @click="previousControl" class="btn btn-secondary" >Previous</button>
                                </div>
                                <div class="col-md-6 text-end">
                                    <button type="button" v-show="currentControl+1 != store.auditReport.rpt_assessment_control.length " @click="nextControl" class="btn btn-secondary" >Next</button>
                                </div>
                            </div>
                            <div class="row pb-5">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h5>Control No: {{ currentControl+1 }}/{{ store.auditReport.rpt_assessment_control.length }} </h5>
                                    </div>
                                    <div class="col-md-12 cursor-none">
                                        <label class="form-label required me-5">Compliance Status</label>
                                        <input disabled v-model="store.auditReport.rpt_assessment_control[currentControl].compliance_status" class="form-check-input me-2" type="radio" name="account_plan" :value="0">
                                        <span class="fs-6 fw-bold text-muted me-5">Complained</span>
                                        <input disabled v-model="store.auditReport.rpt_assessment_control[currentControl].compliance_status" class="form-check-input me-2" type="radio" name="account_plan" :value="1">
                                        <span class="fs-6 fw-bold text-muted me-5">Non-Complained</span>
                                        <input disabled v-model="store.auditReport.rpt_assessment_control[currentControl].compliance_status" class="form-check-input me-2" type="radio" name="account_plan" :value="2">
                                        <span class="fs-6 fw-bold text-muted">Not-acceptable</span>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label required">Refrence No</label>
                                        <input v-model="store.auditReport.rpt_assessment_control[currentControl].ref_no"  readonly name="" class="form-control form-control-lg form-control-solid">
                                    </div>
                                    <div class="col-md-6 mb-5">
                                        <label class="form-label ">Source</label>
                                        <input v-model="store.auditReport.rpt_assessment_control[currentControl].source"  readonly name="" class="form-control form-control-lg form-control-solid">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label ">Control statement</label>
                                        <p>{{ store.auditReport.rpt_assessment_control[currentControl].control_statement }}</p>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label ">Support evidance</label>
                                    <a href="#">  View Evidance </a>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-10">
                                <div class="col-md-12 mb-20">
                                    <label class="form-label"> Compliance analysis &amp; remarks</label>
                                    <p v-html="store.auditReport.rpt_assessment_control[currentControl].analysis_remarks"></p>
                                </div>
                            </div>
                        </div>
                        <RecordNotAvailable v-else />
                        <div class="d-flex flex-stack ">
                            <div class="mr-2">
                                <button @click="back" type="button" class="btn btn-lg btn-light-primary me-3">
                                    <span class="svg-icon svg-icon-4 me-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black"></rect>
                                            <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black"></path>
                                        </svg>
                                    </span>
                                    Back
                                </button>
                            </div>
                            <div>
                                <button @click="next" type="button" class="btn btn-lg btn-primary"  >
                                    Continue
                                    <span class="svg-icon svg-icon-4 ms-1 me-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black"></rect>
                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from '@vue/reactivity';
import { useAuditStore } from '@/store/audit.store';
import { computed } from '@vue/runtime-core';
import useToast from '@/global_components/Toast/useToast'
import RecordNotAvailable from '@/global_components/RecordNotAvailable.vue';

const router = useRouter()
const store = useAuditStore()
const currentControl = ref(0)
const quill = ref()
const report = computed(()=>{
    const rptData = JSON.parse(localStorage.getItem('report'))
    return rptData
})
store.auditReport = report.value
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))

if(store.auditReport.rpt_assessment_control?.length){
    store.auditReport.rpt_assessment_control.forEach((value,index)=>{
        store.auditReport.rpt_assessment_control[index].updated_by = currentUser.User_id
    });
}


const next = async () =>{
    router.push({path: '/report-summary-view'})
}
const back = () =>{
    router.push({path: '/executive-summary-view'})
}
const previousControl = () => {
    currentControl.value = currentControl.value-1
    quill.value.setContents(store.auditReport.rpt_assessment_control[currentControl.value].analysis_remarks)
}
const nextControl = () => {
    if(store.auditReport.rpt_assessment_control[currentControl].compliance_status == 0 || store.auditReport.rpt_assessment_control[currentControl].compliance_status ){    
        currentControl.value = currentControl.value+1
        quill.value.setContents(store.auditReport.rpt_assessment_control[currentControl.value].analysis_remarks)
    }else{
        useToast("Select Compliance Status")
    }
}

</script>