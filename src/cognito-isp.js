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
const mockSignUp = jest.fn();

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
  mockSignUp,

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

    signUp(params) {
      return {
        promise: () => mockSignUp(params)
      };
    }

    

    
  }
}
