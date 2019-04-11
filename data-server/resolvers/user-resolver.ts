import {
    Resolver,
    Query,
    Args,
    Root,
    UseMiddleware,
    Info,
    Mutation,
    Arg,
} from "../type-graphql";
import { User } from "../../shared/models/user.model";
import { mongoResolver } from "../middlewares/mongo-middleware";

@Resolver(of => User)
export class UserResolver {
    @Query(returns => [User], { nullable: true })
    @UseMiddleware(mongoResolver)
    async user(@Args() { }: User, @Root() root: User, @Info() info: any): Promise<User[] | undefined> {
        return
    }

    @Mutation(returns => User)
    async addRecipe(@Args() user: User): Promise<User> {
        return new User();
    }
}