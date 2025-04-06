import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export const helloWorld=async(event: APIGatewayProxyEvent, _: Context): Promise<APIGatewayProxyResult> => {
    if(!event.body){
        return {
            statusCode: 400,
            body: 'body is empty'
        }
    }
    const abcd: string = event.body;
    return {
        statusCode: 200,
        body: abcd
    }
}