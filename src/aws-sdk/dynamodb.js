const mockBatchGet = jest.fn();
const mockBatchWrite = jest.fn();
const mockDelete = jest.fn();
const mockGet = jest.fn();
const mockPut = jest.fn();
const mockQuery = jest.fn();
const mockScan = jest.fn();
const mockUpdate = jest.fn();

export default {
  Mock: {
    DynamoDB: {
      DocumentClient: {
        batchGet: mockBatchGet,
        batchWrite: mockBatchWrite,
        delete: mockDelete,
        get: mockGet,
        put: mockPut,
        query: mockQuery,
        scan: mockScan,
        update: mockUpdate
      }
    }
  },

  DynamoDB: class {
    static get DocumentClient() {
      return class {
        batchGet(params) {
          return {
            promise: () => mockBatchGet(params)
          };
        }

        batchWrite(params) {
          return {
            promise: () => mockBatchWrite(params)
          };
        }

        delete(params) {
          return {
            promise: () => mockDelete(params)
          };
        }

        get(params) {
          return {
            promise: () => mockGet(params)
          };
        }

        put(params) {
          return {
            promise: () => mockPut(params)
          };
        }

        query(params) {
          return {
            promise: () => mockQuery(params)
          };
        }

        scan(params) {
          return {
            promise: () => mockScan(params)
          };
        }

        update(params) {
          return {
            promise: () => mockUpdate(params)
          };
        }
      };
    }
  }
};
