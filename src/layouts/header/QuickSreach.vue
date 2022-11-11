<template>
    <div class="input-group">
      <!-- <div class="input-group-prepend">
      <button class="btn btn-outline-secondary dropdown-toggle" @click="showDropdown()" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{dropdown_name}}</button>
      <div class="dropdown-menu" :class="showclass? 'showlist':''">
      <a class="dropdown-item" href="#" @click="QuickData('All')">All</a>
      <a class="dropdown-item" href="#" @click="QuickData(list.Menue_name)" v-for="(list ,index) in store?.QuickSearchList" :key="index">{{list.Menue_name}}</a>
      </div>
      </div> -->
      <div class="list-main">
         <input type="text" class="form-control" v-model.trim="src" aria-label="Text input with dropdown button" @keyup="search()" placeholder="Quick Search">
          <div class="dropdown-menu" :class="src_list.length>0 && showclass==true?'showlist':''" id="qick_serach">
            <template v-for="(list , index) in src_list" :key="index">
              <router-link :to="`${list.Menue_location}?search=${list.Record_Name}`"  class="dropdown-item" @click="hide()">
                <div style="font-weight: 600;">
                  <span>{{list.Record_code}}</span>
                  {{list.Record_Name}} 
                </div>
                <div style="font-size: 10px ;"  :style="list.Color=='Default'?'':{color: list.Color}">{{list.Type}}</div>
               </router-link> 
            </template>
         </div>
      </div>
<!--   
      <div class="input-group">
      <div class="input-group-prepend">
           <span class="input-group-text search" style="cursor:pointer" @click="search()">
              <span class="svg-icon svg-icon-1 svg-icon-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                    transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                  <path
                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                    fill="black"></path>
                </svg>
              </span>
           </span>
      </div>
      </div> -->
</div>
</template>
<script setup>
import {onMounted, ref,computed,watch} from 'vue'
import { QuickSearch } from '@/store/QuickSearch'
const store = QuickSearch()
const showclass = ref(true)
const dropdown_name = ref('All')
const src = ref('')
const src_list = ref([])
const src_data = computed(()=>{
  return store.QuickSearchList
})

watch(src_data,()=>{
  showclass.value=true
  src_list.value= src_data.value
})
const showDropdown =()=>{
  showclass.value = !showclass.value
}

const hide =()=>{
  src.value=''
  src_list.value=[]
  showclass.value=false
}


const QuickData =(value)=>{
   dropdown_name.value= value
   showDropdown()
}
const search = ()=>{
  if(src.value !=''){
    store.loadQuickList(src.value)
  }else{
    src_list.value=[]
  };
}

</script>
<style scoped>
.showlist{
    display: block !important;
    max-height: 350px !important;
    overflow: auto;
}
.dropdown-toggle
{
    background: #a1a5b7;
    color: white;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    padding: 0.6rem 1.25rem !important;
    font-size: .925rem;
}
.input-group input
{
  padding: 0px 1px 0px 10px ;
  border-radius: 6px !important;
  height: 34px;
}
.input-group{
    width: initial;
}
.search
{
    padding: 4.5px 6px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background: #a1a5b7;
}
.search:hover,.dropdown-toggle:hover{
    background-color: #5241a1;
}
.list-main{
    position: relative;
}
.list-main .s_list {
position: absolute;
}
</style>