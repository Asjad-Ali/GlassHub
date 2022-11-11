<template>
  <div class="card mb-5 mb-xxl-8">
    <div class="card-body pb-0">
      <div class="row">
        <div class="col-md-12"><h4>Documents</h4></div>
        <div class="col-md-12">
          <div class="table-responsive">
            <table
              class="
                table table-row-dashed table-row-gray-200
                align-middle
                gs-0
                gy-4
              "
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Document</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(list,index) in RegDocument" :key="index">
                  <td>
                    <span class="text-muted fw-bold d-block"
                      >Company profile and company pictures
                    </span>
                  </td>
                  <td>
                    <span class="text-muted fw-bold d-block"
                      ><a
                        @click="showdocument(list.document_path)"
                        data-bs-toggle="modal"
                        data-bs-target="#view_doc_modal"
                         type="button"
                          
                        ><i class="fas fa-file-pdf"></i>{{documentName(list.document_path)}}</a>
                      </span
                    >
                  </td>
                  <td>
                    <span class="badge badge-primary">Not Approved</span>
                  </td>
                </tr>
                <!-- <tr>
                  <td>
                    <span class="text-muted fw-bold d-block"
                      >Company Tax related documents
                    </span>
                  </td>
                  <td>
                    <span class="text-muted fw-bold d-block"
                      ><a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#view_doc_modal"
                        ><i class="fas fa-file-pdf"></i> Company Profile</a
                      ></span
                    >
                  </td>
                  <td>
                    <span class="badge badge-primary">Approved</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="text-muted fw-bold d-block"
                      >Company Tax related documents
                    </span>
                  </td>
                  <td>
                    <span class="text-muted fw-bold d-block"
                      ><a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#view_doc_modal"
                        ><i class="fas fa-file-pdf"></i> Company Profile</a
                      ></span
                    >
                  </td>
                  <td>
                    <span class="badge badge-light">Send Again</span>
                  </td>
                  <td>
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#resenddoc"
                      class="cursor_pointer"
                      >Re-Send
                    </span>
                  </td>
                </tr> -->
                <tr>
                  <td colspan="3">
                    <div class="col-md-12"><h4>Additional Documents</h4></div>
                  </td>
                </tr>

                <tr v-for="(list,index) in AddDoc" :key="index">
                  <td>
                    <span class="text-muted fw-bold d-block"
                      >{{list.Doc_name}}
                    </span>
                  </td>
                  <td>
                    <span
                        @click="showdocument(list.doc_path)"
                        data-bs-toggle="modal"
                        data-bs-target="#view_doc_modal"
                         type="button"
                      class="cursor_pointer"
                      ><i class="fas fa-file-pdf"></i>{{documentName(list.doc_path)}}
                    </span>
                  </td>
                </tr>
                <!-- <tr>
                  <td>
                    <span class="text-muted fw-bold d-block"
                      >Company Tax related documents
                    </span>
                  </td>
                  <td>
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#senddoc"
                      class="cursor_pointer"
                      style="color: blue"
                      >Add document
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="text-muted fw-bold d-block"
                      >Company Tax related documents
                    </span>
                  </td>
                  <td>
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#senddoc"
                      class="cursor_pointer"
                      style="color: blue"
                      >Add document
                    </span>
                  </td>
                </tr> -->
                
              </tbody>
            </table>
           
                  
                  
                 
                                         
                 
          </div>
        </div>
        <div class="col-md-6"></div>
      </div>
    </div>
  </div>


