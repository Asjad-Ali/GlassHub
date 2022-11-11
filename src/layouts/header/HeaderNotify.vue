<template>
	<div class="
      menu menu-sub menu-sub-dropdown menu-column
      w-350px w-lg-375px
      Modal_Width
    " data-kt-menu="true" style="
      z-index: 105;
      position: fixed;
      inset: 0px 0px auto auto;
      margin: 0px;
      transform: translate(-210px, 65px);
    " data-popper-placement="bottom-end">
		<div class="container topnotificationbar">
			<div class="row heading">
				<div class="col-md-12">
					<span class="
              notification_title fs-4
              fw-bolder
              text-gray-900 text-hover-primary
              me-1
              mb-2
              lh-1
            ">
						Alerts
					</span>
				</div>
			</div>
		</div>

		<!--begin::Stats-->
		<div class="card-px pt-5 pb-10 flex-grow-1">
			<div class="row g-0 mt-5 mb-10 me-2">
				<!--begin::Item-->
				<template v-for="(list,index) in  notifications?.notification?.notifications" :key="index">
				<div class="col-md-4" v-if="list.auditfirm_new_requests_path">
					<router-link :to='list.auditfirm_new_requests_path' replace>
					<div class="index-card">
						
						<div class="d-flex flex-stack">
							<div class="d-flex align-items-center me-2">
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<!-- <a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a> -->
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">auditfirm_new_requests</div>
								</div>
							</div>
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.auditfirm_new_requests}}</div>
						</div>
					</div>
					 </router-link>
				</div>
			
					
				<div class="col-md-4" v-if="list.organization_new_requests_path">
					<router-link :to="list.organization_new_requests_path" replace>
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">organization_new_requests</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.organization_new_requests}}</div>
							
							
						</div>
					</div>
					</router-link>
				</div>
				

				 <div class="col-md-4" v-if="list.sup_pending_projects_path">
					<router-link :to="list.sup_pending_projects_path" replace >
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">sup_pending_projects</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.sup_pending_projects}}</div>
							
							
						</div>
					</div>
					</router-link>
				</div> 
				 <div class="col-md-4" v-if="list.fre_pending_projects_path">
					<router-link :to="list.fre_pending_projects_path" replace>
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">fre_pending_projects</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.fre_pending_projects}}</div>
							
							
						</div>
					</div>
					</router-link>
				</div> 

					<div class="col-md-4" v-if="list.freelancer_new_requests_path">
					<router-link :to="list.freelancer_new_requests_path" replace>
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">fre_pending_projects</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.freelancer_new_requests}}</div>
							
							
						</div>
					</div>
					</router-link>
				</div>

			    <div class="col-md-4" v-if="list.org_pending_projects">
					<router-link :to="list.org_pending_projects_path" replace>
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">org_pending_projects</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.org_pending_projects}}</div>
							
							
						</div>
					</div>
					</router-link>
				</div>	
           
			    <div class="col-md-4" v-if="list.supplier_new_requests_path">
					<router-link :to="list.supplier_new_requests_path" replace>
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">supplier_new_requests_path</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.supplier_new_requests}}</div>
							
							
						</div>
					</div>
					</router-link>
				</div>	

				<!-- <div class="col-md-4"   v-if="list.audit > 0">
						<router-link :to="list.audit_pth">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">audit</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.audit}}</div>
							
							
						</div>
					</div>
						</router-link>
				</div>
			

				
				<div class="col-md-4"  v-if="list.auditfirm > 0">
						<router-link :to="list.reg_auditfirm_pth">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">auditfirm</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.auditfirm}}</div>
							
							
						</div>
					</div>
					</router-link>
				</div>
				

					
				<div class="col-md-4" v-if="list.freelancer > 0">
					<router-link :to="list.reg_freelancer_pth">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">freelancer</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.freelancer}}</div>
							
							
						</div>
					</div>
						</router-link>
				</div>
			

					
				<div class="col-md-4" v-if="list.organization > 0">
					<router-link :to="list.reg_organization_path">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">organization</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.organization}}</div>
							
							
						</div>
					</div>
						</router-link>
				</div>
			
					
				<div class="col-md-4" v-if="list.regulator > 0">
					<router-link :to="list.reg_regulator_pth">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">regulator</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.regulator}}</div>
							
							
						</div>
					</div>
						</router-link>
				</div>
			

					
				<div class="col-md-4"  v-if="list.supplier > 0">
					<router-link :to="list.reg_supplier_pth">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">{{list.Account_type_name}}</a>
									<div class="fs-7 text-muted fw-bold mt-1">supplier</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">{{list.supplier}}</div>
							
							
						</div>
					</div>
						</router-link>
				</div> -->
			
				</template>
				<!--end::Item-->
				<!--begin::Item-->
				<!-- <div class="col-md-4">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-danger">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
												<path
													d="M208 80C208 53.49 229.5 32 256 32H320C346.5 32 368 53.49 368 80V144C368 170.5 346.5 192 320 192H312V232H464C494.9 232 520 257.1 520 288V320H528C554.5 320 576 341.5 576 368V432C576 458.5 554.5 480 528 480H464C437.5 480 416 458.5 416 432V368C416 341.5 437.5 320 464 320H472V288C472 283.6 468.4 280 464 280H312V320H320C346.5 320 368 341.5 368 368V432C368 458.5 346.5 480 320 480H256C229.5 480 208 458.5 208 432V368C208 341.5 229.5 320 256 320H264V280H112C107.6 280 104 283.6 104 288V320H112C138.5 320 160 341.5 160 368V432C160 458.5 138.5 480 112 480H48C21.49 480 0 458.5 0 432V368C0 341.5 21.49 320 48 320H56V288C56 257.1 81.07 232 112 232H264V192H256C229.5 192 208 170.5 208 144V80z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">Organization</a>
									<div class="fs-7 text-muted fw-bold mt-1">Registration</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">08</div>
							
							
						</div>
					</div>
				</div> -->

				<!--end::Item-->

				<!--begin::Item-->
				<!-- <div class="col-md-4">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-success">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="none">
												<path
													d="M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">AuditFirm</a>
									<div class="fs-7 text-muted fw-bold mt-1">Registration</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">08</div>
							
							
						</div>
					</div>
				</div> -->

				<!--end::Item-->

				<!--begin::Item-->
				<!-- <div class="col-md-4">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">Supplier</a>
									<div class="fs-7 text-muted fw-bold mt-1">Project</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">08</div>
							
							
						</div>
					</div>
				</div> -->

				<!--end::Item-->
				<!--begin::Item-->
				<!-- <div class="col-md-4">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-danger">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
												<path
													d="M208 80C208 53.49 229.5 32 256 32H320C346.5 32 368 53.49 368 80V144C368 170.5 346.5 192 320 192H312V232H464C494.9 232 520 257.1 520 288V320H528C554.5 320 576 341.5 576 368V432C576 458.5 554.5 480 528 480H464C437.5 480 416 458.5 416 432V368C416 341.5 437.5 320 464 320H472V288C472 283.6 468.4 280 464 280H312V320H320C346.5 320 368 341.5 368 368V432C368 458.5 346.5 480 320 480H256C229.5 480 208 458.5 208 432V368C208 341.5 229.5 320 256 320H264V280H112C107.6 280 104 283.6 104 288V320H112C138.5 320 160 341.5 160 368V432C160 458.5 138.5 480 112 480H48C21.49 480 0 458.5 0 432V368C0 341.5 21.49 320 48 320H56V288C56 257.1 81.07 232 112 232H264V192H256C229.5 192 208 170.5 208 144V80z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">Organization</a>
									<div class="fs-7 text-muted fw-bold mt-1">Project</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">08</div>
							
							
						</div>
					</div>
				</div> -->
				<!--end::Item-->

				<!--begin::Item-->
				<!-- <div class="col-md-4">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-success">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="none">
												<path
													d="M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">AuditFirm</a>
									<div class="fs-7 text-muted fw-bold mt-1">Project</div>
								</div>
								
								
							</div>
						
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">08</div>
							
							
						</div>
					</div>
				</div> -->

				<!--end::Item-->

				<!--begin::Item-->
				<!-- <div class="col-md-4">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
								
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-info">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 512 512">
												<path
													d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
							
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">Supplier</a>
									<div class="fs-7 text-muted fw-bold mt-1">Audit</div>
								</div>
								
							</div>
							
							<div class="badge badge-light fw-bold py-4 px-3 me-2">08</div>
							
						</div>
					</div>
				</div> -->

				<!--end::Item-->
				<!--begin::Item-->
				<!-- <div class="col-md-4">
					<div class="index-card">
						<div class="d-flex flex-stack">
							
							<div class="d-flex align-items-center me-2">
							
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-danger">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
												<path
													d="M208 80C208 53.49 229.5 32 256 32H320C346.5 32 368 53.49 368 80V144C368 170.5 346.5 192 320 192H312V232H464C494.9 232 520 257.1 520 288V320H528C554.5 320 576 341.5 576 368V432C576 458.5 554.5 480 528 480H464C437.5 480 416 458.5 416 432V368C416 341.5 437.5 320 464 320H472V288C472 283.6 468.4 280 464 280H312V320H320C346.5 320 368 341.5 368 368V432C368 458.5 346.5 480 320 480H256C229.5 480 208 458.5 208 432V368C208 341.5 229.5 320 256 320H264V280H112C107.6 280 104 283.6 104 288V320H112C138.5 320 160 341.5 160 368V432C160 458.5 138.5 480 112 480H48C21.49 480 0 458.5 0 432V368C0 341.5 21.49 320 48 320H56V288C56 257.1 81.07 232 112 232H264V192H256C229.5 192 208 170.5 208 144V80z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">Organization</a>
									<div class="fs-7 text-muted fw-bold mt-1">Audit</div>
								</div>
								
							</div>
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">08</div>
							
						</div>
					</div>
				</div> -->
				<!--end::Item-->

				<!--begin::Item-->
				<!-- <div class="col-md-4">
					<div class="index-card">
						<div class="d-flex flex-stack">
						
							<div class="d-flex align-items-center me-2">
							
								<div class="symbol symbol-50px me-3">
									<div class="symbol-label bg-light">
										<span class="svg-icon svg-icon-1 svg-icon-success">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="none">
												<path
													d="M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z"
													fill="black" />
											</svg>
										</span>
									</div>
								</div>
								
								<div>
									<a href="#" class="fs-6 text-gray-800 fw-bolder">AuditFirm</a>
									<div class="fs-7 text-muted fw-bold mt-1">Audit</div>
								</div>
							
							</div>
						
							<div class="badge badge-light fw-bold py-4 px-3 me-2">08</div>
						
						</div>
					</div>
				</div> -->

				<!--end::Item-->
			</div>
		</div>
		<!--end::Stats-->
	</div>
</template>

<script setup>
import {useAuthStore} from '@/store/auth'
import {computed, onMounted, ref,watch} from 'vue'
import {notification} from '@/store/notifcations'
import {Account} from '@/store/SwitchAccount'

const store = useAuthStore()
const SwitchAccount = computed(()=> Account().Account_detail[0])
const notifications = notification()

// watch(SwitchAccount,()=>{
// 	localStorage.setItem('socket','wss://apis.glasshub.ai/websockets?RegD_id='+SwitchAccount.value?.RegD_id+'&Account_Type='+SwitchAccount.value?.Account_type+'&Category_ids='+store.user?.cat_ids)
// })
//  function doSend()
//   {
//       var msg = {
//       type: "Notification"
//     };
//       websocket.send(JSON.stringify(msg));
//   }


</script>

<style  scoped>
.index-card :hover {
	background-color: #f5f8fa;
}
</style>