const RootApi = process.env.REACT_APP_ROOT_API || '';

export const AppRouteApi = {
  Root: RootApi,
};

export const AppRouteUi = {
  Root: '',
  Home: {
    Root: () => `${AppRouteUi.Root}/home`,
  },
  Login: {
    Root: () => `${AppRouteUi.Root}/login`,
  },
  Dashboard: {
    Root: () => `${AppRouteUi.Root}/dashboard`,
  },
  Tools: {
    Root: () => `${AppRouteUi.Root}/tools`,
  },
  News: {
    Root: () => `${AppRouteUi.Root}/news`,
  },
  MethologyAndData: {
    Root: () => `${AppRouteUi.Root}/methology-and-data`,
  },
  NotFound: {
    Root: () => `${AppRouteUi.Root}/404`,
  },
};