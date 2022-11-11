<template>
     <div class="modal fade show" tabindex="-1"  style="display:block;background:rgba(0,0,0,0.5); opacity:1">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content" style="margin-top:120px">
                            <div class="modal-body p-3">
                         <div>
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex justify-content-between">
                 <h4 class="mt-3">User Permissions</h4>
                  <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" @click="CloseModel()">
                      <i class="fa fa-times" aria-hidden="true"></i>
                  </div>
              </div>
             
              <div
                class="separator separator-dashed border-gray-300 my-2"
              ></div>

              <div>
              <label class="form-label required">Role Name</label>
          <input
            type="text"
            name=""
            v-model.trim="validate.role_name.$model"
            :class="{ 'error': validate.role_name.$error}"
            class="form-control form-control-lg form-control-solid"
          />
          <template v-for="(error, index) in validate.role_name.$errors" :key="index">
             <div class="error_text mt-2">
               {{ error.$message }}
             </div>
          </template>
              </div>

           <div  style="display: flex; " class="mt-4">
           <div>
            <label class="form-label">Is Active</label>
            <input
             type="checkbox"
             name=""
             value=""
             v-model="formData.Isactive"
             class="form-check-input mb-5 mx-2"/>
           </div>

           <div class="mx-4">
            <label class="form-label">Is Admin</label>
           <input
            type="checkbox"
            name=""
            value=""
            v-model="formData.Isadmin"
            class="form-check-input mb-5 mx-2"/>
            </div>
            </div>
            <div class="mx-4" v-if="edit==''"  style="display: flex;justify-content: end;">
           <label class="form-label">Select All</label>
           <input
            type="checkbox"
            name=""
            value=""
            v-model="SelectALL"
            class="form-check-input mb-5 mx-2"/>
            </div>
            </div>
           </div>
         
          </div>
          <table
            class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
          >
            <!--begin::Table head-->
            <thead>
              <tr class="fw-bolder text-muted">
                <th class="min-w-250px">Modules</th>
                <th class="min-w-140px text-center">View</th>
                <th class="min-w-140px text-center">Add</th>
                <th class="min-w-140px text-center">Edit</th>
                <th class="min-w-140px text-center">Delete</th>
               <th class="min-w-140px text-center">Quick Link</th>
              </tr>
            </thead>
            <!--end::Table head-->
            <!--begin::Table body-->
            <tbody>
              <tr v-for="(per , index) in header_manu " :key="index">
                <td>
                  <span class="text-muted fw-bold text-muted d-block fs-7"
                    >{{ per.Menue_label }}</span
                  >
                </td>
                <td class="text-center">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    v-model="per.Can_view"
                    id="flexRadioLg"
                   
                  />
                </td>
                <td class="text-center">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    v-model="per.Can_add"
                    id="flexRadioLg"
                   
                  />
                </td>
                <td class="text-center">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    v-model="per.Can_edit"
                    id="flexRadioLg"
                   
                  />
                </td>
                 <td class="text-center">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    v-model="per.Can_delete"
                    id="flexRadioLg"
                   
                  />
                </td>
                 <td class="text-center">
                  <input v-if="per.Isparent==false"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    v-model="per.quick_link"
                    id="flexRadioLg"
                   
                  />
                </td>
              </tr>
            </tbody>
            <!--end::Table body-->
          </table>
         <div class="text-right text-hover-white mt-4">
              <button  @click="createRole()"  :disabled="disabled"  class="btn btn-primary w-100 text-hover-white">Save <Loader v-if="disabled"></Loader></button>
          </div>
        </div>

        </div>
    </div>
