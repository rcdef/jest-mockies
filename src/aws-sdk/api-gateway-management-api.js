const mockPostToConnection = jest.fn();

export default {
  Mock: {
    ApiGatewayManagementApi: {
      postToConnection: mockPostToConnection
    }
  },

  ApiGatewayManagementApi: class {
    postToConnection(params) {
      return {
        promise: () => mockPostToConnection(params)
      };
    }
  }
};
