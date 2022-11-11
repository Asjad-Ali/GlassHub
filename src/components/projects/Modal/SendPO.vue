<template>
 <div class="modal fade show" style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" >
    <div class="modal-dialog  modal-lg mt-20">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Purchase Order</h5>
                <div @click="closePoModel()" class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                    <i  class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
            <PageLoader v-if="store.rfqDetailLoader" />
            <div v-else>
                <div v-if="store.rfqDetails.project_bid?.length" class="modal-body">
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
                    <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label required">Title</label>
                        </div>
                        <div class="col-md-6 vertical_text_mid">
                            <input maxlength="50" v-model="Data.project_po.PO_title" :class="{'is-invalid border-danger': DataError.PO_title }" name="" placeholder="Type your project/service title" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <div class="text-danger"> {{ DataError.PO_title }} </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label">PO Date</label>
                        </div>
                        <div class="col-md-6 vertical_text_mid">
                            <input v-model="Data.project_po.PO_datetime" :max="new Date().toISOString().slice(0,10)"  :class="{'is-invalid border-danger': DataError.PO_datetime }"  type="date" class="form-control form-control-solid"   placeholder="Pick date rage" />
                        </div>
                        <div class="col-md-4">
                            <div class="text-danger"> {{ DataError.PO_datetime }} </div>
                        </div>                
                    </div>
                    <!-- <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label ">For Attachments</label>
                        </div>
                        <div class="col-md-6">
                            <input v-model="Data.project_po.PO_type" class="form-check-input" type="checkbox" name="account_plan">                                
                        </div>
                    </div> -->
                    <div class="row mb-2">
                        <div class="col-md-2 vertical_text_mid">
                            <label class="form-label mb-0">Upload Quotation Files</label>
                        </div>
                        <div class="col-md-6">
                            <input @change="onFileChange($event)" type="file" :class="{'is-invalid border-danger': DataError.PO_document }" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <a v-if="showDoc" :href="formData.PO_document" target="_blank">  {{ docName(formData.PO_document) }}</a>
                            <div class="text-danger"> {{ DataError.PO_document }} </div>
                        </div>  
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-10">
                            <label class="form-label required">Your Text</label>
                            <QuillEditor theme="snow" :toolbar="toolbar" :content="Data.project_po.PO_template" v-model:content="Data.project_po.PO_template"  content-type="html"                                 
                            class="form-control form-control-lg form-control-solid" />
                        </div>
                    </div>
                    <div class="row mt-20">
                        <div class="text-danger"> {{ DataError.PO_template }} </div>
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
                                                        <input maxlength="50" v-model="Data.project_po_paymenth.Col_5" placeholder="Enter Heading" class="form-control form-control-sm" />
                                                    </th>
                                                    <th class="text-center fw-bolder text-gray-800">
                                                        <input maxlength="50" v-model="Data.project_po_paymenth.Col_6" placeholder="Enter Heading" class="form-control form-control-sm" />
                                                    </th>
                                                    <th class="text-center fw-bolder text-gray-800">
                                                        <input maxlength="50" v-model="Data.project_po_paymenth.Col_7" placeholder="Enter Heading" class="form-control form-control-sm" />
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
                                                <template v-if="Data.project_po_paymentd.length">
                                                    <tr v-for="(data,index) in Data.project_po_paymentd" class="mx-2" :key="index" >
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
                    <div class="row mt-2">
                        <!-- <div class="separator separator-dashed border-gray-300 my-4"></div>
                        <div class="row">
                            <div class="col-md-12 mt-5">
                                <div class="row">
                                    <div class="col-md-1">
                                        <label class="form-check form-switch form-check-custom form-check-solid">
                                            <input class="form-check-input" type="checkbox" value="0">
                                        </label>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="me-5">
                                            <label class="fs-6 fw-bold form-label">Send to other suppliers as well</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 mt-5">
                                        <input name="" class="form-control form-control-lg form-control-solid" placeholder="Search ">
                                        
                                        <div class="table-responsive">
                                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                        <thead>
                                            <tr>
                                                <th>Select</th>
                                                <th>Supplier</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexRadioLg"></td>
                                                <td>MRO LLC</td>
                                            </tr>
                                            <tr>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexRadioLg"></td>
                                                <td>BiTech Techs</td>
                                            </tr>
                                            <tr>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexRadioLg"></td>
                                                <td>Milano Piles</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>

            <div  class="modal-footer">
                <button @click="closePoModel()" type="button" class="btn btn-light" data-bs-dismiss="modal">
                    Cancel
                </button>
                <button v-if="poBtnVisibilty != 1" @click.enter="sendPO"  type="button" class="btn btn-primary">
                    <s-loader v-if="store.sqrLoader" /> <span v-else> Send PO </span> 
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
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})

const currentUser = JSON.parse(localStorage.getItem('UserInfo'))
const store = useProjectStore()

const emit = defineEmits(['closePoModel'])
const closePoModel = () => {
    emit('closePoModel', false)
}

