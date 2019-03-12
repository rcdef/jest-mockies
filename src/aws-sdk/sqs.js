const mockSendMessage = jest.fn();
const mockSendMessageBatch = jest.fn();

export default {
  Mock: {
    SQS: {
      sendMessage: mockSendMessage,
      sendMessageBatch: mockSendMessageBatch
    }
  },

  SQS: class {
    sendMessage(params) {
      return {
        promise: () => mockSendMessage(params)
      };
    }

    sendMessageBatch(params) {
      return {
        promise: () => mockSendMessageBatch(params)
      };
    }
  }
};
