<template>
    <div class="aside-profile-details ms-4">
        <div class="card d-flex flex-row-fluid flex-center">
            <form class="card-body w-100 w-xl-700px px-9" id="kt_create_account_form">
                <div class="current" data-kt-stepper-element="content">
                    <div class="w-100">
                        <div>
                            <h2 class="fw-bolder d-flex align-items-center text-dark">
                                Audit Firm Information
                            </h2>
                        </div>
                        <hr />
                        <div class="row fv-row mb-10 fv-plugins-icon-container">
                            <div class="fv-row mb-2 pb-5 col-md-12">
                                <h2 class="fw-bolder d-flex align-items-center text-dark margin-tpi">
                                    Report Control
                                </h2>
                                <div class="col-md-12 pb-5 margin-tpi">
                                    <table>
                                        <thead v-if="Data.reportcontrol.length">

                                            <tr>
                                                <th class="min-w-130px">Version</th>
                                                <th class="min-w-130px"> Date</th>
                                                <th class="min-w-130px"> Author</th>
                                                <th class="min-w-130px "> Comment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(data,index) in Data.reportcontrol" :key="index">
                                                <td><input readonly v-model="data.con_version" type="text" class="form-control form-control-lg form-control-solid"></td>
                                                <td> <input readonly v-model="data.con_date" type="text" class="form-control form-control-lg form-control-solid"></td>
                                                <td> <input readonly v-model="data.author" type="text" class="form-control form-control-lg form-control-solid"></td>
                                                <td> <input readonly v-model="data.comment" type="text" class="form-control form-control-lg form-control-solid"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2 class="fw-bolder d-flex align-items-center text-dark margin-tpi mt-10">
                                    Assessors
                                </h2>
                                <div class="col-md-12 pb-5 margin-tpi">
                                    <table>
                                        <thead v-if="Data.assessors.length">
                                            <tr>
                                                <th class="min-w-130px">Name</th>
                                                <th class="min-w-130px "> Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(data,index) in Data.assessors" :key="index">
                                                <td><input type="text" readonly name="" v-model="data.ass_name" class="form-control form-control-lg form-control-solid"></td>
                                                <td> <input type="text" readonly name="" v-model="data.ass_date"  class="form-control form-control-lg form-control-solid "></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h2 class="fw-bolder d-flex align-items-center text-dark margin-tpi mt-10">
                                    Approved by
                                </h2>
                                <div class="col-md-12 pb-5 margin-tpi">
                                    <table>
                                        <thead v-if="Data.rpt_approved_by.length">
                                            <tr>
                                                <th class="min-w-130px">Entity</th>
                                                <th class="min-w-130px"> Signature</th>
                                                <th class="min-w-130px"> Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(data,index) in Data.rpt_approved_by" :key="index">
                                                <td><input type="text" readonly name="" v-model="data.app_entity"  class="form-control form-control-lg form-control-solid"></td>
                                                <td> <input type="text" readonly name="" v-model="data.app_signature"  class="form-control form-control-lg form-control-solid"></td>
                                                <td> <input type="text" readonly name="" v-model="data.app_date"  class="form-control form-control-lg form-control-solid"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex flex-stack pt-10">
                            <div class="mr-2">
                                <button type="button" class="btn btn-lg btn-light-primary me-3"
                                    @click="back">
                                    <span class="svg-icon svg-icon-4 me-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="6" y="11" width="13"
                                                height="2" rx="1" fill="black" />
                                            <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                                fill="black" />
                                        </svg>
                                    </span>
                                    Back
                                </button>
                            </div>
                            <div>
                                <button type="button" class="btn btn-lg btn-primary"
                                    @click="next">
                                    Continue
                                    <span class="svg-icon svg-icon-4 ms-1 me-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="18" y="13" width="13"
                                                height="2" rx="1" transform="rotate(-180 18 13)"
                                                fill="black" />
                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                                fill="black" />
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
import { computed, ref } from '@vue/runtime-core';
import { useRouter } from 'vue-router';


const router = useRouter()
const back = () =>{
    router.push({path: '/third-party-information-view'})
}
const Data = ref({
    reportcontrol:[],
    assessors:[],
    rpt_approved_by:[]
})
Data.value.reportcontrol = computed(()=>{
    const rptData =  JSON.parse(localStorage.getItem('report'))
    return rptData.report_control
})
Data.value.assessors = computed(()=>{
    const rptData =  JSON.parse(localStorage.getItem('report'))
    return rptData.rpt_assessors
})
Data.value.rpt_approved_by = computed(()=>{
    const rptData =  JSON.parse(localStorage.getItem('report'))
    return rptData.rpt_approved_by
})




const next = async () =>{
    router.push({path: '/guidelines-view'})
}
// onMounted(() => {
//     store.loadRegistrationHelpText(`${account.value[0].Account_type}/Audit Firms/Request Registeration/null`)
// } )
</script>