let props = defineProps({
    purchaseOrder: {
        type: Object,
        required: false
    },
    bid_data: {
        type: Object,
        required: false
    },
    
})
const po = toRefs(props)
const PO = po.purchaseOrder.value
const poBtnVisibilty = po.bid_data.value.PO_status

const showDoc = ref(false)
const btn = ref()
let updateBtn = ref(false)
let editIndex = ref(null)
let document = ref()
let formData = reactive({
    PO_document:'',
    data:{}
})
let Data = reactive({
    project_po:{
        PO_code: '',
        PO_title: '',
        PO_datetime:'',
        PO_template:'',
        Grand_total: 0,
        RegM_id: account.value[0].RegM_id,
        RegM_name: currentUser.User_fullname,
        RegD_id: account.value[0].RegD_id,
        RegD_comp_name: currentUser.Company_name,
        Created_by: currentUser.User_id ,
        Created_by_name: currentUser.User_fullname,
        Updated_by: currentUser.User_id ,
        Updated_by_name: currentUser.User_fullname,
        Bid_id:null,  //bid Id
        BidD_id:null,  //bid Id
        start_date: null,
        PO_id: 3, // 1 approved, 2 inprocess, 3 cancelled, 0 pending
        PO_status_name: "cancelled",
        // PO_type: false
    },
    project_po_paymenth:{
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
    project_po_paymentd:[]
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
    PO_title: null,
    PO_datetime: null,
    PO_document: null,
    PO_template: null
})

watch(document,(current) => {
    if( current ){
        DataError.PO_document = null
    }
})
watch(Data.project_po,(current) => {
    if(current.PO_title){
        DataError.PO_title = null
    }
    if(current.PO_datetime){
        DataError.PO_datetime = null
    }
    if(current.PO_template){
        DataError.PO_template = null
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
watch(tableValue,() => {
   tableValue.Col4 = tableValue.Col2* tableValue.Col3
})
watch(
    () => Data.project_po.PO_template,
    () => {
        if (Data.project_po.PO_template) {
            if(Data.project_po.PO_template.length >= 5000){
                DataError.PO_template = "Detail Help must be at most 5000 characters"
            }
            else{
                DataError.PO_template = null
            }
        } 
    },
    { deep: true }
);
function docName(str){
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
            Data.project_po_paymentd[editIndex.value] = setTable
            updateBtn.value = false
        } else {
            Data.project_po_paymentd.unshift(setTable)
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
    const obj = Data.project_po_paymentd[index]
    tableValue.Col1 =  obj.Col_1
    tableValue.Col2 =  obj.Col_2
    tableValue.Col3 =  obj.Col_3
    tableValue.Col4 =  obj.Col_4
    tableValue.Col5 =  obj.Col_5
    tableValue.Col6 =  obj.Col_6
    tableValue.Col7 =  obj.Col_7
}
const removeTableRow = (index) => {
    Data.project_po_paymentd.splice(index,1)
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
    showDoc.value = false
    var files = e.target.files || e.dataTransfer.files;
    const fileSize = Math.floor(files[0]?.size/1024);
    if(fileSize>300)
    {
        // showToast('file size exceed 500kb')
        DataError.PO_document = 'file size exceed 300 kb'
        e.target.value =""
        formData.PO_document = null
        return false
    }else{
        document.value = files[0]
        formData.PO_document = files[0]
    }  
};

    if(PO.project_po?.length){
        Data.project_po = PO.project_po[0]
        Data.project_po.PO_datetime = PO.project_po[0].PO_datetime.substring(0, 10)
        Data.project_po_paymenth = PO.project_po_paymenth
        Data.project_po_paymentd = PO.project_po_paymentd
        formData.PO_document = PO.project_po[0].po_document
        showDoc.value = true
    } else {
        Data.project_po.PO_title = store.rfqDetails.project_bid[0].Bid_title,
        Data.project_po.PO_code = store.rfqDetails.project_bid[0].PO_code,
        Data.project_po.Bid_id = store.rfqDetails.project_bid[0].Bid_id,  //bid Id
        Data.project_po.BidD_id = po.bid_data.value.BidD_id,  //bid Id
        Data.project_po.PO_id = store.rfqDetails.project_bid[0].PO_id // rfq id
    }

    const sendPO = () => {
        btn.value.click()
        if(Data.project_po.PO_title && Data.project_po.PO_datetime && Data.project_po.PO_template){
            formData.PO_document = document.value
             Submit()
        } else {
            Data.project_po.PO_title ? DataError.PO_title = null : DataError.PO_title = "Title is required"
            Data.project_po.PO_datetime ? DataError.PO_datetime = null : DataError.PO_datetime = "Date is required"
            Data.project_po.PO_template ? DataError.PO_template = null : DataError.PO_template = "Description is required"
        }
   }
const Submit = () =>{
    setTimeout(()=>{
    formData.data = JSON.stringify(Data)
    store.sendPurchaseOrder(formData).then(res => {
        if( res.status == 200 ){ 
            closePoModel()
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
