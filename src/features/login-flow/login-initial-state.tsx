//import moment from 'moment';

const loggedInUserInitialState = {
  loading: false,
  loggedInUser: {
    userForm: {
      firstName: "",
      lastName: "",
      organization: "",
      email: "",
      username: "",
      password: "",
      roleId: null,
      orgId: null,
      roleName: "",
      modifiedAt: "",
      modifiedBy: "",
      createdAt: "",
      createdBy: "",
      lastLogin: "",
      accountExpiry: "",
      defaultCountry: "",
      countryAccess: [],
      token: "",
    },
    users: null,
  },
};

export default loggedInUserInitialState;
