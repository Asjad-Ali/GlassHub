<template>
    <div  class="modal show fade " style="display:block; background:rgba(0,0,0,0.5); opacity:1 !important" >
        <div class="modal-dialog modal-lg mt-16">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Request For Quotation</h5>
                    <div @click="CloseModel()" class="btn btn-icon btn-sm btn-active-light-primary ms-2" >
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex">
                                <h6 class="me-2">RFQ#: </h6> 
                                <input maxlength="150" v-model="Data.project_rfq_org.RFQ_code" placeholder="Enter RFQ Code" class="mb-5 form-control form-control-lg form-control-solid" />
                            </div>
                            <div v-if="!showInfo" class="table-responsive">
                                <h3 class="d-flex mb-3"> {{ Data.project_rfq_org.bid_send_to_name  }} </h3>
                                <!--begin::Table-->
                                <table class="  table table-row-dashed table-row-gray-300  align-middle  gs-0  gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td> {{ receiver.email  }} </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td> {{ receiver.address  }} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-else class="table-responsive">
                                <h3 class="d-flex mb-3"> {{ Data.project_rfq_org.RegD_comp_name  }} </h3>
                                <!--begin::Table-->
                                <table class="  table table-row-dashed table-row-gray-300  align-middle  gs-0  gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td> {{ Data.project_rfq_org.bid_send_email  }} </td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td> {{ Data.project_rfq_org.Address  }} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>                          
                    <div class="row mb-2">
                        <div class="col-md-2 ">
                            <label class="form-label required me-3 ">Title</label>
                        </div>
                        <div class="col-md-6">
                            <input maxlength="150" v-model="Data.project_rfq_org.RFQ_title" placeholder="Enter Title" :class="{'is-invalid border-danger': DataError.RFQ_title }" class="form-control form-control-lg form-control-solid" />
                        </div>
                        <div class="col-md-4">
                            <div class="text-danger"> {{ DataError.RFQ_title }} </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2  ">
                            <label class="form-label">RFQ Date</label>
                        </div>
                        <div class="col-md-6">
                            <input v-model="Data.project_rfq_org.RFQ_datetime" data-date-format="YYYY-MM-DD" :max="new Date().toISOString().slice(0,10)"  :class="{'is-invalid border-danger': DataError.RFQ_datetime }" type="date" class="form-control form-control-solid"   placeholder="Pick date rage" />
                        </div>
                        <div  class="col-md-4 ">
                            <div class="text-danger"> {{ DataError.RFQ_datetime }} </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2  ">
                            <label class="form-label required">End Date</label>
                        </div>
                        <div class="col-md-6">
                            <input v-model="Data.project_rfq_org.end_date" :min="new Date().toISOString().slice(0, 10)" :class="{'is-invalid border-danger': DataError.end_date }" type="date" class="form-control form-control-solid"   placeholder="Pick date rage" />
                        </div>
                        <div class="col-md-4 ">
                            <div class="text-danger"> {{ DataError.end_date }} </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div  class="col-md-2 ">
                            <label class="form-label required">Upload Quotation Files </label>
                        </div>
                        <div  class="col-md-6">
                            <input @change="onFileChange($event)" id="fileInput" :class="{'is-invalid border-danger': DataError.RFQ_document }" type="file" class="form-control form-control-lg form-control-solid" />
                        </div>
                        <div  class="col-md-4 ">
                            <div v-if="showInfo">
                                <a :href="formData.RFQ_document" target="_blank">  
                                    {{ docName(formData.RFQ_document) }}</a>  
                            </div>
                            <div class="text-danger"> {{ DataError.RFQ_document }} </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-12 mb-10">
                            <label class="form-label">Your Text</label>
                            <QuillEditor theme="snow" :toolbar="toolbar" :content="Data.project_rfq_org.RFQ_template" v-model:content="Data.project_rfq_org.RFQ_template" content-type="html"                                 
                            class="form-control form-control-lg form-control-solid" />
                        </div>
                    </div>
                    <div class="row mt-20">
                        <div class="text-danger"> {{ DataError.RFQ_template }} </div>
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
                                                EST.Rate
                                                </th>
                                                <th class="text-center fw-bolder text-gray-800">
                                                    Amount 
                                                </th>
                                                <th class="text-center fw-bolder text-gray-800">
                                                    <input maxlength="50" v-model="Data.project_rfq_paymenth.Col_5" placeholder="Enter Heading" class="form-control form-control-sm" />
                                                </th>
                                                <th class="text-center fw-bolder text-gray-800">
                                                    <input maxlength="50" v-model="Data.project_rfq_paymenth.Col_6" placeholder="Enter Heading" class="form-control form-control-sm" />
                                                </th>
                                                <th class="text-center fw-bolder text-gray-800">
                                                    <input maxlength="50" v-model="Data.project_rfq_paymenth.Col_7" placeholder="Enter Heading" class="form-control form-control-sm" />
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
                                            <template v-if="Data.project_rfq_paymentd.length">
                                                <tr v-for="(data,index) in Data.project_rfq_paymentd" class="mx-2" :key="index" >
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
                <div  class="modal-footer">
                    <button @click="CloseModel()" type="button" class="btn btn-light">
                        Close
                    </button>
                    <button v-if="rfqBtnVisibilty != 1"  @click.enter="sendQR" type="button" class="btn btn-primary">
                        <s-loader v-if=" store.sqrLoader " /> <span v-else>  Send Quotation Request </span> 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import SLoader from '@/global_components/loader/SLoader.vue'
