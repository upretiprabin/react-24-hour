import {getAllTransactions} from "./TransactionApiService";

export const loadTransactions = (context) =>{
    getAllTransactions()
        .then((data)=>{
            context.changeState({
                transactions : data
            });
        })
        .catch((e)=>{
            console.log(e)
        })
}