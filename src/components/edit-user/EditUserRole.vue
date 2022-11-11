<template>
      <div class="card mb-10 pb-10 mb-xxl-8">
                                    <div class="card-body pb-0">
                                        <div class="row mb-10">
                                            <div class="col-md-8">
                                                <h1 class="pb-2">Edit User</h1>    
                                            </div>
                                            <div class="col-md-4 text-right text-hover-white">                                                
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-8 pr-10">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h4 class="pb-2">User Permissions</h4> 
                                                        <div class="separator separator-dashed border-gray-300 my-2"></div>
                                                    </div>
                                                </div>
                                               <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                                    <!--begin::Table head-->
                                                    <thead>
                                                        <tr class="fw-bolder text-muted">

                                                            <th class="min-w-250px">Modules</th>
                                                            <th class="min-w-140px text-center">View</th>
                                                            <th class="min-w-140px text-center">View, Edit</th>
                                                            <th class="min-w-140px text-center">View, Edit, Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <!--end::Table head-->
                                                    <!--begin::Table body-->
                                                    <tbody>
                                                        <tr>
                                                            <td>    
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">Dashboard</span> 
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg" checked>
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg" checked>
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg" checked>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>    
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">Registration (Suppliers, Audit Firms)</span> 
                                                            </td>
                                                            <td class=" text-center">   
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">   
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>    
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">Projects</span> 
                                                            </td>
                                                            <td class=" text-center">   
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg" checked>
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg" checked>
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg" checked>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>    
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">Certificats</span> 
                                                            </td>
                                                            <td class=" text-center">   
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>    
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">Compliances</span> 
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg" checked>
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg" checked>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>    
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">Company Profile Settings</span> 
                                                            </td>
                                                            <td class=" text-center">   
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>    
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">Message Inbox</span> 
                                                            </td>
                                                            <td class=" text-center">   
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>    
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">Live chat</span> 
                                                            </td>
                                                            <td class=" text-center">   
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>    
                                                                <span class="text-muted fw-bold text-muted d-block fs-7">User Access Control</span> 
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>  
                                                            <td class=" text-center">  
                                                                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <!--end::Table body-->
                                                </table>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h4 class="pb-2">User Details</h4> 
                                                        <div class="separator separator-dashed border-gray-300 my-2"></div>
                                                    </div>
                                                </div>
                                                <label class="form-label required">Name</label>
                                                <input type="text" name="" class="form-control form-control-lg form-control-solid mb-5" value="Mike Melody">
                                                
                                                <label class="form-label required">Email</label>
                                                <input type="text" name="" class="form-control form-control-lg form-control-solid mb-5" value="mikemelody@hotmail.com">
                                                
                                                <label class="form-label required">Phone</label>
                                                <input type="text" name="" class="form-control form-control-lg form-control-solid mb-5" value="+1 34234 2343">
                                                
                                                <label class="form-label required">Role Name</label>
                                                <input type="text" name="" class="form-control form-control-lg form-control-solid mb-5" value="Customer Care">
                                                
                                                <div class="text-right text-hover-white">
                                                    <a href="users-list.html" class="text-hover-white">
                                                        <button class="btn btn-primary w-100">Update</button>
                                                    </a>
                                                    <a href="users-list.html" class="text-hover-white mt-5 d-flex">
                                                        <button class="btn btn-danger btn-outline-danger w-100">Delete</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
</template>
