<template>
  <div class=" pd-30">
    <div class="table-responsive">
        <!--begin::Table-->
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <tbody>
                <tr >
                    <td><label class="form-label"><b>Project:</b></label></td>
                    <td v-for="project in projects" :key="project">
                        <p> {{ project.Bid_title }} </p>
                    </td>
                </tr>
                <tr >
                    <td><label class="form-label"><b>Authorized Audit Firms:</b></label></td>
                    <td v-for="project in projects" :key="project">
                        <p> {{ project.Auditfirm_name }} </p>
                    </td>
                </tr>
                <tr >
                    <td><label class="form-label"><b>Compliance:</b></label></td>
                    <td v-for="project in projects" :key="project">
                        <p> {{ project.Compliance_name }} </p>
                    </td>
                </tr> 
                <tr >
                    <td><label class="form-label"><b>Attachments:</b></label></td>
                    <td v-for="project in projects" :key="project">
                        <span class="text-muted fw-bold d-block">
                            <!-- <i class="fa fa-file-pdf display-inline" aria-hidden="true"></i>  -->
                            <a :href="project.doc_attachment" target="_blank"> {{ docName(project.doc_attachment) }} </a>
                        </span>
                    </td>
                </tr> 
                <tr >
                    <td><label class="form-label"><b>Project Details:</b></label></td>
                    <td v-for="project in projects" :key="project">
                        <p v-html="project.Bid_detail"></p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script setup>
import {toRefs, defineProps} from 'vue';
const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})
const { projects } = toRefs(props);
function docName(str){
    const fname = str.substring(str.lastIndexOf('/') +1 );
    const name = fname.substring(fname.indexOf('-') +2 );
    return name
}
</script>