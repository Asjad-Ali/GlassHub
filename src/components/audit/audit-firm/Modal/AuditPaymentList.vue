<template>
  <div class="modal fade show"  style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important">
        <div class="modal-dialog modal-lg mt-20">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Payments</h5>
                    <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-body">
                    <PageLoader v-if="store.paymentLoader" />
                    <div v-else>
                        <div v-if="store.auditPaymentList.length" class="table-responsive project_payments_history">
                            <h6>Paymnet History</h6>
                            <div class="separator separator-dashed border-gray-300 my-5"></div>
        
                            <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                <thead>
                                    <tr>
                                        <th class="fw-bolder text-gray-800">SR</th>
                                        <th class="fw-bolder text-gray-800">Date</th>
                                        <th class="fw-bolder text-gray-800">Methods</th>
                                        <th class="fw-bolder text-gray-800">PIN/ID</th>
                                         <th class="fw-bolder text-gray-800">Image</th>
                                        <th class="fw-bolder text-gray-800">Total Amount</th>
                                        <th class="fw-bolder text-gray-800">Status Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(payment,index) in store.auditPaymentList" :key="index" >
                                        <td> {{ index+1 }} </td>
                                        <td> {{ payment.aud_Pay_start_date.substring(0, 10) }} </td>
                                        <td> {{ payment.aud_Pay_method_name }} </td>
                                        <td>{{ payment.Istrument_no }}</td>
                                        <td ><a v-if="payment.aud_Pay_Attachment" :href="payment.aud_Pay_Attachment" target="_blank"> {{ docName(payment.aud_Pay_Attachment) }} </a></td>
                                        <td>{{ payment.Amount }}</td>
                                        <td class="text-center">
                                            <select :disabled="payment.pay_confirm_chk" v-model="payment.pay_confirm" @change="paymentStatusUpdate($event, payment.aud_Payment_id )" 
                                            name="business_type" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                                <option value= null>Select One</option>
                                                <option v-for="(status,index) in statusName" :key="index" :value="index"> {{ status }} </option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <RecordNotAvailable style="height: 50vh !important" v-else />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import RecordNotAvailable from "@/global_components/RecordNotAvailable.vue";
import PageLoader from "@/global_components/loader/PageLoader.vue";
import { useAuditStore } from "@/store/audit.store";
const statusName = ['Received', 'Not-Received']
const emit = defineEmits(['closePaymentsList'])
const CloseModel = () => {
    emit('closePaymentsList', false)
}
const store = useAuditStore()

const data = ref({
    pay_confirm: '',
    pay_confirm_name: '',
    aud_Payment_id:''
})
function docName(str){
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}
const paymentStatusUpdate = (e, payId) => {
    data.value.pay_confirm = e.target.value,
    data.value.pay_confirm_name = statusName[e.target.value],
    data.value.aud_Payment_id = payId
    store.auditPaymentConfirmation(data.value)
}

</script>

<style>

</style>