<template>
    <div class="aside-profile-details ms-4">
        <!--begin::Body-->
            <div class="card d-flex flex-row-fluid flex-center">
                <form class="card-body w-100 w-xl-700px px-9" id="kt_create_account_form">

                    <div class="current" data-kt-stepper-element="content">
                        <div class="w-100">
                            <div>
                                <h2 class="fw-bolder text-dark">Guidelines</h2>
                            </div>
                            <hr />
                            <div class="row fv-row mb-10 fv-plugins-icon-container">
                                <div class="col-md-12 mb-20 col-sm-6 pb-5">
                                    <label class="form-label">Your Text</label>
                                    <QuillEditor theme="snow" :toolbar="toolbar" v-model:content="formData.guidelines" content-type="html"                                 
                                    class="form-control form-control-lg form-control-solid" />
                                </div>
                            </div>
                            <div class="d-flex flex-stack ">
                                <div class="mr-2">
                                    <button type="button" class="btn btn-lg btn-light-primary me-3"
                                    @click="back" >
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
                                        @click="next"    >
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
        <!--end::Body-->
    </div>
</template>
   
<script setup>
import useToast from '@/global_components/Toast/useToast'
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref } from '@vue/reactivity';
import { computed, watch } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import API from "@/composables/API";
import { useAuditStore } from '@/store/audit.store';

const router = useRouter()
const store = useAuditStore()
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const report = computed(()=>{
    const rptData = JSON.parse(localStorage.getItem('report'))
    return rptData
})
const audit = computed(() => {
    return JSON.parse(localStorage.getItem('data'))
})
const guidline = computed(() => {
    return store.auditReport.guidelines
})
const formData = ref({
    guidelines:"",
    report_id: audit.value.report_id, 
    update_by: currentUser.User_id
})

watch(guidline,(current) => {
    if(current.length){
        formData.value = store.auditReport.guidelines[0]
    }
})





const next = async () =>{
    if(report.value.audit_report.length){
        formData.value.report_id = report.value.audit_report[0].report_id
    } else{
        formData.value.report_id = report.value.audit_report[0].report_id
    }
    console.log(formData.value)
    await API.post("api/audit/rpt-guidelines",formData.value).then((res)=>{
        if(res.status == 200){
            const data = [formData.value]
            report.value.guidelines = data
            localStorage.setItem('report',JSON.stringify(report.value))
            router.push({path: '/executive-summary'})
        }else{
            useToast(res)
        }
    })
   
}

const back = () =>{
    localStorage.setItem('stepper',3)
    router.push({path: '/audit-firm-information'})
}

const toolbar = [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        // ['link', 'image', 'video'],
        ["clean"],
    ];

// onMounted(() => {
//     store.loadRegistrationHelpText(`${account.value[0].Account_type}/Audit Firms/Request Registeration/null`)
// } )
</script>