import i18next from "i18next";
import Backend from "i18next-http-backend";

import { initReactI18next } from "react-i18next";

i18next
  .use(Backend)
  
  .use(initReactI18next)
  .init({
    backend: {
      // translation file path
      loadPath: "src/assets/locales/{{lng}}/translation.json",
    },
    fallbackLng: "en",
    // please disable debug in production
    debug: true,
    //ns means namespace. It is used to group translations into different files.
    // can have multiple namespaces, in case you want to divide a huge
    // translation into smaller pieces and load them on demand
    /*  ns: ["en"],
    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    }, */
  });
export default i18next;
