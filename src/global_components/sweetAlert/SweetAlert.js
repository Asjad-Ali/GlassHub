import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
export default async function sweetalert(icone,showConfirmButton=true,confirmButtonText,cancelButtonText,showCancelButton,text){
    const value= await Swal.fire({
        icon: icone,
        showConfirmButton: showConfirmButton,
        confirmButtonText:confirmButtonText,
        cancelButtonText:cancelButtonText,
        showCancelButton:showCancelButton,
        text:text
      })
      return value
}