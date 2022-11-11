<template>
    <div class="aside-profile-details ms-4">
        <!--begin::Body-->
            <div class="card d-flex flex-row-fluid flex-center">
                <form class="card-body w-100 w-xl-700px px-9" id="kt_create_account_form">
                    <div class="current" data-kt-stepper-element="content">
                        <div class=" mb-5 mb-xl-8">
                            <div>
                                <h2 class="fw-bolder text-dark">Executive Summary </h2>
                            </div>
                            <hr />
                            <div class="row fv-row mb-10 fv-plugins-icon-container">
                                <div class="col-md-12 mb-20 col-sm-6 pb-5">
                                    <QuillEditor theme="snow" :toolbar="toolbar" v-model:content="formData.exe_summary" content-type="html"                                 
                                    class="form-control form-control-lg form-control-solid" />
                                </div>
                            </div>
                            <div class="d-flex flex-stack">
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
                                    <button type="button" class="btn btn-lg btn-primary me-3"
                                        @click="next"     >
                                        <span class="indicator-label">
                                            Continue
                                            <span class="svg-icon svg-icon-3 ms-2 me-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.5" x="18" y="13" width="13"
                                                        height="2" rx="1"
                                                        transform="rotate(-180 18 13)"
                                                        fill="black" />
                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                                        fill="black" />
                                                </svg>
                                                <span class="indicator-progress">
                                                    Please wait...
                                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                </span>
                                            </span>
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
import useToast from '@/global_components/Toast/useToast'
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { useRouter } from 'vue-router';
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
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
store.auditReport = report.value
const formData = ref({
    exe_summary:"",
    report_id:audit.value.report_id, 
    update_by: currentUser.User_id
})
if(store.auditReport.exc_summary?.length){
    formData.value = store.auditReport.exc_summary[0]
}

const next = async () =>{
    localStorage.setItem('stepper',6)
    const response = await API.post("api/audit/rpt-exc-summary",formData.value).then((res)=>{
        if(res.status == 200){
            const data = [formData.value]
            report.value.exc_summary = data
            localStorage.setItem('report',JSON.stringify(report.value))
            router.push({path: '/assessment-controls'})
        }else{
            useToast(response)
        }
    })
    
}



const back = () =>{
    localStorage.setItem('stepper',4)
    router.push({path: '/guidelines'})
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