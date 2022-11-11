<template>
    <div class="modal fade" tabindex="-1" id="request_requirements_m_03">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Registration Requirements</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <span class="svg-icon svg-icon-2x"></span>
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

                        <div class="col-md-12 pb-5 response">
                            <label class="form-label required">Required Documents</label>
                            <input type="file" name="" class="form-control form-control-lg form-control-solid mb-3">
                            <span class="badge badge-light " style="background-color: #5241a1;color:white">Verified</span>
                        </div>

                        <div class="d-flex my-4">
                            <div class="align-items-center w-200px w-sm-300px flex-column mt-3">
                                <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                                    <span class="fw-bold fs-6 text-gray-400"> Compleation</span>
                                    <span class="fw-bolder fs-6">100%</span>
                                </div>
                                <div class="h-5px w-100 bg-light mb-3">
                                    <div class="bg-success rounded h-5px" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <p class="response"><b>Congratulations!</b> It seems you are already audited for various points, you can meet the criteria completely</p>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <ul class="pl-0 send_requestfor_registeration_modal">
                            <li><button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button></li>
                            <li><button type="button" class="btn btn-primary">Send Request</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>