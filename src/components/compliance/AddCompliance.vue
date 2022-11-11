<template>
            <div class="row ">
                <div class="col-md-8">
                    <h3 v-if="route.params.id"  class="pt-2">Edit Compliance</h3>
                    <h3 v-else class="pt-2">Add Compliance</h3>
                </div>
                <div class="col-md-4 text-right">
                   <router-link to="/compliance_list"><button class="btn btn-light pr-5 me-2">Cancel</button></router-link> 
                 <button v-if="route.params.id" class="btn btn-primary" @click="save()" :disabled="loader">Update <SLoader v-if="loader"></SLoader></button>
                <button v-else class="btn btn-primary" @click="save()" :disabled="loader">Add <SLoader v-if="loader"></SLoader></button>
                  <!--<button type="button" data-bs-toggle="modal" data-bs-target="#help_modal" class="btn btn-sm btn-icon btn-active-light btn-active-color-primary btn-outline btn-outline-success"><i class="far fa-question-circle"></i></button>-->
                </div>
              </div>
                <div class="separator separator-dashed border-gray-300 my-8"></div>
                <PageLoader v-if="page_loader" />
                <div v-else>
                    <div class="row">
                        <div class="col-md-6 pb-5">
                            <label class="form-label required">Compliance Name</label>
                            <input name=""  v-model="validate.Compliance_name.$model" maxlength="50" :class="{'border border-danger':validate.Compliance_name.$error}" class="form-control form-control-lg form-control-solid">
                            <div v-for="(error, index) in validate.Compliance_name.$errors" :key="index" class="mt-1">
                                <span class="text-danger ">{{error.$message}}</span>
                            </div>
                        </div>
                        <div class="col-md-6 pb-5">
                                <label class="form-label required">Category</label>
                                    <select name="" v-model="add_cat" :class="{'border border-danger':validate.Categories_IDs.$error}"  class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                    <template  v-for="(list,index) in cat_list" :key="index">
                                            <option v-if="list.Cat_name!=''"  :value="list.Cat_id" >{{list.Cat_name}}</option>
                                    </template>
                                    
                                </select>
                                <div v-for="(error, index) in validate.Categories_IDs.$errors" :key="index" class="mt-1">
                                    <span class="text-danger ">{{error.$message}}</span>
                                </div>
                                <div class="compliances_added mt-2">
                                    <template  v-for="(val , index2) in cat_name" :key="index2">
                                    <p style="margin-right:3px"><span @click="remove_catgory(index2)"  style="margin-right:2px">x</span>{{val}}</p>
                                    </template>
                                </div>
                            </div>
                        
                        <div v-if="formData.compliance.Account_id!=4" class="row my-10">
                            <div class="col-md-12">
                                <h5>Defined Compliance:</h5>
                            </div>
                            <div class="col-md-3">
                                <input @click="defineOwnCompliance"  class="ml-20 form-check-input me-2"  id="new" type="radio"  value="true" v-model="formData.compliance.comp_own" >
                                <label for="new">Own</label>
                            </div>
                            <div class="col-md-3">
                                <input @click="get_reg" class="ml-20 form-check-input me-2" id="existing" type="radio" value="false" v-model="formData.compliance.comp_own">
                                <label for="existing">Regulatory Authority</label>
                            </div>
                        </div>
                        <div v-show="(formData.compliance.comp_own == 'false' || formData.compliance.comp_own == false) && formData.compliance.Account_id!=4" class="row">
                            <div class="col-md-6 pb-5"  >
                                <label class="form-label required">Regulatory Authority</label>
                                <select name="" @change="get_cer()" v-model="formData.compliance.Regulatory_Auth"  class="form-select form-select-lg form-select-solid">
                                    <option value="">Select One</option>
                                    <template v-for="(list,index) in reg_list " :key="index">
                                        <option :value="list.RegD_id">{{list.Fullname}}</option>
                                    </template>                                    
                                </select>
                            </div>
                            <div class="col-md-6 pb-5"  >
                                <label class="form-label ">Certificate/Compliance</label>
                                <select name="" @change="getexitingData()" v-model="formData.compliance.Certificate_id"     class="form-select form-select-lg form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                    <option  v-for="(list ,index) in cer_list" :key="index" :value="list.Offering_id">{{list.Offering_name}}</option>
                                </select>
    
                            </div>
                        </div>
                            <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <h5>Compliance for:</h5>
                                </div>
                                <div class="col-md-4">
                                    <input class="form-check-input" v-model="formData.compliance.Registration" type="checkbox" name="account_plan" value="">
                                    <span class="fs-6 fw-bold ms-2 text-muted">Registeration</span>
                                </div>
                                <div class="col-md-3" v-if="formData.compliance.Account_id!=1 && formData.compliance.Account_id!=4 && formData.compliance.Account_id!=3">
                                    <input class="form-check-input"  v-model="formData.compliance.Project" type="checkbox" name="account_plan" value="">
                                    <span class="fs-6 fw-bold ms-2 text-muted">Project</span>
                                </div>
                                    <div class="col-md-3" v-if="formData.compliance.Account_id!=1 && formData.compliance.Account_id!=3  && formData.compliance.Account_id!=0" >
                                    <input class="form-check-input"  v-model="formData.compliance.Certificate" type="checkbox" name="account_plan" value="">
                                    <span class="fs-6 fw-bold text-muted">Certificate</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6" v-if="formData.compliance.Account_id!=4">
                            <div class="row">
                                <div class="col-md-12">
                                    <h5>Account Type:</h5>
                                </div>
                                <div class="col-md-4" v-if="formData.compliance.Account_id!=1">
                                    <input class="form-check-input"   v-model="formData.compliance.Supplier"  type="checkbox" name="account_plan" value="">
                                    <span class="fs-6 fw-bold ms-2 text-muted">Supplier</span>
                                </div>
                                <div class="col-md-4" v-if="formData.compliance.Account_id!=3">
                                    <input class="form-check-input"   v-model="formData.compliance.AuditFirm"  type="checkbox" name="account_plan" value="">
                                    <span class="fs-6 fw-bold ms-2 text-muted">Audit Firm</span>
                                </div>
                                <div     class="col-md-4"  v-if="formData.compliance.Account_id!=1 &&  formData.compliance.Account_id!=3">
                                    <input class="form-check-input"    v-model="formData.compliance.Freelancer"  type="checkbox" name="account_plan" value="">
                                    <span class="fs-6 fw-bold ms-2 text-muted">Freelancer</span>
                                </div>
                                    <div class="col-md-4 " v-if="formData.compliance.Account_id!=0">
                                    <input class="form-check-input" v-model="formData.compliance.Organization "  type="checkbox" name="account_plan" value="">
                                    <span class="fs-6 fw-bold ms-2 text-muted">Organization</span>
                                </div>
                                    <div class="col-md-4" v-if="formData.compliance.Account_id!=1  &&  formData.compliance.Account_id!=0">
                                    <input class="form-check-input" v-model="formData.compliance.Regulator"  type="checkbox" name="account_plan" value="">
                                    <span class="fs-6 fw-bold ms-2 text-muted">Regulator</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 class="mt-15">Add GuideLines </h4>
                    <div class="separator separator-dashed border-gray-300 my-4"></div>
                    <div class="row">
                        <div class="col-md-10 ">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-11">
                                            <label class="form-label ">GuideLines </label>
                                        </div>
                                        <template  v-for="(val,index) in formData.complaice_guidelines" :key="index">
                                        <div  style="display:flex; align-items: baseline;">
                                            <input name="" v-model="val.Description" placeholder=" Enter your GuideLines"
                                                    class="form-control form-control-lg form-control-solid" maxlength="350">
                                                <div  v-if="index+1 != formData.complaice_guidelines.length" class="col-md-1 vertical_text_mid compliance_ddbtn">
                                                <button class="btn btn-primary mt-10" @click="remove_guid(index)">-</button>
                                            </div>
                                            <div  v-if="index+1 == formData.complaice_guidelines.length" class="col-md-1 vertical_text_mid compliance_ddbtn">
                                                <button class="btn btn-primary mt-10" @click="add_guid()">+</button>
                                            </div>
                                        </div>
                                    </template>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <h4 class="mt-10">Add Section </h4>
                    <template v-for="(sec , index1 ) in formData.compliance_section" :key="index1">
                    <h4 class="mt-10" v-if="index1!=0">Section </h4>
                    <div class="separator separator-dashed border-gray-300 my-4"></div>
                    <div class="row">
                        <div class="col-md-10 ">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-11">
                                            <label class="form-label required">Control Heading </label>
                                            <input name="" maxlength="250"   :class="{'border border-danger': s_validate.compliance_section.$each.$response.$errors[index1].Heading.length,}" placeholder="Control Heading" v-model="sec.Heading"
                                                    class="form-control form-control-lg form-control-solid">
                                        </div>
                                            <div class="text-danger mt-2" v-for="error in s_validate.compliance_section.$each.$response.$errors[index1].Heading" :key="error">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="mt-15">Add Controls </h4>
                        <template v-for="(con , index2) in sec.compliance_control" :key="index2">
                                                    
                        <div class="separator separator-dashed border-gray-300 my-4"></div>
                        <div class="col-md-10 ">
                            <div class="row">
                                <div class="col-md-12 pb-5">
                                    <div class="row">
                                        <div class="col-md-6">
                                            
                                            <label class="form-label ">{{con.Control_no}} </label>
                                        </div>
                                        <div class="col-md-6">
                                            
                                            <label class="form-label required">Refrence No</label>
                                            <input name="" v-model="con.Ref_no" 
                                                    class="form-control form-control-lg form-control-solid  margin" maxlength="40">
                                            <!-- <div class="text-danger mt-2" 
                                            v-for="error in c_validate.compliance_section.$each.$response.$errors[index1].compliance_control" :key="error">
                                                {{ error.$message[index1][index2] }}
                                            </div> -->
                                        </div>
                                        <div class="col-md-6 mt-3">
                                            
                                            <label class="form-label ">Source</label>
                                            <input name="" placeholder="Enter your source" 
                                                v-model="con.Source"    class="form-control form-control-lg form-control-solid" maxlength="50">
                                        </div>
                                        <div class="col-md-6 mt-3">
                                            
                                            <label class="form-label">Control statement</label>
                                            <textarea name=""  placeholder="Enter your Control statement"
                                                v-model="con.Ctrl_statement" maxlength="500" class="form-control form-control-lg form-control-solid">Third Party must establish, maintain and communicate a Cybersecurity Acceptable Use Policy (AUP) governing the use of Third-Party Technology Assets</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 text-end"  v-if="index2+1 != sec.compliance_control.length">
                                <a class="btn btn-primary margin-top" @click="remove_control(index1,index2)">Remove Control -</a>
                            </div> 
    
                            <div class="col-md-12 text-end"  v-if="index2+1 == sec.compliance_control.length">
                                <a class="btn btn-primary margin-top" @click="save_control(index1,index2+1)">Add Control +</a>
                            </div>
    
                        </div>
                        
                        </template>
    
                    </div>
                    </template> 
                    <div class="separator separator-dashed border-gray-300 my-4"></div>
                    <div class="col-md-12 text-end">
                        <button   class=" w-100  btn btn-primary margin-top" @click="save_section()">Add Section +</button>
                    </div>
                    <div class="row mt-4">
                        <h4>Compliance Audit  </h4> {{ formData.compliance.Compliance_audi }}
                        <div class="separator separator-dashed border-gray-300 my-4"></div>
                        <div class="row">
                            <div class="col-md-4">
                                <span class="fs-6 fw-bold text-muted">Compliance through audit firm?</span>
                                <input v-model="formData.compliance.Compliance_audit" class="ml-5 form-check-input" type="radio" name="account_plan" value="true">
                            </div>
                        </div>
    
                        <div class="row mt-5" v-if="formData.compliance.Compliance_audit">
                            <div class="col-md-6">
                                <label class="form-label required">Authorized Audit Firms </label>
                                <select v-model="audit_auth" name="business_type"
                                        class="form-select form-select-lg form-select-solid">
                                    <option  :value="list.RegD_id" v-for="(list , index) in audit_list" :key="index">{{list.Fullname}}</option>
                                </select>
                                <div class="auditfirms_added mt-2">
                                        <p style="margin-right:3px" v-for="(val , index2) in audit_name" :key="index2"><span @click="remove_auth_audit(index2)"  style="margin-right:2px">x</span>{{val}}</p>
                                </div>
    
                            </div>
                        </div>
    
                        <div class="row mt-5">
                            <div class="col-md-6">
                                <span class="fs-6 fw-bold text-muted">
                                    Compliance through any audit firm.
                                </span>
                                <input  v-model="formData.compliance.Compliance_any_audit"  class="ml-5 form-check-input" type="radio"  value="true" name="account_plan">
                            </div>
                        </div>
    
    
                        <div class="col-md-12 pb-5 text-left  ">
                            <h4 class="margin-top"> Summary </h4>
                            <div class="separator separator-dashed border-gray-300 my-4"></div>
                            <textarea v-model="formData.compliance.Summary" name="" maxlength="500" placeholder="Please enter your text"
                                        class="form-control form-control-lg form-control-solid">The purpose of this cybersecurity assessment is to confirm that Paratech has implemented the general requirement information security controls defined in the Third Party Cybersecurity Standard (SACS-002) in addition to the relevant controls as per the Third Party classification. This assessment capture and document a point-in-time implementation status of the existence of the applicable controls as per the Third Party Cybersecurity Standard (SACS-002).</textarea>
                        </div>
                        <div class="separator separator-dashed border-gray-300 my-4"></div>
                        <div class="col-md-12 pb-5 text-right">
    
                            <router-link to="/compliance_list"><button class="btn btn-light pr-5 me-2">Cancel</button></router-link> 
                            <button v-if="route.params.id" class="btn btn-primary"  @click="save()" :disabled="loader">Update <SLoader v-if="loader"></SLoader></button>
                            <button v-else class="btn btn-primary" @click="save()" :disabled="loader">Add <SLoader v-if="loader"></SLoader></button>
    
    
                        </div> 
                    </div>
                </div>

