import mockCognitoISP from './cognito-isp';
import mockDynamoDB from './dynamodb';
import mockSNS from './sns';
import mockSQS from './sqs';

const { Mock: mockCognitoISPFunctions, ...restMockCognitoISP } = mockCognitoISP;
const { Mock: mockDynamoDBFunctions, ...restMockDynamoDB } = mockDynamoDB;
const { Mock: mockSNSFunctions, ...restMockSNS } = mockSNS;
const { Mock: mockSQSFunctions, ...restMockSQS } = mockSQS;

export default {
  ...restMockCognitoISP,
  ...restMockDynamoDB,
  ...restMockSNS,
  ...restMockSQS,
  Mock: {
    ...mockCognitoISPFunctions,
    ...mockDynamoDBFunctions,
    ...mockSNSFunctions,
    ...mockSQSFunctions
  }
};
