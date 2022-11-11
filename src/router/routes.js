import { createRouter, createWebHistory } from 'vue-router';
const Login =()=>import( '@/components/login/LoginApp.vue')
const VerifyOTP =()=>import( '@/pages/forget-password/ComfirmOtp.vue')
const ComfirmPassword =()=>import( '@/pages/forget-password/ComfirmPassword.vue')
const ResetPassword =()=>import( '@/pages/forget-password/ResetPassword.vue')
const Dashboard =()=>import( '@/pages/Dashboard.vue')
const Chat =()=>import( '@/pages/Chat.vue')
const MainLayout =()=>import( '@/pages/MainLayout.vue')
const MyProfile =()=>import( '@/pages/MyProfile.vue')
const CompanyProfile =()=>import( '@/pages/CompanyProfile.vue')
const EditMyProfile =()=>import( '@/pages/EditMyProfile.vue')
const EditCompanyProfile =()=>import( '@/pages/EditCompanyProfile.vue')
const UserAccess =()=>import( '@/pages/UserAccess.vue')
const AddNewUser =()=>import( '@/pages/AddNewUser.vue')
const EditUser =()=>import( '@/pages/EditUser.vue')
const MySetting =()=>import( '@/pages/MySetting.vue')
const CompanySetting =()=>import( '@/pages/CompanySetting.vue')
const AllCertificate =()=>import( '@/pages/certificate/AllCertificate.vue')
const ExpiredCertificate =()=>import( '@/pages/certificate/ExpiredCertificate.vue')
const AddCertificate =()=>import( '@/pages/certificate/AddCertificate.vue')

const SupplierRegister =()=>import( '@/pages/registration/suppliers/SupRegister.vue')
const SupplierNewRequest =()=>import( '@/pages/registration/suppliers/SupNewRequest.vue')
const SupplierAuditProcess =()=>import( '@/pages/registration/suppliers/SupplierAuditProcess.vue')
const RegistrationProfile =()=>import( '@/pages/registration/ProfileInRegistration.vue')

const RegRequestRegistration =()=>import( '@/pages/registration/suppliers/SupRequestRegistration.vue')

const FreelancerRegister =()=>import( '@/pages/registration/freelancers/FreelancerRegister.vue')
const FreelancerNewRequest =()=>import( '@/pages/registration/freelancers/FreelancerNewRequest.vue')
const FreelancerAuditProcess =()=>import( '@/pages/registration/freelancers/FreelancerAuditProcess.vue')
const FreelancerRequestRegistration =()=>import( '@/pages/registration/freelancers/FreelancerRequestRegistration.vue')

const AuditFirmRegister =()=>import( '@/pages/registration/audit-firms/AuditFirmRegister.vue')
const AuditFirmNewRequest =()=>import( '@/pages/registration/audit-firms/AuditFirmNewRequest.vue')
const AuditFirmAuditProcess =()=>import( '@/pages/registration/audit-firms/AuditFirmAuditProcess.vue')
const AuditFirmRequestRegistration =()=>import( '@/pages/registration/audit-firms/AuditFirmRequestRegistration.vue')

const OrganizationRegister =()=>import( '@/pages/registration/organization/OrganizationRegister.vue')
const OrganizationNewRequest =()=>import( '@/pages/registration/organization/OrganizationNewRequest.vue')
const OrganizationProcess =()=>import( '@/pages/registration/organization/OrganizationProcess.vue')
const OrganizationRequestRegistration =()=>import( '@/pages/registration/organization/OrganizationRequestRegistration.vue')


const FinancialTransaction =()=>import( '@/pages/financials/FinancialTransaction.vue')
const FinancialSummary =()=>import( '@/pages/Summary/FinancialSummary.vue')

const PostProjectToFreelancer =()=>import( '@/pages/projects/PostProjectToFreelancer.vue')
const ProjectDetails =()=>import( '@/pages/projects/ProjectDetails.vue');


const AllProjects =()=>import( '@/pages/projects/AllProjects.vue');
const InProcessProjects =()=>import( '@/pages/projects/InProcessProjects.vue');
const PendingProjects =()=>import( '@/pages/projects/PendingProjects.vue');
const CancelledProjects =()=>import( '@/pages/projects/CancelledProjects.vue');
const CompletedProjects =()=>import( '@/pages/projects/CompletedProjects.vue');
const PostProjectToSupplier =()=>import( '@/pages/projects/PostProjectToSupplier.vue')
const PostProjectForBid =()=>import( '@/pages/projects/PostProjectForQuotation.vue')

