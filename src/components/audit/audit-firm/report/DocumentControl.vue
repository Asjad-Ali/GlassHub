<template>
    <div class="aside-profile-details ms-4">
            <div class="card d-flex flex-row-fluid flex-center">
                <form class="card-body w-100 w-xl-700px px-9" id="kt_create_account_form">
                    <div class="current">
                        <div class="w-100">
                            <div class="d-flex justify-content-between">
                                <h2 class="fw-bolder  align-items-center text-dark">Document Control</h2>
                            </div>
                            <hr />
                            <div class="row fv-row mb-10 fv-plugins-icon-container">
                                <div class="col-md-12 pb-5 margin-tpi">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="min-w-100px">Version</th>
                                                <th class="min-w-130px"> Date</th>
                                                <th class="min-w-130px text-end"> Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template v-if="data.length">
                                                <tr v-for="(list,index) in data" :key="index" >
                                                    <td><input type="text" readonly :value="list.doc_version"  class="form-control form-control-lg form-control-solid"></td>
                                                    <td> <input type="date" readonly :value="list.doc_date.substring(0,10)" class="form-control form-control-lg form-control-solid"></td>
                                                    <td class="text-end d-flex">
                                                        <div  class=" compliance_ddbtn">
                                                            <button @click="removeItem(index)" type="button" class="btn btn-danger ml-5">Remove</button>
                                                        </div>
                                                        <div  class=" compliance_ddbtn">
                                                            <button @click="editList(index)" type="button" class="btn btn-primary ml-5">Edit</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </template>
                                            <tr>
                                                <td><input type="text" v-model="formData.doc_version" placeholder="1.0" class="form-control form-control-lg form-control-solid"></td>
                                                <td> <input type="date" v-model="formData.doc_date" class="form-control form-control-lg form-control-solid"></td>
                                                <td class="text-end">
                                                    <div  class=" compliance_ddbtn">
                                                        <button v-if="update" type="button" @click="updateList" class="btn btn-primary ml-5">Update</button>
                                                        <button v-else type="button" @click="addList" class="btn btn-primary ml-5">Add</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="d-flex flex-stack pt-10">
                                    <div class="col-md-12">
                                        <button @click="next" type="button" class="btn btn-lg btn-primary"
                                                style="float:right;"  >
                                            Continue
                                            <span class="svg-icon svg-icon-4 ms-1 me-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.5" x="18" y="13" width="13"
                                                        height="2" rx="1"
                                                        transform="rotate(-180 18 13)"
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
                    </div>
                </form>
            </div>
        <!--end::Body-->
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


import useToast from '@/global_components/Toast/useToast'
import API from '@/composables/API';
import { ref } from '@vue/reactivity';
import { computed, watch } from '@vue/runtime-core';
import { Account } from '@/store/SwitchAccount';
import { useAuditStore } from '@/store/audit.store';

const store = useAuditStore()
const router = useRouter()

const update = ref(false)
const editIndex = ref(null)
const removeItem = (index) => {
    data.value.splice(index,1)
}
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))

const formData = ref({
    doc_version: null,
    doc_date:null,
    created_by: currentUser.User_id,
    updated_by: currentUser.User_id,
})
const audit = computed(() => {
    return JSON.parse(localStorage.getItem('data'))
})
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})

const data = ref([])

const report = computed(()=>{
    const rptData = JSON.parse(localStorage.getItem('report'))
    store.auditReport = rptData
    return rptData
})
const report_data = computed(()=>{
    return store.auditReport
})
watch(report_data,()=>{
     console.log(report_data.value.rpt_document_control)
     data.value = report_data.value.rpt_document_control
})
const Data = ref({
    audit_report:{
        audit_req_id: audit.value.aud_req_id,
        audit_req_code:0,
        created_by: currentUser.User_id,
        created_user_name: currentUser.User_fullname,
        RegM_id_frm:account.value[0].RegM_id,
        RegM_name_frm:account.value[0].Company_name,
        RegD_id_frm: account.value[0].RegD_id,
        RegD_name_frm:account.value[0].Company_name,
        RegM_id_to:audit.value.RegM_id_frm,
        RegM_name_to: audit.value.RegM_name_frm,
        RegD_id_to: audit.value.RegD_id_frm,
        RegD_name_to: audit.value.RegD_name_frm,
        report_id:0,
        rfq_id: audit.value.aud_RFQ_id
    },
    rpt_document_control:[]
})
const editList = (Index) => {
    update.value = true
    editIndex.value = Index
    const getIndex = data.value.findIndex((list,index) => index == Index)
    formData.value.doc_version = data.value[getIndex].doc_version
    formData.value.doc_date = data.value[getIndex].doc_date.substring(0,10)
}

const addList = () => {
    if(formData.value.doc_version && formData.value.doc_date){
        data.value.push(JSON.parse(JSON.stringify(formData.value)))
        formData.value.doc_version = null
        formData.value.doc_date = null
    }
}

const updateList = () => {
    if(formData.value.doc_version && formData.value.doc_date){
        data.value[editIndex.value].doc_version = formData.value.doc_version
        data.value[editIndex.value].doc_date = formData.value.doc_date
        update.value = false
        formData.value.doc_version = null
        formData.value.doc_date = null
    }
}

const next = async () =>{
    Data.value.audit_report.report_id = audit.value.report_id ? audit.value.report_id : 0
    Data.value.rpt_document_control = data.value
    report.value.rpt_document_control = Data.value.rpt_document_control
    await API.post("api/audit/send-rpt-doc-cntrl",Data.value).then((res)=>{
        if(res.status == 200){
            report.value.audit_report = res.data.audit_report
            audit.value.report_id = res.data.audit_report[0].report_id
            report.value.rpt_assessment_control = res.data.rpt_assessment_control
            localStorage.setItem('report',JSON.stringify(report.value))
            localStorage.setItem('data',JSON.stringify(audit.value))
            router.push({path: '/third-party-information'})
        }else{
            useToast(res)
        }
    })
}
</script>

<style>

</style>