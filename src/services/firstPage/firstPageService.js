import {getDataForHelloComponent} from "./firstPageApiService";

export const loadHelloComponentData = (context) =>{
    getDataForHelloComponent()
        .then((data)=>{
            context.changeState({
                helloComponentData : data
            })
        })
        .catch((e)=>{
            console.log(e)
        })
}