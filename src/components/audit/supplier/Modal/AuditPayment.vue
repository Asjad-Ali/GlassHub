<template>
  <div class="modal fade show" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important">
    <div class="modal-dialog modal-lg mt-20">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Payments</h5>
                <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" @click="CloseModel"  >
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
            <div class="modal-body">
                <PageLoader v-if="store.paymentLoader" />
                <div v-else-if="store.auditPaymentList.length" class="table-responsive project_payments_history">
                    <h6>Paymnet History</h6>
                    <div class="separator separator-dashed border-gray-300 my-5"></div>
                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                        <thead>
                            <tr>
                                <th class="fw-bolder text-gray-800">SR</th>
                                <th class="fw-bolder text-gray-800">Date</th>
                                <th class="fw-bolder text-gray-800">Methods</th>
                                <th class="fw-bolder text-gray-800">PIN/ID</th>
                                <th class="fw-bolder text-gray-800">Particulars</th>
                                <th class="fw-bolder text-gray-800">Amount</th>
                                <th class="fw-bolder text-gray-800">Image</th>
                                <th class="fw-bolder text-gray-800">Status</th>
                                <th class="fw-bolder text-gray-800">Confirm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(payment,index) in store.auditPaymentList" :key="index" >
                                <td> {{ index+1 }} </td>
                                <td> {{ payment.aud_Pay_start_date.substring(0, 10) }} </td>
                                <td> {{ payment.aud_Pay_method_name }} </td>
                                <td>{{ payment.Istrument_no }}</td>
                                <td>{{ payment.Particulars }}</td>
                                <td>{{ payment.Amount }}</td>
                                <td><a :href="payment.aud_Pay_Attachment" target="_blank"><i  v-if="payment.aud_Pay_Attachment" class="fa fa-images cursor-pointer"> </i> </a></td>
                                <td><span class="badge badge-success">  {{ payment.aud_Pay_status_name }} </span></td>
                                <td class="text-center">
                                    <i class="fa fa-check text-success" v-if="payment.pay_confirm_name=='Received'"></i>
                                    <i class="fa fa-times text-danger" v-else></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <RecordNotAvailable v-else />
                <div class="row mt-20">
                    <h6>Send Payment</h6>
                    <div class="separator separator-dashed border-gray-300 my-5"></div>

                    <div class="col-md-2 vertical_text_mid mb-5 required">
                        Payment Date
                    </div>
                    <div class="col-md-4 mb-5">
                        <input v-model="Data.aud_Pay_start_date" type="Date" :class="{'is-invalid border-danger':DataError.aud_Pay_start_date}" placeholder="e.g. cheque no OR TPIN of wire transfer" class="form-control form-control-lg form-control-solid">
                        <div class="text-danger">{{ DataError.aud_Pay_start_date }}</div>
                    </div>
                    <div class="col-md-1 vertical_text_mid mb-5">
                        <span>Amount</span>
                    </div>
                    <div class="col-md-5">
                        <input type="number" v-model="Data.Amount" :class="{'is-invalid border-danger':DataError.Amount }" class="form-control form-control-lg form-control-solid">
                        <div class="text-danger">{{ DataError.Amount }}</div>
                    </div>

                    <div class="row">
                        <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label vertical_text_mid ">For Attachments</label>
                        </div>
                        <div class="col-md-6">
                            <input v-model="Data.Is_attachment"    class="form-check-input" type="checkbox" name="account_plan">                                
                        </div>
                    </div>
                    </div>

                    <div v-if="Data.Is_attachment">
                        <div class="row">
                            <div class="col-md-2 3s-2 vertical_text_mid mb-5">
                                <span>Upload</span>
                            </div>
                            <div class="col-md-10 mb-5">
                                <input @change="onFileChange($event)" :class="{'is-invalid border-danger':DataError.aud_Pay_Attachment }" type="file" class="form-control form-control-lg form-control-solid">
                                <div class="text-danger">{{ DataError.aud_Pay_Attachment }}</div>
                            </div>
                        </div>

                        <div class="row">                  
                            <div class="col-md-2 vertical_text_mid mb-5">
                                <span>Payment Method</span>
                            </div>                    
                            <div class="col-md-4  mb-5">
                                <select @change="getPayMethodName($event)" :class="{'is-invalid border-danger':DataError.aud_Pay_method }" v-model="Data.aud_Pay_method" name="business_type" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                    <option value="">Select One</option>
                                    <option v-for="payment in prjStore.paymentMethodsList" :key="payment" :value='payment.Pay_id' > {{ payment.Pay_name }} </option>
                                </select>
                            <div class="text-danger">{{ DataError.aud_Pay_method }}</div>
                            </div>
                            <div class="col-md-1 vertical_text_mid  mb-5">
                                PIN/ID
                            </div>
                            <div class="col-md-5 mb-5">
                                <input v-model="Data.Istrument_no" :class="{'is-invalid border-danger':DataError.Istrument_no }" type="text" placeholder="e.g. cheque no OR TPIN of wire transfer" class="form-control form-control-lg form-control-solid">
                                <div class="text-danger">{{ DataError.Istrument_no }}</div>
                            </div>
                        </div>
                    </div>

                    <div v-else>
                        <div class="row">
                            <div class="col-md-2 vertical_text_mid mb-5">
                                <span>Particulars</span>
                            </div>
                            <div  class="col-md-6 mb-5">
                                <input id="neighborhood" v-model="Data.Particulars" :class="{'is-invalid border-danger':DataError.Particulars }" type="text" placeholder="e.g. Payment for registration audit for Al-Razik Group" class="form-control form-control-lg form-control-solid">
                                <div class="text-danger">{{ DataError.Particulars }}</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2 vertical_text_mid mb-5">
                                <span>Payment Method</span>
                            </div>                    
                            <div class="col-md-6  mb-5">
                                <select @change="getPayMethodName($event)" :class="{'is-invalid border-danger':DataError.aud_Pay_method }" v-model="Data.aud_Pay_method" name="business_type" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                    <option value="">Select One</option>
                                    <option v-for="payment in prjStore.paymentMethodsList" :key="payment" :value='payment.Pay_id' > {{ payment.Pay_name }} </option>
                                </select>
                            <div class="text-danger">{{ DataError.aud_Pay_method }}</div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-12">
                        <div class="d-flex col-md-4 mt-10 float-end">
                            <button @click="CloseModel" aria-label="Close" class="btn w-100  btn-secondary m-1"> Cancel </button>
                            <button @click="payNow" class="btn w-100  btn-primary m-1"> 
                            <SLoader v-if="store.sPBLoader" /> <span v-else>Pay Now</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script setup>
