import type { App } from "vue";
import {
  AppBaseImage,
  AppBaseLabel,
  AppBaseModal,
  AppBaseTitle,
  AppBaseTableHeader,
  AppBaseWrapper,
} from "./base";
import {
  AppLayoutAuth,
  AppLayoutDefault,
  AppLayoutEmpty,
  AppLayoutPublic,
} from "./layouts";

/**
 * Global register components
 * @param app
 */
const BaseComponentRegister = (app: App) => {
  // Components
  app
    .component("AppBaseImage", AppBaseImage)
    .component("AppBaseLabel", AppBaseLabel)
    .component("AppBaseModal", AppBaseModal)
    .component("AppBaseTitle", AppBaseTitle)
    .component("AppBaseTableHeader", AppBaseTableHeader)
    .component("AppBaseWrapper", AppBaseWrapper);

  // Layouts
  app
    .component("AuthLayout", AppLayoutAuth)
    .component("EmptyLayout", AppLayoutEmpty)
    .component("PublicLayout", AppLayoutPublic)
    .component("DefaultLayout", AppLayoutDefault);
};

export default BaseComponentRegister;
