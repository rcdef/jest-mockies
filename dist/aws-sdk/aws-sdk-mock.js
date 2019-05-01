"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cognitoIsp = _interopRequireDefault(require("./cognito-isp"));

var _dynamodb = _interopRequireDefault(require("./dynamodb"));

var _sns = _interopRequireDefault(require("./sns"));

var _sqs = _interopRequireDefault(require("./sqs"));

var _s = _interopRequireDefault(require("./s3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var mockCognitoISPFunctions = _cognitoIsp.default.Mock,
    restMockCognitoISP = _objectWithoutProperties(_cognitoIsp.default, ["Mock"]);

var mockDynamoDBFunctions = _dynamodb.default.Mock,
    restMockDynamoDB = _objectWithoutProperties(_dynamodb.default, ["Mock"]);

var mockSNSFunctions = _sns.default.Mock,
    restMockSNS = _objectWithoutProperties(_sns.default, ["Mock"]);

var mockSQSFunctions = _sqs.default.Mock,
    restMockSQS = _objectWithoutProperties(_sqs.default, ["Mock"]);

var mockS3Functions = _s.default.Mock,
    restMockS3 = _objectWithoutProperties(_s.default, ["Mock"]);

var _default = _objectSpread({}, restMockCognitoISP, restMockDynamoDB, restMockSNS, restMockSQS, restMockS3, {
  Mock: _objectSpread({}, mockCognitoISPFunctions, mockDynamoDBFunctions, mockSNSFunctions, mockSQSFunctions, mockS3Functions)
});

exports.default = _default;