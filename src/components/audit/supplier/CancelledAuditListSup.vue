<template>
   <div class="table-responsive">
        <!--begin::Table-->
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <thead>
                <tr>
                    <th class="fw-bolder text-gray-800">ID</th>
                    <th class="fw-bolder text-gray-800">Date</th>
                    <th class="fw-bolder text-gray-800">Audit Firm</th>
                    <th class="fw-bolder text-gray-800">Organization</th>
                    <th class="fw-bolder text-gray-800">Live Chat/Inbox</th>
                    <th class="fw-bolder text-gray-800">Audit Requirements</th>
                    <th class="fw-bolder text-gray-800">Audit Progress</th>
                    <th class="fw-bolder text-gray-800">Status</th>
                    <th class="fw-bolder text-gray-800">View detail</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(audit,index) in auditList" :key="index">
                    <td> <router-link :to="`/supplier-audits-view/${audit.Aud_RFQ_id}`"> {{ audit.Aud_RFQ_code }} </router-link> </td>
                    <td> {{ audit.start_date?.substring(0,10) }} </td>
                    <td class="text-center"> <router-link :to="`/supplier-audits-view/${audit.Aud_RFQ_id}`"> {{ audit.Total_audit_request }} </router-link> </td>
                    <td> {{ audit.aud_org_name }}  </td>
                    <td class="chat_or_message_with_supplier">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#live_chat_modal"><i class="far fa-comment-dots"></i></a>
                        <a href="inbox.html" target="_blank"><i class="fas fa-envelope-open-text"></i></a>
                    </td>
                    <td>
                        <a class="text-primary cursor-pointer" @click="supplierCompliance(audit)" > View Details</a>
                    </td>
                    <td>
                        <div class="align-items-center w-200px w-sm-300px flex-column mt-3">
                            <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                                <span class="fw-bold fs-6 text-gray-400">Compleation Percentage</span>
                                <span class="fw-bolder fs-6">70%</span><br>
                            </div>
                            <div class="h-5px w-100 bg-light mb-3 ml-0">
                                <div class="bg-success rounded h-5px" role="progressbar" style="width: 70%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="70"></div>
                            </div>
                        </div>
                    </td>
                    <td><span class="badge badge-danger">canceled</span></td>
                    <td class="text-end view_pending_project">
                        <router-link :to="`/supplier-audits-view/${audit.Aud_RFQ_id}`">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
     <div class="modal fade" tabindex="-1" id="inprocessauditrequirements">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">View Details</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <div class="table-responsive">
                        <!--begin::Table-->
                        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                            <tbody>
                                <tr>
                                    <td><h5>Duis aute irure dolor in reprehenderit</h5></td>
                                    <td>
                                        <span class="badge badge-success">Accepted</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Duis aute irure dolor in reprehenderit</h5><p class="notee"><b>Auditor Note:</b> Dolor in reprehenderit</p>
                                        <p class="text-right w-100"><a href="#" class="fts-12">Send Response</a></p>
                                    </td>

                                    <td>
                                        <span class="badge badge-danger mb-2">Rejected</span><br>

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>Documents</h4>
                        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                            <tbody>
                                <tr>
                                    <td><h6><a href="#">ISO2001 Certificate</a></h6></td>
                                    <td>
                                        <span class="badge badge-success">Accepted</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 class="mb-3 d-flex"><a href="#">CompTIA Security Certificate</a></h6><p class="notee"><b>Auditor Note:</b> Dolor in reprehenderit</p>
                                        <p class="text-right w-100"><a href="#" class="fts-12">Send Response</a></p>
                                    </td>

                                    <td>
                                        <span class="badge badge-danger mb-2">Rejected</span><br>

                                    </td>
                                </tr>
                            </tbody>
                        </table>

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
                    <button type="button" class="btn btn-light">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
    <!--Start View Quotation Modal-->
    <div class="modal fade" tabindex="-1" id="view_quotation_modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">View Quotation</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <embed src="assets/admin/media/quotation_template.pdf" frameborder="0" width="100%" height="500px">
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!--End Quotation Modal-->
    <!--Start Payment Modal-->
    <div class="modal fade" tabindex="-1" id="projectpayment_modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Project Payments</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">

                    <div class="table-responsive project_payments_history">
                        <h6>Paymnet History</h6>
                        <div class="separator separator-dashed border-gray-300 my-5"></div>
                        <!--begin::Table-->
                        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                            <thead>
                                <tr>
                                    <th class="fw-bolder text-gray-800">Date</th>
                                    <th class="fw-bolder text-gray-800">Payment Type</th>
                                    <th class="fw-bolder text-gray-800">Total Amount</th>
                                    <th class="fw-bolder text-gray-800">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12-01-20222</td>
                                    <td>Online Transfer</td>
                                    <td>$25000</td>
                                    <td><span class="badge badge-success">Send Successfully</span></td>
                                </tr>
                                <tr>
                                    <td>16-01-20222</td>
                                    <td>Online Transfer</td>
                                    <td>$15000</td>
                                    <td><span class="badge badge-success">Send Successfully</span></td>
                                </tr>
                                <tr>
                                    <td>12-01-20222</td>
                                    <td>Cheque <a href="assets/admin/media/bankcheque.png" target="_blank"><span class="badge badge-secondary"></span>View Cheque</a></td>
                                    <td>$25000</td>
                                    <td><span class="badge badge-success">Send Successfully</span></td>
                                </tr>
                                <tr>
                                    <td>12-01-20222</td>
                                    <td>Cheque <a href="assets/admin/media/bankcheque.png" target="_blank"><span class="badge badge-secondary"></span>View Cheque</a></td>
                                    <td>$25000</td>
                                    <td><span class="badge badge-success">Send Successfully</span></td>
                                </tr>
                                <tr>
                                    <td>12-01-20222</td>
                                    <td>Cheque <a href="assets/admin/media/bankcheque.png" target="_blank"><span class="badge badge-secondary"></span>View Cheque</a></td>
                                    <td>$25000</td>
                                    <td><span class="badge badge-success">Send Successfully</span></td>
                                </tr>
                                <tr>
                                    <td>12-01-20222</td>
                                    <td>Cheque <a href="assets/admin/media/bankcheque.png" target="_blank"><span class="badge badge-secondary"></span>View Cheque</a></td>
                                    <td>$25000</td>
                                    <td><span class="badge badge-success">Send Successfully</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div class="row mt-20">
                        <h6>Send Payment</h6>
                        <div class="separator separator-dashed border-gray-300 my-5"></div>
                        <div class="col-md-2 vertical_text_mid">
                            <span>Enter Amount</span>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <button class="btn w-100  btn-primary">Send Online</button>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col">
                                    <div class="separator separator-dashed border-gray-300 my-8"></div>
                                </div>
                                <div class="col-auto my-5">OR</div>
                                <div class="col">
                                    <div class="separator separator-dashed border-gray-300 my-8"></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2 vertical_text_mid">
                            <span>Upload Check</span>
                        </div>
                        <div class="col-md-4">
                            <input type="file" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-2 vertical_text_mid">
                            Cheque Amount
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-2">
                            <button class="btn w-100  btn-primary">Send</button>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <!--End Live Chat Modal-->
    <!--Start Live Chat Modal-->
    <div class="modal fade" tabindex="-1" id="live_chat_modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="d-flex justify-content-center flex-column me-3">
                        <a href="#" class="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1">Design786</a>
                        <!--begin::Info-->
                        <div class="mb-0 lh-1">
                            <span class="badge badge-success badge-circle w-10px h-10px me-1"></span>
                            <span class="fs-7 fw-bold text-muted">Active</span>
                        </div>
                        <!--end::Info-->
                    </div>
                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <div class="card" id="kt_chat_messenger">
                        <!--begin::Card body-->
                        <div class="card-body" id="kt_chat_messenger_body">
                            <!--begin::Messages-->
                            <div class="scroll-y me-n5 pe-5 max-h-350">
                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-5">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-1">
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/img/avatars/300-6.jpg">
                                            </div>
                                            <!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Design786</a>
                                                <span class="text-muted fs-7 mb-1">2 mins</span>
                                            </div>
                                            <!--end::Details-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->
                                <!--begin::Message(out)-->
                                <div class="d-flex justify-content-end mb-5">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-end">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-1">
                                            <!--begin::Details-->
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">5 mins</span>
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            <!--end::Details-->
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/img/avatars/300-5.jpg">
                                            </div>
                                            <!--end::Avatar-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(out)-->
                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-5">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-1">
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/img/avatars/300-6.jpg">
                                            </div>
                                            <!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span class="text-muted fs-7 mb-1">1 Hour</span>
                                            </div>
                                            <!--end::Details-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->
                                <!--begin::Message(out)-->
                                <div class="d-flex justify-content-end mb-5">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-end">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-1">
                                            <!--begin::Details-->
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">2 Hours</span>
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            <!--end::Details-->
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/img/avatars/300-5.jpg">
                                            </div>
                                            <!--end::Avatar-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(out)-->
                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-5">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-1">
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/img/avatars/300-6.jpg">
                                            </div>
                                            <!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span class="text-muted fs-7 mb-1">3 Hours</span>
                                            </div>
                                            <!--end::Details-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Proident excepteur ad velit occaecat qui minim occaecat veniam.</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->
                            </div>
                            <!--end::Messages-->
                        </div>
                        <!--end::Card body-->
                    </div>
                </div>

                <div class="modal-footer">
                    <label class="form-label text-left">Type Message</label>
                    <input name="" class="mb-2 form-control form-control-lg form-control-solid">
                    <button type="button" class="btn w-100 btn-primary">Send</button>
                </div>
            </div>
        </div>
    </div>
    <!--End Live Chat Modal-->
    <!--Start Request For PO Modal-->
    <div class="modal fade" tabindex="-1" id="project_po_modal_view">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Audit PO</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-2 vertical_text_mid">
                            <label class="form-label mb-0">Upload Audit PO Files</label>
                        </div>
                        <div class="col-md-6">
                            <input type="file" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <button class="btn w-100  btn-primary">Send Audit PO</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="separator separator-dashed border-gray-300 my-8"></div>
                        </div>
                        <div class="col-auto my-5">OR</div>
                        <div class="col">
                            <div class="separator separator-dashed border-gray-300 my-8"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h6 class="d-flex mb-3 text-muted">Audit PO#: 32948392</h6>
                            <h3 class="d-flex mb-3">AceTech Solutions LLC</h3>
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>info@acetechsolutionsllc.com</td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>869 Saint Johns Pl. Brooklyn, NY 11216</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-12 mb-10">
                            <label class="form-label required">Type Heading</label>
                            <input name="" class="mb-5 form-control form-control-lg form-control-solid">
                            <label class="form-label required">Your Text</label>
                            <textarea class="form-control form-control-solid" rows="6" name="message" placeholder=""></textarea>
                            <div class="text-right pt-2">
                                <span class="text-right table-add float-right mb-3">
                                    <a href="#!" class="text-success">
                                        <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-12 rfq_editable_table  mb-10">
                            <!-- Editable table -->
                            <div class="card">
                                <div class="card-body p-0">
                                    <div id="table" class="table-editable">
                                        <table class="table table-bordered table-responsive-md table-striped text-center">
                                            <thead>
                                                <tr>
                                                    <th class="text-center fw-bolder text-gray-800" contenteditable="true">type heading</th>
                                                    <th class="text-center fw-bolder text-gray-800" contenteditable="true">type heading</th>
                                                    <th class="text-center fw-bolder text-gray-800" contenteditable="true">type heading</th>
                                                    <th class="text-center fw-bolder text-gray-800" contenteditable="true">type heading</th>
                                                    <th class="text-center fw-bolder text-gray-800" contenteditable="true">type heading</th>
                                                    <th class="text-center fw-bolder text-gray-800">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="pt-3-half" contenteditable="true">type text</td>
                                                    <td class="pt-3-half" contenteditable="true">type text</td>
                                                    <td class="pt-3-half" contenteditable="true">type text</td>
                                                    <td class="pt-3-half" contenteditable="true">type text</td>
                                                    <td class="pt-3-half" contenteditable="true">type text</td>
                                                    <td>
                                                        <span class="badge badge-danger">remove</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="row text-right">
                                            <div class="col-md-12">
                                                <span class="text-right table-add float-right mb-3 mr-30">
                                                    <a href="#!" class="text-success">
                                                        <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- Editable table -->
                        </div>
                        <div class="col-md-12">
                            <label class="form-label">Type Heading</label>
                            <input name="" class="mb-5 form-control form-control-lg form-control-solid">
                            <label class="form-label">Your Text</label>
                            <textarea class="form-control form-control-solid" rows="6" name="message" placeholder=""></textarea>
                            <div class="text-right pt-2">
                                <span class="text-right table-add float-right mb-3">
                                    <a href="#!" class="text-success">
                                        <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <h6 class="d-flex mb-3 text-muted">Sending To</h6>
                            <h3 class="d-flex mb-3">Design786</h3>
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>info@design786.com</td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>869 Saint Johns Pl. Brooklyn, NY 11216</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div class="col-md-6"></div>

                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Send Audit PO</button>
                </div>
            </div>
        </div>
    </div>
    <!--end Request For PO Modal-->
    <!--Start Request For Proposal Modal-->
    <div class="modal fade" tabindex="-1" id="rfq_view">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Request For Quotation</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-2 vertical_text_mid">
                            <label class="form-label mb-0">Upload Quotation Files</label>
                        </div>
                        <div class="col-md-6">
                            <input type="file" class="form-control form-control-lg form-control-solid">
                        </div>
                        <div class="col-md-4">
                            <button class="btn w-100  btn-primary">Send Quotation Request</button>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col">
                                    <div class="separator separator-dashed border-gray-300 my-8"></div>
                                </div>
                                <div class="col-auto my-5">OR</div>
                                <div class="col">
                                    <div class="separator separator-dashed border-gray-300 my-8"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h6 class="d-flex mb-3 text-muted">Quotation#: 32948392</h6>
                            <h3 class="d-flex mb-3">AceTech Solutions LLC</h3>
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>info@acetechsolutionsllc.com</td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>869 Saint Johns Pl. Brooklyn, NY 11216</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-12 mb-10">
                            <label class="form-label required">Type Heading</label>
                            <input name="" class="mb-5 form-control form-control-lg form-control-solid">
                            <label class="form-label required">Your Text</label>
                            <textarea class="form-control form-control-solid" rows="6" name="message" placeholder=""></textarea>
                            <div class="text-right pt-2">
                                <span class="text-right table-add float-right mb-3">
                                    <a href="#!" class="text-success">
                                        <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-12 rfq_editable_table mb-10">
                            <!-- Editable table -->
                            <div class="card">
                                <div class="card-body p-0">
                                    <div id="table" class="table-editable">
                                        <table class="table table-bordered table-responsive-md table-striped text-center">
                                            <thead>
                                                <tr>
                                                    <th class="text-center fw-bolder text-gray-800" contenteditable="true">type heading</th>
                                                    <th class="text-center fw-bolder text-gray-800" contenteditable="true">type heading</th>
                                                    <th class="text-center fw-bolder text-gray-800" contenteditable="true">type heading</th>
                                                    <th class="text-center fw-bolder text-gray-800" contenteditable="true">type heading</th>
                                                    <th class="text-center fw-bolder text-gray-800" contenteditable="true">type heading</th>
                                                    <th class="text-center fw-bolder text-gray-800">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="pt-3-half" contenteditable="true">type text</td>
                                                    <td class="pt-3-half" contenteditable="true">type text</td>
                                                    <td class="pt-3-half" contenteditable="true">type text</td>
                                                    <td class="pt-3-half" contenteditable="true">type text</td>
                                                    <td class="pt-3-half" contenteditable="true">type text</td>
                                                    <td>
                                                        <span class="badge badge-danger">remove</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="row text-right">
                                            <div class="col-md-12">
                                                <span class="text-right table-add float-right mb-3 mr-30">
                                                    <a href="#!" class="text-success">
                                                        <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- Editable table -->
                        </div>
                        <div class="col-md-12">
                            <label class="form-label">Type Heading</label>
                            <input name="" class="mb-5 form-control form-control-lg form-control-solid">
                            <label class="form-label">Your Text</label>
                            <textarea class="form-control form-control-solid" rows="6" name="message" placeholder=""></textarea>
                            <div class="text-right pt-2">
                                <span class="text-right table-add float-right mb-3">
                                    <a href="#!" class="text-success">
                                        <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h6 class="d-flex mb-3 text-muted">Sending To</h6>
                            <h3 class="d-flex mb-3">Design786</h3>
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>info@design786.com</td>
                                        </tr>
                                        <tr>
                                            <td>Head Office Address:</td>
                                            <td>869 Saint Johns Pl. Brooklyn, NY 11216</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div class="col-md-6"></div>
                        <div class="col-md-12 mt-20">
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
                                        <!--begin::Table-->
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

                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Send Quotation Request</button>
                </div>
            </div>
        </div>
    </div>
    <!--End Request For Proposal Modal-->
    <!--Start Rating Modal-->
    <div class="modal fade" tabindex="-1" id="rating_view">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Rating</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <div class="row">

                        <div class="col-md-12 text-center mb-10">
                            <i class="fa fa-star text-warning rating-size"></i>
                            <i class="fa fa-star text-warning rating-size"></i>
                            <i class="fa fa-star text-warning rating-size"></i>
                            <i class="fa fa-star text-warning rating-size"></i>
                            <i class="fa fa-star rating-size"></i>
                        </div>

                        <div class="col-md-2">
                            <label class="form-label mb-0">Comment's</label>
                        </div>
                        <div class="col-md-12">
                            <textarea class="form-control form-control-lg form-control-solid"></textarea>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <!--End Rating Modal-->
    <!--begin::Chat drawer-->
    <div id="kt_drawer_chat" class="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
        <!--begin::Messenger-->
        <div class="card w-100 rounded-0 border-0" id="kt_drawer_chat_messenger">
            <!--begin::Card header-->
            <div class="card-header pe-5" id="kt_drawer_chat_messenger_header">
                <!--begin::Title-->
                <div class="card-title">
                    <!--begin::User-->
                    <div class="d-flex justify-content-center flex-column me-3">
                        <a href="#" class="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1">Messages</a>
                    </div>
                    <div class="d-flex justify-content-center flex-column me-3 topviewallmessage_btn">
                        <a href="inbox.html" class="btn btn-xs btn-primary">View All In Inbox</a>
                    </div>
                    <!--end::User-->
                </div>
                <!--end::Title-->
                <div class="card-toolbar">
                    <!--begin::Close-->
                    <div class="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_chat_close">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                        <span class="svg-icon svg-icon-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black"></rect>
                            </svg>
                        </span>
                        <!--end::Svg Icon-->
                    </div>
                    <!--end::Close-->
                </div>

            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body" id="kt_drawer_chat_messenger_body">
                <!--begin::Messages-->
                <div class="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
                    <!--begin::Message(in)-->
                    <div class="d-flex justify-content-start mb-10">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-start">
                            <!--begin::User-->
                            <div class="d-flex align-items-center mb-2">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-35px symbol-circle">
                                    <img alt="Pic" src="assets/img/avatars/300-1.jpg" />
                                </div>
                                <!--end::Avatar-->
                                <!--begin::Details-->
                                <div class="ms-3">
                                    <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Abraham Jhonson</a>
                                    <span class="text-muted fs-7 mb-1">2 mins ago</span>
                                </div>
                                <!--end::Details-->
                            </div>
                            <!--end::User-->
                            <!--begin::Text-->
                            <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                            <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                    </div>
                    <!--end::Message(in)-->
                    <div class="d-flex justify-content-start mb-10">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-start">
                            <!--begin::User-->
                            <div class="d-flex align-items-center mb-2">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-35px symbol-circle">
                                    <img alt="Pic" src="assets/img/avatars/300-2.jpg" />
                                </div>
                                <!--end::Avatar-->
                                <!--begin::Details-->
                                <div class="ms-3">
                                    <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Jaquline Fernandez</a>
                                    <span class="text-muted fs-7 mb-1">25 mins ago</span>
                                </div>
                                <!--end::Details-->
                            </div>
                            <!--end::User-->
                            <!--begin::Text-->
                            <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                            <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                    </div>
                    <!--end::Message(in)-->
                    <div class="d-flex justify-content-start mb-10">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-start">
                            <!--begin::User-->
                            <div class="d-flex align-items-center mb-2">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-35px symbol-circle">
                                    <img alt="Pic" src="assets/img/avatars/300-3.jpg" />
                                </div>
                                <!--end::Avatar-->
                                <!--begin::Details-->
                                <div class="ms-3">
                                    <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Birline Tilo</a>
                                    <span class="text-muted fs-7 mb-1">36 mins ago</span>
                                </div>
                                <!--end::Details-->
                            </div>
                            <!--end::User-->
                            <!--begin::Text-->
                            <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                            <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                    </div>
                    <!--end::Message(in)-->
                    <div class="d-flex justify-content-start mb-10">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-start">
                            <!--begin::User-->
                            <div class="d-flex align-items-center mb-2">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-35px symbol-circle">
                                    <img alt="Pic" src="assets/img/avatars/300-4.jpg" />
                                </div>
                                <!--end::Avatar-->
                                <!--begin::Details-->
                                <div class="ms-3">
                                    <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Lora Mike</a>
                                    <span class="text-muted fs-7 mb-1">22 mins ago</span>
                                </div>
                                <!--end::Details-->
                            </div>
                            <!--end::User-->
                            <!--begin::Text-->
                            <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                            <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                    </div>
                    <!--end::Message(in)-->
                </div>
                <!--end::Messages-->
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps, toRefs} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const supplierCompliance = (audit) => {
    localStorage.setItem('data',JSON.stringify(audit))
    router.push({path: "/supplier-audit-requirements-details"})
}

const props = defineProps({
    auditList:{
        type: Array,
        required: true
    }
})
const { auditList } = toRefs(props)
</script>

<style>

</style>