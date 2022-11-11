
import { defineStore } from 'pinia'
import API from '@/composables/API'
import useToast from '@/global_components/Toast/useToast'
// import Socket from '@/global_components/webSocket/websocket_send'
export const useRegisterationStore = defineStore('registeration',{
    state: () => ({
        regProfileData:[],
        suggestedList:[],
        regCategories:[],
        requestRegistrationList:[],
        registerList:[],
        helpText: [],
        newRequestList:[],
        totalPages: '',
        loader: false,
        btnLoader: false,
        sendReqLoader: false,
        showOops: false,
        suggestedListLoader: false,
        profileLoader: false,
    }),
    actions:{
        async loadRegistrationList(data) {
            this.showOops = false
            this.loader = true
            const response = await API.get("api/registration/get-registerd",data)
            this.loader = false
            if(response.status == 200){
                this.totalPages = Math.ceil(response.data.TotalRows/data.RowNo)
                this.registerList = response.data.Pagination 
            }
            return response
        },
        async loadRegCategoriesList(RegD_id) {
            if(this.regCategories.length)
            {
                return
            } 
            const mainCategories = JSON.parse(localStorage.getItem('userCategories')) || []
            if(mainCategories.length){
                this.regCategories = mainCategories
            } else {
                var response = await API.get(`api/registration/get-catlist/?RegD_id=${RegD_id}`)
                if(response.status == 200){
                    localStorage.setItem('userCategories',JSON.stringify(response.data))
                    this.regCategories = response.data
                }

            }
        },
        async loadNewRequestList(data) {
            this.loader = true
            const response = await API.get(`api/registration/new-request`,data)
            this.loader = false
            if(response.status == 200){
                this.totalPages = Math.ceil(response.data.TotalRows/data.RowNo)
                this.newRequestList = response.data.Pagination 
            } else{
                this.newRequestList = []
            }
        },
        async acceptRequestSupplier(data) {
            this.btnLoader = data.Registration_id
            const response = await API.post("api/registration/request-accept",data)
            this.btnLoader = false
            if(response.status == 200){
                // Socket()
                if(data.reg_status == 1){
                    useToast("Request Accepted", 'success')
                    this.registerList = []
                    console.log("registration id",data.Registration_id)
                    this.newRequestList = this.newRequestList.filter( sup => sup.Registration_id != data.Registration_id)
                    console.log("all list",this.newRequestList)
                } else{
                    useToast("Request Rejected", 'success')
                    this.newRequestList = this.newRequestList.filter( sup => sup.Registration_id != data.Registration_id)
                }
            }
        },
        async searchRequestRegistrationList(data) {
            this.showOops = false
            this.btnLoader = data.PageNo
            console.log("in data",data)
            const response = await API.get("api/registration/get-srhlist/",data)
            this.btnLoader = false
            if(response.status === 200){
                if(response.data.Pagination.length){
                    this.showOops = false
                    this.suggestedList = []
                    this.totalPages = Math.ceil(response.data.TotalRows/data.RowNo)
                    this.requestRegistrationList = response.data.Pagination 
                }else{
                    this.requestRegistrationList = []
                    this.showOops = true
                }
            }
            return response
        },
        async loadSuggestedList(data) {
            this.suggestedListLoader = true
            const response = await API.get("api/registration/get-suggested-list",data)
            this.suggestedListLoader = false
            if(response.status == 200){
                this.totalPages = Math.ceil(response.data.TotalRows/data.RowNo)
                this.suggestedList = response.data.Pagination 
            } else {
                this.suggestedList = []
            }
        },
        async sendRequestRegistration(data) {
            this.sendReqLoader = data.RegD_id_to
            const response = await API.post("api/registration/send-request",data)
            this.sendReqLoader = false
            if(response.status == 200){
                useToast("Request Successfully Sent", "success")
                this.suggestedList = this.suggestedList.map( val => val.RegD_id == data.RegD_id_to ?  {...val, flag:true}  :  {...val} )
                this.requestRegistrationList = this.requestRegistrationList.map( val => val.RegD_id == data.RegD_id_to ?  {...val, flag:true}  :  {...val} )
                // Socket()
            } else {
                useToast("Request Sent Failure")
            }
        },
        async statusUpdateRegisterList(data) {
            const response = await API.post("api/registration/updateStatus",data)
            console.log(data)
            if(response.status == 200){
                useToast("Status Changed", "success")
                const index = this.registerList.findIndex( sup => sup.Registration_id == data.Registration_id)
                this.registerList[index].registred_status = data.registred_status
                this.registerList[index].registred_status_name = data.registred_status_name
            } else {
                useToast("Request Changed Failure")
            }
        },
        async loadRegistrationProfileData(RegD_id_to) {
            this.profileLoader = true
            const response = await API.get(`api/RegistrationSetting/getEditComp/${RegD_id_to}`)
            this.profileLoader = false
            if(response.status == 200){
              localStorage.setItem("RegistrationProfile",JSON.stringify(response.data))
              this.regProfileData = response.data
            }
        },
        async loadRegistrationHelpText(url) {
            this.helpText = []
            const response = await API.get('api/HelpingTool/GetToolTip/'+url)
            if(response.status == 200){
                this.helpText = response.data
            }
        },
    }
})