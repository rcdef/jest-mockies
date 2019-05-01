import mockCognitoISP from './cognito-isp';
import mockDynamoDB from './dynamodb';
import mockSNS from './sns';
import mockSQS from './sqs';
import mockS3 from './s3';

const { Mock: mockCognitoISPFunctions, ...restMockCognitoISP } = mockCognitoISP;
const { Mock: mockDynamoDBFunctions, ...restMockDynamoDB } = mockDynamoDB;
const { Mock: mockSNSFunctions, ...restMockSNS } = mockSNS;
const { Mock: mockSQSFunctions, ...restMockSQS } = mockSQS;
const { Mock: mockS3Functions, ...restMockS3 } = mockS3;

export default {
  ...restMockCognitoISP,
  ...restMockDynamoDB,
  ...restMockSNS,
  ...restMockSQS,
  ...restMockS3,

  Mock: {
    ...mockCognitoISPFunctions,
    ...mockDynamoDBFunctions,
    ...mockSNSFunctions,
    ...mockSQSFunctions,
    ...mockS3Functions
  }
};
