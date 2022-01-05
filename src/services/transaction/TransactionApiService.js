/**
 * api service for transasction page
 * sends dummy data as a resolved promise
 * */

 import {Transactions} from "./Data";

 export const getAllTransactions = () =>{
     return Promise.resolve(Transactions);
 }