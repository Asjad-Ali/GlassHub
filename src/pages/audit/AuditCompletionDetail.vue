<template>
     <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                 <div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
                    <div id="kt_toolbar_container" class="container-xxl py-5">
                        <div class="row gy-0 gx-10 bg-w pd-30">
                            <div class="col-md-12">
                                <div class="row pb-5">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <!--system genrated-->
                                            <label class="form-label ">Control No:1 </label>

                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label required d-flex">Compliance Status</label>
                                            <div class="col-md-12 d-flex  mb-2">
                                                <input class="form-check-input me-5" type="radio" name="pass"
                                                       value="a" checked>
                                                <div class="me-5">
                                                    <label class="fs-6  fw-bold form-label">Complianed</label>
                                                </div>
                                                <input class="form-check-input" type="radio" name="pass"
                                                       value="b">
                                                <div class="me-5 ">
                                                    &nbsp;&nbsp;&nbsp;
                                                    <label class="fs-6 fw-bold form-label " >Non-Complianed</label>
                                                </div>
                                                <input class="form-check-input" type="radio" name="pass"
                                                       value="c" checked>
                                                <div class="me-5">
                                                    &nbsp;&nbsp;&nbsp;
                                                    <label class="fs-6  fw-bold form-label">Not-acceptable</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <!--system generated but editable-->
                                            <label class="form-label required">Refrence No</label>
                                            <input name="" value="TPC 1" class="form-control form-control-lg form-control-solid" readonly>
                                            
                                        </div>
                                        <div class="col-md-6 mb-5">
                                            <!--system generated but editable-->
                                            <label class="form-label ">Source</label>
                                            <!--<input name="" value="your source is here" class="form-control form-control-lg form-control-solid" readonly>-->
                                            <p>SACS-002 Third Party Cybersecurity Standard</p>
                                        </div>
                                        <div class="col-md-6">
                                            <!--system generated but editable-->
                                            <label class="form-label ">Control statement</label>
                                            <!--<input name="" value="your control statement" class="form-control form-control-lg form-control-solid" readonly>-->
                                            <p>Third Party must establish, maintain and communicate a Cybersecurity Acceptable Use Policy (AUP) governing the use of Third-Party Technology Assets</p>
                                        </div>
                                        <div class="col-md-6 ">
                                            <label class="form-label">Support evidance</label>
                                            <table class=" table-row-dashed table-row-gray-300 align-middle gs-0 gy-4 col-md-12">
                                                <tbody>
                                                    <tr class="mb-5 cursor-pointer">

                                                        <td>
                                                            <input type="file" class="form-control form-control-lg form-control-solid" />
                                                        </td>
                                                        <td class="pl-5">
                                                            <span class="plustoaddoption badge badge-success">Add More+</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-md-6">
                                            <!--system generated but editable-->
                                            <label class="form-label ">Compliance analysis & remarks</label>
                                            <textarea name="description" placeholder="Enter Terms&conditions" id="your_summernote" class="form-control form-control-lg form-control-solid" rows="4">Paratech has a strong password policy, and they shared as evidence the policy from the GPO and the email too. However, their Office 365 subscription doesn’t include Azure Active Directory; hence, it’s not applicable for them to access the email’s passwords policy advanced configuration.  </textarea>
                                        </div>
                                    </div>

                                </div>
                                <div class="separator separator-dashed border-gray-300 my-1"></div>
                                <div class="row pb-5">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <!--system genrated-->
                                            <label class="form-label ">Control No:2 </label>

                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label required d-flex">Compliance Status</label>
                                            <div class="col-md-12 d-flex  mb-2">
                                                <input class="form-check-input me-5" type="radio" name="pass"
                                                       value="x" checked>
                                                <div class="me-5">
                                                    <label class="fs-6  fw-bold form-label">Complianed</label>
                                                </div>
                                                <input class="form-check-input" type="radio" name="pass"
                                                       value="y">
                                                <div class="me-5 ">
                                                    &nbsp;&nbsp;&nbsp;
                                                    <label class="fs-6 fw-bold form-label ">Non-Complianed</label>
                                                </div>
                                                <input class="form-check-input" type="radio" name="pass"
                                                       value="z">
                                                <div class="me-5">
                                                    &nbsp;&nbsp;&nbsp;
                                                    <label class="fs-6  fw-bold form-label">Not-acceptable</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-md-6 mb-5">
                                            <!--system generated but editable-->
                                            <label class="form-label required ">Refrence N0</label>
                                            <input name="" value="TPC 2" class="form-control form-control-lg form-control-solid" readonly>
                                        </div>
                                        <div class="col-md-6 mb-5">
                                            <!--system generated but editable-->
                                            <label class="form-label ">Source</label>
                                            <!--<input name="" value="your source is here" class="form-control form-control-lg form-control-solid" readonly>-->
                                            <p>SACS-002 Third Party Cybersecurity Standard</p>
                                        </div>
                                        <div class="col-md-6">
                                            <!--system generated but editable-->
                                            <label class="form-label ">Control statement</label>
                                            <!--<input name="" value="your control statement" class="form-control form-control-lg form-control-solid" readonly>-->
                                            <p>Third Party must establish, maintain and communicate a Cybersecurity Acceptable Use Policy (AUP) governing the use of Third-Party Technology Assets</p>
                                        </div>
                                        <div class="col-md-6 ">
                                            <label class="form-label">Support evidance</label>
                                            <table class=" table-row-dashed table-row-gray-300 align-middle gs-0 gy-4 col-md-12">
                                                <tbody>
                                                    <tr class="mb-5 cursor-pointer">

                                                        <td>
                                                            <input type="file" class="form-control form-control-lg form-control-solid" />
                                                        </td>
                                                        <td class="pl-5">
                                                            <span class="plustoaddoption badge badge-success">Add More+</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-md-6">
                                            <!--system generated but editable-->
                                            <label class="form-label ">Compliance analysis & remarks</label>
                                            <textarea name="description" placeholder="Enter Terms&conditions" id="your_summernote" class="form-control form-control-lg form-control-solid" rows="4">Paratech has a strong password policy, and they shared as evidence the policy from the GPO and the email too. However, their Office 365 subscription doesn’t include Azure Active Directory; hence, it’s not applicable for them to access the email’s passwords policy advanced configuration.  </textarea>
                                        </div>
                                    </div>

                                </div>
                                <div class="separator separator-dashed border-gray-300 my-1"></div>
                                <div class="row pb-5">
                                    <div class="col-md-4">
                                        <!--<h5 class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing</h5>-->
                                        <h5>How often do you get them tested? </h5>
                                        <p class="response"><b>Supplier Response:</b> Monthly</p>
                                        <span class="dateandtime">31-01-2022 | 15:10 PM</span>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <input type="text" class="form-control form-control-lg form-control-solid">
                                        <span class="mt-2 badge badge-primary">Add Note</span>
                                    </div>
                                    <!--<div class="col-md-2 text-right">
                                        <select name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                            <option>Select...</option>
                                            <option value="1">Accepted</option>
                                            <option value="1">Rejected</option>
                                            <option value="3">Required Details</option>
                                        </select>
                                    </div>-->
                                </div>
                                <div class="separator separator-dashed border-gray-300 my-1"></div>
                                <div class="row pb-5">
                                    <div class="col-md-4">
                                        <h5>How often do you get them tested? </h5>
                                        <p class="response"><b>Supplier Response:</b> Monthly</p>
                                        <span class="dateandtime">31-01-2022 | 15:10 PM</span>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <input type="text" class="form-control form-control-lg form-control-solid">
                                        <span class="mt-2 badge badge-primary">Add Note</span>
                                    </div>
                                    <!--<div class="col-md-2 text-right">
                                        <select name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                            <option>Select...</option>
                                            <option value="1">Accepted</option>
                                            <option value="1">Rejected</option>
                                            <option value="3">Required Details</option>
                                        </select>
                                    </div>-->
                                </div>
                                <div class="separator separator-dashed border-gray-300 my-1"></div>
                                <div class="row pb-5">
                                    <div class="col-md-4">
                                        <h5>How often do you get them tested? </h5>
                                        <p class="response"><b>Supplier Response:</b> Monthly</p>
                                        <span class="dateandtime">31-01-2022 | 15:10 PM</span>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <input type="text" class="form-control form-control-lg form-control-solid">
                                        <span class="mt-2 badge badge-primary">Add Note</span>
                                    </div>
                                    <!--<div class="col-md-2 text-right">
                                        <select name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                            <option>Select...</option>
                                            <option value="1">Accepted</option>
                                            <option value="1">Rejected</option>
                                            <option value="3">Required Details</option>
                                        </select>
                                    </div>-->
                                </div>

                            </div>
                            <div class="separator separator-dashed border-gray-300 my-1"></div>
                            <div data-bs-toggle="modal" data-bs-target="#askformoreques" class="d-flex align-items-sm-center mb-2  mt-2">
                                <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                                    <div class="d-flex ">
                                        <div class="me-5">
                                            <label class="fs-6 fw-bold form-label">Ask any Question</label>
                                        </div>
                                        <label class="form-check form-switch form-check-custom form-check-solid">
                                            <input class="form-check-input" type="checkbox" value="0">
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="separator separator-dashed border-gray-300 my-1"></div>
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <!--begin::Table-->
                                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                        <thead>
                                            <tr>
                                                <th class="fw-bolder text-gray-800">Title</th>
                                                <th class="fw-bolder text-gray-800">Image</th>
                                                <th class="fw-bolder text-gray-800">Status</th>
                                                <th class="fw-bolder text-gray-800">Regulator Verification</th>
                                                <th class="fw-bolder text-gray-800">Remarks</th>
                                                <th class="fw-bolder text-gray-800">Regulator Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>ISO9001</td>
                                                <td>
                                                    <span data-bs-toggle="modal" data-bs-target="#viewimage">View</span>
                                                </td>
                                                <td>
                                                    <select name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                                        <option></option>
                                                        <option value="1" selected>Pending</option>
                                                        <option value="1">Re Submit</option>
                                                        <option value="2">Verified</option>
                                                        <option value="4">Rejected</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div class="d-flex align-items-sm-center mb-2">
                                                        <div data-bs-toggle="modal" data-bs-target="#messagetoregulator" class="d-flex align-items-center flex-row-fluid flex-wrap">
                                                            <div class="flex-grow-1 me-2">
                                                                <p><input class="form-check-input" type="radio"><span class="pl-5">Required</span></p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-sm-center mb-2">
                                                        <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                                                            <div class="flex-grow-1 me-2">
                                                                <p><input class="form-check-input" type="radio"><span class="pl-5">Not Required</span></p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="audit_remarks.html" target="_blank">View</a></td>
                                                <td>
                                                    <select name="" class="form-select form-select-sm form-select-solid" data-control="select1" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                                        <option></option>
                                                        <option value="2">Pending</option>
                                                        <option value="2">Verified</option>
                                                        <option value="4" selected>Rejected</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div data-bs-toggle="modal" data-bs-target="#askformoredocs" class="d-flex align-items-sm-center mb-2">
                                    <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                                        <div class="flex-grow-1 me-2">
                                            <p><input class="form-check-input" type="radio"><span class="pl-5">Ask for more documents</span></p>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>


</template>