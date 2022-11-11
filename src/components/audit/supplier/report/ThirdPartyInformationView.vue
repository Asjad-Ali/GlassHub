<template>
    <div class="aside-profile-details ms-4">
        <!--begin::Body-->
            <div class="card d-flex flex-row-fluid flex-center">
                <form class="card-body w-100 w-xl-700px px-9" id="kt_create_account_form">
                    <!--begin::Step 2-->
                    <div class="current" data-kt-stepper-element="content">
                        <div class="w-100 cursor-none">
                            <div class="d-flex justify-content-between">
                                <h2 class="fw-bolder  align-items-center text-dark">
                                    Third Party Information
                                </h2>
                            </div>
                            <hr />
                            <div class="row fv-row mb-10 fv-plugins-icon-container">
                                <table>
                                    <thead>

                                        <tr>
                                            <th>Company Name</th>
                                            <th colspan="2"> <input readonly type="text" v-model="formData.t_company_name" name="" placeholder="Enter your Company Name" class="form-control form-control-lg form-control-solid"></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Vendor ID</th>
                                            <td colspan="2"> <input readonly type="text" v-model="formData.t_vender_id" name="" placeholder="Enter your ID" class="form-control form-control-lg form-control-solid"></td>
                                        </tr>

                                        <tr>
                                            <th rowspan="3">Business Address</th>
                                            <td>Country:</td>
                                            <td> <input type="text" readonly v-model="formData.t_country" name="" placeholder="Enter your Country Name" class="form-control form-control-lg form-control-solid"></td>
                                        </tr>

                                        <tr>
                                            <td>City: </td>
                                            <td> <input type="text" v-model="formData.t_city" name="" placeholder="Enter your City Name" class="form-control form-control-lg form-control-solid"></td>
                                        </tr>

                                        <tr>
                                            <td>Address: </td>
                                            <td> <input type="text" readonly v-model="formData.t_address" name="" placeholder="Enter your Address" class="form-control form-control-lg form-control-solid"> </td>
                                        </tr>

                                        <tr>
                                            <th>Third Party Classification </th>
                                            <td colspan="2" class="text">
                                                <b>*Note:</b> The third Party must be classified
                                                according
                                                to the Third Party Classification described in
                                                Appendix A.
                                                <br /><br/>
                                                <form>
                                                    <input  disabled v-model="formData.is_general_require" type="checkbox" class="me-2 " id="checkbox1">
                                                    <label for="checkbox1">
                                                        General Requirements
                                                        (Applicable on all third parties)
                                                    </label><br>
                                                    <input disabled v-model="formData.is_outsourced_infra" type="checkbox" class="me-2" id="checkbox2">
                                                    <label for="checkbox2">
                                                        Outsourced
                                                        Infrastructurear
                                                    </label><br>
                                                    <input disabled v-model="formData.is_customized_software" type="checkbox" class="me-2" id="checkbox3">
                                                    <label for="checkbox3">
                                                        Customized
                                                        Software
                                                    </label><br>
                                                    <input disabled v-model="formData.is_network_connectivity" type="checkbox" class="me-2" id="checkbox4">
                                                    <label for="checkbox4">
                                                        Network
                                                        Connectivity
                                                    </label><br>
                                                    <input disabled readonly v-model="formData.is_critical_data" type="checkbox" class="me-2"  id="checkbox5">
                                                    <label for="checkbox5">
                                                        Critical Data
                                                        Processor
                                                    </label><br>

                                                </form>

                                            </td>
                                        </tr>

                                        <tr>
                                            <th rowspan="5">Contact Person</th>
                                            <td>Name:</td>
                                            <td><input readonly v-model="formData.c_name" type="text" name="" placeholder="Enter your Name" class="form-control form-control-lg form-control-solid"></td>
                                        </tr>
                                        <tr>
                                            <td>Position: </td>
                                            <td> <input readonly v-model="formData.c_position" type="text" name="" placeholder="Enter your Position" class="form-control form-control-lg form-control-solid"></td>
                                        </tr>

                                        <tr>
                                            <td>Email: </td>
                                            <td> <input readonly v-model="formData.c_email" type="text" name="" placeholder="Enter your Email" class="form-control form-control-lg form-control-solid"> </td>
                                        </tr>

                                        <tr>
                                            <td>Phone #: </td>
                                            <td> <input readonly v-model="formData.c_phone" type="text" name="" placeholder="Enter your Phone#" class="form-control form-control-lg form-control-solid"></td>
                                        </tr>


                                        <tr>
                                            <td>Mobile # </td>
                                            <td><input readonly v-model="formData.c_mobile" type="text" name="" placeholder="Enter your Mobile#" class="form-control form-control-lg form-control-solid"></td>
                                        </tr>
                                    </tbody>
                                </table>
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
                                    <button @click="next" type="button" class="btn btn-lg btn-primary">
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
import { computed, onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';

const router = useRouter()


const formData = computed(()=>{
    const rptData = JSON.parse(localStorage.getItem('report'))
    return rptData.audit_report[0]
})

const back = () =>{
    router.push({path: '/document-control-view'})
}
const next = async () =>{
    router.push({path: '/audit-firm-information-view'})
}
onMounted(() => {
    // store.loadRegistrationHelpText(`${account.value[0].Account_type}/Audit Firms/Request Registeration/null`)
} )
</script>