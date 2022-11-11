<template>
 <div class="modal fade show" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important">
    <div class="modal-dialog modal-lg mt-20">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Quotation</h4>
                <div @click="CloseModel" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
            <PageLoader v-if="store.rfqDetailLoader" />
            <div v-else>
                <div v-if="store.rfqDetails.project_bid?.length" class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h4 class="d-flex mb-3"> <span class="text-muted me-2">Quotation#: </span> {{ store.rfqDetails?.project_bid[0].qutation_code }} </h4>
                            <h4 class="d-flex mb-3">   {{ store.bidDetails[0].RegM_name }} </h4>
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>  {{ store.bidDetails[0].bid_send_email }} </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>   {{ store.bidDetails[0].Address }}  </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label required">Title</label>
                        </div>
                        <div class="col-md-6 vertical_text_mid">
                            <input maxlength="50" v-model="Data.project_qutation.qutation_title" :class="{'is-invalid border-danger': DataError.qutation_title }" name="" placeholder="Type your project/service title" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <div class="text-danger"> {{ DataError.qutation_title }} </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label required">Quotation Date</label>
                        </div>
                        <div class="col-md-6 vertical_text_mid">
                            <input v-model="Data.project_qutation.qutation_datetime" :max="new Date().toISOString().slice(0,10)"  :class="{'is-invalid border-danger': DataError.qutation_datetime }"   type="date" class="form-control form-control-solid"   placeholder="Pick date rage" />
                        </div>
                        <div class="col-md-4">
                            <div class="text-danger"> {{ DataError.qutation_datetime }} </div>
                        </div>                
                    </div>
                    <!-- <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label ">For Attachments</label>
                        </div>
                        <div class="col-md-6">
                            <input v-model="Data.project_qutation.Qutation_doc_type" class="form-check-input" type="checkbox" name="account_plan">                                
                        </div>
                    </div> -->
                    <div  class="row mb-2">
                        <div class="col-md-2 vertical_text_mid">
                            <label class="form-label mb-0">Upload Quotation Files</label>
                        </div>
                        <div class="col-md-6">
                            <input @change="onFileChange($event)" type="file" :class="{'is-invalid border-danger': DataError.qutation_document }" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <div>
                                <div v-if="showDocName">
                                    <a :href="formData?.qutation_document" target="_blank">  {{ docName(formData?.qutation_document) }}</a>
                                </div>
                            </div>
                            <div class="text-danger"> {{ DataError.qutation_document }} </div>
                        </div> 
                    </div>
                    <div  class="row">
                        <div class="col-md-12 mb-10">
                            <label class="form-label">Your Text</label>
                            <QuillEditor theme="snow" :toolbar="toolbar" :content="Data.project_qutation.qutation_template" v-model:content="Data.project_qutation.qutation_template"  content-type="html"/>
                        </div>
                    </div>
                    <div class="row mt-20">
                        <div class="text-danger"> {{ DataError.qutation_template }} </div>
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body p-0">
                                    <div id="table"  class="table-editable">
                                        <table class="table table-bordered table-responsive-md table-striped text-center">
                                            <thead>
                                                <tr class="mx-2">
                                                    <th  class="text-center fw-bolder text-gray-800">
                                                        Description
                                                    </th>
                                                    <th  class="text-center fw-bolder text-gray-800">
                                                        Quantity
                                                    </th>
                                                    <th class="text-center fw-bolder text-gray-800">
                                                    Rate
                                                    </th>
                                                    <th class="text-center fw-bolder text-gray-800">
                                                        Amount 
                                                    </th>
                                                    <th class="text-center fw-bolder text-gray-800">
                                                        <input maxlength="50" v-model="Data.project_qutation_paymenth.Col_5" placeholder="Enter Heading" class="form-control form-control-sm" />
                                                    </th>
                                                    <th class="text-center fw-bolder text-gray-800">
                                                        <input maxlength="50" v-model="Data.project_qutation_paymenth.Col_6" placeholder="Enter Heading" class="form-control form-control-sm" />
                                                    </th>
                                                    <th class="text-center fw-bolder text-gray-800">
                                                        <input maxlength="50" v-model="Data.project_qutation_paymenth.Col_7" placeholder="Enter Heading" class="form-control form-control-sm" />
                                                    </th>
                                                    <th class="text-center fw-bolder text-gray-800">Action</th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                <tr >
                                                    <td>
                                                        <input maxlength="50" type="text" v-model="tableValue.Col1" placeholder="Description" class="form-control form-control-sm " />
                                                    </td>
                                                    <td>
                                                        <input maxlength="15" type="number" v-model="tableValue.Col2" placeholder="Quality" class="form-control form-control-sm " />
                                                    </td>
                                                    <td>
                                                        <input maxlength="15" type="number" v-model="tableValue.Col3" placeholder="EST.Rate" class="form-control form-control-sm " />
                                                    </td>
                                                    <td>
                                                        <input maxlength="15" readonly v-model="tableValue.Col4" placeholder="Amount" class="form-control form-control-sm " />
                                                    </td>
                                                    <td>
                                                        <input maxlength="15" v-model="tableValue.Col5" placeholder="Description" class="form-control form-control-sm " />
                                                    </td>
                                                    <td>
                                                        <input maxlength="15" v-model="tableValue.Col6" placeholder="Description" class="form-control form-control-sm " />
                                                    </td>
                                                    <td>
                                                        <input maxlength="15" v-model="tableValue.Col7" placeholder="Description" class="form-control form-control-sm " />
                                                    </td>
                                                    <td>
                                                        <span @click="addTableValue" id="addTableValue" ref="btn" class="badge btn-primary m-1 cursor-pointer"> {{ updateBtn ? 'update' : 'Add'  }}  </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> <div class="text-danger"> {{ tableValueError.Col1 }} </div> </td>
                                                </tr>
                                                <template v-if="Data.project_qutation_paymentd.length">
                                                    <tr v-for="(data,index) in Data.project_qutation_paymentd" class="mx-2" :key="index" >
                                                        <td class="p-1" >
                                                            {{ data.Col_1 }}
                                                        </td>
                                                        <td class="p-1" >
                                                            {{ data.Col_2 }}
                                                        </td>
                                                        <td class="p-1">
                                                            {{ data.Col_3 }}
                                                        </td>
                                                        <td class="p-1">
                                                            {{ data.Col_4 }}
                                                        </td>
                                                        <td class="p-1">
                                                            {{ data.Col_5 }}
                                                        </td>
                                                        <td class="p-1">
                                                            {{ data.Col_6 }}
                                                        </td>
                                                        <td class="p-1">
                                                            {{ data.Col_7 }}
                                                        </td>
                                                        <td>
                                                            <span @click="editTableRow(index)"  class="badge btn-primary m-1 cursor-pointer">Edit</span>
                                                            <span @click="removeTableRow(index)" class="badge badge-danger m-1 cursor-pointer">Remove</span>
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
                </div>
            </div>

            <div v-if="qoBtnVisibilty != 0" class="modal-footer">
                <button @click="CloseModel" type="button" class="btn btn-light" data-bs-dismiss="modal">
                    Close
                </button>
                <button  @click.enter="sendQR" type="button" class="btn btn-primary">
                    <s-loader v-if="store.sqrLoader" /> <span v-else> Send Quotation Request </span> 
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import SLoader from '@/global_components/loader/SLoader.vue'
import PageLoader from '@/global_components/loader/PageLoader.vue'
import { useProjectStore } from '@/store/project.store';
import { reactive, ref, defineEmits, defineProps } from "vue";
import { computed, toRefs, watch } from "@vue/runtime-core";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { Account } from "@/store/SwitchAccount";

