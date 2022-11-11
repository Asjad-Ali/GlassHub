<template>
     <div class="card mb-5 mb-xxl-8">
                                    <div class="card-body pb-0">
                                        <div class="row">
                                            <div class="col-md-12"><h4>Verified SMS & Email</h4></div>
                                            <div class="col-md-12">
                                                <div class="table-responsive">
                                                    <table class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                        <thead>
                                                            <tr>
                                                                <th>Email</th>
                                                                <th>Phone No</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block">{{company_info.Comp_email}}	</span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-muted fw-bold d-block"> {{company_info.User_phone}} </span>
                                                                </td>
                                                                <td>
                                                                    <span class="badge badge-primary">Verified</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                            </div>
                                        </div>
                                    </div>
                                </div>
</template>

<script>
export default {
  props:['company_info']
}
</script>