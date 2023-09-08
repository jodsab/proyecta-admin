const mainRoutes = {
  // route core
  dashboard: "/dashboard",
  tables: "/tables",
  billing: "/billing",
  rtl: "/rtl",
  timesheet: "/timesheet",
  tasks: "/tasks",
  repositories: "/repositories",
  organization: "/organization",
  rolesAndPermissions: "/rolesAndPermissions",
  payment: "/payment",
  whataspp: "/whatsapp",

  // routes account
  signUp: "/sign-up",
  signIn: "/sign-in",
  profile: "/profile",
  integrations: "/integrations",
  error: "/404",
};

const Routes = {
  dashboard: {
    home: `${mainRoutes.dashboard}`,
  },
  tables: {
    home: `${mainRoutes.tables}`,
  },
  billing: {
    home: `${mainRoutes.billing}`,
  },
  rtl: {
    home: `${mainRoutes.rtl}`,
  },
  timesheet: {
    index: `${mainRoutes.timesheet}`,
  },
  tasks: {
    home: `${mainRoutes.tasks}`,
  },
  repositories: {
    home: `${mainRoutes.repositories}`,
  },
  organization: {
    home: `${mainRoutes.organization}`,
  },
  rolesAndPermissions: {
    home: `${mainRoutes.rolesAndPermissions}`,
  },
  payment: {
    home: `${mainRoutes.payment}`,
  },
  whatsapp: {
    home: `${mainRoutes.whataspp}`,
  },
  signUp: {
    home: `${mainRoutes.signUp}`,
  },
  signIn: {
    home: `${mainRoutes.signIn}`,
  },
  profile: {
    home: `${mainRoutes.profile}`,
  },
  integrations: {
    home: `${mainRoutes.integrations}`,
  },
  error: {
    home: `${mainRoutes.error}`,
  },
};

export default Routes;