const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const store = useProjectStore()

const btn = ref()
let updateBtn = ref(false)
let showDocName = ref(false)
let editIndex = ref(null)

const emit = defineEmits(['closeSendQuotationModal'])
const CloseModel = () => {
    emit('closeSendQuotationModal', false)
}
let props = defineProps({
    bid_Data: {
        type: Object,
        required: false
    },
    quotation: {
        type: Object,
        required: false
    },

})
const qo = toRefs(props)
const qoBtnVisibilty = qo.bid_Data.value.Qutation_status
let document = ref()
let formData = reactive({
    qutation_document:'',
    data:{}
})
let Data = reactive({
    project_qutation:{
        qutation_code: 0,
        qutation_title: '',
        qutation_datetime:'',
        qutation_template:'',
        Grand_total: 0,
        RegM_id: account.value[0].RegM_id,
        RegM_name: currentUser.User_fullname,
        RegD_id: account.value[0].RegD_id,
        RegD_comp_name: currentUser.Company_name,
        Created_by: currentUser.User_id ,
        Created_by_name: currentUser.User_fullname,
        Updated_by: currentUser.User_id ,
        Updated_by_name: currentUser.User_fullname,
        Bid_id: 0,  //bid Id
        start_date: null,
        Qutation_type: 3, // 0 approved, 1 sent, 2 cancelled, 3 pending
        Qutation_type_name: 'pending',
        RFQ_id: 0 , // rfq id
        Category_ids: [],
        Category_names: [] ,
        RFQ_status: null
    },
    project_qutation_paymenth:{
        Col_1:"Description",
        Col_2:"Quantity",
        Col_3:"Rate",
        Col_4:"Amount",
        Col_5: null,
        Col_6: null,
        Col_7: null,
        RegD_id: account.value[0].RegD_id,
        RegD_comp_name: currentUser.User_fullname,
        Created_by: currentUser.User_id,
        Updated_by: currentUser.User_id,
    },
    project_qutation_paymentd:[]
})
let tableValue = reactive({
    Col1:null,
    Col2: null,
    Col3: null,
    Col4: null,
    Col5: null,
    Col6: null,
    Col7: null,
})
const tableValueError = reactive({
    Col1:null,
})
const DataError = reactive({
    qutation_title: null,
    qutation_datetime: null,
    qutation_document: null,
    qutation_template: null
})