import SLoader from '@/global_components/loader/SLoader.vue'
import PageLoader from '@/global_components/loader/PageLoader.vue';
import { Account } from "@/store/SwitchAccount";
import RecordNotAvailable from '@/global_components/RecordNotAvailable.vue'
import { useAuditStore } from '@/store/audit.store';
import {ref, defineEmits, defineProps, toRefs} from 'vue'
import { useProjectStore } from '@/store/project.store';
const { watch, computed, onMounted }=require("@vue/runtime-core")

const store = useAuditStore()
const prjStore = useProjectStore()
const accountStore = Account()

const account = computed(()=>{
    return accountStore.Account_detail
})
let props = defineProps({
    audit: {
        type: Array,
        required: false
    },
})
const auditData = toRefs(props)
const document = ref()
const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const formData = ref({
    aud_Pay_Attachment:'',
    data:{}
})
const Data = ref({
    aud_Payment_code: 0,
    aud_Pay_start_date: null,
    aud_Pay_method: '',
    aud_Pay_method_name: null,
    Particulars: null,
    Istrument_no: null,
    aud_Pay_type: '',
    aud_Pay_type_name: '',
    Amount: null,
    Pay_status: 0,
    Pay_status_name: "Send",
    RegD_id: account.value[0].RegD_id,
    RegD_id_name: currentUser.User_fullname,
    aud_Pay_sended_by: currentUser.User_id,
    aud_pay_sended_name: currentUser.User_fullname,
    aud_Pay_recived_by: currentUser.User_id,
    aud_Pay_reciver_name: currentUser.User_fullname,
    Created_by: currentUser.User_id,
    Created_name: currentUser.User_fullname,
    Updated_by: currentUser.User_id,
    updated_name: currentUser.User_fullname,
    Is_attachment: false,
    aud_req_id: 13,
})

