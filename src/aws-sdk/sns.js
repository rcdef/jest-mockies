const mockPublish = jest.fn();

export default {
  Mock: {
    SNS: {
      publish: mockPublish
    }
  },

  SNS: class {
    publish(params) {
      return {
        promise: () => mockPublish(params)
      };
    }
  }
};
