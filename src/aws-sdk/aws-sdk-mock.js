import mockCognitoISP from './cognito-isp';
import mockDynamoDB from './dynamodb';
import mockSNS from './sns';
import mockSQS from './sqs';
import mockS3 from './s3';
import mockApiGatewayManagementApi from './api-gateway-management-api';

const { Mock: mockCognitoISPFunctions, ...restMockCognitoISP } = mockCognitoISP;
const { Mock: mockDynamoDBFunctions, ...restMockDynamoDB } = mockDynamoDB;
const { Mock: mockSNSFunctions, ...restMockSNS } = mockSNS;
const { Mock: mockSQSFunctions, ...restMockSQS } = mockSQS;
const { Mock: mockS3Functions, ...restMockS3 } = mockS3;
const {
  Mock: mockApiGatewayManagementApiFunctions,
  ...restMockApiGatewayManagementApi
} = mockApiGatewayManagementApi;

export default {
  ...restMockCognitoISP,
  ...restMockDynamoDB,
  ...restMockSNS,
  ...restMockSQS,
  ...restMockS3,
  ...restMockApiGatewayManagementApi,
  Mock: {
    ...mockCognitoISPFunctions,
    ...mockDynamoDBFunctions,
    ...mockSNSFunctions,
    ...mockSQSFunctions,
    ...mockS3Functions,
    ...mockApiGatewayManagementApiFunctions
  }
};
