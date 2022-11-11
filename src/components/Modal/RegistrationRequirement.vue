<template>
    
     <div class="modal fade show" style="display:block;background:rgba(0,0,0,0.5);opacity:1 !important">
        <div class="modal-dialog modal-lg mt-15">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Registration Requirements</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2"  @click="Close_registration_requirement_Model()">
                         <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 pb-5">

                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr class="response">
                                            <td class="response">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <!--system genrated-->
                                                        <label class="form-label ">Control #1 </label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <!--system generated but editable-->
                                                        <label class="form-label required">Refrence no</label>

                                                        <p>TPC 1</p>

                                                    </div>
                                                    <div class="col-md-6">
                                                        <!--system generated but editable-->
                                                        <label class="form-label ">Source</label>
                                                        <p>your source is here</p>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <!--system generated but editable-->
                                                        <label class="form-label ">Control statement</label>
                                                        <p>your control statement</p>

                                                    </div>
                                                </div>

                                                <span class="badge badge-light mt-4" style="background-color: #5241a1;color:white">Compliance</span>
                                                <span class="badge badge-light mt-4">Non Compliance</span>
                                                <span class="badge badge-light mt-4">Not Acceptable</span>
                                            </td>

                                        </tr>
                                        <tr class="response">
                                            <td class="response">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <!--system genrated-->
                                                        <label class="form-label ">Control #2 </label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <!--system generated but editable-->
                                                        <label class="form-label required">Refrence no</label>

                                                        <p>TPC 2</p>

                                                    </div>
                                                    <div class="col-md-6">
                                                        <!--system generated but editable-->
                                                        <label class="form-label ">Source</label>
                                                        <p>your source is here</p>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <!--system generated but editable-->
                                                        <label class="form-label ">Control statement</label>
                                                        <p>your control statement</p>

                                                    </div>
                                                </div>

                                                <span class="badge badge-light mt-4" style="background-color: #5241a1;color:white">Compliance</span>
                                                <span class="badge badge-light mt-4">Non Compliance</span>
                                                <span class="badge badge-light mt-4">Not Acceptable</span>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="form-label">Are your workers onsite are regularly checked for Covid?</label>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <input class="form-check-input" type="radio" name="account_plan" value="1">
                                                        <span class="fs-6 fw-bold text-muted">Yes</span>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input class="form-check-input" type="radio" name="account_plan" value="1">
                                                        <span class="fs-6 fw-bold text-muted">No</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="form-label">How often do you get them tested?</label>

                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <input class="form-check-input" type="radio" name="account_plan" value="1">
                                                        <span class="fs-6 fw-bold text-muted">Monthly</span>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input class="form-check-input" type="radio" name="account_plan" value="1">
                                                        <span class="fs-6 fw-bold text-muted">Weekly</span>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input class="form-check-input" type="radio" name="account_plan" value="1">
                                                        <span class="fs-6 fw-bold text-muted">Never</span>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div class="col-md-12 pb-5">
                            <h4>Required Additional Documents</h4>
                            <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Upload</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><h6><a href="#">ARRT Certificate</a></h6></td>
                                        <td>
                                            <input type="file" class="form-control form-control-lg form-control-solid">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div class="modal-footer">
                        <ul class="pl-0 send_requestfor_registeration_modal">
                            <li><button type="button" class="btn btn-light"  @click="Close_registration_requirement_Model()">Close</button></li>
                            <li><button type="button" class="btn btn-primary">Save</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  import { defineEmits } from 'vue'

const emit = defineEmits(['Close_registration_requirement_Model'])
const Close_registration_requirement_Model = () => {
    emit('Close_registration_requirement_Model', false)
}
</script>