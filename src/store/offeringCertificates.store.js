
import { defineStore } from 'pinia'
import API from '@/composables/API'
import { computed } from 'vue'
import useToast from '@/global_components/Toast/useToast'

export const useOfferingCertificateStore = defineStore('offeringCertificate',{
    state: () => ({
        offeringCertificateList: [],
        complianceList: [],
        auditsList: [],
        trainerList:[],
        btnLoader: false,
        loader: false
    }),
    actions:{
        async loadComplianceCertificatesList(RegD_id){
            if(this.complianceList.length) return
            const response = await API.get(`api/compliance/all-compliance?RegD_id=${RegD_id}`)
            if( response.status == 200 ){
                this.complianceList = response.data
            }
        },
        async loadAuditsList(){
            if(this.auditsList.length) return
            const response = await API.get("api/compliance/get-audits")
            if( response.status == 200 ){
                this.auditsList = response.data
            }
        },
        async insertUpdateTrainer (data){
            const response = await API.post("api/offercertificate/trainerinsertupdate",data)
            if( response.status == 200 ){
                const index = computed(() => this.trainerList.findIndex( trainer => trainer.Trainer_id == response.data[0].Trainer_id ))
                console.log("index",index.value)
                if(index.value != -1){
                    this.trainerList[index.value] = response.data[0]
                }else{
                    this.trainerList.push(response.data[0])
                }
                useToast("Trainer Add Successfully", 'success') ()
            } else {
                useToast(response)
            }
            return response
        },
        async loadTrainerList(RegD_id){
            if(this.trainerList.length) return
            const response = await API.get(`api/offercertificate/trainer-list?RegD_id=${RegD_id}`)
            if( response.status == 200 ){
                this.trainerList = response.data
            }
        },

        async insertUpdateOfferingCertificate(data){
            this.btnLoader = true
            const response = await API.post("api/offercertificate/insertupdate",data)
            this.btnLoader = false
            if( response.status == 200 ){
                const index = computed(() => this.offeringCertificateList.findIndex( cer => cer.Offering_id == response.data[0].Offering_id ))
                console.log("data",response.data[0])
                console.log("index",index.value)
                if(index.value != -1 ){
                    this.offeringCertificateList[index.value] = response.data[0]
                }else{
                    this.offeringCertificateList.push(response.data[0])
                }
                useToast("Certificate Added SuccessFully",'success');
            } else {
                useToast("Certificate Added Failure");
            }
            return response
        },
        async loadOfferingCertificate(RegD_id){
            if(this.offeringCertificateList.length) return
            this.loader = true
            const response = await API.get(`api/offercertificate/full-list?RegD_id=${RegD_id}`)
            this.loader = false
            if( response.status == 200 ){
                this.offeringCertificateList = response.data
            } 
        },
        
        async deleteOfferingCertificate(id){
            const response = await API.delete(`api/offercertificate/delete?Offering_id=${id}`)
            if( response.status == 200 ){
                this.offeringCertificateList = this.offeringCertificateList.filter( cer => cer.Offering_id != id )
                useToast("Certificate deleted successfully",'success');
            }else {
                useToast("Certificate deleted failure");
            }
        },




    }
})