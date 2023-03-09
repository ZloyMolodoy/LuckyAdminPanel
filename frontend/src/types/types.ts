export interface IUser
{
    chatId: number;
    isAdmin: boolean;
    lastIDBD: number;
    count: number;
    categoryCount: number;
    subcategoryCount: string;
}
export interface IOrder
{
    idBD: number;
    chatId: number;
    username: string;
    idProd: number;
    amount: number;
    isBuy: boolean;
    categoryCount: number;
    subcategoryCount: string;
}