<template>
    <div class="modal fade" tabindex="-1" id="request_requirements_m_01">
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
                            <label class="form-label required">Required Documents</label>
                            <input type="file" name="" class="form-control form-control-lg form-control-solid">
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