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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(list,index) in data" :key="index" >
                                                <td><input type="text" readonly :value="list.doc_version"  class="form-control form-control-lg form-control-solid"></td>
                                                <td> <input type="date" readonly :value="list.doc_date.substring(0,10)" class="form-control form-control-lg form-control-solid"></td>
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
import { computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';

const router = useRouter()

const data = computed(()=>{
    const rptData = JSON.parse(localStorage.getItem('report'))
    return rptData.rpt_document_control
})

const next = async () =>{
    router.push({path: '/third-party-information-view'})
}

</script>

<style>

</style>