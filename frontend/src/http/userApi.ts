import {$host} from './index';
import {IUser} from "../types/types";


export const getUsers = async () => {
    const {data} = await $host.get<IUser[]>("api/users/users")
    return data
}

export const LoginRequest = async (chatId) => {
    const Parse = parseInt(chatId)
    const {data} = await  $host.post('api/users/login', {Parse})
    return data
}