let DataError = ref({
    aud_Pay_start_date: null,
    Amount: null,
    Particulars: null,
    aud_Pay_method: null,
    aud_Pay_Attachment: null,
    aud_Pay_type: null,
    Istrument_no: null
})

const emit = defineEmits(['closePaymentModel'])
const CloseModel = () => {
    emit('closePaymentModel', false)
}

watch(Data.value, (current) => {
    if(current.aud_Pay_start_date){
        DataError.value.aud_Pay_start_date = null
    }
    if(current.Amount){
        DataError.value.Amount = null
    }
    if(current.aud_Pay_method || current.aud_Pay_method === 0 ){
        DataError.value.aud_Pay_method = null
    }
    if(current.aud_Pay_type || current.aud_Pay_type === 0){
        DataError.value.aud_Pay_type = null
    }
    if(current.Istrument_no){
        DataError.value.Istrument_no = null
    }
    if(current.Particulars){
        DataError.value.Particulars = null
    }
})
watch(formData.value,(current) => {
    if(current.aud_Pay_Attachment){
        DataError.value.aud_Pay_Attachment = null
    }
})
    const onFileChange = (e) => {
        var files = e.target.files || e.dataTransfer.files;
        const fileSize = Math.floor(files[0]?.size/1024);
        if(fileSize>300)
        {
            DataError.value.aud_Pay_Attachment = 'file size exceed 300 kb'
            e.target.value =""
            formData.value.aud_Pay_Attachment = null
            return false
        }else{
            document.value = files[0]
            formData.value.aud_Pay_Attachment = files[0]
        }  
    };

    const getPayMethodName = (e) => {
        Data.value.aud_Pay_method_name = e.target.options[e.target.options.selectedIndex].text;
    }

    const getPayTypeName = (e) => {
        Data.value.aud_Pay_type_name = e.target.options[e.target.options.selectedIndex].text;
    }
    const is_Attachment = () => {
        formData.value.aud_Pay_Attachment ?  DataError.value.aud_Pay_Attachment = null : DataError.value.aud_Pay_Attachment = 'Document is Required'
        Data.value.aud_Pay_type ?  DataError.value.aud_Pay_type = null : DataError.value.aud_Pay_type = 'Type is Required'
        Data.value.Istrument_no ?  DataError.value.Istrument_no = null : DataError.value.Istrument_no = 'Pin is Required'
    }
    const not_Attachment = () => {
        Data.value.Particulars ?  DataError.value.Particulars = null : DataError.value.Particulars = 'Particulars is Required'
        Data.value.aud_Pay_method ?  DataError.value.aud_Pay_method = null : DataError.value.aud_Pay_method = 'Pay Method is Required'
    }

const payNow = () => {
    Data.value.aud_req_id = auditData.audit.value[0].aud_req_id
    if(Data.value.aud_Pay_start_date && Data.value.Amount){
        if(Data.value.Is_attachment){
            if(formData.value.aud_Pay_Attachment && (Data.value.aud_Pay_type || Data.value.aud_Pay_type == 0) && Data.value.Istrument_no){
                submitPatment()
            }else{
                is_Attachment()
            }
        } else{
            if(Data.value.Particulars && (Data.value.aud_Pay_method || Data.value.aud_Pay_method == 0 )){
                submitPatment()
            }else{
                not_Attachment()
            }
        }
    } else {
        Data.value.aud_Pay_start_date ? DataError.value.aud_Pay_start_date = null : DataError.value.aud_Pay_start_date = 'Date is Required'
        Data.value.Amount ? DataError.value.Amount = null : DataError.value.Amount = 'Amount is Required'
        if(Data.value.Is_attachment){
             submitPatment()
        } else {
            not_Attachment()
        }
    }
}
const submitPatment = () => {
    formData.value.data = JSON.stringify(Data.value)
    store.sendAuditPayment(formData.value).then(res => {
        if(res.status == 200){
            CloseModel()
        }
    })
}
onMounted(() => {
    prjStore.loadPaymentMethodList()
})
</script>