import { computed, toRefs } from "vue";
import { useProjectStore } from "@/store/project.store";
import { reactive, ref, watch, defineEmits, defineProps } from "vue";
import { useRoute } from "vue-router";
import { Account } from "@/store/SwitchAccount";
const store = useProjectStore()
const accountStore = Account()
const account = computed(()=>{
    return accountStore.Account_detail
})
const emit = defineEmits(['closeSendRFQModel'])
const CloseModel = () => {
    emit('closeSendRFQModel', false)
}
const currentUser = computed(() => {
    return JSON.parse(localStorage.getItem('UserInfo'))
})
let props = defineProps({
    user: {
        type: Object,
        required: false
    },
    existing_rfq: {
        type: Object,
        required: false
    }
})
const rfq = toRefs(props)
const rfqBtnVisibilty = rfq.user.value.RFQ_status
console.log(rfqBtnVisibilty)
const route = useRoute()
let bidType = ref()
const btn = ref()
let updateBtn = ref(false)
let editIndex = ref(null)

route.path == "/project_supplier" ? bidType.value = 1 : bidType.value = 0
let showInfo = ref(false)
const receiver = ref({
    name:'',
    email: '',
    address:''
})

let document = ref()
let formData = reactive({
    RFQ_document:'',
    data:{}
})

    let Data = reactive({
        project_rfq_org:{
            RFQ_code: null,
            RFQ_title: null,
            RFQ_datetime: null,
            RFQ_template: null,
            Grand_total:0,
            RegM_id: currentUser.value.RegM_id,
            RegM_name: currentUser.value.User_fullname,
            RegD_id: account.value[0].RegD_id,
            RegD_comp_name: currentUser.value.Company_name,
            Created_by: currentUser.value.User_id ,
            Created_by_name: currentUser.value.User_fullname,
            Updated_by: currentUser.value.User_id ,
            Updated_by_name: currentUser.value.User_fullname,
            bid_send_to: '',//regD_id of receiver
            bid_send_to_name: '',
            bid_send_email: account.value[0].Comp_email,
            Address: account.value[0].Head_office_address,
            Bid_type: 0,
            Is_freelancer_bid: false,
            Isdirect: true,
            end_date: null
        },
        project_rfq_paymenth:{
            Col_1:"Description",
            Col_2:"Quantity",
            Col_3:"EST.Rate",
            Col_4:"Amount",
            Col_5: null,
            Col_6: null,
            Col_7: null,
            RegD_id: account.value[0].RegD_id,
            RegD_comp_name: currentUser.value.User_fullname,
            Created_by: currentUser.value.User_id,
            Updated_by: currentUser.value.User_id,
        },
        project_rfq_paymentd:[]
    });

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
    RFQ_title: null,
    RFQ_datetime: null,
    end_date: null,
    RFQ_document: null,
    RFQ_template: null
})
    if( rfq.user.value.RFQ_code ){
        Data.project_rfq_org.RFQ_code = rfq.user.value.RFQ_code
        if(currentUser.value.RegD_id != rfq.user.value.RegD_id_to){
            Data.project_rfq_org.bid_send_to = rfq.user.value.RegD_id_to
            Data.project_rfq_org.bid_send_to_name = rfq.user.value.RegD_Name_to
            receiver.value.email = rfq.user.value.Email_to
            receiver.value.address = rfq.user.value.Head_office_address_to
        }else{
            Data.project_rfq_org.bid_send_to = rfq.user.value.RegD_id_frm
            Data.project_rfq_org.bid_send_to_name = rfq.user.value.RegD_Name_frm
            receiver.value.email = rfq.user.value.Email_frm
            receiver.value.address = rfq.user.value.Head_office_address_frm
        }
    } else{
        showInfo.value = true
        formData.RFQ_document = rfq.existing_rfq.value.project_rfq_org[0].rfq_document
        Data.project_rfq_org = rfq.existing_rfq.value.project_rfq_org[0]
        Data.project_rfq_org = rfq.existing_rfq.value.project_rfq_org[0]
        Data.project_rfq_org.RFQ_datetime = rfq.existing_rfq.value.project_rfq_org[0].RFQ_datetime.substring(0, 10) || null
        Data.project_rfq_org.end_date = rfq.existing_rfq.value.project_rfq_org[0].end_date?.substring(0, 10) || null
        Data.project_rfq_paymenth = rfq.existing_rfq.value.project_rfq_paymenth
        Data.project_rfq_paymentd = rfq.existing_rfq.value.project_rfq_paymentd
    }
    watch(Data.project_rfq_org,(current) => {
        if( current.RFQ_title ){
            DataError.RFQ_title = null 
        }
        if( current.RFQ_datetime ){
            DataError.RFQ_datetime = null
        }
        if( current.end_date ){
            DataError.end_date = null
        }
    })

