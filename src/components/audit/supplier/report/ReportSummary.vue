<template>
    <div class="aside-profile-details ms-4">
        <!--begin::Body-->
            <div class="card d-flex flex-row-fluid flex-center">
                <form class="card-body w-100 w-xl-700px px-9" id="kt_create_account_form">

                    <!--begin::Step 6-->
                    <div class="current" data-kt-stepper-element="content">
                        <div class="w-100 cursor-none">
                            <div>
                                <h2 class="fw-bolder d-flex align-items-center text-dark">
                                    Report Summary
                                </h2>

                            </div>
                            <hr />
                            <div class="row fv-row mb-10 fv-plugins-icon-container">
                                <div class="fv-row mb-2 pb-5 col-md-12">
                                    <div class="col-md-12 pb-5 margin-tpi">
                                        <table>
                                            <thead>

                                                <!-- <tr>
                                                    <th class="min-w-130px">Version</th>
                                                    <th class="min-w-130px"> Date</th>
                                                    <th class="min-w-130px"> Author</th>
                                                    <th class="min-w-130px "> Comment</th>
                                                </tr> -->

                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td style="background-color: #5241a1;color:white">Compliance </td>
                                                    <td style="background-color: #5241a1;color:white">Not Applicable </td>
                                                    <td style="background-color: #5241a1;color:white">Non-Compliance</td>

                                                </tr>


                                                <tr>
                                                    <td style="background-color: #5241a1;color:white">Count</td>
                                                    <td> <p class="form-control form-control-lg form-control-solid">{{ report.complaince_count }}</p></td>
                                                    <td> <p class="form-control form-control-lg form-control-solid">{{ report.not_app_count }}</p></td>
                                                    <td> <p class="form-control form-control-lg form-control-solid">{{ report.non_comp_count }}</p></td>
                                                </tr>
                                                <tr>
                                                    <td style="background-color: #5241a1;color:white">Percentage</td>
                                                    <td> <p type="text" name=""  class="form-control form-control-lg form-control-solid"> {{ report.complaince_per }}%</p></td>
                                                    <td> <p type="text" name=""  class="form-control form-control-lg form-control-solid"> {{ report.not_app_per }}%</p></td>
                                                    <td> <p type="text" name=""  class="form-control form-control-lg form-control-solid"> {{ report.non_comp_per }}%</p></td>

                                                </tr>

                                                <tr>
                                                    <td style="background-color: #5241a1;color:white">Percentage of Compliance and Not Applicable</td>
                                                    <td colspan="3"> <p  class="form-control form-control-lg form-control-solid">{{ report.total_per }}% </p></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col-md-12 pb-5 margin-tpi">
                                        <div class="col-md-12">
                                            <label class="form-label required me-5">Compliance Status</label>
                                            <input disabled  v-model="report.rpt_status" class="form-check-input me-2" type="radio" name="account_plan" :value=0>
                                            <span class="fs-6 fw-bold text-muted me-5">In Process</span>
                                            <input disabled  v-model="report.rpt_status"  class="form-check-input me-2" type="radio" name="account_plan" :value=1>
                                            <span class="fs-6 fw-bold text-muted me-5">Completed</span>
                                            <input disabled  v-model="report.rpt_status"  class="form-check-input me-2" type="radio" name="account_plan" :value=2>
                                            <span class="fs-6 fw-bold text-muted">Re-Audit</span>
                                        </div>
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
                                    <button type="button" @click="next" class="btn btn-lg btn-primary">
                                        Finish
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
                    <!--end::Step 6-->
                </form>
            </div>
        <!--end::Body-->
    </div>
</template>

<script setup>
import API from '@/composables/API';
import { computed, onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useAuditStore } from '@/store/audit.store';

const store = useAuditStore()
const router = useRouter()
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))

// const rptStatusName = ['In Process', 'Completed', 'Re-Audit']
if(store.auditReport.rpt_summary?.length){
    store.auditReport.rpt_summary.forEach((value,index)=>{
        store.auditReport.rpt_summary[index].updated_by = currentUser.User_id
    });
}
const report = computed(()=>{
    const rptData = JSON.parse(localStorage.getItem('report'))
    return rptData.rpt_summary[0]
})


const back = () =>{
    router.push({path: '/assessment-controls-view'})
}

const next = async () =>{
    router.push({path: '/completed_audit'})
}

onMounted(async () =>{
    await API.get(`api/audit/get-rpt-cntrl-summary?report_id=${report.value.audit_report[0].report_id}`).then((res) => {
        if(res.status == 200){
            store.auditReport.rpt_summary = res.data
        }
    })
})

</script>