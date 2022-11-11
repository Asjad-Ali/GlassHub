<template>
  <div class="col-xl-3 aside-profile-details">
    <div class="card">
      <!--begin::Body-->
      <div class="card-body pt-5">
        <div class="profilelogo">
          <img :src="profileStore.company_info.company_logo" />
        </div>
        <div class="company-details">
          <div class="overview">
            <br />
            <p class="text-center text-muted mb-2">
              Account Type: {{switch_account?.Account_detail[0]?.Account_type_name}}
            </p>
            <h4>{{switch_account?.Account_detail[0]?.Company_name }}</h4>
            <div class="star_ratings_of_company">
              <!-- <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i> -->
              <p class="display-inline"> { } ( { } Reviews)</p>
            </div>
          </div>
          <div class="separator separator-dashed border-gray-300 my-8"></div>
          <div class="d-flex align-items-sm-center mb-2">
            <div class="d-flex align-items-center flex-row-fluid flex-wrap">
              <div class="flex-grow-1 me-2">
                <p>
                  <a :href="`https://maps.google.com/?q=${switch_account?.Account_detail[0]?.Head_office_lat},${switch_account?.Account_detail[0]?.Head_office_long}`" target="_blank" class="d-flex align-items-center text-gray-900 text-hover-primary me-5 mb-2">
                    <i class="fa fa-map-marker-alt" aria-hidden="true"></i><span class="pl-5">From</span>
                  </a>
                </p>
              </div>
              <p> {{ afterLast(switch_account?.Account_detail[0]?.Head_office_address, ',') }} </p>
            </div>
          </div>
          <div class="d-flex align-items-sm-center mb-2">
            <div class="d-flex align-items-center flex-row-fluid flex-wrap">
              <div class="flex-grow-1 me-2">
                <p>
                  <i class="fas fa-user"></i
                  ><span class="pl-5">Partner Since</span>
                </p>
              </div>
              <p> {{ switch_account?.Account_detail[0]?.Start_date?.substring(0, 10) }} </p>
            </div>
          </div>
          <div class="separator separator-dashed border-gray-300 my-8"></div>
          <div class="d-flex align-items-sm-center mb-2">
            <div class="d-flex align-items-center flex-row-fluid flex-wrap">
              <div class="flex-grow-1 me-2">
                <p>Completed Projects</p>
              </div>
              <span class="badge badge-light fw-bolder my-2">{ }</span>
            </div>
          </div>
          <div class="d-flex align-items-sm-center mb-2">
            <div class="d-flex align-items-center flex-row-fluid flex-wrap">
              <div class="flex-grow-1 me-2">
                <p>Active Projects</p>
              </div>
              <span class="badge badge-light fw-bolder my-2"> { } </span>
            </div>
          </div>
          <div class="separator separator-dashed border-gray-300 my-8"></div>
          <div class="d-flex align-items-sm-center mb-2">
            <div class="d-flex align-items-center flex-row-fluid flex-wrap">
              <div class="flex-grow-1 me-2">
                <p>Registered Suppliers</p>
              </div>
              <span class="badge badge-light fw-bolder my-2"> { } </span>
            </div>
          </div>
          <div class="d-flex align-items-sm-center mb-2">
            <div class="d-flex align-items-center flex-row-fluid flex-wrap">
              <div class="flex-grow-1 me-2">
                <p>Registered Audit Firms</p>
              </div>
              <span class="badge badge-light fw-bolder my-2"> { } </span>
            </div>
          </div>
        </div>
      </div>
      <!--end::Body-->
    </div>
  </div>
</template>

<script>
 import {Account} from '@/store/SwitchAccount' 
 import {profile} from '@/store/profile'
 import {ref, onMounted} from "vue"
export default {
  name: "OrganizationInfo",
 
  setup()
  {
    const profileStore = profile()
     const switch_account = Account();
     const Organization_info = ref('');
   
    //  computed(()=>{
    //    return  {...mapState(Account, ['Account_Id'])}
    //  })

    //  watch(switch_account.Account_Id, ()=>{
    //    Organization_info.value=switch_account.Account_detail[0]
    //  })
const  afterLast = (value, delimiter) => {  
  value = value || ''
  return delimiter === '' ? value : value.split(delimiter).pop()
}

    onMounted( () =>{ 
        Organization_info.value=switch_account.Account_detail[0]
      
    })
     return{
         switch_account,
         profileStore,
         afterLast
     }
  }
};
</script>

<style lang="scss" scoped>
</style>