import mockCognitoISP from './cognito-isp';
import mockDynamoDB from './dynamodb';
import mockSNS from './sns';

const { Mock: mockCognitoISPFunctions, ...restMockCognitoISP } = mockCognitoISP;
const { Mock: mockDynamoDBFunctions, ...restMockDynamoDB } = mockDynamoDB;
const { Mock: mockSNSFunctions, ...restMockSNS } = mockSNS;

export default {
  ...restMockCognitoISP,
  ...restMockDynamoDB,
  ...restMockSNS,
  Mock: {
    ...mockCognitoISPFunctions,
    ...mockDynamoDBFunctions,
    ...mockSNSFunctions
  }
};
