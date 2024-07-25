/* Import the createI18n function from the vue-i18n library */
import { createI18n } from "vue-i18n"; 

/* Import the messages object containing translations */
import { messages } from "./en";

/* Create and export an instance of i18n with configuration settings */
export default createI18n({
    /* Set the default locale from environment variables */
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    /* Set the fallback locale from environment variables in case the default locale messages are not available */
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    /* Use the Composition API for i18n (vue-i18n v9+) */
    legacy: false,
    /* Allow global injection of $t method for translations in all components */
    globalInjection: true,
    /* Provide the translations messages */
    messages
})
