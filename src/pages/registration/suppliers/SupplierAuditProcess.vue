<template>
    <!--begin::Main-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">
				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
				
                    
                    <!--begin::Toolbar-->
					<div class="bg-lg py-5 py-lg-5" id="kt_toolbar">
						<!--begin::Container-->
						<div id="kt_toolbar_container" class="container-xxl py-5">
							<!--begin::Row-->
							<div class="row gy-0 gx-10">
                                <div class="col-xl-12 bg-w pd-30">
                                    
                                    <div class="row ">
                                        <div class="col-md-8">
                                            <h1 class="pb-2">Audit Process Details</h1>    
                                        </div>
                                        <div class="col-md-4 text-right">
                                        </div>
                                    </div>
                                    
                                    <div class="table-responsive">
                                        <!--begin::Table-->
                                        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Date</th>
                                                    <th class="fw-bolder text-gray-800">Customer Name</th>
                                                    <th class="fw-bolder text-gray-800">Type</th>
                                                    <th class="fw-bolder text-gray-800">Audit Progress</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>3432</td>
                                                    <td>02/02/2022</td>
                                                    <td>Al-Bari Chamicals</td>
                                                    <td>
                                                        Supplier
                                                    </td>
                                                    <td>
                                                        <div class="align-items-center w-200px w-sm-300px flex-column mt-3">
                                                            <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                                                                <span class="fw-bold fs-6 text-gray-400">Compleation Percentage</span>
                                                                <span class="fw-bolder fs-6">50%</span><br>                                                            
                                                            </div>
                                                            <div class="h-5px w-100 bg-light mb-3 ml-0">
                                                                <div class="bg-success rounded h-5px" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
                                                            </div>
                                                        </div>
                                                    </td> 
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                    
                                    
                                    
                                    <div class="row">
                                        <div class="col-md-12 mt-10">
                                            <h1 class="pb-2">Compliance Criteria</h1>    
                                            <div class="separator separator-dashed border-gray-300 my-4"></div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="row pb-5">
                                                <div class="col-md-4">
                                                    <!--<h5 class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing</h5>-->
                                                    <h5>How often do you get them tested? </h5>
                                                    <p class="response"><b>Response:</b> Monthly</p>
                                                    <span class="dateandtime">31-01-2022 | 15:10 PM</span>
                                                </div>
                                                <div class="col-md-2 text-right">
                                                    <span class="badge badge-primary">Accepted</span>
                                                </div>
                                            </div>
                                            <div class="separator separator-dashed border-gray-300 my-1"></div>
                                            <div class="row pb-5">
                                                <div class="col-md-4">
                                                    <h5>How often do you get them tested? </h5>
                                                    <p class="response"><b>Response:</b> Monthly</p>
                                                    <span class="dateandtime">31-01-2022 | 15:10 PM</span>
                                                </div>
                                                <div class="col-md-2 text-right">
                                                    <span class="badge badge-primary">Accepted</span>
                                                </div>
                                            </div>
                                            <div class="separator separator-dashed border-gray-300 my-1"></div>
                                            <div class="row pb-5">
                                                <div class="col-md-4">
                                                    <h5>How often do you get them tested? </h5>
                                                    <p class="response"><b>Response:</b> Monthly</p>
                                                    <span class="dateandtime">31-01-2022 | 15:10 PM</span>
                                                </div>
                                                <div class="col-md-2 text-right">
                                                    <span class="badge badge-light">Rejected</span>
                                                </div>
                                            </div>
                                            <div class="separator separator-dashed border-gray-300 my-1"></div>
                                        </div>


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
                                                                    <span class="badge badge-primary">Pending</span>
                                                                </td>
                                                                <td>
                                                                    <span>Not Required</span>
                                                                </td>
                                                                <td>
                                                                    <a href="audit_remarks.html" target="_blank">View</a>
                                                                </td>
                                                                <td>
                                                                    <span class="badge badge-primary">Pending</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
            </div>
        </div>
        
        <!--Start Request For Proposal Modal-->
        <div class="modal fade" tabindex="-1" id="viewimage">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">View Documents</h5>

                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                        <!--end::Close-->
                    </div>

                    <div class="modal-body">
                        doodoosdfsdf
                    </div>

                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
        <!--End Request For Proposal Modal-->
        <!---->
        <!---->		
</template>