watch(Data.project_qutation,(current) => {
    if(current.qutation_title){
        DataError.qutation_title = null
    }
    if(current.qutation_datetime){
        DataError.qutation_datetime = null
    }
})
watch(tableValue,() => {
   tableValue.Col4 = tableValue.Col2* tableValue.Col3
})
watch(tableValue,(current) => {
    if(current.Col1){
        tableValueError.Col1 = null
    }
})
watch(document,(current) => {
    if( current ){
        DataError.qutation_document = null
    }
})
function docName(str){
    if(!str) return
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}

const addTableValue = () => {
    const setTable = {
        Col_1: '',
        Col_2: '',
        Col_3: '',
        Col_4: '',
        Col_5: '',
        Col_6: '',
        Col_7: '',
        RegD_id: account.value[0].RegD_id,
        RegD_comp_name: currentUser.User_fullname,
        Created_by: currentUser.User_id,
        Updated_by: currentUser.User_id
    }
    if(tableValue.Col1){
        setTable.Col_1 = tableValue.Col1
        setTable.Col_2 = tableValue.Col2
        setTable.Col_3 = tableValue.Col3
        setTable.Col_4 = tableValue.Col4
        setTable.Col_5 = tableValue.Col5
        setTable.Col_6 = tableValue.Col6
        setTable.Col_7 = tableValue.Col7

        if(updateBtn.value){
            Data.project_qutation_paymentd[editIndex.value] = setTable
            updateBtn.value = false
        } else {
            Data.project_qutation_paymentd.unshift(setTable)
        }
        tableValue.Col1 = null
        tableValue.Col2 = null
        tableValue.Col3 = null
        tableValue.Col4 = null
        tableValue.Col5 = null
        tableValue.Col6 = null
        tableValue.Col7 = null
    } else {
        tableValueError.Col1 = ""
    }
   }
