const mockSignUp = jest.fn();
const mockAdminConfirmSignUp = jest.fn();
const mockAdminGetUser = jest.fn();
const mockAdminInitiateAuth = jest.fn();
const mockPut = jest.fn();

export default {
  mockSignUp,
  mockAdminConfirmSignUp,
  mockAdminGetUser,
  mockAdminInitiateAuth,
  mockPut,

  DynamoDB: {
    DocumentClient: class {
      put(params) {
        return {
          promise: () => mockPut(params)
        };
      }
    }
  },

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
