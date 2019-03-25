const mockGetObject = jest.fn();

export default {
  Mock: {
    S3: {
      getObject: mockGetObject
    }
  },

  S3: class {
    getObject(params) {
      return {
        promise: () => mockGetObject(params)
      };
    }
  }
};
