const SIGNIN_ROUTE = {
  root: '/',
  signin: '/signin',
  signup: '/signup',
  type: '/signup/type',
  profile: '/signup/profile',
  complete: '/signup/complete',
};

const SCHEDULE_ROUTE = {
  root: '/schedule',
};

const ACCOUNT_ROUTE = {
  root: '/account',
  deletion: '/account/deletion',
};

export const ROUTES = {
  ONBOARDING: { ...SIGNIN_ROUTE },
  SCHEDULE: { ...SCHEDULE_ROUTE },
  ACCOUNT: { ...ACCOUNT_ROUTE },
};
