import mockCognitoISP from './cognito-isp';
import mockDynamoDB from './dynamodb';
import mockSNS from './sns';
import mockSQS from './sqs';
import mockApiGatewayManagementApi from './api-gateway-management-api';

const { Mock: mockCognitoISPFunctions, ...restMockCognitoISP } = mockCognitoISP;
const { Mock: mockDynamoDBFunctions, ...restMockDynamoDB } = mockDynamoDB;
const { Mock: mockSNSFunctions, ...restMockSNS } = mockSNS;
const { Mock: mockSQSFunctions, ...restMockSQS } = mockSQS;
const {
  Mock: mockApiGatewayManagementApiFunctions,
  ...restMockApiGatewayManagementApi
} = mockApiGatewayManagementApi;

export default {
  ...restMockCognitoISP,
  ...restMockDynamoDB,
  ...restMockSNS,
  ...restMockSQS,
  ...restMockApiGatewayManagementApi,
  Mock: {
    ...mockCognitoISPFunctions,
    ...mockDynamoDBFunctions,
    ...mockSNSFunctions,
    ...mockSQSFunctions,
    ...mockApiGatewayManagementApiFunctions
  }
};