<div class="card mb-5 mb-xxl-8" v-if="formData.Account_id==0 || formData.Account_id==1 || formData.Account_id==2 || formData.Account_id==3">
      <div class="card-body pb-0">
          <div class="row">
            <h4>Templates</h4>
              <div class="col-md-6 pb-5 gs-0 gy-4"  v-if="formData.Account_id==0 || formData.Account_id==1" ><button  @click="Show_RFQ_Model()" class="w-100 btn btn-primary ">
                            Add RFQ Template
                        </button></div>
               <div class="col-md-6 pb-5 gs-0 gy-4" v-if="formData.Account_id==0 || formData.Account_id==1" ><button @click="Show_PO_Model()" class="w-100 btn btn-primary " >
                            Add PO Template
                        </button></div>
                <div class="col-md-6 pb-5 gs-0 gy-4" v-if="formData.Account_id==1  || formData.Account_id==2 || formData.Account_id==3"><button  @click="Show_Quotation_Model()" class="w-100 btn btn-primary ">
                            Add Quotation Template
                        </button></div>
          </div>
      </div>
  </div>

  <div class="modal fade" tabindex="-1" id="resenddoc">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Resend Document</h5>

          <!--begin::Close-->
          <div
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          <!--end::Close-->
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <label class="form-label required">Document Name</label>
              <input
                type="text"
                v-model.trim="validate.name.$model"
                :class="{ 'border-theme-6': validate.name.$error }"
                name=""
                placeholder=""
                class="form-control form-control-lg form-control-solid mb-5"
              />
              <template v-if="validate.name.$error">
                <div
                  v-for="(error, index) in validate.name.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
                >
                  {{ error.$message }}
                </div>
              </template>
              <label class="form-label required">Upload Document</label>
              <input
                type="file"
                @change="onFileChange($event)"
                :class="{ 'border-theme-6': validate.uploadeFile.$error }"
                class="form-control form-control-lg form-control-solid mb-5"
              />
              <template v-if="validate.uploadeFile.$error">
                <div
                  v-for="(error, index) in validate.uploadeFile.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
                >
                  {{ error.$message }}
                </div>
              </template>
              <button class="btn btn-primary w-100" @click="save()">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Start Request For Proposal Modal-->
  <teleport to="body">
     <RFQModal v-if="open_RFQ_model"  @close_RFQ_Model="close_RFQ_Model" />
     <POTemplateModal v-if="open_PO_model"  @close_PO_Model="close_PO_Model" />
     <QuotationTemplateModal v-if="open_Quotation_model"  @close_Quotation_Model="close_Quotation_Model" />

</teleport> 




    





  <div class="modal fade" tabindex="-1" id="senddoc">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Please Attach Document</h5>

          <!--begin::Close-->
          <div
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          <!--end::Close-->
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <label class="form-label required">Document Name</label>
              <input
                type="text"
                v-model.trim="validate.name.$model"
                :class="{ 'border-theme-6': validate.name.$error }"
                name=""
                placeholder=""
                class="form-control form-control-lg form-control-solid mb-5"
              />
              <template v-if="validate.name.$error">
                <div
                  v-for="(error, index) in validate.name.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
                >
                  {{ error.$message }}
                </div>
              </template>
              <label class="form-label required">Upload Document</label>
              <input
                type="file"
                @change="onFileChange($event)"
                :class="{ 'border-theme-6': validate.uploadeFile.$error }"
                class="form-control form-control-lg form-control-solid mb-5"
              />
              <template v-if="validate.uploadeFile.$error">
                <div
                  v-for="(error, index) in validate.uploadeFile.$errors"
                  :key="index"
                  class="text-theme-6 mt-2"
                >
                  {{ error.$message }}
                </div>
              </template>
              <button class="btn btn-primary w-100" @click="save()">
                Submitt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" tabindex="-1" id="view_doc_modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">View Document</h5>

          <!--begin::Close-->
          <div
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          <!--end::Close-->
        </div>

        <div class="modal-body">
          <embed
            :src="RegFile"
            frameborder="0"
            width="100%"
            height="500px"
            style="object-fit: contain;"
          />
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, toRefs,ref, watch } from "vue";
import {Account} from '@/store/SwitchAccount'
import {mapState} from 'pinia'
import RFQModal from '@/components/profile/company-profile/RFQModal.vue';
import POTemplateModal from '@/components/profile/company-profile/POTemplateModal.vue'
import QuotationTemplateModal from '@/components/profile/company-profile/QuotationTemplateModal.vue'


