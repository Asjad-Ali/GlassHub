<template>
     <div class="card mb-10 mb-xxl-8">
                                    <div class="card-body pb-0">
                                        <div class="row mb-10">
                                            <div class="col-md-8">
                                                <h1 class="pb-2">All Users</h1>    
                                            </div>  
                                            <div class="col-md-4 text-right text-hover-white" v-if="per?.Can_add">
                                              <router-link to="add-user"><a class="text-hover-white"><button class="btn btn-primary">Add New User</button></a></router-link>
                                            </div>
                                        </div>
                                        <div class="row">
                                           <div class="table-responsive">													<!--begin::Table-->
                                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                    <!--begin::Table head-->
                                                    <thead>
                                                        <tr class="fw-bolder text-muted">
                                                            <th>ID</th>
                                                            <th>Date</th>
                                                            <th class="min-w-120px">Name</th>
                                                            <th class="min-w-120px">Email</th>
                                                            <th class="min-w-140px">Phone</th>
                                                            <th class="min-w-140px">Role</th>
                                                            <th class="min-w-100px">Active</th>
                                                            <th class="min-w-100px text-end">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <!--end::Table head-->
                                                    <!--begin::Table body-->
                                                    <tbody>
                                                        <tr v-for="(list,index) in all_user" :key="index">
                                                            <td>{{index}}</td>
                                                            <td>{{DateFormate(list.created_at)}}</td>
                                                            <td>
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">{{list.User_fullname}}</span>
                                                            </td>
                                                            <td>
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">{{list.User_email}}</span>
                                                            </td>
                                                            <td>
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">{{list.User_phone}}</span>
                                                            </td>
                                                            <td>
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">{{list.Role_name}}</span>
                                                            </td>
                                                            <td>
                                                                <label class="form-check form-switch form-check-custom form-check-solid">
                                                                    <input class="form-check-input" type="checkbox"  :checked="list.User_isactive">
                                                                </label>
                                                            </td>
                                                            <td class="text-end">
                                                                <ul class="userslist_action_icons">
                                                                    <li  v-if="per?.Can_edit"><router-link :to="'/add-user/'+list.User_id"><a ><i class="fa fa-pencil-square" aria-hidden="true"></i></a></router-link></li>
                                                                    <li v-if="!list.is_admin" ><a v-if="per?.Can_delete" style="cursor:pointer" @click="deleteUser(list.User_id)"><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <!--end::Table body-->
                                                </table>
                                            <!--end::Table-->
                                            </div>
                                        </div>                             
                                    </div>
                                </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import  {useAuthStore} from '@/store/auth'
import Api from '@/APi/axios_instance'
import showToast from '@/global_components/Toast/useToast'
import sweetalert from '@/global_components/sweetAlert/SweetAlert'
import permission from '@/_helper/Permission'
export default {
    setup() {
        const auth = useAuthStore()
        const per = ref()
        const all_user = ref('')

        const DateFormate =(value)=>{
        if(value!=null)
        {
            return value.substring(0,10)
        }
        }
        
        const deleteUser= async(id)=>{
             const value = await sweetalert('warning',true,'yes','No',true,'Are you sure you would like to Delete this recorde?')
            if(value.isConfirmed){
            await Api.delete('api/users/users-Delete?User_id=' + id)
            .then(response=>{
               if(response.status==200){
                 showToast('delete successfully','success')
                 GetUsers()  
               }
            })
            .catch(error=>{
                showToast(error.message)
            })
        }
        }

        const GetUsers = async()=>{
            await Api.get('/api/users/get-by-Master-id?RegD_id=' + auth.user.RegD_id)
            .then(response=>{
             all_user.value=response.data
            })
            .catch(error=>{
                 showToast(error.message)
            })
        }

    onMounted(()=>{
        per.value = permission()
       GetUsers()
    })

        return{
            per,
            auth,
            all_user,
            deleteUser,
            GetUsers,
            DateFormate
        }
    },
}
</script>