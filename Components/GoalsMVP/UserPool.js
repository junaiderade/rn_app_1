import { CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_kPQ0OUUbS", //get from console
    ClientId: "5ebq2thlldq4s5djc18k1uu28e" //get from console, app integration, at bottom
}

export default new CognitoUserPool(poolData);