const AllCompliance =()=>import( '@/pages/compliance/AllCompliance.vue')
const AddCompliance =()=>import( '@/pages/compliance/AddCompliance.vue')


//Audit

const AllAudit =()=>import( '@/pages/audit/Supplier/AllAudit.vue')
const RequestAudit =()=>import( '@/pages/audit/audit-firm/RequestAudit.vue')
const PendingAudit =()=>import( '@/pages/audit/Supplier/PendingAudit.vue')
const CompletedAudit =()=>import( '@/pages/audit/CompletedAudit.vue')
const InProcessAudit =()=>import( '@/pages/audit/InProcessAudit.vue')
const CancelledAudit =()=>import( '@/pages/audit/CancelledAudit.vue')
const SupplierAuditView =()=>import('@/pages/audit/Supplier/SupplierAuditView.vue')
const AuditRequirementsDetails =()=>import( '@/pages/audit/audit-firm/AuditRequirementsDetails.vue')
const SupAuditRequirementsDetails =()=>import( '@/pages/audit/Supplier/SupAuditRequirementsDetails.vue')
const RegulatorsRegistered =()=>import( '@/pages/registration/regulator/RegulatorsRegistered.vue')
const RegulatorsNewRequest =()=>import( '@/pages/registration/regulator/RegulatorsNewRequest.vue')
const RegulatorsRequestRegistration =()=>import( '@/pages/registration/regulator/RegulatorsRequestRegistration.vue')

const AuditTicket =()=>import( '@/pages/audit/audit-firm/AuditTicket.vue')
const AuditCompletionDetail =()=>import( '@/pages/audit/AuditCompletionDetail.vue')
// Audit report
const DocumentControl =()=>import( '@/pages/audit/audit-firm/report/DocumentControl.vue')
const ThirdPartyInformation =()=>import( '@/pages/audit/audit-firm/report/ThirdPartyInformation.vue')
const AuditFirmInformation =()=>import( '@/pages/audit/audit-firm/report/AuditFirmInformation.vue')
const GuideLines =()=>import( '@/pages/audit/audit-firm/report/Guide-Lines.vue')
const ExecutiveSummary =()=>import( '@/pages/audit/audit-firm/report/ExecutiveSummary.vue')
const AssessmentControls =()=>import( '@/pages/audit/audit-firm/report/AssessmentControls.vue')
const ReportSummary =()=>import( '@/pages/audit/audit-firm/report/ReportSummary.vue')

const DocumentControlView =()=>import( '@/pages/audit/Supplier/report/DocumentControlView.vue')
const ThirdPartyInformationView =()=>import( '@/pages/audit/Supplier/report/ThirdPartyInformationView.vue')
const AuditFirmInformationView =()=>import( '@/pages/audit/Supplier/report/AuditFirmInformationView.vue')
const GuideLinesView =()=>import( '@/pages/audit/Supplier/report/Guide-LinesView.vue')
const ExecutiveSummaryView =()=>import( '@/pages/audit/Supplier/report/ExecutiveSummaryView.vue')
const AssessmentControlsView =()=>import( '@/pages/audit/Supplier/report/AssessmentControlsView.vue')
const ReportSummaryView =()=>import( '@/pages/audit/Supplier/report/ReportSummaryView.vue')

//  Regulator Dashboard
  // offering certificates

const OfferingAddCertificate =()=>import( '@/pages/offering/OfferingAddCertificate.vue')
const OfferingVerifyCertificate =()=>import( '@/pages/offering/OfferingVerifyCertificate.vue')
const OfferingAllCertificate =()=>import( '@/pages/offering/OfferingAllCertificates.vue')


 // Reports

 const GraphicalReport =()=>import( '@/pages/report/GraphicalReport.vue')
 const DataReport =()=>import( '@/pages/report/DataReport.vue')

// const { useAuthStore } =()=>import( '@/store/auth';


