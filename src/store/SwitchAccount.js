import { defineStore } from "pinia";

export const Account = defineStore({
    id: 'account',
    state: () => ({
        Account_Id: '',
        Account_detail: JSON.parse(localStorage.getItem('switch_account'))||'',
        User_role:'',
    }),
})