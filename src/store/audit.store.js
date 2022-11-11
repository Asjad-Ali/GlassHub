import axios from "axios";
import API from "@/composables/API";
const apiBaseURL = process.env.VUE_APP_API_PATH;
import { defineStore } from "pinia";
import useToast from '@/global_components/Toast/useToast'
// import { computed } from "@vue/reactivity";
// const report = computed(() => {
//     return JSON.parse(localStorage.getItem('report'))
// })
export const useAuditStore = defineStore('audit',{
    state: () => ({
        auditList: [],
        auditReport:[],
        complianceList: [],
        comAuditList: [],
        existingAuditRFQ: [],
        auditRFQ: [],
        qoDetails: [],
        poDetails: [],
        auditControlsList: [],
        auditPaymentList: [],
        auditDetailList: [],
        auditMessages: [],
        auditCertificatesName: [],
        auditDocuments: [],
        auditSingleCertificate: [],
        supDocumentStatus: [],
        regVerifyCertificates: [],
        loader: false,
        btnLoader: false,
        controlLoader: false,
        poBtnLoader: false,
        rfqViewLoader: false,
        comp_loader: false,
        quotationLoader: false,
        poLoader: false,
        paymentLoader: false,
        sPBLoader: false,
        singleCertificateLoader: false,
        totalPages: 0,
        currentPage: 0
    }),
    actions: {
        async loadAuditList(data){
            this.loader = true
            const response = await API.get('api/audit/audit-list',data)
            this.loader = false
            if(response.status == 200){
                this.totalPages = Math.ceil(response.data.TotalRows/data.RowNo)
                this.auditList = response.data.Pagination 
            }else{
                this.auditList = [] 
                useToast(response)
            }
            return response
        },
        async loadAuditAndComplianceList(data){
            this.comp_loader = true
            const response = await API.get(`api/projectbid/get-rfq-compliance`,data)
            this.comp_loader = false
            if(response.status == 200){
                this.existingAuditRFQ = response.data.Audit_RFQ
                this.complianceList = response.data.RFQ_compliance
                this.comAuditList = response.data.Compliance_Aud 
            }else{
                useToast(response)
            }
        },
        async loadAuditDetailList(data){
            this.loader = true
            const response = await API.get(`api/audit/audit-detail-list`,data)
            this.loader = false
            if(response.status == 200){
                this.totalPages = Math.ceil(response.data.TotalRows/data.RowNo)
                this.auditDetailList = response.data.Pagination.filter(val => val.Qutation_status == 1).length ==0?response.data.Pagination:response.data.Pagination.filter(val => val.Qutation_status == 1);
            }else{
                useToast(response)
            }
        },
        async sendAuditRFQ(data){
            const response = await API.formData(`api/audit/send-rfq`,data)
            if(response.status == 200){
                useToast('Audit RFQ send','success')
            }else(
                useToast(response)                
            )
            return response
        },
        async sendAuditQuotation(data){
            this.btnLoader = true
            const response = await API.formData(`api/audit/send-qutation`,data)
            this.btnLoader = false
            if(response.status == 200){
                useToast('Audit Quotation send','success')
            }else(
                useToast(response)                
            )
            return response
        },
        async sendAuditPurchaseOrder(data){
            this.poBtnLoader = true
            const response = await API.formData(`api/audit/send-po`,data)
            this.poBtnLoader = false
            if(response.status == 200){
                useToast('Audit PO send','success')
            }else(
                useToast(response)                
            )
            return response
        },
        async loadAuditRFQ(rfq_id){
            this.rfqViewLoader = true
            const response = await API.get(`api/audit/view-rfq?Aud_RFQ_id=${rfq_id}`)
            this.rfqViewLoader = false
            if(response.status == 200){
                this.auditRFQ =  response.data   
            }else(
                this.auditRFQ =  [],
                useToast(response)
            )
            return response
        },
        async loadAuditQuotation(qo_id){
            this.quotationLoader = true
            const response = await API.get(`api/audit/view-qutation?aud_qutation_id=${qo_id}`)
            this.quotationLoader = false
            if(response.status == 200){
                this.qoDetails =  response.data   
            }else(
                this.qoDetails =  [],
                useToast(response)        
            )
            return response
        },
        async loadAuditPO(po_id){
            this.poLoader = true
            const response = await API.get(`api/audit/view-po?aud_PO_id=${po_id}`)
            this.poLoader = false
            if(response.status == 200){
                this.poDetails =  response.data   
            }else(
                this.poDetails =  [],
                useToast(response)        
            )
            return response
        },
        async changeAuditRFQStatus(data){
            const response = await API.post(`api/audit/change-RFQ-status`,data)
            if(response.status == 200){
                useToast('RFQ Status Changed','success')
            }else(
                useToast(response)                
            )
        },
        async changeAuditQuotationStatus(data){
            const response = await API.post(`api/audit/change-qut-status`,data)
            if(response.status == 200){
                useToast('Quotation Status Changed','success')
            }else(
                useToast(response)                
            )
        },
        async changeAuditPOStatus(data){
            const response = await API.post(`api/audit/change-po-status`,data)
            if(response.status == 200){
                useToast('PO Status Changed','success')
            }else(
                useToast(response)                
            )
        },
        async changeSupplyStatus(data){
            const response = await API.post(`api/audit/supply-status`,data)
            if(response.status == 200){
                useToast('Supply Status Changed','success')
            }else(
                useToast(response)                
            )
        },
        async sendAuditPayment(data){
            this.sPBLoader = true
            const response = await API.formData("api/audit/send-payment",data)
            this.sPBLoader = false
            if( response.status == 200 ){
                useToast("Payment Successfully Send",'success')
            }else{
                useToast(response)   
            }
            return response;
        },
        async loadAuditPaymentList(aud_req_id){
            this.paymentLoader = true
            const response = await API.get(`api/audit/payment-list?aud_req_id=${aud_req_id}`)
            this.paymentLoader = false
            if( response.status == 200 ){
                this.auditPaymentList = response.data
            }
        },
        async auditPaymentConfirmation(data){
            const response = await API.post("api/audit/pay-confirm",data)
            if( response.status == 200 ){
                useToast("Status Changed Successfully",'success')
            }else{
                useToast(response)   
            }
        },
        async loadAuditControlsList(comp_id){
            this.controlLoader = true
            const response = await API.get(`api/audit/control-by-id?aud_req_id=${comp_id}`)
            this.controlLoader = false
            if( response.status == 200 ){
                this.auditControlsList = response.data
            }else{
                useToast(response)   
            }
            return response
        },
        async sendAuditControls(data){
            axios.defaults.headers.common['x-access-token']=localStorage.getItem('user_access_token')
            const response = await axios.post(`${apiBaseURL}/api/audit/send-complianceAudited`,data)
            if( response.status != 200 ){
                useToast(response)
            }
            return response
        },
        async sendAuditAskQuestion(data){
            this.btnLoader = true
            const response = await API.post("api/audit/aud-sup-conversation",data)
            this.btnLoader = false
            if( response.status != 200 ){
                useToast(response)   
            }
            return response
        },
        async sendAuditAskDocuments(data){
            this.btnLoader = true
            const response = await API.formData("api/audit/auditor-doc-req",data)
            this.btnLoader = false
            if( response.status == 200 ){
                useToast(response.data,'success')   
            }else{
                useToast(response)   
            }
            return response
        },
        async updateStatusCertificateNames(data){
            const response = await API.post("api/audit/audit-doc",data)
            if( response.status == 200 ){
                const data = [response.data]
                this.auditCertificatesName = data
                useToast('Status Changed','success')   
            }else{
                useToast(response)   
            }
            return response
        },
        async loadAuditAskQuestion(id){
            const response = await API.get(`api/audit/get-aud-supplier-conversation?audit_request_id=${id}`)
            if( response.status == 200 ){
                this.auditMessages = response.data
            }else{
                useToast(response)   
            }
        },
        async loadCertificateName(data){
            console.log(data)
            const response = await API.get("api/audit/certificate-name",data)
            if( response.status == 200 ){
                this.auditCertificatesName = response.data
            }else{
                useToast(response)   
            }
        },
        async loadAuditDocumentList(id){
            const response = await API.get(`api/audit/get-aud-doc?audit_req_id=${id}`)
            if( response.status == 200 ){
                this.auditDocuments = response.data
            }else{
                useToast(response)   
            }
            return response
        },
        async loadSingleCertificate(id){
            this.singleCertificateLoader = true
            const response = await API.get(`api/offercertificate/get-by-id?Offering_id=${id}`)
            this.singleCertificateLoader = false
            if( response.status == 200 ){
                this.auditSingleCertificate = response.data
            }else{
                useToast(response)   
            }
        },
        async loadDocumentStatus(id){
            const response = await API.get(`api/audit/get-doc-status?audit_req_id=${id}`)
            if( response.status == 200 ){
                this.supDocumentStatus = response.data
            }else{
                useToast(response)   
            }
        },
        async loadRegulatorVerifyCertificate(id){
            this.loader = true
            const response = await API.get(`api/audit/get-verify-certificate?regulator_by_regd_id=${id}`)
            this.loader = false
            if( response.status == 200 ){
                this.regVerifyCertificates = response.data
            }else{
                useToast(response)   
            }
        },
        async loadAuditReport(id){
            this.loader = true
            const response = await API.get(`api/audit/get-report?report_id=${id}`)
            this.loader = false
            if( response.status == 200 ){
                localStorage.setItem('report',JSON.stringify(response.data))
                this.auditReport = response.data
            }else{
                useToast(response)   
            }
            return response
        }
    } 
})