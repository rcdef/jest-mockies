const mockGetObject = jest.fn();
const mockGetSignedUrl = jest.fn();
const mockPutObject = jest.fn();

export default {
  Mock: {
    S3: {
      getObject: mockGetObject,
      getSignedUrl: mockGetSignedUrl,
      putObject: mockPutObject
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

    putObject(params) {
      return {
        promise: () => mockPutObject(params)
      };
    }
  }
};
