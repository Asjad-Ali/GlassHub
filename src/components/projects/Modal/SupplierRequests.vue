<template>
  <div class="modal fade show"  style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important">
        <div class="modal-dialog modal-lg mt-20">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Supplier Requests</h5>
                    <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-body">
                    <!-- <PageLoader style="height: 50vh !important" v-if="store.loader" /> -->
                    <div>
                        <div v-if="store.requestsList.length" class="table-responsive project_payments_history">
                            <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                <thead>
                                    <tr>
                                        <th class="fw-bolder text-gray-800">Bid Id</th>
                                        <th class="fw-bolder text-gray-800">Supplier Name</th>
                                        <th class="fw-bolder text-gray-800">Project Title</th>
                                        <th class="fw-bolder text-gray-800">Category</th>
                                        <th class="fw-bolder text-gray-800">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="request in store.requestsList" :key="request" >
                                        <td> {{ request.BidD_id }} </td>
                                        <td> {{ request.Supplier_name }} </td>
                                        <td> {{ request.Project_title }} </td>
                                        <td>{{ request.Category_names }}</td>
                                        <td v-if="request.Qutation_status!=0 && request.Qutation_status!=2">
                                            <button @click="requestAction( true, request.Bid_id , request.BidD_id)" class="btn btn-primary btn-sm me-2"> Accept </button>
                                            <button @click="requestAction( false, request.Bid_id , request.BidD_id )" class="btn btn-danger btn-sm"> Reject </button>
                                        </td>
                                        <td v-else>
                                            <span v-if="request.Qutation_status==2" class="badge badge-danger"> Rejected </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProjectStore } from "@/store/project.store";
import { defineEmits, ref } from "vue";
// import PageLoader from "@/global_components/loader/PageLoader.vue";
const emit = defineEmits(['closeSupplierRequestModel'])
const CloseModel = () => {
    emit('closeSupplierRequestModel', false)
}
const store = useProjectStore()

const data = ref({
    Bid_id: '',
    BidD_id: '',
    Accept: null,
})

const requestAction = (action, bidId, bidDId) => {
    data.value.Bid_id = bidId
    data.value.BidD_id = bidDId
    data.value.Accept = action
    store.requestConfirmationUpdate(data.value)

}

</script>

<style>

</style>