const mockGetObject = jest.fn();
const mockGetSignedUrl = jest.fn();

export default {
  Mock: {
    S3: {
      getObject: mockGetObject,
      getSignedUrl: mockGetSignedUrl
    }
  },

  S3: class {
    getObject(params) {
      return {
        promise: () => mockGetObject(params)
      };
    }

    getSignedUrl(params) {
      return mockGetSignedUrl(params);
    }
  }
};
