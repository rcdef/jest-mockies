"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mockSignUp = jest.fn();
var mockAdminConfirmSignUp = jest.fn();
var mockAdminGetUser = jest.fn();
var mockAdminInitiateAuth = jest.fn();
var mockPut = jest.fn();
var _default = {
  mockSignUp: mockSignUp,
  mockAdminConfirmSignUp: mockAdminConfirmSignUp,
  mockAdminGetUser: mockAdminGetUser,
  mockAdminInitiateAuth: mockAdminInitiateAuth,
  mockPut: mockPut,
  DynamoDB: {
    DocumentClient:
    /*#__PURE__*/
    function () {
      function DocumentClient() {
        _classCallCheck(this, DocumentClient);
      }

      _createClass(DocumentClient, [{
        key: "put",
        value: function put(params) {
          return {
            promise: function promise() {
              return mockPut(params);
            }
          };
        }
      }]);

      return DocumentClient;
    }()
  },
  CognitoIdentityServiceProvider:
  /*#__PURE__*/
  function () {
    function CognitoIdentityServiceProvider() {
      _classCallCheck(this, CognitoIdentityServiceProvider);
    }

    _createClass(CognitoIdentityServiceProvider, [{
      key: "signUp",
      value: function signUp(params) {
        return {
          promise: function promise() {
            return mockSignUp(params);
          }
        };
      }
    }, {
      key: "adminConfirmSignUp",
      value: function adminConfirmSignUp(params) {
        return {
          promise: function promise() {
            return mockAdminConfirmSignUp(params);
          }
        };
      }
    }, {
      key: "adminGetUser",
      value: function adminGetUser(params) {
        return {
          promise: function promise() {
            return mockAdminGetUser(params);
          }
        };
      }
    }, {
      key: "adminInitiateAuth",
      value: function adminInitiateAuth(params) {
        return {
          promise: function promise() {
            return mockAdminInitiateAuth(params);
          }
        };
      }
    }]);

    return CognitoIdentityServiceProvider;
  }()
};
exports.default = _default;