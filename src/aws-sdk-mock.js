import mockCognitoISP from './cognito-isp';
import mockDynamoDB from './dynamodb';

const { Mock: mockCognitoISPFunctions, ...restMockCognitoISP } = mockCognitoISP;
const { Mock: mockDynamoDBFunctions, ...restMockDynamoDB } = mockDynamoDB; 

export default {
  ...restMockCognitoISP,
  ...restMockDynamoDB,
  Mock: {
    ...mockCognitoISPFunctions,
    ...mockDynamoDBFunctions
  }
};