</div>
</template>
<script>
import {computed, onMounted, reactive,ref,watch} from "vue"
import { useVuelidate } from "@vuelidate/core";
import Loader from '@/global_components/loader/SLoader.vue'
import { required ,helpers} from "@vuelidate/validators";
import { useAuthStore} from "@/store/auth"
import {Account} from '@/store/SwitchAccount'
import showToast from '@/global_components/Toast/useToast'
import sweetalert from '@/global_components/sweetAlert/SweetAlert'
import Api from '@/APi/axios_instance'
export default {
  components:{
    Loader
  },
    emits: ['closeModel'],
    props:['edit'],
    setup(props ,{emit}) {
        const switch_account =computed(()=> Account().Account_detail[0])
        const auth = useAuthStore()  
        const header_manu = ref('')  
        const Role_id = ref(0) 
        const disabled = ref(false)  
        const SelectALL = ref(false)  
        const formData = reactive({
          role_name:null,
          Isactive:true, 
          Isadmin:false
        });

watch(SelectALL,()=>{
   if(SelectALL.value==true)
   {
      for(let x of header_manu.value)
      {
        x.Can_add=true
        x.Can_edit=true
        x.Can_delete=true
        x.Can_view=true
       if(x.Isparent==false){
        x.quick_link=true
       }
      }
   }
      if(SelectALL.value==false)
   {
      for(let x of header_manu.value)
      {
        x.Can_add=false
        x.Can_edit=false
        x.Can_delete=false
        x.Can_view=false
       if(x.Isparent==false){
        x.quick_link=false
       }
      }
   }
})
      const Userpermision =reactive([])
      const Editpermision = reactive([])
        const rules={
          role_name: { required:helpers.withMessage('Role Name is required',required)}
        }



        const validate = useVuelidate(rules, formData)
        
        const CloseModel= ()=>{
             emit('closeModel', false)
         }
         
        const Manu = async()=>{
          await Api.get('/api/menueaccess/all-account-list?Account_id='+ switch_account.value.Account_type)
          .then(response=>{
            header_manu.value = response.data;
            // if(props.edit!=''){
            //   setEditpermission()
            // }else{
            //  setPermission();
            // }
          })
          .catch(error=>{
            //  showToast(error.message)
          })
        }

        // const setPermission =()=>{
        //    for (let x of header_manu.value) {
        //         Userpermision.push({
        //           Access_id:0,
        //           Menue_name:x.Menue_name,
        //           Menue_label:x.Menue_label,
        //           Menue_id:x.Menue_id,
        //           Top_menue_id:x.Top_menue_id,
        //           checkbox1:false,
        //           checkbox2:false,
        //           checkbox3:false,
        //           Can_view:false,
        //           Can_add:false,
        //           Can_edit:false,
        //           Can_delete:false,
        //           permission:function(event){
        //             if((event=='view') && !this.checkbox1){this.Can_view=true;this.Can_add=false; this.Can_edit=false;this.Can_delete=false;this.checkbox2=false;this.checkbox3=false}
        //             else if(event=='view_edit' && !this.checkbox2){this.Can_view=true;this.Can_add=true; this.Can_edit=true;this.Can_delete=false,this.checkbox1=false,this.checkbox3=false}
        //             else if(event=='view_edit_delete' && !this.checkbox3){this.Can_view=true;this.Can_add=true; this.Can_edit=true;this.Can_delete=true,this.checkbox1=false,this.checkbox2=false}
        //             else{this.Can_view=false;this.Can_add=false; this.Can_edit=false;this.Can_delete=false}
        //           },
        //    },)
        //       }
        // }
      
        const createPermission= async()=>{
        //     let Selectpermission = [];
        //    
        //     Selectpermission = Userpermision.filter((data)=>{
        //       if(data.Can_view==true || data.Can_add==true || data.Can_edit==true || data.Can_delete==true || data.Access_id!=0){
        //           return true
        //       }  
        //     })
         let  permission =[];
         for (let x of header_manu.value) {
            permission.push({
                  Access_id:x.Access_id || 0,
                  Role_id:Role_id.value,
                  Menue_name:x.Menue_name,
                  Menue_label:x.Menue_label,
                  Menue_id:x.Menue_id,
                  Top_menue_id:x.Top_menue_id,
                  Can_view:x.Can_view,
                  Can_add:x.Can_add,
                  Can_edit:x.Can_edit,
                  RegD_id:switch_account.value.RegD_id,
                  RegM_id:auth.user.RegM_id,
                  Can_delete:x.Can_delete,
                  quick_link:x.quick_link,
                  Created_by:auth.user.User_id,
                  Updated_by:auth.user.User_id,
            },)
         }
        await Api.post('/api/menueaccess/InsertUpdate',{
          menue_access:permission
          })
        .then(response=>{
         if(response.status==200)
         {
            disabled.value=false
            CloseModel()
            auth.Manu()
            
         }
        })
        .catch(error=>{
           disabled.value=false
           showToast(error.message)
        })
        }


      const createRole = async () => {
        validate.value.$touch();
        if (!validate.value.$invalid) {
            disabled.value=true
            await Api.post('/api/roles/InsertUpdate',{
              Role_id:Role_id.value,
              Role_name:formData.role_name,
              Isactive:formData.Isactive,
              Isadmin:formData.Isadmin, 
              RegD_id:switch_account.value.RegD_id
            })
            .then(response=>{
              if(response.status==200)
              {
                 disabled.value=false
                 Role_id.value= response.data[0].Role_id;
                 createPermission();
              }
            })
            .catch(error=>{
                disabled.value=false
               showToast(error.message)
            })
         }
      }  

     const Edit_role = async()=>{
       await Api.get('/api/roles/get-by-id?Role_id='+props.edit)
       .then(response=>{
            let Role_info=response.data[0]
            Role_id.value=Role_info.Role_id;
            formData.role_name=Role_info.Role_name;
            formData.Isactive=Role_info.Isactive;
            formData.Isadmin=Role_info.Isadmin;
            Edit_permision();
       })
       .catch(error=>{
         showToast(error.message)
       })
     }
    //  const setEditpermission=()=>{
    //      for (let x of header_manu.value) {
    //        const index = Editpermision.findIndex(object => object.Menue_label === x.Menue_label);
    //        if (index === -1) {
    //               Editpermision.push({
    //               Access_id:0,
    //               Menue_name:x.Menue_name,
    //               Menue_label:x.Menue_label,
    //               Menue_id:x.Menue_id,
    //               Top_menue_id:x.Top_menue_id,
    //               checkbox1:false,
    //               checkbox2:false,
    //               checkbox3:false,
    //               Can_view:false,
    //               Can_add:false,
    //               Can_edit:false,
    //               Can_delete:false,
    //               permission:function(event){
    //                 if((event=='view') && !this.checkbox1){this.Can_view=true;this.Can_add=false; this.Can_edit=false;this.Can_delete=false;this.checkbox2=false;this.checkbox3=false}
    //                 else if(event=='view_edit' && !this.checkbox2){this.Can_view=true;this.Can_add=true; this.Can_edit=true;this.Can_delete=false,this.checkbox1=false,this.checkbox3=false}
    //                 else if(event=='view_edit_delete' && !this.checkbox3){this.Can_view=true;this.Can_add=true; this.Can_edit=true;this.Can_delete=true,this.checkbox1=false,this.checkbox2=false}
    //                 else{this.Can_view=false;this.Can_add=false; this.Can_edit=false;this.Can_delete=false}
    //               },
    //        },);
    //            }
    //      }

    //       for (let x of Editpermision)
    //            {
    //              Userpermision.push(x);
    //            }
    //  }
     const  Edit_permision = async()=>{
      await Api.get(`/api/menueaccess/get-by-role-id?User_id=${auth.user.User_id}&RegD_id=${switch_account.value.RegD_id}`)
       .then(response=>{
          header_manu.value = response.data
        // for (let x in userData){
        //   Editpermision.push({
        //           Access_id:userData[x].Access_id,
        //           Menue_name:userData[x].Menue_name,
        //           Menue_label:userData[x].Menue_label,
        //           Menue_id:userData[x].Menue_id,
        //           Top_menue_id:userData[x].Top_menue_id,
        //           Can_view:userData[x].Can_view,
        //           Can_add:userData[x].Can_add,
        //           Can_edit:userData[x].Can_edit,
        //           Can_delete:userData[x].Can_delete,
        //           checkbox1:false,
        //           checkbox2:false,
        //           checkbox3:false,
        //            permission:function(event){
        //             if((event=='view') && !this.checkbox1){this.Can_view=true;this.Can_add=false; this.Can_edit=false;this.Can_delete=false;this.checkbox2=false;this.checkbox3=false}
        //             else if(event=='view_edit' && !this.checkbox2){this.Can_view=true;this.Can_add=true; this.Can_edit=true;this.Can_delete=false,this.checkbox1=false,this.checkbox3=false}
        //             else if(event=='view_edit_delete' && !this.checkbox3){this.Can_view=true;this.Can_add=true; this.Can_edit=true;this.Can_delete=true,this.checkbox1=false,this.checkbox2=false}
        //             else{this.Can_view=false;this.Can_add=false; this.Can_edit=false;this.Can_delete=false}
        //           },
        //           edit_permission:function(){
        //             if(this.Can_view==true && this.Can_add==false&&this.Can_delete==false&&this.Can_edit==false){ 
        //               this.checkbox1=true
        //             }
        //             else if(this.Can_view==true && this.Can_add==true&&this.Can_edit==true&&this.Can_delete==false){
        //               this.checkbox2=true
        //             }
        //             else if(this.Can_view==true && this.Can_add==true&&this.Can_delete==true&&this.Can_edit==true){
        //               this.checkbox3=true
        //             }
        //           }
          
        //    },)
        //       Editpermision[x].edit_permission()  
        //       }
         //      Manu()
       })
       .catch(error=>{
         showToast(error.message)
       })
     }  

       onMounted(()=>{
         if(props.edit!=''){
           Edit_role()
         }else{
            Manu()
         }
          
        })
         
        return{
           Userpermision,
           validate,
           formData,
           header_manu,
           disabled,
           CloseModel,
           createRole,
           SelectALL
        }
    },
}
</script>
<style scoped>
.error{
  border:1px solid red
}
.error_text
{
  color: red;
}
</style>