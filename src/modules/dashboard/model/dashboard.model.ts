export type IDashboardPostItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type IDashboardStore = {
  dashboard_loading: boolean;
  dashboard_posts: IDashboardPostItem[];
};
