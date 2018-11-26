const mockAddCustomAttributes = jest.fn();
const mockAdminAddUserToGroup = jest.fn();
const mockAdminConfirmSignUp = jest.fn();
const mockAdminCreateUser = jest.fn();
const mockAdminDeleteUser = jest.fn();
const mockAdminDeleteUserAttributes = jest.fn();
const mockAdminDisableProviderForUser = jest.fn();
const mockAdminDisableUser = jest.fn();
const mockAdminEnableUser = jest.fn();
const mockAdminForgetDevice = jest.fn();
const mockAdminGetDevice = jest.fn();
const mockAdminGetUser = jest.fn();
const mockAdminInitiateAuth = jest.fn();
const mockAdminLinkProviderForUser = jest.fn();
const mockAdminListDevices = jest.fn();
const mockAdminListGroupsForUser = jest.fn();
const mockAdminListUserAuthEvents = jest.fn();
const mockAdminRemoveUserFromGroup = jest.fn();
const mockAdminResetUserPassword = jest.fn();
const mockAdminResponseToAuthChallenge = jest.fn();
const mockAdminSetUserMFAPreference = jest.fn();
const mockAdminSetUserSettings = jest.fn();
const mockAdminUpdateAuthEventFeedback = jest.fn();
const mockAdminUpdateDeviceStatus = jest.fn();
const mockAdminUpdateUserAttributes = jest.fn();
const mockAdminUserGlobalSignOut = jest.fn();
const mockAssociateSoftwareToken = jest.fn();
const mockChangePassword = jest.fn();
const mockConfirmDevice = jest.fn();
const mockConfirmForgotPassword = jest.fn();
const mockConfirmSignUp = jest.fn();
const mockCreateGroup = jest.fn();
const mockCreateIdentityProvider = jest.fn();
const mockCreateResourceServer = jest.fn();
const mockCreateUserImportGroup = jest.fn();
const mockCreateUserPool = jest.fn();
const mockCreateUserPoolClient = jest.fn();
const mockCreateUserPoolDomain = jest.fn();
const mockDeleteGroup = jest.fn();
const mockDeleteIdentityProvider = jest.fn();
const mockDeleteResourceServer = jest.fn();
const mockDeleteUser = jest.fn();
const mockDeleteUserAttributes = jest.fn();
const mockDeleteUserPool = jest.fn();
const mockDeleteUserPoolClient = jest.fn();
const mockDeleteUserPoolDomain = jest.fn();
const mockDescribeIdentityProvider = jest.fn();
const mockDescribeUserPool = jest.fn();
const mockDescribeUserPoolClient = jest.fn();
const mockDescribeUserPoolDomain = jest.fn();
const mockForgetDevice = jest.fn();
const mockForgetPassword = jest.fn();
const mockGetCSVHeader = jest.fn();
const mockGetDevice = jest.fn();
const mockGetGroup = jest.fn();
const mockGetIdentityProviderByIdentifier = jest.fn();
const mockGetSigningCertificate = jest.fn();
const mockGetUICustomization = jest.fn();
const mockGetUser = jest.fn();
const mockGetUserAttributeVerificationCode = jest.fn();
const mockGetUserPoolMfaConfig = jest.fn();
const mockGlobalSignOut = jest.fn();
const mockInitiateAuth = jest.fn();
const mockListDevices = jest.fn();
const mockListGroups = jest.fn();
const mockListIdentityProviders = jest.fn();
const mockListResourceServers = jest.fn();
const mockListUserImportJobs = jest.fn();
const mockListUserPoolClients = jest.fn();
const mockListUserPools = jest.fn();
const mockListUsers = jest.fn();
const mockListUsersInGroup = jest.fn();
const mockResendConfirmationCode = jest.fn();
const mockRespondToAuthChallenge = jest.fn();
const mockSetRiskConfiguration = jest.fn();
const mockSetUICustomization = jest.fn();
const mockSetUserMFAPreference = jest.fn();
const mockSetUserPoolMfaConfig = jest.fn();
const mockSetUserSettings = jest.fn();
const mockSignUp = jest.fn();
const mockStartUserImportJob = jest.fn();
const mockStopUserImportJob = jest.fn();
const mockUpdateAuthEventFeedback = jest.fn();
const mockUpdateDeviceStatus = jest.fn();
const mockUpdateGroup = jest.fn();
const mockUpdateIdentityProvider = jest.fn();
const mockUpdateResourceServer = jest.fn();
const mockUpdateUserAttributes = jest.fn();
const mockUpdateUserPool = jest.fn();
const mockUpdateUserPoolClient = jest.fn();
const mockVerifySoftwareToken = jest.fn();
const mockVerifyUserAttribute = jest.fn();