</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required ,helpers} from "@vuelidate/validators";
import { computed, onMounted, reactive,ref, watch} from 'vue'
import Api from '@/APi/axios_instance'
import {Account} from '@/store/SwitchAccount'
import { useAuthStore} from "@/store/auth"
import SLoader from '@/global_components/loader/SLoader.vue'
import {useRouter,useRoute} from 'vue-router'
// import {mapState} from 'pinia'
 import showToast from '@/global_components/Toast/useToast'
import PageLoader from "@/global_components/loader/PageLoader.vue";
export default {
    components:{
    SLoader,
    PageLoader
},
    // computed:{
    //   ...mapState(Account,{
    //      Account_detail:'Account_detail'
    //   })
    // },
    // watch:{
    //   Account_detail(){
    //    this.formData.compliance.Account_id=this.Account_detail[0].Account_type;
    //    this.formData.compliance.RegD_id=this.Account_detail[0].RegD_id;
    //   }
    // },
  setup(){
 const router = useRouter();
 const SwitchAccount = computed(()=> Account().Account_detail[0] ) 
 const route = useRoute();
 const auth = useAuthStore();
 const cat_list= ref([])
 const cat_name=ref([])
 const add_cat=ref([])
 const reg_list = ref([])
 const cer_list = ref([])
 const loader = ref(false);
 const page_loader = ref(false);
 const count = ref(2);
 const audit_list=ref([]);
 const audit_auth =ref('');
 const audit_name =ref([])
 const formData = reactive({
    compliance:{
    Compliance_id:0,
    Compliance_name:"",
    Categories_IDs:[],
    Regulatory_Auth:null,
    Certificate_id:null,
    Registration:false,
    Project:false,
    Certificate:false,
    Supplier:false,
    AuditFirm:false,
    Freelancer:false,
    Organization:false,
    Regulator:false,
    Compliance_audit:true,
    Auth_AuditFirm_IDs:[],
    Compliance_any_audit:false,
    Summary:"",
    Account_id:SwitchAccount.value?.Account_type,
    Created_by:auth.user.User_id,
    Updated_by:auth.user.User_id,
    RegD_id:SwitchAccount.value?.RegD_id,
    comp_own: true,
    Regulatory_Auth_name: "Own"
    },
    complaice_guidelines:[
        {
            Description:"it is first guideline",
            Created_by:auth.user.User_id,
            Updated_by:auth.user.User_id,
        },
    ],
    compliance_section:[
        {
            Heading:"control heading 1",
            Created_by:auth.user.User_id,
            Updated_by:auth.user.User_id,
            compliance_control:[
                {
                    Control_no:"Control No 1",
                    Ref_no:"TPC1",
                    Source :"Pakistan",
                    Ctrl_statement:"Brefily statement of control"
                },
            ]
        },
    ]
  })

  watch(SwitchAccount,()=>{
   if(SwitchAccount.value.Account_type==2){
    router.push('dashboard')
   }
    formData.compliance.RegD_id=SwitchAccount.value.RegD_id;
    formData.compliance.Account_id=SwitchAccount.value.Account_type;
  })

    watch(add_cat ,()=>{
        if(add_cat.value!=[])
           add_catagory()
    },
    )
     watch(audit_auth ,()=>{
        if(audit_auth.value!='')
           add_auth_audit()
    })
    watch(
        ()=>formData.compliance.Compliance_any_audit,
        () => {
            if(formData.compliance.Compliance_any_audit){
                formData.compliance.Compliance_audit = false;
                formData.compliance.Auth_AuditFirm_IDs=[];
                audit_auth.value=""
                audit_name.value=[]
            }
       },
       { deep: true })

     watch(
        ()=>formData.compliance.Compliance_audit,
        () => {
            if(formData.compliance.Compliance_audit){
                formData.compliance.Compliance_any_audit=false
            }
          
       },
       { deep: true })

 const rules = {
      Compliance_name:{required:helpers.withMessage('Compliance Name is Required',required)},
      Categories_IDs:{required:helpers.withMessage('Categoryis Required',required)},
    //   Auth_AuditFirm_IDs:{required:helpers.withMessage('Authorized Audit Firm is Required',required)}
 }
const s_rules={
     compliance_section: {
        $each: helpers.forEach({
          Heading: {
            required:helpers.withMessage('Control Heading Required',required)
          },
        })
      }
}

const c_rules = {
         compliance_section: {
         $each: helpers.forEach({
            compliance_control: {
            $each: helpers.forEach({
              Ref_no: {
            required:helpers.withMessage('Refrence No Required',required)
              },
            })
          }
        })
      }
}
    const validate = useVuelidate(rules, formData.compliance)
    const s_validate = useVuelidate(s_rules,formData)
    const c_validate = useVuelidate(c_rules, formData)

     const add_catagory = ()=>{
        let c_list = cat_list.value.filter((row)=> add_cat.value==row.Cat_id)
        if(formData.compliance.Categories_IDs.includes(c_list[0].Cat_id)){ 
            return false
        }else{
            formData.compliance.Categories_IDs.push(c_list[0].Cat_id)
            cat_name.value.push(c_list[0].Cat_name)
        }
     }

     const remove_catgory=(index)=>{
         formData.compliance.Categories_IDs.splice(index, 1);
         cat_name.value.splice(index,1)
         add_cat.value= []
     }


     const add_auth_audit = ()=>{
        let auditList = audit_list.value.filter((row)=> audit_auth.value==row.RegD_id)
        if(formData.compliance.Auth_AuditFirm_IDs.includes(auditList[0].RegD_id)){ 
            return false
        }else{
            formData.compliance.Auth_AuditFirm_IDs.push(auditList[0].RegD_id)
            audit_name.value.push(auditList[0].Fullname)
        }
     }

     const remove_auth_audit=(index)=>{
        formData.compliance.Auth_AuditFirm_IDs.splice(index, 1);
         audit_name.value.splice(index,1)
         audit_auth.value=''
     }

    const add_guid = ()=>{
      formData.complaice_guidelines.push({
            Description:"",
            Created_by:auth.user.User_id,
            Updated_by:auth.user.User_id,
        })
    }

     const remove_guid= (index)=>{
        formData.complaice_guidelines.splice(index,1)
     }
  
  const add_section=()=>{
      formData.compliance_section.push({
           Heading:"",
            Created_by:auth.user.User_id,
            Updated_by:auth.user.User_id,
            compliance_control:[
                {
                    Control_no:"Control No 1",
                    Ref_no:"TPC1",
                    Source :"",
                    Ctrl_statement:""
                },
            ]
      },)
  }
    const add_control=(index, index1)=>{
      formData.compliance_section[index].compliance_control.push({
                 Control_no:`Control No ${index1+1}`,        
                 Ref_no:'TPC'+(index1+1),
                 Source:'',
                 Ctrl_statement:''
      },)
    }

  const remove_control= (index1,index2)=>{
        formData.compliance_section[index1].compliance_control.splice(index2,1);
         for(let i =0 ; i <= formData.compliance_section[index1].compliance_control.length; i++){
             formData.compliance_section[index1].compliance_control[i].Control_no=`Control No ${i+1}`
              formData.compliance_section[index1].compliance_control[i].Ref_no=`TPC ${i+1}`
         }
  }

const save_control=(index1,index2)=>{
          c_validate.value.$touch();
         if(!c_validate.value.$invalid){
         add_control(index1,index2)
         }
}

  const save_section=()=>{
         s_validate.value.$touch();
         if(!s_validate.value.$invalid){
         add_section()
         }
  }


    const save= ()=>{
         validate.value.$touch();
         if(!validate.value.$invalid){
          loader.value=true
          add_complanice()
         }
    }

const edit_category=(data)=>{
            let cat_ids = data.split(',');
            for (let value of cat_ids){
                 cat_list.value.filter(row=>{
                     if(parseInt(value) == row.Cat_id)
                     {
                        const index_name = cat_name.value.findIndex(name => name == row.Cat_name)
                        if(index_name == -1){
                            cat_name.value.push(row.Cat_name)
                        }
                        add_cat.value=row.Cat_id
                     }
                 })
                 formData.compliance.Categories_IDs.push(parseInt(value));
             }      
}

const edit_auditfirm=(data)=>{
    setTimeout(()=>{
  let audit_ids = data.split(',');
             for (let value of audit_ids){
                 formData.compliance.Auth_AuditFirm_IDs.push(parseInt(value));
                 audit_list.value.filter(row=>{
                     if(parseInt(value) == row.RegD_id)
                     {
                         audit_name.value.push(row.Fullname);
                         audit_auth.value=row.RegD_id;
                     }
                 })
             }
    })
       
}
const setComplianceData = (com) => {
    formData.compliance.Registration=com.Registration;
    formData.compliance.Project=com.Project;
    formData.compliance.Certificate=com.Certificate;
    formData.compliance.Supplier=com.Supplier;
    formData.compliance.AuditFirm=com.AuditFirm
    formData.compliance.Freelancer=com.Freelancer;
    formData.compliance.Organization=com.Organization;
    formData.compliance.Regulator=com.Regulator;
    formData.compliance.Compliance_audit=com.Compliance_audit;
    edit_auditfirm(com.Auth_AuditFirm_IDs)
//  formData.compliance.Auth_AuditFirm_IDs=com.Auth_AuditFirm_IDs;
    formData.compliance.Compliance_any_audit=com.Compliance_any_audit;
    formData.compliance.Summary=com.Summary;
}
    const Edit_compaliance=async()=>{
    page_loader.value = true
      await Api.get('/api/compliance/get-by-id?Compliance_id='+route.params.id)
      .then(response=>{
        page_loader.value = false
          if(response.status==200){
            let  com = response.data.data.compliance;
            formData.compliance.Compliance_name= com.Compliance_name;
            formData.compliance.Compliance_id=com.Compliance_id;
            edit_category(com.Categories_IDs)
             formData.compliance.Regulatory_Auth=com.Regulatory_Auth;
             get_cer()
             formData.compliance.Certificate_id=com.Certificate_id;
             formData.compliance.Regulatory_Auth_name=com.Regulatory_Auth_name;
             formData.compliance.comp_own=com.comp_own; 
             setComplianceData(com)
             formData.complaice_guidelines =  response.data.data.complaice_guidelines
             formData.compliance_section=  response.data.data.compliance_section

          }
      })
      .catch(error=>{
        showToast(error.response.data)
      })
      page_loader.value = false
    }


//   const update= async()=>{
//      loader.value=true
//       await Api.post('api/compliance/InsertUpdate', formData)
//        .then(response=>{
//            if(response.status==200){
//              router.push({path:'/compliance_list'})
//            }
//        })
//   }

 const get_cat= async()=>{
       await Api.get('/api/registration/get-catlist/?RegD_id=' + auth.user.RegD_id)
       .then(response=>{
           cat_list.value= response.data;
           if(route.params.id){
            Edit_compaliance()
        }          
       })
       .catch(error=>{
        showToast(error.message+'on categories')
       })
 }

 const get_reg = async() => {
       await Api.get('/api/compliance/get-all-regulator').then(response=>{
           reg_list.value= response.data;
       })
       .catch(error=>{
        console.log(error)
         showToast('internal server error on regulatory authority')
       })
 }

const clearFrom=()=>{
            formData.compliance.Registration=false;
            formData.compliance.Project=false;
            formData.compliance.Certificate=false;
            formData.compliance.Supplier=false;
            formData.compliance.AuditFirm=false
            formData.compliance.Freelancer=false;
            formData.compliance.Organization=false;
            formData.compliance.Regulator=false;
            formData.compliance.Compliance_audit=true;
            audit_name.value=[];
            audit_auth.value='';
        //  formData.compliance.Auth_AuditFirm_IDs=com.Auth_AuditFirm_IDs;
            formData.compliance.Compliance_any_audit=false;
            formData.compliance.Summary='';
            formData.complaice_guidelines = [
    {
        Description:"it is first guideline",
        Created_by:auth.user.User_id,
        Updated_by:auth.user.User_id,
    },
];
            formData.compliance_section=[{
        Heading:"control heading 1",
        Created_by:auth.user.User_id,
        Updated_by:auth.user.User_id,
        compliance_control:[
            {
                Control_no:"Control No 1",
                Ref_no:"TPC1",
                Source :"Pakistan",
                Ctrl_statement:"Brefily statement of control"
            },
        ]
    },
            ]
           
}
const defineOwnCompliance = () => {
    formData.compliance.Regulatory_Auth_name = 'Own'
    formData.compliance.Certificate_id = null
    formData.compliance.Regulatory_Auth = null
    // cer_list.value = []
    // reg_list.value = []
}
 const get_cer = async()=>{
    clearFrom()
    const index = reg_list.value.findIndex(val => val.RegD_id == formData.compliance.Regulatory_Auth )
    if(index != -1){
        formData.compliance.Regulatory_Auth_name  = reg_list.value[index].Fullname
    }
       await Api.get('api/compliance/get-certificate?RegD_id='+formData.compliance.Regulatory_Auth)
       .then(response=>{
          cer_list.value= response.data;
        
       })
 }
const get_audit=async()=>{
      await Api.get('/api/compliance/get-audits')
       .then(response=>{
           audit_list.value= response.data;
       })
        .catch(error=>{
        console.log(error)
         showToast('internal server error on authorized audit firms')
       })
}

const getexitingData= async()=>{
    audit_name.value=[];
    audit_auth.value='';
   await Api.get('/api/compliance/get-by-reg?Regulatory_Auth='+formData?.compliance.Regulatory_Auth+'&Certificate_id='+formData?.compliance.Certificate_id)
       .then(response=>{
             let  com = response.data.data.compliance;
             setComplianceData(com)
             formData.complaice_guidelines =  response.data.data.complaice_guidelines
             formData.compliance_section=  response.data.data.compliance_section
     
       })
        .catch(error=>{
          
         clearFrom()
         showToast(error.response.data)
       })
}

const add_complanice=async()=>{
  await Api.post('api/compliance/InsertUpdate', formData)
       .then(response=>{
           if(response.status==200){
           if( formData.compliance.Compliance_id==0)
           {
             showToast('Compliance Add SuccessFully', 'success')
           } else{
             showToast('Compliance Update SuccessFully', 'success')
           }
             router.push({path:'/compliance_list'})
           }
       })
        .catch(error=>{
         loader.value=false
         showToast(error.response.data)
       })
}


onMounted(()=>{
    get_cat()
    if(route.params.id){
        page_loader.value = true
    } 
    get_reg()
    get_cer()
    get_audit()  

    
})

    return{
     SwitchAccount,
     cat_list,
     cat_name,
     add_cat,
     reg_list,
     cer_list,
     loader,
     page_loader,
     formData,
     validate,
     s_validate,
     c_validate,
     count,
     audit_auth,
     audit_list,
     audit_name,
     route,
     save,
     save_section,
     save_control,
     remove_catgory,
     remove_guid,
     add_guid,
     add_control,
     add_section,
     add_auth_audit,
     remove_auth_audit,
     get_cer,
     remove_control,
     getexitingData,
     defineOwnCompliance
    }
  }
}
</script>
