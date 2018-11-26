import mockDynamoDB from './dynamodb';

const mockSignUp = jest.fn();
const mockAdminConfirmSignUp = jest.fn();
const mockAdminGetUser = jest.fn();
const mockAdminInitiateAuth = jest.fn();

export default {
  ...mockDynamoDB,
  mockSignUp,
  mockAdminConfirmSignUp,
  mockAdminGetUser,
  mockAdminInitiateAuth,

  CognitoIdentityServiceProvider: class {
    signUp(params) {
      return {
        promise: () => mockSignUp(params)
      };
    }

    adminConfirmSignUp(params) {
      return {
        promise: () => mockAdminConfirmSignUp(params)
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
  }
};
