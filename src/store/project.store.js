
import { defineStore } from 'pinia'
import API from '@/composables/API'
import useToast from '@/global_components/Toast/useToast'
export const useProjectStore = defineStore('project',{
    state: () => ({
        btnLoader: false,
        loader: false,
        sqrLoader: false,
        rfqDetailLoader: false,
        poDetailLoader: false,
        paymentLoader: false,
        quotationLoader: false,
        totalPages: 0,
        freeLanceList:[],
        suppliersList:[],
        supplierList:[],
        bidProjectList:[],
        bidDetails:[],
        rfqDetails:[],
        poDetails:[],
        quotationDetails:{},
        paymentList:[],
        requestsList:[],
        paymentMethodsList:[],
        Questions:[],
        Evel_Questions:[]
    }),
    actions:{
        async postProjectBid(data){
            this.btnLoader = true
            const response = await API.formData("api/projectbid/post-bid", data)
            this.btnLoader = false
            if( response.status == 200 ){
                useToast("Bid Project", "success")
            } else {
                useToast(response)
            }
            return response
        },
        async loadPostProjectSupplier(RegD_id){
            this.loader = true
            const response = await API.get(`api/projectbid/registerd-list?Account_id=1&RegD_id=${RegD_id}`)
            this.loader = false
            if( response.status == 200 ){
                this.supplierList = response.data
            }
        },
        async loadProjectDetails(data){
            this.loader = true
            const response = await API.get(`api/projectbid/bid-byID`,data)
            this.loader = false
            if( response.status == 200 ){
                if(!response.data[0].flag){
                    response.data[0].RFQ_status = null
                }
                this.bidDetails = response.data
            }
            return response
        },
        async loadRFQDetails(bidId){
            this.rfqDetailLoader = true
            const response = await API.get(`api/projectbid/rfq-view?Bid_id=${bidId}`)
            this.rfqDetailLoader = false
            if( response.status == 200 ){
                this.rfqDetails = response.data
            }
            return response
        },
        async loadPODetails(bidId){
            this.poDetailLoader = true
            const response = await API.get(`api/projectbid/po-view?PO_id=${bidId}`)
            this.poDetailLoader = false
            if( response.status == 200 ){
                this.poDetails = response.data
            }
            return response
        },
        async loadQuotationDetails(bidId){
            this.quotationLoader = true
            const response = await API.get(`api/projectbid/qutation-view?qutation_id=${bidId}`)
            this.quotationLoader = false
            if( response.status == 200 ){
                this.quotationDetails = response.data
            }
        },
        async loadPostProjectFreelancer(RegD_id){
            this.loader = true
            const response = await API.get(`api/projectbid/registerd-list?Account_id=2&RegD_id=${RegD_id}`)
            this.loader = false
            if( response.status == 200 ){
                this.freeLanceList = response.data
            }
        },
        async loadRegisterSupplierList(RegD_id){
            this.loader = true
            const response = await API.get(`api/projectbid/registerd-list?Account_id=1&RegD_id=${RegD_id}`)
            this.loader = false
            if( response.status == 200 ){
                this.suppliersList = response.data
            }
        },
        async loadBidProjectList(data){
            this.loader = true
            const response = await API.get("api/projectbid/bidproject-list",data)
            this.loader = false
            if(response.status == 200){
                this.totalPages = Math.ceil(response.data.TotalRows/data.RowNo)
                this.bidProjectList = response.data.Pagination 
            }
        },
        async sendRFQ(data){
            this.sqrLoader = true
            const response = await API.formData("api/projectbid/send-rfq",data)
            this.sqrLoader = false
            if( response.status == 200 ){
                useToast("Quotation Request Successfully Send",'success')
            }else{
                useToast(response)   
            }
            return response;
        },
        async sendQuotation(data){
            this.sqrLoader = true
            const response = await API.formData("api/projectbid/send-qutation",data)
            this.sqrLoader = false
            if( response.status == 200 ){
                useToast("Quotation Successfully Send",'success')
                location.reload();
            }else{
                useToast(response)   
            }
            return response;
        },
        async sendPayment(data){
            this.sqrLoader = true
            const response = await API.formData("api/projectbid/send-payment",data)
            this.sqrLoader = false
            if( response.status == 200 ){
                useToast("Payment Successfully Send",'success')
            }else{
                useToast(response)   
            }
            return response;
        },
        async loadPaymentList(RegD_id){
            this.paymentLoader = true
            const response = await API.get(`api/projectbid/payment-list?BidD_id=${RegD_id}`)
            this.paymentLoader = false
            if( response.status == 200 ){
                this.paymentList = response.data
            }
        },
        async loadSupplierRequestsList(Bid_id){
            // this.loader = true
            const response = await API.get(`api/projectbid/project-requests-list?Bid_id=${Bid_id}`)
            // this.loader = false
            if( response.status == 200 ){
                this.requestsList = response.data
            }
        },
        async sendPurchaseOrder(data){
            this.sqrLoader = true
            const response = await API.formData("api/projectbid/send-po",data)
            this.sqrLoader = false
            if( response.status == 200 ){
                useToast("PO Successfully Send",'success')
                location.reload()
            }else{
                useToast(response)   
            }
            return response;
        },
        async changeRFQStatus(data){
            console.log(data)
            const response = await API.post("api/projectbid/change-RFQstatus",data)
            if( response.status == 200 ){
                useToast("RFQ Status Changed",'success')
                this.loadRFQDetails(data.Bid_id)
            }else{
                useToast(response)   
            }
        },
        
        async changeBidStatus(data){
            const response = await API.put("api/projectbid/project-status-update",data)
            if( response.status == 200 ){
                useToast("Status Changed",'success')
            }else{
                useToast(response)   
            }
        },
        async paymentConfirmationUpdate(data){
            const response = await API.put("api/projectbid/payment-confirm-update",data)
            if( response.status == 200 ){
                useToast("Payment Status Changed",'success')
            }else{
                useToast(response)   
            }
        },
        async requestConfirmationUpdate(data){
            const response = await API.put("api/projectbid/accept-request",data)
            if( response.status == 200 ){
                console.log("respone",response)
                this.requestsList = response.data
            }else{
                useToast(response)   
            }
        },
        async loadPaymentMethodList(){
            const response = await API.get("api/payment_method/GetFullList")
            if( response.status == 200 ){
                this.paymentMethodsList = response.data
            }else{
                useToast(response)   
            }
        },

        async SendDisput(payload){
            try{
            const response = await API.post("api/dispute/send-dispute",payload)
            if( response.status == 200 ){
                useToast('Dispute Successfully Send','success') 
                return true
            }else{
                useToast(response)   
            }
        }
            catch(error){
                useToast(response)    
            }
        },
        async SendRating(payload){
            try{
                const response = await API.post("api/starrating/insert-star-rating",payload)
                if( response.status == 200 ){
                    useToast(response.data,'success') 
                    return true
                }else{
                    useToast(response)   
                }
            }catch(error){
                useToast(response)    
            }
           
        },
        async getQuestions(payload){
            const response = await API.get(`api/starrating/get-questions?Account_id=${payload.Account_id}&Category_id=${payload.Cat_ids}`)
            if( response.status == 200 ){
                this.Questions = response.data
            }else{
                useToast(response)   
            }
        },

        async SendEveluation(payload){
            try{
                const response = await API.post("api/evaluatesupplier/send-evaluation",payload)
                if( response.status == 200 ){
                    useToast(response.data,'success') 
                    return true
                }else{
                    useToast(response)   
                }
            }catch(error){
                useToast(response)    
            }
           
        },
        async getEvelQuestions(payload){
            const response = await API.get(`api/evaluatesupplier/get-evaluation-question?Category_id=${payload}`)
            if( response.status == 200 ){
                this.Evel_Questions = response.data
            }else{
                useToast(response)   
            }
        }

    }
})
