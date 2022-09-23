import type { App } from "vue";
import { AppBaseTitle } from "./base";
import { AppLayoutAuth, AppLayoutEmpty, AppLayoutPublic } from "./layouts";

/**
 * Global register components
 * @param app
 */
const BaseComponentRegister = (app: App) => {
  // Components
  app.component("AppBaseTitle", AppBaseTitle);

  // Layouts
  app
    .component("AuthLayout", AppLayoutAuth)
    .component("EmptyLayout", AppLayoutEmpty)
    .component("PublicLayout", AppLayoutPublic);
};

export default BaseComponentRegister;
