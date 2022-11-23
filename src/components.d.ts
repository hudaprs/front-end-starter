import FormGroup from './modules/app/ui/components/form/AppFormGroup.vue';

import AppBaseBreadcrumb from './modules/app/ui/components/base/AppBaseBreadcrumb.vue';
import AppBaseCardFilter from './modules/app/ui/components/base/AppBaseCardFilter.vue';
import AppBaseImage from './modules/app/ui/components/base/AppBaseImage.vue';
import AppBaseImageVue from './modules/app/ui/components/base/AppBaseImage.vue';
import AppBaseLabel from './modules/app/ui/components/base/AppBaseLabel.vue';
import AppBaseModal from './modules/app/ui/components/base/AppBaseModal.vue';
import AppBaseTableFooter from './modules/app/ui/components/base/AppBaseTableFooter.vue';


declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // Router
    RouterLink: typeof import('vue-router')['RouterLink'];
    RouterView: typeof import('vue-router')['RouterView'];

    // Form
    FormGroup: typeof FormGroup;

    // Base Components
    AppBaseBreadcrumb: typeof AppBaseBreadcrumb;
    AppBaseCardFilter: typeof AppBaseCardFilter;
    AppBaseImage: typeof AppBaseImageVue;
    AppBaseLabel: typeof AppBaseLabel;
    AppBaseModal: typeof AppBaseModal;
    AppBaseTableFooter: typeof AppBaseTableFooter;

    // PrimeVue
    Autocomplete: typeof import('primevue/autocomplete')['default'];
    Accordion: typeof import('primevue/accordion')['default'];
    AccordionTab: typeof import('primevue/accordion')['default'];
    Avatar: typeof import('primevue/avatar')['default'];
    AvatarGroup: typeof import('primevue/avatargroup')['default'];
    Badge: typeof import('primevue/badge')['default'];
    BlockUI: typeof import('primevue/blockui')['default'];
    Button: typeof import('primevue/button')['default'];
    Breadcrumb: typeof import('primevue/breadcrumb')['default'];
    Calendar: typeof import('primevue/calendar')['default'];
    Card: typeof import('primevue/card')['default'];
    CascadeSelect: typeof import('primevue/cascadeselect')['default'];
    Carousel: typeof import('primevue/carousel')['default'];
    Checkbox: typeof import('primevue/checkbox')['default'];
    Chips: typeof import('primevue/chips')['default'];
    Chip: typeof import('primevue/chip')['default'];
    ColorPicker: typeof import('primevue/colorpicker')['default'];
    Column: typeof import('primevue/column')['default'];
    ColumnGroup: typeof import('primevue/columngroup')['default'];
    ConfirmDialog: typeof import('primevue/confirmdialog')['default'];
    ConfirmPopup: typeof import('primevue/confirmpopup')['default'];
    ConfirmationService: typeof import('primevue/confirmationservice')['default'];
    ContextMenu: typeof import('primevue/contextmenu')['default'];
    DataTable: typeof import('primevue/datatable')['default'];
    DataView: typeof import('primevue/dataview')['default'];
    DataViewLayoutOptions: typeof import('primevue/dataviewlayoutoptions')['default'];
    DeferredContent: typeof import('primevue/deferredcontent')['default'];
    Dialog: typeof import('primevue/dialog')['default'];
    Divider: typeof import('primevue/divider')['default'];
    Dock: typeof import('primevue/dock')['default'];
    Dropdown: typeof import('primevue/dropdown')['default'];
    DynamicDialog: typeof import('primevue/dynamicdialog')['default'];
    Fieldset: typeof import('primevue/fieldset')['default'];
    FileUpload: typeof import('primevue/fileupload')['default'];
    Galleria: typeof import('primevue/galleria')['default'];
    Image: typeof import('primevue/image')['default'];
    InlineMessage: typeof import('primevue/inlinemessage')['default'];
    Inplace: typeof import('primevue/inlineMessage')['default'];
    InputMask: typeof import('primevue/inputMask')['default'];
    InputNumber: typeof import('primevue/inputNumber')['default'];
    InputSwith: typeof import('primevue/inputSwith')['default'];
    InputText: typeof import('primevue/inputText')['default'];
    Knob: typeof import('primevue/knob')['default'];
    ListBox: typeof import('primevue/listBox')['default'];
    MegaMenu: typeof import('primevue/MegaMenu')['default'];
    Menu: typeof import('primevue/menu')['default'];
    Menubar: typeof import('primevue/menubar')['default'];
    Message: typeof import('primevue/message')['default'];
    MultiSelect: typeof import('primevue/multiSelect')['default'];
    OrderList: typeof import('primevue/orderList')['default'];
    OrganizationChart: typeof import('primevue/organizationChart')['default'];
    OverlayPanel: typeof import('primevue/overlayPanel')['default'];
    Paginator: typeof import('primevue/paginator')['default'];
    Panel: typeof import('primevue/panel')['default'];
    PanelMenu: typeof import('primevue/panelMenu')['default'];
    Password: typeof import('primevue/password')['default'];
    PickList: typeof import('primevue/pickList')['default'];
    ProgressBar: typeof import('primevue/progressbar')['default'];
    ProgressSpinner: typeof import('primevue/progressSpinner')['default'];
    RadioButton: typeof import('primevue/radioButton')['default'];
    Rating: typeof import('primevue/rating')['default'];
    Row: typeof import('primevue/row')['default'];
    SelectButton: typeof import('primevue/selectButton')['default'];
    ScrollPanel: typeof import('primevue/scrollPanel')['default'];
    ScrollTop: typeof import('primevue/scrollTop')['default'];
    Slider: typeof import('primevue/slider')['default'];
    Sidebar: typeof import('primevue/sidebar')['default'];
    Skeleton: typeof import('primevue/skeleton')['default'];
    SpeedDial: typeof import('primevue/speedDial')['default'];
    SplitButton: typeof import('primevue/splitButton')['default'];
    Splitter: typeof import('primevue/splitter')['default'];
    SplitterPanel: typeof import('primevue/splitterPanel')['default'];
    Steps: typeof import('primevue/steps')['default'];
    TabMenu: typeof import('primevue/tabMenu')['default'];
    TabPanel: typeof import('primevue/tabPanel')['default'];
    Tag: typeof import('primevue/tag')['default'];
    Textarea: typeof import('primevue/textarea')['default'];
    Terminal: typeof import('primevue/terminal')['default'];
    TieredMenu: typeof import('primevue/tieredMenu')['default'];
    Timeline: typeof import('primevue/timeline')['default'];
    Toast: typeof import('primevue/toast')['default'];
    Toolbar: typeof import('primevue/toolbar')['default'];
    ToggleButton: typeof import('primevue/toggleButton')['default'];
    Tree: typeof import('primevue/tree')['default'];
    TreeSelect: typeof import('primevue/treeSelect')['default'];
    TreeTable: typeof import('primevue/treeTable')['default'];
    TriStateCheckbox: typeof import('primevue/triStateCheckbox')['default'];
    VirtualScroller: typeof import('primevue/virtualScroller')['default'];
  }
}

export {};
