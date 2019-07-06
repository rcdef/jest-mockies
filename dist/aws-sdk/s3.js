"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mockGetObject = jest.fn();
var mockGetSignedUrl = jest.fn();
var _default = {
  Mock: {
    S3: {
      getObject: mockGetObject,
      getSignedUrl: mockGetSignedUrl
    }
  },
  S3:
  /*#__PURE__*/
  function () {
    function S3() {
      _classCallCheck(this, S3);
    }

    _createClass(S3, [{
      key: "getObject",
      value: function getObject(params) {
        return {
          promise: function promise() {
            return mockGetObject(params);
          }
        };
      }
    }, {
      key: "getSignedUrl",
      value: function getSignedUrl(params) {
        return mockGetSignedUrl(params);
      }
    }]);

    return S3;
  }()
};
exports.default = _default;