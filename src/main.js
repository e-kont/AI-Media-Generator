import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'system'
  }
})

const app = createApp(App)

app.use(vuetify)

app.use(router)

app.mount('#app')

// const allowedOrigin =
//   "https://parent-app.com";

// window.addEventListener(
//   "message",

//   async (event) => {

//     /*
//     |--------------------------------------------------------------------------
//     | Security Check
//     |--------------------------------------------------------------------------
//     */

//     if (
//       event.origin !== allowedOrigin
//     ) {
//       return;
//     }

//     const message = event.data;

//     if (!message?.type) {
//       return;
//     }

//     console.log(
//       "[iframe received]",
//       message
//     );

//     /*
//     |--------------------------------------------------------------------------
//     | Message Handling
//     |--------------------------------------------------------------------------
//     */

//     switch (message.type) {

//       /*
//       |--------------------------------------------------------------------------
//       | INIT
//       |--------------------------------------------------------------------------
//       */

//       case "INIT":

//         console.log(
//           "Widget initialized"
//         );

//         break;

//       /*
//       |--------------------------------------------------------------------------
//       | AUTH SESSION
//       |--------------------------------------------------------------------------
//       */

//       case "AUTH_SESSION":

//         localStorage.setItem(
//           "token",
//           message.payload.token
//         );

//         break;

//       /*
//       |--------------------------------------------------------------------------
//       | CONFIG UPDATE
//       |--------------------------------------------------------------------------
//       */

//       case "CONFIG_UPDATE":

//         applyTheme(
//           message.payload.theme
//         );

//         updateLanguage(
//           message.payload.localization
//             ?.language
//         );

//         console.log(
//           "Runtime config updated"
//         );

//         break;

//       /*
//       |--------------------------------------------------------------------------
//       | FEATURE FLAGS
//       |--------------------------------------------------------------------------
//       */

//       case "FEATURE_FLAGS":

//         console.log(
//           "Feature flags:",
//           message.payload
//         );

//         break;

//       /*
//       |--------------------------------------------------------------------------
//       | PREFILL MEDIA
//       |--------------------------------------------------------------------------
//       */

//       case "PREFILL_MEDIA":

//         console.log(
//           "Prefill media:",
//           message.payload
//         );

//         break;

//       case "ENABLE_IMAGE_GENERATION":

//         console.log(
//           "Image generation:",
//           payload.enabled
//         );

//         break;

//       case "ENABLE_IMAGE_UPLOAD":

//         console.log(
//           "Image upload:",
//           payload.enabled
//         );

//         break;

//       case "ENABLE_AUDIO_UPLOAD":

//         console.log(
//           "Audio upload:",
//           payload.enabled
//         );

//         break;

//       case "SET_ALLOWED_FILE_TYPES":

//         console.log(
//           "Allowed file types:",
//           payload.types
//         );

//         break;

//       default:

//         console.warn(
//           "Unknown message:",
//           message.type
//         );
//     }
//   }
// );

// /*
// |--------------------------------------------------------------------------
// | Send READY Event
// |--------------------------------------------------------------------------
// */

// window.parent.postMessage(
//   {
//     type: "READY",

//     payload: {
//       status: "initialized"
//     }
//   },

//   allowedOrigin
// );

// /*
// |--------------------------------------------------------------------------
// | Theme Handling
// |--------------------------------------------------------------------------
// */

// function applyTheme(theme) {

//   if (!theme) {
//     return;
//   }

//   document.documentElement
//     .style
//     .setProperty(
//       "--primary-color",
//       theme.primaryColor || "#000"
//     );

//   document.documentElement
//     .style
//     .setProperty(
//       "--border-radius",
//       theme.borderRadius || "8px"
//     );

//   document.body.dataset.theme =
//     theme.mode || "light";
// }

// /*
// |--------------------------------------------------------------------------
// | Localization
// |--------------------------------------------------------------------------
// */

// function updateLanguage(language) {

//   if (!language) {
//     return;
//   }

//   i18n.global.locale.value =
//     language;
// }