watch(tableValue,(current) => {
    if(current.Col1){
        tableValueError.Col1 = null
    }
})
watch(tableValue,() => {
   tableValue.Col4 = tableValue.Col2* tableValue.Col3
})
watch(document,(current) => {
    if( current ){
        DataError.RFQ_document = null
    }
})

watch( 
    () => Data.project_rfq_org.RFQ_template,
    () => {
        if(Data.project_rfq_org.RFQ_template){
            if(Data.project_rfq_org.RFQ_template.length >= 5000 ){
                DataError.RFQ_template = "Maximin character length is 5000"
            }else{
                DataError.RFQ_template = null
            }
        }
    },
    { deep: true }
)

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
        RegD_comp_name: currentUser.value.User_fullname,
        Created_by: currentUser.value.User_id,
        Updated_by: currentUser.value.User_id
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
            Data.project_rfq_paymentd[editIndex.value] = setTable
            updateBtn.value = false
        } else {
            Data.project_rfq_paymentd.unshift(setTable)
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
    const obj = Data.project_rfq_paymentd[index]
    tableValue.Col1 =  obj.Col_1
    tableValue.Col2 =  obj.Col_2
    tableValue.Col3 =  obj.Col_3
    tableValue.Col4 =  obj.Col_4
    tableValue.Col5 =  obj.Col_5
    tableValue.Col6 =  obj.Col_6
    tableValue.Col7 =  obj.Col_7

}
const removeTableRow = (index) => {
    Data.project_rfq_paymentd.splice(index,1)
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
            DataError.RFQ_document = 'file size exceed 300 kb'
            e.target.value =""
            formData.RFQ_document = null
            return false
        }else{
            document.value = files[0]
            formData.RFQ_document = files[0]
        }  
    };

    const sendQR = () => {
        btn.value.click()
        console.log(Data)
        if(Data.project_rfq_org.RFQ_title && Data.project_rfq_org.RFQ_datetime && Data.project_rfq_org.end_date && Data.project_rfq_org.RFQ_template){
            formData.RFQ_document = document.value
            Data.project_rfq_org.Bid_type = bidType.value
            Data.project_rfq_org.Is_freelancer_bid = route.path.includes('freelancer')
            Submit()
        } else {
            Data.project_rfq_org.RFQ_title ? DataError.RFQ_title = null : DataError.RFQ_title = "Title is required"
            Data.project_rfq_org.RFQ_datetime ? DataError.RFQ_datetime = null : DataError.RFQ_datetime = "Start Date is required"
            Data.project_rfq_org.end_date ? DataError.end_date = null : DataError.end_date = "End Date is required"
            Data.project_rfq_org.RFQ_template ? DataError.RFQ_template = null : DataError.RFQ_template = "Description is required Date is required"
        }
   }
const Submit = () => {
    setTimeout(()=>{
    formData.data = Data
    console.log(formData)
    formData.data = JSON.stringify(Data)
    store.sendRFQ(formData).then(response => {
        if(response.status == 200 || response.status == 500 ){
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