const TermCondition =()=>import( '@/pages/term_condition.vue')

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
      },
      {
        name: 'myProfile',
        path: 'my-profile',
        component: MyProfile,
        meta: { requiresAuth: true },
      },
      {
        path: 'company-profile',
        component: CompanyProfile,
        meta: { requiresAuth: true },
      },
      {
        path: 'edit-user-profile',
        component: EditMyProfile,
        meta: { requiresAuth: true },
      },
      {
        path: 'edit-company-profile',
        component: EditCompanyProfile,
        meta: { requiresAuth: true },
      },
      {
        path: 'user-list',
        component: UserAccess,
        meta: { requiresAuth: true },
      },
      {
        path: '/add-user/:id?',
        component: AddNewUser,
        meta: { requiresAuth: true },
      },
      {
        path: 'edit-user',
        component: EditUser,
        meta: { requiresAuth: true },
      },
      {
        path: 'setting',
        component: MySetting,
        meta: { requiresAuth: true },
      },
      {
        path: 'company-setting',
        component: CompanySetting,
        meta: { requiresAuth: true },
      },
      {
        path: 'certificate',
        component: AllCertificate,
        meta: { requiresAuth: true },
      },
      {
        path: 'expired-certificate',
        component: ExpiredCertificate,
        meta: { requiresAuth: true },
      },
      {
        path: '/add-certificate/:id?',
        component: AddCertificate,
        meta: { requiresAuth: true },
      },

      {
        path: 'chat',
        component: Chat,
        name: 'chat',
        meta: { requiresAuth: true },
      },
      {
        name: 'dashboard_footer',
        path: 'dashboard_footer',
        component: TermCondition,
        meta: { requiresAuth: true },
      },
      {
        path: 'suppliers_register',
        component: SupplierRegister,
        meta: { requiresAuth: true }
      },
      {
        path: 'supplier_new_requests',
        component: SupplierNewRequest,
        meta: { requiresAuth: true }
      },
      { path: 'audit_process', component: SupplierAuditProcess, meta: { requiresAuth: true } },
      { path: 'reg-profile/:id', name: 'RegProfile', component: RegistrationProfile, meta: { requiresAuth: true } },
      { path: 'supplier-request-registration', component: RegRequestRegistration, meta: { requiresAuth: true } },

      { path: 'freelancer_register', component: FreelancerRegister, meta: { requiresAuth: true } },
      { path: 'freelancer_new_requests', component: FreelancerNewRequest, meta: { requiresAuth: true } },
      { path: 'freelancer_audit_process', component: FreelancerAuditProcess, meta: { requiresAuth: true } },
      { path: 'freelancer-request-registration', component: FreelancerRequestRegistration, meta: { requiresAuth: true } },

      { path: 'auditFirm_register', component: AuditFirmRegister, meta: { requiresAuth: true } },
      { path: 'auditFirm_new_requests', component: AuditFirmNewRequest, meta: { requiresAuth: true } },
      { path: 'auditFirm_audit_process', component: AuditFirmAuditProcess, meta: { requiresAuth: true } },
      { path: 'auditFirm-request-registration', component: AuditFirmRequestRegistration, meta: { requiresAuth: true } },

      { path: 'organization_register', component: OrganizationRegister, meta: { requiresAuth: true } },
      { path: 'organization_new_requests', component: OrganizationNewRequest, meta: { requiresAuth: true } },
      { path: 'organization_audit_process', component: OrganizationProcess, meta: { requiresAuth: true } },
      { path: 'organization-request-registration', component:  OrganizationRequestRegistration, meta: { requiresAuth: true } },      
      
      { path: 'transactions', component: FinancialTransaction, meta: { requiresAuth: true } },
      { path: 'summary', component: FinancialSummary, meta: { requiresAuth: true } },

      { path: 'project_freelancer', component: PostProjectToFreelancer, meta: { requiresAuth: true } },
      { path: 'bid_details', component: ProjectDetails, meta: { requiresAuth: true } },
      { path: 'all_projects', component: AllProjects, meta: { requiresAuth: true } },
      { path: 'Inprocess_projects', component: InProcessProjects, meta: { requiresAuth: true } },
      { path: 'pending_projects', component: PendingProjects, meta: { requiresAuth: true } },
      { path: 'complete_projects', component: CompletedProjects, meta: { requiresAuth: true } },
      { path: 'cancelled_projects', component: CancelledProjects, meta: { requiresAuth: true } },
      { path: 'project_supplier', component: PostProjectToSupplier, meta: { requiresAuth: true } },
      { path: 'project_quotation', component: PostProjectForBid, meta: { requiresAuth: true } },

      { path: 'compliance_list', component: AllCompliance, meta: { requiresAuth: true } },
      { path: 'add_compliance', component: AddCompliance, meta: { requiresAuth: true } },
      { path: '/add_compliance/:id', component: AddCompliance, meta: { requiresAuth: true } },
      


      //  Audit

      { path: 'all_audits', component: AllAudit, meta: { requiresAuth: true } },
      { path: 'audits_requests', component: RequestAudit, meta: { requiresAuth: true } },
      { path: 'pending_audit', component: PendingAudit, meta: { requiresAuth: true } },
      { path: 'completed_audit', component: CompletedAudit, meta: { requiresAuth: true } },
      { path: 'Inprocess_audit', component: InProcessAudit, meta: { requiresAuth: true } },
      { path: 'audits_cancelled', component: CancelledAudit, meta: { requiresAuth: true } },
      
      { path: 'supplier-audits-view/:id', component: SupplierAuditView, meta: { requiresAuth: true } },
      { path: 'audit-requirements-details', component: AuditRequirementsDetails, meta: { requiresAuth: true } },
      { path: 'supplier-audit-requirements-details', component: SupAuditRequirementsDetails, meta: { requiresAuth: true } },
      { path: 'regulator_register', component: RegulatorsRegistered, meta: { requiresAuth: true } },
      { path: 'regulator_new_request', component: RegulatorsNewRequest, meta: { requiresAuth: true } },
      { path: 'regulator_request_registration', component: RegulatorsRequestRegistration, meta: { requiresAuth: true } },
      { path: 'audit_ticket', component: AuditTicket, meta: { requiresAuth: true } },
      { path: 'audit_completion_detail', component: AuditCompletionDetail, meta: { requiresAuth: true } },


      // Audit report
      { path: 'document-control', component: DocumentControl, meta: { requiresAuth: true } },
      { path: 'third-party-information', component: ThirdPartyInformation, meta: { requiresAuth: true } },
      { path: 'audit-firm-information', component: AuditFirmInformation, meta: { requiresAuth: true } },
      { path: 'guidelines', component: GuideLines, meta: { requiresAuth: true } },
      { path: 'executive-summary', component: ExecutiveSummary, meta: { requiresAuth: true } },
      { path: 'assessment-controls', component: AssessmentControls, meta: { requiresAuth: true } },
      { path: 'report-summary', component: ReportSummary, meta: { requiresAuth: true } },

      { path: 'document-control-view', component: DocumentControlView, meta: { requiresAuth: true } },
      { path: 'third-party-information-view', component: ThirdPartyInformationView, meta: { requiresAuth: true } },
      { path: 'audit-firm-information-view', component: AuditFirmInformationView, meta: { requiresAuth: true } },
      { path: 'guidelines-view', component: GuideLinesView, meta: { requiresAuth: true } },
      { path: 'executive-summary-view', component: ExecutiveSummaryView, meta: { requiresAuth: true } },
      { path: 'assessment-controls-view', component: AssessmentControlsView, meta: { requiresAuth: true } },
      { path: 'report-summary-view', component: ReportSummaryView, meta: { requiresAuth: true } },
      
      //  Regulator Dashboard
      { path: 'offering_addcertificate', component: OfferingAddCertificate, meta: { requiresAuth: true } },
      { path: 'offering_verifycertificate', component: OfferingVerifyCertificate, meta: { requiresAuth: true } },
      { path: 'offering_all_certificates', component: OfferingAllCertificate, meta: { requiresAuth: true } },
      { path: 'edit_certificates/:id', name: "EditOfferingCertificate", component: OfferingAddCertificate, meta: { requiresAuth: true } },

      
      //  Regulator Dashboard

      { path: 'graphical_reports', component: GraphicalReport, meta: { requiresAuth: true } },
      { path: 'data_reports', component: DataReport, meta: { requiresAuth: true } },



    ],
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: { requiresAuth: false },
  },
  {
    name: 'footer',
    path: '/footer',
    component: TermCondition,
    meta: { requiresAuth: false },
  },
  {
    path: '/reset_password',
    component: ResetPassword,
    name: 'reset_password',
    meta: { requiresAuth: false },
  },
  {
    path: '/password-change/:request_id?',
    component: VerifyOTP,
    name: 'verfiy_otp',
    meta: { requiresAuth: false },
  },
  {
    path: '/comfirm_password',
    component: ComfirmPassword,
    name: 'comfirm_password',
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // const auth = useAuthStore();
  let date1 = new Date(localStorage.getItem('expirytime'));
  let date2 = new Date();
  let sessionexpiry = () =>{ 
    if( date1.getTime() > date2.getTime())
    {
      return true
    }else{
      return false
    }
   
  }
  if ('requiresAuth' in to.meta && to.meta.requiresAuth && !(localStorage.getItem('user_access_token') && sessionexpiry())) {
    next({ name: 'login' });
  } else if ('requiresAuth' in to.meta && !to.meta.requiresAuth && (localStorage.getItem('user_access_token') && sessionexpiry())){
    next({ name: 'dashboard' });
  } else {
    next();
  }
});

export default router;