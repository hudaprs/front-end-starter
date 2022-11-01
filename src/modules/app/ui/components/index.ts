import type { App } from "vue";
import { AppBaseImage, AppBaseTitle, AppBaseLabel, AppBaseTableHeader } from "./base";
import { AppLayoutAuth, AppLayoutDefault, AppLayoutEmpty, AppLayoutPublic } from "./layouts";

/**
 * Global register components
 * @param app
 */
const BaseComponentRegister = (app: App) => {
  // Components
  app.component("AppBaseImage", AppBaseImage)
    .component("AppBaseTitle", AppBaseTitle)
    .component("AppBaseLabel", AppBaseLabel)
    .component("AppBaseTableHeader", AppBaseTableHeader);

  // Layouts
  app
    .component("AuthLayout", AppLayoutAuth)
    .component("EmptyLayout", AppLayoutEmpty)
    .component("PublicLayout", AppLayoutPublic)
    .component("DefaultLayout", AppLayoutDefault);
};

export default BaseComponentRegister;
