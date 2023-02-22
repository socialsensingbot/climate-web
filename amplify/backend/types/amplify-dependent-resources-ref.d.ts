export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "socialsensingf07a871c": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        },
        "userPoolGroups": {
            "metofficeGroupRole": "string",
            "demoGroupRole": "string",
            "socialsensingGroupRole": "string",
            "testuserGroupRole": "string",
            "cypressAGroupRole": "string",
            "cypressBGroupRole": "string"
        }
    },
    "storage": {
        "jsonstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "socialsensing": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}