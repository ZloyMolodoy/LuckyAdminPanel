import {$host} from './index';
import {IUser} from "../types/types";

export const getUsers = async () =>{
    const {data} = await $host.get<IUser[]>("api/users/users")
    return data
}