export default {
  mockAddCustomAttributes,
  mockAdminAddUserToGroup,
  mockAdminConfirmSignUp,
  mockAdminCreateUser,
  mockAdminDeleteUser,
  mockAdminDeleteUserAttributes,
  mockAdminDisableProviderForUser,
  mockAdminDisableUser,
  mockAdminEnableUser,
  mockAdminForgetDevice,
  mockAdminGetDevice,
  mockAdminGetUser,
  mockAdminInitiateAuth,
  mockAdminLinkProviderForUser,
  mockAdminListDevices,
  mockAdminListGroupsForUser,
  mockAdminListUserAuthEvents,
  mockAdminRemoveUserFromGroup,
  mockAdminResetUserPassword,
  mockAdminResponseToAuthChallenge,
  mockAdminSetUserMFAPreference,
  mockAdminSetUserSettings,
  mockAdminUpdateAuthEventFeedback,
  mockAdminUpdateDeviceStatus,
  mockAdminUpdateUserAttributes,
  mockAdminUserGlobalSignOut,
  mockAssociateSoftwareToken,
  mockChangePassword,
  mockConfirmDevice,
  mockConfirmForgotPassword,
  mockConfirmSignUp,
  mockCreateGroup,
  mockCreateIdentityProvider,
  mockCreateResourceServer,
  mockCreateUserImportGroup,
  mockCreateUserPool,
  mockCreateUserPoolClient,
  mockCreateUserPoolDomain,
  mockDeleteGroup,
  mockDeleteIdentityProvider,
  mockDeleteResourceServer,
  mockDeleteUser,
  mockDeleteUserAttributes,
  mockDeleteUserPool,
  mockDeleteUserPoolClient,
  mockDeleteUserPoolDomain,
  mockDescribeIdentityProvider,
  mockDescribeUserPool,
  mockDescribeUserPoolClient,
  mockDescribeUserPoolDomain,
  mockForgetDevice,
  mockForgetPassword,
  mockGetCSVHeader,
  mockGetDevice,
  mockGetGroup,
  mockGetIdentityProviderByIdentifier,
  mockGetSigningCertificate,
  mockGetUICustomization,
  mockGetUser,
  mockGetUserAttributeVerificationCode,
  mockGetUserPoolMfaConfig,
  mockGlobalSignOut,
  mockInitiateAuth,
  mockListDevices,
  mockListGroups,
  mockListIdentityProviders,
  mockListResourceServers,
  mockListUserImportJobs,
  mockListUserPoolClients,
  mockListUserPools,
  mockListUsers,
  mockListUsersInGroup,
  mockResendConfirmationCode,
  mockRespondToAuthChallenge,
  mockSetRiskConfiguration,
  mockSetUICustomization,
  mockSetUserMFAPreference,
  mockSetUserPoolMfaConfig,
  mockSetUserSettings,
  mockSignUp,
  mockStartUserImportJob,
  mockStopUserImportJob,
  mockUpdateAuthEventFeedback,
  mockUpdateDeviceStatus,
  mockUpdateGroup,
  mockUpdateIdentityProvider,
  mockUpdateResourceServer,
  mockUpdateUserAttributes,
  mockUpdateUserPool,
  mockUpdateUserPoolClient,
  mockVerifySoftwareToken,
  mockVerifyUserAttribute,

  CognitoIdentityServiceProvider: class {
    addCustomAttributes(params) {
      return {
        promise: () => mockAddCustomAttributes(params)
      };
    }

    adminAddUserToGroup(params) {
      return {
        promise: () => mockAdminAddUserToGroup(params)
      };
    }

    adminConfirmSignUp(params) {
      return {
        promise: () => mockAdminConfirmSignUp(params)
      };
    }

    adminCreateUser(params) {
      return {
        promise: () => mockAdminCreateUser(params)
      };
    }

    adminDeleteUser(params) {
      return {
        promise: () => mockAdminDeleteUser(params)
      };
    }

    adminDeleteUserAttributes(params) {
      return {
        promise: () => mockAdminDeleteUserAttributes(params)
      };
    }

    adminDisableProviderForUser(params) {
      return {
        promise: () => mockAdminDisableProviderForUser(params)
      };
    }

    adminDisableUser(params) {
      return {
        promise: () => mockAdminDisableUser(params)
      };
    }

    adminEnableUser(params) {
      return {
        promise: () => mockAdminEnableUser(params)
      };
    }

    adminForgetDevice(params) {
      return {
        promise: () => mockAdminForgetDevice(params)
      };
    }

    adminGetDevice(params) {
      return {
        promise: () => mockAdminGetDevice(params)
      };
    }

    adminGetUser(params) {
      return {
        promise: () => mockAdminGetUser(params)
      };
    }

    adminInitiateAuth(params) {
      return {
        promise: () => mockAdminInitiateAuth(params)
      };
    }

    adminLinkProviderForUser(params) {
      return {
        promise: () => mockAdminLinkProviderForUser(params)
      };
    }

    adminListDevices(params) {
      return {
        promise: () => mockAdminListDevices(params)
      };
    }

    adminListGroupsForUser(params) {
      return {
        promise: () => mockAdminListGroupsForUser(params)
      };
    }

    adminListUserAuthEvents(params) {
      return {
        promise: () => mockAdminListUserAuthEvents(params)
      };
    }

    adminRemoveUserFromGroup(params) {
      return {
        promise: () => mockAdminRemoveUserFromGroup(params)
      };
    }

    adminResetUserPassword(params) {
      return {
        promise: () => mockAdminResetUserPassword(params)
      };
    }

    adminResponseToAuthChallenge(params) {
      return {
        promise: () => mockAdminResponseToAuthChallenge(params)
      };
    }

    adminSetUserMFAPreference(params) {
      return {
        promise: () => mockAdminSetUserMFAPreference(params)
      };
    }

    adminSetUserSettings(params) {
      return {
        promise: () => mockAdminSetUserSettings(params)
      };
    }

    adminUpdateAuthEventFeedback(params) {
      return {
        promise: () => mockAdminUpdateAuthEventFeedback(params)
      };
    }

    adminUpdateDeviceStatus(params) {
      return {
        promise: () => mockAdminUpdateDeviceStatus(params)
      };
    }

    adminUpdateUserAttributes(params) {
      return {
        promise: () => mockAdminUpdateUserAttributes(params)
      };
    }

    adminUserGlobalSignOut(params) {
      return {
        promise: () => mockAdminUserGlobalSignOut(params)
      };
    }

    associateSoftwareToken(params) {
      return {
        promise: () => mockAssociateSoftwareToken(params)
      };
    }

    changePassword(params) {
      return {
        promise: () => mockChangePassword(params)
      };
    }

    confirmDevice(params) {
      return {
        promise: () => mockConfirmDevice(params)
      };
    }

    confirmForgotPassword(params) {
      return {
        promise: () => mockConfirmForgotPassword(params)
      };
    }

    confirmSignUp(params) {
      return {
        promise: () => mockConfirmSignUp(params)
      };
    }

    createGroup(params) {
      return {
        promise: () => mockCreateGroup(params)
      };
    }

    createIdentityProvider(params) {
      return {
        promise: () => mockCreateIdentityProvider(params)
      };
    }

    createResourceServer(params) {
      return {
        promise: () => mockCreateResourceServer(params)
      };
    }

    createUserImportGroup(params) {
      return {
        promise: () => mockCreateUserImportGroup(params)
      };
    }

    createUserPool(params) {
      return {
        promise: () => mockCreateUserPool(params)
      };
    }

    createUserPoolClient(params) {
      return {
        promise: () => mockCreateUserPoolClient(params)
      };
    }

    createUserPoolDomain(params) {
      return {
        promise: () => mockCreateUserPoolDomain(params)
      };
    }

    deleteGroup(params) {
      return {
        promise: () => mockDeleteGroup(params)
      };
    }

    deleteIdentityProvider(params) {
      return {
        promise: () => mockDeleteIdentityProvider(params)
      };
    }

    deleteResourceServer(params) {
      return {
        promise: () => mockDeleteResourceServer(params)
      };
    }

    deleteUser(params) {
      return {
        promise: () => mockDeleteUser(params)
      };
    }

    deleteUserAttributes(params) {
      return {
        promise: () => mockDeleteUserAttributes(params)
      };
    }

    deleteUserPool(params) {
      return {
        promise: () => mockDeleteUserPool(params)
      };
    }

    deleteUserPoolClient(params) {
      return {
        promise: () => mockDeleteUserPoolClient(params)
      };
    }

    deleteUserPoolDomain(params) {
      return {
        promise: () => mockDeleteUserPoolDomain(params)
      };
    }

    describeIdentityProvider(params) {
      return {
        promise: () => mockDescribeIdentityProvider(params)
      };
    }

    describeUserPool(params) {
      return {
        promise: () => mockDescribeUserPool(params)
      };
    }

    describeUserPoolClient(params) {
      return {
        promise: () => mockDescribeUserPoolClient(params)
      };
    }

    describeUserPoolDomain(params) {
      return {
        promise: () => mockDescribeUserPoolDomain(params)
      };
    }

    forgetDevice(params) {
      return {
        promise: () => mockForgetDevice(params)
      };
    }

    forgetPassword(params) {
      return {
        promise: () => mockForgetPassword(params)
      };
    }

    getCSVHeader(params) {
      return {
        promise: () => mockGetCSVHeader(params)
      };
    }

    getDevice(params) {
      return {
        promise: () => mockGetDevice(params)
      };
    }

    getGroup(params) {
      return {
        promise: () => mockGetGroup(params)
      };
    }

    getIdentityProviderByIdentifier(params) {
      return {
        promise: () => mockGetIdentityProviderByIdentifier(params)
      };
    }

    getSigningCertificate(params) {
      return {
        promise: () => mockGetSigningCertificate(params)
      };
    }

    getUICustomization(params) {
      return {
        promise: () => mockGetUICustomization(params)
      };
    }

    getUser(params) {
      return {
        promise: () => mockGetUser(params)
      };
    }

    getUserAttributeVerificationCode(params) {
      return {
        promise: () => mockGetUserAttributeVerificationCode(params)
      };
    }

    getUserPoolMfaConfig(params) {
      return {
        promise: () => mockGetUserPoolMfaConfig(params)
      };
    }

    globalSignOut(params) {
      return {
        promise: () => mockGlobalSignOut(params)
      };
    }

    initiateAuth(params) {
      return {
        promise: () => mockInitiateAuth(params)
      };
    }

    listDevices(params) {
      return {
        promise: () => mockListDevices(params)
      };
    }

    listGroups(params) {
      return {
        promise: () => mockListGroups(params)
      };
    }

    listIdentityProviders(params) {
      return {
        promise: () => mockListIdentityProviders(params)
      };
    }

    listResourceServers(params) {
      return {
        promise: () => mockListResourceServers(params)
      };
    }

    listUserImportJobs(params) {
      return {
        promise: () => mockListUserImportJobs(params)
      };
    }

    listUserPoolClients(params) {
      return {
        promise: () => mockListUserPoolClients(params)
      };
    }

    listUserPools(params) {
      return {
        promise: () => mockListUserPools(params)
      };
    }

    listUsers(params) {
      return {
        promise: () => mockListUsers(params)
      };
    }

    listUsersInGroup(params) {
      return {
        promise: () => mockListUsersInGroup(params)
      };
    }

    resendConfirmationCode(params) {
      return {
        promise: () => mockResendConfirmationCode(params)
      };
    }

    respondToAuthChallenge(params) {
      return {
        promise: () => mockRespondToAuthChallenge(params)
      };
    }

    setRiskConfiguration(params) {
      return {
        promise: () => mockSetRiskConfiguration(params)
      };
    }

    setUICustomization(params) {
      return {
        promise: () => mockSetUICustomization(params)
      };
    }

    setUserMFAPreference(params) {
      return {
        promise: () => mockSetUserMFAPreference(params)
      };
    }

    setUserPoolMfaConfig(params) {
      return {
        promise: () => mockSetUserPoolMfaConfig(params)
      };
    }

    setUserSettings(params) {
      return {
        promise: () => mockSetUserSettings(params)
      };
    }

    signUp(params) {
      return {
        promise: () => mockSignUp(params)
      };
    }

    startUserImportJob(params) {
      return {
        promise: () => mockStartUserImportJob(params)
      };
    }

    stopUserImportJob(params) {
      return {
        promise: () => mockStopUserImportJob(params)
      };
    }

    updateAuthEventFeedback(params) {
      return {
        promise: () => mockUpdateAuthEventFeedback(params)
      };
    }

    updateDeviceStatus(params) {
      return {
        promise: () => mockUpdateDeviceStatus(params)
      };
    }

    updateGroup(params) {
      return {
        promise: () => mockUpdateGroup(params)
      };
    }

    updateIdentityProvider(params) {
      return {
        promise: () => mockUpdateIdentityProvider(params)
      };
    }
    updateResourceServer(params) {
      return {
        promise: () => mockUpdateResourceServer(params)
      };
    }

    updateUserAttributes(params) {
      return {
        promise: () => mockUpdateUserAttributes(params)
      };
    }

    updateUserPool(params) {
      return {
        promise: () => mockUpdateUserPool(params)
      };
    }

    updateUserPoolClient(params) {
      return {
        promise: () => mockUpdateUserPoolClient(params)
      };
    }

    verifySoftwareToken(params) {
      return {
        promise: () => mockVerifySoftwareToken(params)
      };
    }

    verifyUserAttribute(params) {
      return {
        promise: () => mockVerifyUserAttribute(params)
      };
    }
  }
}
