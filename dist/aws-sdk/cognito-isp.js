"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mockAddCustomAttributes = jest.fn();
var mockAdminAddUserToGroup = jest.fn();
var mockAdminConfirmSignUp = jest.fn();
var mockAdminCreateUser = jest.fn();
var mockAdminDeleteUser = jest.fn();
var mockAdminDeleteUserAttributes = jest.fn();
var mockAdminDisableProviderForUser = jest.fn();
var mockAdminDisableUser = jest.fn();
var mockAdminEnableUser = jest.fn();
var mockAdminForgetDevice = jest.fn();
var mockAdminGetDevice = jest.fn();
var mockAdminGetUser = jest.fn();
var mockAdminInitiateAuth = jest.fn();
var mockAdminLinkProviderForUser = jest.fn();
var mockAdminListDevices = jest.fn();
var mockAdminListGroupsForUser = jest.fn();
var mockAdminListUserAuthEvents = jest.fn();
var mockAdminRemoveUserFromGroup = jest.fn();
var mockAdminResetUserPassword = jest.fn();
var mockAdminResponseToAuthChallenge = jest.fn();
var mockAdminSetUserMFAPreference = jest.fn();
var mockAdminSetUserSettings = jest.fn();
var mockAdminUpdateAuthEventFeedback = jest.fn();
var mockAdminUpdateDeviceStatus = jest.fn();
var mockAdminUpdateUserAttributes = jest.fn();
var mockAdminUserGlobalSignOut = jest.fn();
var mockAssociateSoftwareToken = jest.fn();
var mockChangePassword = jest.fn();
var mockConfirmDevice = jest.fn();
var mockConfirmForgotPassword = jest.fn();
var mockConfirmSignUp = jest.fn();
var mockCreateGroup = jest.fn();
var mockCreateIdentityProvider = jest.fn();
var mockCreateResourceServer = jest.fn();
var mockCreateUserImportGroup = jest.fn();
var mockCreateUserPool = jest.fn();
var mockCreateUserPoolClient = jest.fn();
var mockCreateUserPoolDomain = jest.fn();
var mockDeleteGroup = jest.fn();
var mockDeleteIdentityProvider = jest.fn();
var mockDeleteResourceServer = jest.fn();
var mockDeleteUser = jest.fn();
var mockDeleteUserAttributes = jest.fn();
var mockDeleteUserPool = jest.fn();
var mockDeleteUserPoolClient = jest.fn();
var mockDeleteUserPoolDomain = jest.fn();
var mockDescribeIdentityProvider = jest.fn();
var mockDescribeUserPool = jest.fn();
var mockDescribeUserPoolClient = jest.fn();
var mockDescribeUserPoolDomain = jest.fn();
var mockForgetDevice = jest.fn();
var mockForgetPassword = jest.fn();
var mockGetCSVHeader = jest.fn();
var mockGetDevice = jest.fn();
var mockGetGroup = jest.fn();
var mockGetIdentityProviderByIdentifier = jest.fn();
var mockGetSigningCertificate = jest.fn();
var mockGetUICustomization = jest.fn();
var mockGetUser = jest.fn();
var mockGetUserAttributeVerificationCode = jest.fn();
var mockGetUserPoolMfaConfig = jest.fn();
var mockGlobalSignOut = jest.fn();
var mockInitiateAuth = jest.fn();
var mockListDevices = jest.fn();
var mockListGroups = jest.fn();
var mockListIdentityProviders = jest.fn();
var mockListResourceServers = jest.fn();
var mockListUserImportJobs = jest.fn();
var mockListUserPoolClients = jest.fn();
var mockListUserPools = jest.fn();
var mockListUsers = jest.fn();
var mockListUsersInGroup = jest.fn();
var mockResendConfirmationCode = jest.fn();
var mockRespondToAuthChallenge = jest.fn();
var mockSetRiskConfiguration = jest.fn();
var mockSetUICustomization = jest.fn();
var mockSetUserMFAPreference = jest.fn();
var mockSetUserPoolMfaConfig = jest.fn();
var mockSetUserSettings = jest.fn();
var mockSignUp = jest.fn();
var mockStartUserImportJob = jest.fn();
var mockStopUserImportJob = jest.fn();
var mockUpdateAuthEventFeedback = jest.fn();
var mockUpdateDeviceStatus = jest.fn();
var mockUpdateGroup = jest.fn();
var mockUpdateIdentityProvider = jest.fn();
var mockUpdateResourceServer = jest.fn();
var mockUpdateUserAttributes = jest.fn();
var mockUpdateUserPool = jest.fn();
var mockUpdateUserPoolClient = jest.fn();
var mockVerifySoftwareToken = jest.fn();
var mockVerifyUserAttribute = jest.fn();
var _default = {
  Mock: {
    CognitoIdentityServiceProvider: {
      addCustomAttributes: mockAddCustomAttributes,
      adminAddUserToGroup: mockAdminAddUserToGroup,
      adminConfirmSignUp: mockAdminConfirmSignUp,
      adminCreateUser: mockAdminCreateUser,
      adminDeleteUser: mockAdminDeleteUser,
      adminDeleteUserAttributes: mockAdminDeleteUserAttributes,
      adminDisableProviderForUser: mockAdminDisableProviderForUser,
      adminDisableUser: mockAdminDisableUser,
      adminEnableUser: mockAdminEnableUser,
      adminForgetDevice: mockAdminForgetDevice,
      adminGetDevice: mockAdminGetDevice,
      adminGetUser: mockAdminGetUser,
      adminInitiateAuth: mockAdminInitiateAuth,
      adminLinkProviderForUser: mockAdminLinkProviderForUser,
      adminListDevices: mockAdminListDevices,
      adminListGroupsForUser: mockAdminListGroupsForUser,
      adminListUserAuthEvents: mockAdminListUserAuthEvents,
      adminRemoveUserFromGroup: mockAdminRemoveUserFromGroup,
      adminResetUserPassword: mockAdminResetUserPassword,
      adminResponseToAuthChallenge: mockAdminResponseToAuthChallenge,
      adminSetUserMFAPreference: mockAdminSetUserMFAPreference,
      adminSetUserSettings: mockAdminSetUserSettings,
      adminUpdateAuthEventFeedback: mockAdminUpdateAuthEventFeedback,
      adminUpdateDeviceStatus: mockAdminUpdateDeviceStatus,
      adminUpdateUserAttributes: mockAdminUpdateUserAttributes,
      adminUserGlobalSignOut: mockAdminUserGlobalSignOut,
      associateSoftwareToken: mockAssociateSoftwareToken,
      changePassword: mockChangePassword,
      confirmDevice: mockConfirmDevice,
      confirmForgotPassword: mockConfirmForgotPassword,
      confirmSignUp: mockConfirmSignUp,
      createGroup: mockCreateGroup,
      createIdentityProvider: mockCreateIdentityProvider,
      createResourceServer: mockCreateResourceServer,
      createUserImportGroup: mockCreateUserImportGroup,
      createUserPool: mockCreateUserPool,
      createUserPoolClient: mockCreateUserPoolClient,
      createUserPoolDomain: mockCreateUserPoolDomain,
      deleteGroup: mockDeleteGroup,
      deleteIdentityProvider: mockDeleteIdentityProvider,
      deleteResourceServer: mockDeleteResourceServer,
      deleteUser: mockDeleteUser,
      deleteUserAttributes: mockDeleteUserAttributes,
      deleteUserPool: mockDeleteUserPool,
      deleteUserPoolClient: mockDeleteUserPoolClient,
      deleteUserPoolDomain: mockDeleteUserPoolDomain,
      describeIdentityProvider: mockDescribeIdentityProvider,
      describeUserPool: mockDescribeUserPool,
      describeUserPoolClient: mockDescribeUserPoolClient,
      describeUserPoolDomain: mockDescribeUserPoolDomain,
      forgetDevice: mockForgetDevice,
      forgetPassword: mockForgetPassword,
      getCSVHeader: mockGetCSVHeader,
      getDevice: mockGetDevice,
      getGroup: mockGetGroup,
      getIdentityProviderByIdentifier: mockGetIdentityProviderByIdentifier,
      getSigningCertificate: mockGetSigningCertificate,
      getUICustomization: mockGetUICustomization,
      getUser: mockGetUser,
      getUserAttributeVerificationCode: mockGetUserAttributeVerificationCode,
      getUserPoolMfaConfig: mockGetUserPoolMfaConfig,
      globalSignOut: mockGlobalSignOut,
      initiateAuth: mockInitiateAuth,
      listDevices: mockListDevices,
      listGroups: mockListGroups,
      listIdentityProviders: mockListIdentityProviders,
      listResourceServers: mockListResourceServers,
      listUserImportJobs: mockListUserImportJobs,
      listUserPoolClients: mockListUserPoolClients,
      listUserPools: mockListUserPools,
      listUsers: mockListUsers,
      listUsersInGroup: mockListUsersInGroup,
      resendConfirmationCode: mockResendConfirmationCode,
      respondToAuthChallenge: mockRespondToAuthChallenge,
      setRiskConfiguration: mockSetRiskConfiguration,
      setUICustomization: mockSetUICustomization,
      setUserMFAPreference: mockSetUserMFAPreference,
      setUserPoolMfaConfig: mockSetUserPoolMfaConfig,
      setUserSettings: mockSetUserSettings,
      signUp: mockSignUp,
      startUserImportJob: mockStartUserImportJob,
      stopUserImportJob: mockStopUserImportJob,
      updateAuthEventFeedback: mockUpdateAuthEventFeedback,
      updateDeviceStatus: mockUpdateDeviceStatus,
      updateGroup: mockUpdateGroup,
      updateIdentityProvider: mockUpdateIdentityProvider,
      updateResourceServer: mockUpdateResourceServer,
      updateUserAttributes: mockUpdateUserAttributes,
      updateUserPool: mockUpdateUserPool,
      updateUserPoolClient: mockUpdateUserPoolClient,
      verifySoftwareToken: mockVerifySoftwareToken,
      verifyUserAttribute: mockVerifyUserAttribute
    }
  },
  CognitoIdentityServiceProvider:
  /*#__PURE__*/
  function () {
    function CognitoIdentityServiceProvider() {
      _classCallCheck(this, CognitoIdentityServiceProvider);
    }

    _createClass(CognitoIdentityServiceProvider, [{
      key: "addCustomAttributes",
      value: function addCustomAttributes(params) {
        return {
          promise: function promise() {
            return mockAddCustomAttributes(params);
          }
        };
      }
    }, {
      key: "adminAddUserToGroup",
      value: function adminAddUserToGroup(params) {
        return {
          promise: function promise() {
            return mockAdminAddUserToGroup(params);
          }
        };
      }
    }, {
      key: "adminConfirmSignUp",
      value: function adminConfirmSignUp(params) {
        return {
          promise: function promise() {
            return mockAdminConfirmSignUp(params);
          }
        };
      }
    }, {
      key: "adminCreateUser",
      value: function adminCreateUser(params) {
        return {
          promise: function promise() {
            return mockAdminCreateUser(params);
          }
        };
      }
    }, {
      key: "adminDeleteUser",
      value: function adminDeleteUser(params) {
        return {
          promise: function promise() {
            return mockAdminDeleteUser(params);
          }
        };
      }
    }, {
      key: "adminDeleteUserAttributes",
      value: function adminDeleteUserAttributes(params) {
        return {
          promise: function promise() {
            return mockAdminDeleteUserAttributes(params);
          }
        };
      }
    }, {
      key: "adminDisableProviderForUser",
      value: function adminDisableProviderForUser(params) {
        return {
          promise: function promise() {
            return mockAdminDisableProviderForUser(params);
          }
        };
      }
    }, {
      key: "adminDisableUser",
      value: function adminDisableUser(params) {
        return {
          promise: function promise() {
            return mockAdminDisableUser(params);
          }
        };
      }
    }, {
      key: "adminEnableUser",
      value: function adminEnableUser(params) {
        return {
          promise: function promise() {
            return mockAdminEnableUser(params);
          }
        };
      }
    }, {
      key: "adminForgetDevice",
      value: function adminForgetDevice(params) {
        return {
          promise: function promise() {
            return mockAdminForgetDevice(params);
          }
        };
      }
    }, {
      key: "adminGetDevice",
      value: function adminGetDevice(params) {
        return {
          promise: function promise() {
            return mockAdminGetDevice(params);
          }
        };
      }
    }, {
      key: "adminGetUser",
      value: function adminGetUser(params) {
        return {
          promise: function promise() {
            return mockAdminGetUser(params);
          }
        };
      }
    }, {
      key: "adminInitiateAuth",
      value: function adminInitiateAuth(params) {
        return {
          promise: function promise() {
            return mockAdminInitiateAuth(params);
          }
        };
      }
    }, {
      key: "adminLinkProviderForUser",
      value: function adminLinkProviderForUser(params) {
        return {
          promise: function promise() {
            return mockAdminLinkProviderForUser(params);
          }
        };
      }
    }, {
      key: "adminListDevices",
      value: function adminListDevices(params) {
        return {
          promise: function promise() {
            return mockAdminListDevices(params);
          }
        };
      }
    }, {
      key: "adminListGroupsForUser",
      value: function adminListGroupsForUser(params) {
        return {
          promise: function promise() {
            return mockAdminListGroupsForUser(params);
          }
        };
      }
    }, {
      key: "adminListUserAuthEvents",
      value: function adminListUserAuthEvents(params) {
        return {
          promise: function promise() {
            return mockAdminListUserAuthEvents(params);
          }
        };
      }
    }, {
      key: "adminRemoveUserFromGroup",
      value: function adminRemoveUserFromGroup(params) {
        return {
          promise: function promise() {
            return mockAdminRemoveUserFromGroup(params);
          }
        };
      }
    }, {
      key: "adminResetUserPassword",
      value: function adminResetUserPassword(params) {
        return {
          promise: function promise() {
            return mockAdminResetUserPassword(params);
          }
        };
      }
    }, {
      key: "adminResponseToAuthChallenge",
      value: function adminResponseToAuthChallenge(params) {
        return {
          promise: function promise() {
            return mockAdminResponseToAuthChallenge(params);
          }
        };
      }
    }, {
      key: "adminSetUserMFAPreference",
      value: function adminSetUserMFAPreference(params) {
        return {
          promise: function promise() {
            return mockAdminSetUserMFAPreference(params);
          }
        };
      }
    }, {
      key: "adminSetUserSettings",
      value: function adminSetUserSettings(params) {
        return {
          promise: function promise() {
            return mockAdminSetUserSettings(params);
          }
        };
      }
    }, {
      key: "adminUpdateAuthEventFeedback",
      value: function adminUpdateAuthEventFeedback(params) {
        return {
          promise: function promise() {
            return mockAdminUpdateAuthEventFeedback(params);
          }
        };
      }
    }, {
      key: "adminUpdateDeviceStatus",
      value: function adminUpdateDeviceStatus(params) {
        return {
          promise: function promise() {
            return mockAdminUpdateDeviceStatus(params);
          }
        };
      }
    }, {
      key: "adminUpdateUserAttributes",
      value: function adminUpdateUserAttributes(params) {
        return {
          promise: function promise() {
            return mockAdminUpdateUserAttributes(params);
          }
        };
      }
    }, {
      key: "adminUserGlobalSignOut",
      value: function adminUserGlobalSignOut(params) {
        return {
          promise: function promise() {
            return mockAdminUserGlobalSignOut(params);
          }
        };
      }
    }, {
      key: "associateSoftwareToken",
      value: function associateSoftwareToken(params) {
        return {
          promise: function promise() {
            return mockAssociateSoftwareToken(params);
          }
        };
      }
    }, {
      key: "changePassword",
      value: function changePassword(params) {
        return {
          promise: function promise() {
            return mockChangePassword(params);
          }
        };
      }
    }, {
      key: "confirmDevice",
      value: function confirmDevice(params) {
        return {
          promise: function promise() {
            return mockConfirmDevice(params);
          }
        };
      }
    }, {
      key: "confirmForgotPassword",
      value: function confirmForgotPassword(params) {
        return {
          promise: function promise() {
            return mockConfirmForgotPassword(params);
          }
        };
      }
    }, {
      key: "confirmSignUp",
      value: function confirmSignUp(params) {
        return {
          promise: function promise() {
            return mockConfirmSignUp(params);
          }
        };
      }
    }, {
      key: "createGroup",
      value: function createGroup(params) {
        return {
          promise: function promise() {
            return mockCreateGroup(params);
          }
        };
      }
    }, {
      key: "createIdentityProvider",
      value: function createIdentityProvider(params) {
        return {
          promise: function promise() {
            return mockCreateIdentityProvider(params);
          }
        };
      }
    }, {
      key: "createResourceServer",
      value: function createResourceServer(params) {
        return {
          promise: function promise() {
            return mockCreateResourceServer(params);
          }
        };
      }
    }, {
      key: "createUserImportGroup",
      value: function createUserImportGroup(params) {
        return {
          promise: function promise() {
            return mockCreateUserImportGroup(params);
          }
        };
      }
    }, {
      key: "createUserPool",
      value: function createUserPool(params) {
        return {
          promise: function promise() {
            return mockCreateUserPool(params);
          }
        };
      }
    }, {
      key: "createUserPoolClient",
      value: function createUserPoolClient(params) {
        return {
          promise: function promise() {
            return mockCreateUserPoolClient(params);
          }
        };
      }
    }, {
      key: "createUserPoolDomain",
      value: function createUserPoolDomain(params) {
        return {
          promise: function promise() {
            return mockCreateUserPoolDomain(params);
          }
        };
      }
    }, {
      key: "deleteGroup",
      value: function deleteGroup(params) {
        return {
          promise: function promise() {
            return mockDeleteGroup(params);
          }
        };
      }
    }, {
      key: "deleteIdentityProvider",
      value: function deleteIdentityProvider(params) {
        return {
          promise: function promise() {
            return mockDeleteIdentityProvider(params);
          }
        };
      }
    }, {
      key: "deleteResourceServer",
      value: function deleteResourceServer(params) {
        return {
          promise: function promise() {
            return mockDeleteResourceServer(params);
          }
        };
      }
    }, {
      key: "deleteUser",
      value: function deleteUser(params) {
        return {
          promise: function promise() {
            return mockDeleteUser(params);
          }
        };
      }
    }, {
      key: "deleteUserAttributes",
      value: function deleteUserAttributes(params) {
        return {
          promise: function promise() {
            return mockDeleteUserAttributes(params);
          }
        };
      }
    }, {
      key: "deleteUserPool",
      value: function deleteUserPool(params) {
        return {
          promise: function promise() {
            return mockDeleteUserPool(params);
          }
        };
      }
    }, {
      key: "deleteUserPoolClient",
      value: function deleteUserPoolClient(params) {
        return {
          promise: function promise() {
            return mockDeleteUserPoolClient(params);
          }
        };
      }
    }, {
      key: "deleteUserPoolDomain",
      value: function deleteUserPoolDomain(params) {
        return {
          promise: function promise() {
            return mockDeleteUserPoolDomain(params);
          }
        };
      }
    }, {
      key: "describeIdentityProvider",
      value: function describeIdentityProvider(params) {
        return {
          promise: function promise() {
            return mockDescribeIdentityProvider(params);
          }
        };
      }
    }, {
      key: "describeUserPool",
      value: function describeUserPool(params) {
        return {
          promise: function promise() {
            return mockDescribeUserPool(params);
          }
        };
      }
    }, {
      key: "describeUserPoolClient",
      value: function describeUserPoolClient(params) {
        return {
          promise: function promise() {
            return mockDescribeUserPoolClient(params);
          }
        };
      }
    }, {
      key: "describeUserPoolDomain",
      value: function describeUserPoolDomain(params) {
        return {
          promise: function promise() {
            return mockDescribeUserPoolDomain(params);
          }
        };
      }
    }, {
      key: "forgetDevice",
      value: function forgetDevice(params) {
        return {
          promise: function promise() {
            return mockForgetDevice(params);
          }
        };
      }
    }, {
      key: "forgetPassword",
      value: function forgetPassword(params) {
        return {
          promise: function promise() {
            return mockForgetPassword(params);
          }
        };
      }
    }, {
      key: "getCSVHeader",
      value: function getCSVHeader(params) {
        return {
          promise: function promise() {
            return mockGetCSVHeader(params);
          }
        };
      }
    }, {
      key: "getDevice",
      value: function getDevice(params) {
        return {
          promise: function promise() {
            return mockGetDevice(params);
          }
        };
      }
    }, {
      key: "getGroup",
      value: function getGroup(params) {
        return {
          promise: function promise() {
            return mockGetGroup(params);
          }
        };
      }
    }, {
      key: "getIdentityProviderByIdentifier",
      value: function getIdentityProviderByIdentifier(params) {
        return {
          promise: function promise() {
            return mockGetIdentityProviderByIdentifier(params);
          }
        };
      }
    }, {
      key: "getSigningCertificate",
      value: function getSigningCertificate(params) {
        return {
          promise: function promise() {
            return mockGetSigningCertificate(params);
          }
        };
      }
    }, {
      key: "getUICustomization",
      value: function getUICustomization(params) {
        return {
          promise: function promise() {
            return mockGetUICustomization(params);
          }
        };
      }
    }, {
      key: "getUser",
      value: function getUser(params) {
        return {
          promise: function promise() {
            return mockGetUser(params);
          }
        };
      }
    }, {
      key: "getUserAttributeVerificationCode",
      value: function getUserAttributeVerificationCode(params) {
        return {
          promise: function promise() {
            return mockGetUserAttributeVerificationCode(params);
          }
        };
      }
    }, {
      key: "getUserPoolMfaConfig",
      value: function getUserPoolMfaConfig(params) {
        return {
          promise: function promise() {
            return mockGetUserPoolMfaConfig(params);
          }
        };
      }
    }, {
      key: "globalSignOut",
      value: function globalSignOut(params) {
        return {
          promise: function promise() {
            return mockGlobalSignOut(params);
          }
        };
      }
    }, {
      key: "initiateAuth",
      value: function initiateAuth(params) {
        return {
          promise: function promise() {
            return mockInitiateAuth(params);
          }
        };
      }
    }, {
      key: "listDevices",
      value: function listDevices(params) {
        return {
          promise: function promise() {
            return mockListDevices(params);
          }
        };
      }
    }, {
      key: "listGroups",
      value: function listGroups(params) {
        return {
          promise: function promise() {
            return mockListGroups(params);
          }
        };
      }
    }, {
      key: "listIdentityProviders",
      value: function listIdentityProviders(params) {
        return {
          promise: function promise() {
            return mockListIdentityProviders(params);
          }
        };
      }
    }, {
      key: "listResourceServers",
      value: function listResourceServers(params) {
        return {
          promise: function promise() {
            return mockListResourceServers(params);
          }
        };
      }
    }, {
      key: "listUserImportJobs",
      value: function listUserImportJobs(params) {
        return {
          promise: function promise() {
            return mockListUserImportJobs(params);
          }
        };
      }
    }, {
      key: "listUserPoolClients",
      value: function listUserPoolClients(params) {
        return {
          promise: function promise() {
            return mockListUserPoolClients(params);
          }
        };
      }
    }, {
      key: "listUserPools",
      value: function listUserPools(params) {
        return {
          promise: function promise() {
            return mockListUserPools(params);
          }
        };
      }
    }, {
      key: "listUsers",
      value: function listUsers(params) {
        return {
          promise: function promise() {
            return mockListUsers(params);
          }
        };
      }
    }, {
      key: "listUsersInGroup",
      value: function listUsersInGroup(params) {
        return {
          promise: function promise() {
            return mockListUsersInGroup(params);
          }
        };
      }
    }, {
      key: "resendConfirmationCode",
      value: function resendConfirmationCode(params) {
        return {
          promise: function promise() {
            return mockResendConfirmationCode(params);
          }
        };
      }
    }, {
      key: "respondToAuthChallenge",
      value: function respondToAuthChallenge(params) {
        return {
          promise: function promise() {
            return mockRespondToAuthChallenge(params);
          }
        };
      }
    }, {
      key: "setRiskConfiguration",
      value: function setRiskConfiguration(params) {
        return {
          promise: function promise() {
            return mockSetRiskConfiguration(params);
          }
        };
      }
    }, {
      key: "setUICustomization",
      value: function setUICustomization(params) {
        return {
          promise: function promise() {
            return mockSetUICustomization(params);
          }
        };
      }
    }, {
      key: "setUserMFAPreference",
      value: function setUserMFAPreference(params) {
        return {
          promise: function promise() {
            return mockSetUserMFAPreference(params);
          }
        };
      }
    }, {
      key: "setUserPoolMfaConfig",
      value: function setUserPoolMfaConfig(params) {
        return {
          promise: function promise() {
            return mockSetUserPoolMfaConfig(params);
          }
        };
      }
    }, {
      key: "setUserSettings",
      value: function setUserSettings(params) {
        return {
          promise: function promise() {
            return mockSetUserSettings(params);
          }
        };
      }
    }, {
      key: "signUp",
      value: function signUp(params) {
        return {
          promise: function promise() {
            return mockSignUp(params);
          }
        };
      }
    }, {
      key: "startUserImportJob",
      value: function startUserImportJob(params) {
        return {
          promise: function promise() {
            return mockStartUserImportJob(params);
          }
        };
      }
    }, {
      key: "stopUserImportJob",
      value: function stopUserImportJob(params) {
        return {
          promise: function promise() {
            return mockStopUserImportJob(params);
          }
        };
      }
    }, {
      key: "updateAuthEventFeedback",
      value: function updateAuthEventFeedback(params) {
        return {
          promise: function promise() {
            return mockUpdateAuthEventFeedback(params);
          }
        };
      }
    }, {
      key: "updateDeviceStatus",
      value: function updateDeviceStatus(params) {
        return {
          promise: function promise() {
            return mockUpdateDeviceStatus(params);
          }
        };
      }
    }, {
      key: "updateGroup",
      value: function updateGroup(params) {
        return {
          promise: function promise() {
            return mockUpdateGroup(params);
          }
        };
      }
    }, {
      key: "updateIdentityProvider",
      value: function updateIdentityProvider(params) {
        return {
          promise: function promise() {
            return mockUpdateIdentityProvider(params);
          }
        };
      }
    }, {
      key: "updateResourceServer",
      value: function updateResourceServer(params) {
        return {
          promise: function promise() {
            return mockUpdateResourceServer(params);
          }
        };
      }
    }, {
      key: "updateUserAttributes",
      value: function updateUserAttributes(params) {
        return {
          promise: function promise() {
            return mockUpdateUserAttributes(params);
          }
        };
      }
    }, {
      key: "updateUserPool",
      value: function updateUserPool(params) {
        return {
          promise: function promise() {
            return mockUpdateUserPool(params);
          }
        };
      }
    }, {
      key: "updateUserPoolClient",
      value: function updateUserPoolClient(params) {
        return {
          promise: function promise() {
            return mockUpdateUserPoolClient(params);
          }
        };
      }
    }, {
      key: "verifySoftwareToken",
      value: function verifySoftwareToken(params) {
        return {
          promise: function promise() {
            return mockVerifySoftwareToken(params);
          }
        };
      }
    }, {
      key: "verifyUserAttribute",
      value: function verifyUserAttribute(params) {
        return {
          promise: function promise() {
            return mockVerifyUserAttribute(params);
          }
        };
      }
    }]);

    return CognitoIdentityServiceProvider;
  }()
};
exports.default = _default;