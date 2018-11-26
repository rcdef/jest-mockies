import mockCognitoISP from './cognito-isp';
import mockDynamoDB from './dynamodb';

export default {
  ...mockCognitoISP,
  ...mockDynamoDB
};
