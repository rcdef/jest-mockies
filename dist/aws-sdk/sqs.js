"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mockSendMessage = jest.fn();
var mockSendMessageBatch = jest.fn();
var _default = {
  Mock: {
    SQS: {
      sendMessage: mockSendMessage,
      sendMessageBatch: mockSendMessageBatch
    }
  },
  SQS:
  /*#__PURE__*/
  function () {
    function SQS() {
      _classCallCheck(this, SQS);
    }

    _createClass(SQS, [{
      key: "sendMessage",
      value: function sendMessage(params) {
        return {
          promise: function promise() {
            return mockSendMessage(params);
          }
        };
      }
    }, {
      key: "sendMessageBatch",
      value: function sendMessageBatch(params) {
        return {
          promise: function promise() {
            return mockSendMessageBatch(params);
          }
        };
      }
    }]);

    return SQS;
  }()
};
exports.default = _default;