import { getMongoDbQueryResolver } from 'graphql-to-mongodb';
import { MiddlewareFn } from 'type-graphql';


const mongoResolver: MiddlewareFn = async ({ root, args, context, info }) => {
    return getMongoDbQueryResolver((<any>info.schema.getQueryType()!.getFields()[info.fieldName].type).ofType.ofType,
        async (filter, projection, options, obj, args, context: any) => {
            options.projection = projection;
            return await context.collection(info.fieldName).find(filter, options).toArray();
        })(root, args, context, info)
};

export { mongoResolver }