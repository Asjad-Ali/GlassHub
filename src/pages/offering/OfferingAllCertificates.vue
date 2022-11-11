<template>
<div  id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled">
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
                    <div id="kt_toolbar_container" class="container-xxl py-5">
                        <div class="row gy-0 gx-10">
                            <div class="col-xl-9 pd-30 bg-w">
                                <div class="row mb-10">
                                    <div class="col-md-8">
                                        <h1 class="pb-2">All Certificates</h1>    
                                    </div>
                                    <div class="col-md-4 text-right">
                                        <router-link to="/offering_addcertificate"> <a class="btn btn-primary">Add</a></router-link>
                                    </div>
                                </div>
                                <PageLoader v-if="store.loader" /> 
                                <div v-else class="row">
                                    <div v-if="store.offeringCertificateList.length" >
                                        <div class="table-responsive">
                                            <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                <thead>
                                                    <tr class="fw-bolder text-muted">
                                                        <th class="min-w-50px">Ref No</th>
                                                        <th class="min-w-150px">Certificate</th>
                                                        <th class="min-w-140px">Category</th>
                                                        <th class="min-w-140px">Compliance</th>
                                                        <th class="min-w-140px">Audit Firms</th>
                                                        <th class="min-w-100px text-end">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="cer in store.offeringCertificateList " :key="cer.Offering_id"> 
                                                        <td>
                                                            <span class="text-muted fw-bold text-muted d-block fs-7">{{ cer.Offering_id }}</span>
                                                        </td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="d-flex justify-content-start flex-column">
                                                                    <span class="text-muted fw-bold text-muted d-block fs-7">{{ cer.Offering_name }}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span class="text-muted fw-bold text-muted d-block fs-7">{{ cer.Cat_name }}</span>
                                                        </td>
                                                        <td>
                                                            <span class="text-muted fw-bold text-muted d-block fs-7"> {{ cer.Compliance_name }} </span>
                                                        </td>
                                                        <td>
                                                            <span class="text-muted fw-bold text-muted d-block fs-7"> {{ cer.RegM_name }} </span>
                                                        </td>                                                        
                                                        <td>
                                                            <div class="d-flex justify-content-end flex-shrink-0">
                                                                <a @click="editCertificate(cer)" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                    <span class="svg-icon svg-icon-3">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                                                                            <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                                <a @click=" certificateID = cer.Offering_id " data-bs-toggle="modal" data-bs-target="#confirmationDelete"  class="btn btn-icon cursor-pointer btn-bg-light btn-active-color-primary btn-sm">
                                                                    <span class="svg-icon svg-icon-3">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path>
                                                                            <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path>
                                                                            <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <RecordNotAvailable v-else />
                                </div>
                            </div>
                            <div class="col-xl-3 aside-profile-details">
                                <!-- <HelpText /> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                    <!-- Delete Modal -->
        <div class="modal fade"  id="confirmationDelete" aria-hidden="true" aria-labelledby="confirmationDelete" tabindex="-1" >
            <div class="modal-dialog" style="max-width:500px">
                <div class="modal-content" >
                    <div class="modal-header">
                        <h5 class="modal-title">Delete Certificate</h5>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                                <div class="col-12 mb-2">
                                    <h6>Are you Sure you want to delete this Certificate</h6>
                                </div>
                            <div class="modal-footer pb-0">
                                <button type="button" class="btn btn-light" data-bs-toggle="modal">No</button>
                                <button id="yseBtn" @click="deleteRecord" type="button" data-bs-toggle="modal" class="btn btn-primary">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
// import HelpText from "@/components/global/HelpText.vue"
import { useOfferingCertificateStore } from "@/store/offeringCertificates.store";
import { onMounted, ref,computed,watch } from "vue";
import { useRouter } from "vue-router";
import PageLoader from "@/global_components/loader/PageLoader.vue";
import RecordNotAvailable from "@/global_components/RecordNotAvailable.vue";
import {Account} from '@/store/SwitchAccount'
const router = useRouter()
const certificateID = ref(null)

const store = useOfferingCertificateStore()
const SwitchAccount = computed(()=> Account().Account_detail[0]) 

watch(SwitchAccount,()=>{
  if(SwitchAccount.value.Account_type!=4){
    router.push('dashboard')
  }
})
const deleteRecord = () => {
    store.deleteOfferingCertificate(certificateID.value)
}
const editCertificate = (certificate) => {
    localStorage.setItem('editOfferingCertificate',JSON.stringify(certificate))
    router.push({ name: 'EditOfferingCertificate', params: { id: certificate.Offering_id }})
}
onMounted(() => {
    store.loadOfferingCertificate(SwitchAccount.value.RegD_id);
    localStorage.removeItem("editOfferingCertificate")
} )
</script>