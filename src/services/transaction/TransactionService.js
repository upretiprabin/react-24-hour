import {createTransaction, getAllTransactions} from "./TransactionApiService";

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

export const sendAmount = (context, type, data) => {
    createTransaction({...data, type: type}).then((responseData) => {
        context.changeState({
            actionDetail: responseData,
            actionResponse : 'success'
        });
    }).catch((e)=>{
        console.log(e);
        context.changeState({
            actionDetail: {...data, type: type},
            actionResponse : 'failed'
        });
    });
}