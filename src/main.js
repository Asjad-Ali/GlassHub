import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/router/routes';
import Toaster from '@meforma/vue-toaster';
import Toast from 'vue3-toast-single'
import 'vue3-toast-single/dist/toast.css'
import vue3GoogleLogin from 'vue3-google-login'
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VueGoogleMaps from '@fawmi/vue-google-maps'  
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import Socket from '@/global_components/webSocket/websocket_send'
import Socket from './global_components/webSocket/chat_websocket_send';
import "bootstrap";
const pinia = createPinia();
pinia.use(({ store }) => {
    store.$router = markRaw(router);
});

const app = createApp(App)
app.use(router)

app.use(VueGoogleMaps, {
  load: {
      // 'YOUR_API_KEY_COMES_HERE'
      // 'AIzaSyDNS7nXnbp8nqbAzU5h1nuqAK5kaWAsP90'
      key: 'AIzaSyDNS7nXnbp8nqbAzU5h1nuqAK5kaWAsP90',
      libraries: "places"
  },
})
app.use(pinia)
app.use(Toaster,{timeout: 3000})
app.use(VueSweetalert2)
app.use(Toast, { verticalPosition: 'top', duration: 3500, horizontalPosition: 'right', transition: 'transition' })
app.use(VPagination)

app.use(vue3GoogleLogin, {
    clientId: '659906570953-446v9i9u0i5ije6pouh1iqq0dmf9kj7s.apps.googleusercontent.com'
  })
  app.use({
    baseUrl: process.env.VUE_APP_REDIRECT_URL, // Your API domain
    providers: {
      github: {
        clientId: '',
        redirectUri: process.env.VUE_APP_REDIRECT_URL+'/sign-up/type' // Your client app URL
      },
      linkedin: {
        name: 'linkedin',
        url: '/auth/linkedin',
        authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/accessToken',
        redirectUri: process.env.VUE_APP_REDIRECT_URL,
        requiredUrlParams: ['state'],
        scope: ['r_emailaddress'],
        scopeDelimiter: ' ',
        state: 'STATE',
        oauthType: '2.0',
        popupOptions: { width: 527, height: 582 },
      },
    }
  })
  // app.use(Socket)
app.mount('#app')