export default {
  props:['RegistrationDocument','AdditionalDoc'],
  components: {
   RFQModal,POTemplateModal,QuotationTemplateModal,
  },

   computed:{
      ...mapState(Account,{
         Account_detail:'Account_detail'
      })
    },
    watch:{
      Account_detail(){
       this.formData.Account_id=this.Account_detail[0].Account_type;
       this.formData.RegD_id=this.Account_detail[0].RegD_id;
      }
    },
  setup(props) {
    const RegDocument = ref();
    const AddDoc = ref();
    const RegFile = ref('');
    const SwitchAccount = Account().Account_detail[0]
    const open_RFQ_model = ref(false)
    const open_PO_model = ref(false)
    const open_Quotation_model = ref(false)

    const formData = reactive({
      name: "",
      uploadeFile: "",
      Summernote: "",
      PO_Summernote:"",
      RegD_id:SwitchAccount?.RegD_id,
      Account_id:SwitchAccount?.Account_type,
    });

    watch(props,()=>{
      RegDocument.value=props.RegistrationDocument;
      AddDoc.value=props.AdditionalDoc
    })

  

    const rules = {
      name: { required },
      uploadeFile: { required },
    };

     const documentName =(value)=>{
      let index =value.indexOf("--")
      let name = value.substr(index+2,value.length)
      return name
     }
    
    const showdocument =(value)=>{
        RegFile.value=value
    }
  

    const validate = useVuelidate(rules, toRefs(formData));
    const save = () => {
      validate.value.$touch();
      if (!validate.value.$invalid) {
        alert("Data Change");
      }
    };

    const onFileChange = (e) => {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      formData.uploadeFile = files[0];
    };

    const Show_RFQ_Model = () => {
     open_RFQ_model.value = true
    }

    const close_RFQ_Model =(event)=>{
     open_RFQ_model.value=event
    }

    const Show_PO_Model = () => {
     open_PO_model.value = true
    }

    const close_PO_Model =(event)=>{
     open_PO_model.value=event
    }

    const Show_Quotation_Model = () => {
     open_Quotation_model.value = true
    }

    const close_Quotation_Model =(event)=>{
     open_Quotation_model.value=event
    }
    return {
      formData,
      onFileChange,
      RegFile,
      validate,
      save,
      toolbar,
      RegDocument,
      AddDoc,
      documentName,
      showdocument,
      close_RFQ_Model,
      Show_RFQ_Model,
      open_RFQ_model,
      close_PO_Model,
      Show_PO_Model,
      open_PO_model,
      close_Quotation_Model,
      Show_Quotation_Model,
      open_Quotation_model,
    };
  },
};
</script>



<!-- <script >
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, toRefs,ref, watch } from "vue";
import TemplateModal from '@/components/profile/company-profile/TemplateModal.vue'
// import PoModal from '@/components/profile/company-profile/PoModal.vue'
// import { ref } from '@vue/reactivity';

import {Account} from '@/store/SwitchAccount'
import {mapState} from 'pinia'

export default {
  props:['RegistrationDocument','AdditionalDoc'],
  components: {
     TemplateModal, 
  },
   computed:{
      ...mapState(Account,{
         Account_detail:'Account_detail'
      })
    },
    watch:{
      Account_detail(){
       this.formData.Account_id=this.Account_detail[0].Account_type;
       this.formData.RegD_id=this.Account_detail[0].RegD_id;
      }
    },
  setup(props) {
    const RegDocument = ref();
    const AddDoc = ref();
    const RegFile = ref('');
    const SwitchAccount = Account().Account_detail[0]
  
   
    const formData = reactive({
      name: "",
      uploadeFile: "",
      Summernote: "",
      PO_Summernote:"",
      RegD_id:SwitchAccount?.RegD_id,
      Account_id:SwitchAccount?.Account_type,
    });

    
   

  

    const rules = {
      name: { required },
      uploadeFile: { required },
    };

     const documentName =(value)=>{
      let index =value.indexOf("--")
      let name =value.substr(index+2,value.length)
      return name
     }
    
    const showdocument =(value)=>{
        RegFile.value=value
    }

     const ShowModel = () => {
     open_model.value = true
    }

    const closeModel =(event)=>{
     open_model.value=event
    }


    // const ShowModel1 = () => {

    //  open_model1.value = !open_model1.value
    //  console.log(open_model.value)
    // }

    // const closeModel1 =(event)=>{
    //  open_model1.value=event
    //  Edit_id1.value=''
    // }
  

    // const quill = ref(null)

   

    const validate = useVuelidate(rules, toRefs(formData));
    const save = () => {
      validate.value.$touch();
      if (!validate.value.$invalid) {
        alert("Data Change");
      }
    };

    const onFileChange = (e) => {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      formData.uploadeFile = files[0];
    };
    return {
      Edit_id,
      formData,
      onFileChange,
      RegFile,
      validate,
      save,
      RegDocument,
      AddDoc,
      documentName,
      showdocument,
      ShowModel,
      closeModel,
      open_model,
      // ShowModel1,
      // closeModel1,
      // open_model1,
      // Edit_id1,
    };
  },
};
</script> -->
<style scoped>
.border-theme-6 {
  border: 1px solid red;
}
.text-theme-6 {
  color: red;
}
</style>