const editTableRow = (index) => {
    editIndex.value = index
    updateBtn.value = true
    const obj = Data.project_qutation_paymentd[index]

    tableValue.Col1 =  obj.Col_1
    tableValue.Col2 =  obj.Col_2
    tableValue.Col3 =  obj.Col_3
    tableValue.Col4 =  obj.Col_4
    tableValue.Col5 =  obj.Col_5
    tableValue.Col6 =  obj.Col_6
    tableValue.Col7 =  obj.Col_7

}
const removeTableRow = (index) => {
    Data.project_qutation_paymentd.splice(index,1)
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

    const onFileChange = (e) => {
        var files = e.target.files || e.dataTransfer.files;
        const fileSize = Math.floor(files[0]?.size/1024);
        if(fileSize>300)
        {
            // showToast('file size exceed 500kb')
            DataError.qutation_document = 'file size exceed 300 kb'
            e.target.value =""
            formData.qutation_document = null
            return false
        }else{
            document.value = files[0]
            formData.qutation_document = files[0]
        }  
    };

watch(
    () => Data.project_qutation.qutation_template,
    () => {
        if (Data.project_qutation.qutation_template) {
            if(Data.project_qutation.qutation_template.length >= 5000){
                DataError.qutation_document = "Detail Help must be at most 5000 characters"
            }else{
                DataError.qutation_document = null
                }
        } 
    },
    { deep: true }
);

    if(qo.quotation.value?.project_qutation?.length){
        formData.qutation_document = qo.quotation.value.project_qutation[0].qutation_document
        Data.project_qutation = qo.quotation.value.project_qutation[0]
        Data.project_qutation.qutation_datetime = qo.quotation.value.project_qutation[0].qutation_datetime.substring(0, 10)
        Data.project_qutation_paymenth = qo.quotation.value.project_qutation_paymenth[0]
        Data.project_qutation_paymentd = qo.quotation.value.project_qutation_paymentd
    } else {
        showDocName.value = true
        Data.project_qutation.qutation_title = store.rfqDetails.project_bid[0].Bid_title,
        Data.project_qutation.qutation_code = store.rfqDetails.project_bid[0].qutation_code,
        Data.project_qutation.Bid_id = store.rfqDetails.project_bid[0].Bid_id,  //bid Id
        Data.project_qutation.RFQ_id = store.rfqDetails.project_rfq_org[0].RFQ_id , // rfq id
        Data.project_qutation.Category_ids = store.rfqDetails.project_bid[0].Category_id , // rfq id
        Data.project_qutation.Category_names = store.rfqDetails.project_bid[0].Category_name  // rfq id
    }

    const sendQR = () => {
        btn.value.click()
        if(Data.project_qutation.qutation_title &&  Data.project_qutation.qutation_datetime &&  Data.project_qutation.qutation_template ){
            Data.project_qutation.RFQ_status = store.rfqDetails.project_bidd[0]?.RFQ_status || "",
            formData.qutation_document = document.value
            Submit()
        } else {
            Data.project_qutation.qutation_title ? DataError.qutation_title = null : DataError.qutation_title = "Title is required"
            Data.project_qutation.qutation_datetime ? DataError.qutation_datetime = null : DataError.qutation_datetime = "Date is required"
            Data.project_qutation.qutation_template ? DataError.qutation_template = null : DataError.qutation_template = "Description is required"
        }
   }

   const Submit = () =>{
    setTimeout(()=>{
    formData.data = JSON.stringify(Data)
    store.sendQuotation(formData).then( res => {
        if(res.status == 200){
            CloseModel()
        }
    })
    },100)
}

</script>
<style scoped>
.btn.btn-primary:focus,.btn-light:focus{
 border: 1px solid blueviolet !important;
}
</style>