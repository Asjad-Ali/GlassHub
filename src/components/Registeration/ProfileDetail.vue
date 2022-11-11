<template>
    <div class="card mb-5 mb-xxl-8">
        <div class="card-body pb-0">
            <div class="row">
                <div class="col-md-6">
                    <div class="table-responsive">
                        <table class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="text-muted fw-bold d-block">Company Name:</span>
                                    </td>
                                    <td>
                                        <span class=" fw-bold d-block"> {{ regD[0].Company_name }} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="text-muted fw-bold d-block">Email:</span>
                                    </td>
                                    <td>
                                        <span  class="fw-bold d-block"> <a :class="{'cursor-none': regD[0].Email == null }" :href="`mailto:${regD[0].Email}`"> {{ regD[0].Email }} </a> </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="text-muted fw-bold d-block">Company Start Date:</span>
                                    </td>
                                    <td>
                                        <span class="fw-bold d-block"> {{ regD[0].Start_date.substring(0, 10) }} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="text-muted fw-bold d-block">Account Type:</span>
                                    </td>
                                    <td>
                                        <span class=" fw-bold d-block"> {{ regD[0].Account_type_name }} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="text-muted fw-bold d-block">Business Category:</span>
                                    </td>
                                    <td>
                                        <span class=" fw-bold d-block"> {{ regD[0].Company_name }} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="text-muted fw-bold d-block">Company Size:</span>
                                    </td>
                                    <td>
                                        <span class=" fw-bold d-block"> {{ regD[0].Company_size }} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="text-muted fw-bold d-block">Global Presence:</span>
                                    </td>
                                    <td>
                                        <span class=" fw-bold d-block"> {{ regD[0].global_presence }} </span>
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        <span class="text-muted fw-bold d-block">Head Office Address:</span>
                                    </td>
                                    <td>
                                        <a :href="`https://maps.google.com/?q=${regD[0].Head_office_lat},${regD[0].Head_office_long}`" target="_blank" class="d-flex mt-0 align-items-center text-gray-700 text-hover-primary ">
                                            <span class="svg-icon mt-0 svg-icon-4 me-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                                    <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                                </svg>
                                            </span>
                                        <span> {{ regD[0].Head_office_address }} </span>
                                        </a>                                      
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        <span class="text-muted fw-bold d-block">Website:</span>
                                    </td>
                                    <td>
                                        <a :href="`https://${regD[0].Website_url}`" target="_blank" >  {{ regD[0].Website_url }} </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div v-if="officeB.length" class="col-md-6">
                    <div class="table-responsive">
                        <table class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                            <tbody >
                                <tr v-for="office in officeB" :key="office">
                                    <td>
                                        <span class="text-muted fw-bold d-block">Branch Office Address:</span>
                                    </td>
                                    <td>
                                        <a :href="`https://maps.google.com/?q=${office.Office_lat},${office.Office_long}`" target="_blank" class="d-flex mt-0 align-items-center text-gray-700 text-hover-primary ">
                                            <span class="svg-icon mt-0 svg-icon-4 me-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                                    <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                                </svg>
                                            </span>
                                        <span> {{ office.Office_address }} </span>
                                        </a>                                    
                                    </td>
                                </tr>
                                <template v-if="Documents.length">
                                    <tr v-for="(doc,index) in Documents" :key="doc">
                                        <td>
                                            <span class="text-muted fw-bold d-block">Document {{ index+1 }}:</span>
                                        </td>
                                        <td >
                                            <a :href="doc.document_path" target="_blank"> {{ doc.Document_title }} </a>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  regD: {
    type: Array,
    required: true
  },
  officeB: {
    type: Array,
    required: true
  },
  Documents: {
    type: Array,
    required: true
  }
})

let { regD, officeB, Documents } = toRefs(props);

</script>

<style scoped>
.cursor-none {
   pointer-events: none !important;
   cursor: default !important;
}
</style>