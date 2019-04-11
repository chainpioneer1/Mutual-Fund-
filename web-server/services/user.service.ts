
import {Service} from "@tsed/common"
import { User } from "shared/";

@Service()
export class UserService{
    find(id:number):User{
        return {_id:"1",email:"yantrab@gmail.com",firstName:"yaniv",lastName:"trabelsi"}
    }

    findByCredential(email:string, password:string){
        return {_id:"1",email:"yantrab@gmail.com",firstName:"yaniv",lastName:"trabelsi"}
    }
}