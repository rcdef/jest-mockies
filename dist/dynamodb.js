"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mockBatchGet = jest.fn();
var mockBatchWrite = jest.fn();
var mockDelete = jest.fn();
var mockGet = jest.fn();
var mockPut = jest.fn();
var mockQuery = jest.fn();
var mockScan = jest.fn();
var mockUpdate = jest.fn();
var _default = {
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
  DynamoDB: {
    DocumentClient:
    /*#__PURE__*/
    function () {
      function DocumentClient() {
        _classCallCheck(this, DocumentClient);
      }

      _createClass(DocumentClient, [{
        key: "batchGet",
        value: function batchGet(params) {
          return {
            promise: function promise() {
              return mockBatchGet(params);
            }
          };
        }
      }, {
        key: "batchWrite",
        value: function batchWrite(params) {
          return {
            promise: function promise() {
              return mockBatchWrite(params);
            }
          };
        }
      }, {
        key: "delete",
        value: function _delete(params) {
          return {
            promise: function promise() {
              return mockDelete(params);
            }
          };
        }
      }, {
        key: "get",
        value: function get(params) {
          return {
            promise: function promise() {
              return mockGet(params);
            }
          };
        }
      }, {
        key: "put",
        value: function put(params) {
          return {
            promise: function promise() {
              return mockPut(params);
            }
          };
        }
      }, {
        key: "query",
        value: function query(params) {
          return {
            promise: function promise() {
              return mockQuery(params);
            }
          };
        }
      }, {
        key: "scan",
        value: function scan(params) {
          return {
            promise: function promise() {
              return mockScan(params);
            }
          };
        }
      }, {
        key: "update",
        value: function update(params) {
          return {
            promise: function promise() {
              return mockUpdate(params);
            }
          };
        }
      }]);

      return DocumentClient;
    }()
  }
};
exports.default = _default;