import dayjs from "dayjs";
import { desactivateTicket } from "../tikect/actions";
import types from "./types";

const url = 'http://localhost:3031/api';



const startGetQueue = ()=> {

    return async (dispatch, getState)=> {

        try {
            const resp = await fetch(`${url}/queue/list`, {
                method: 'GET',
            });

            const {body, ok} = await resp.json();
    
            if(ok){
                
                dispatch(getQueues(body));
            }
            
            
        } catch (error) {
            console.log("Falla en la conexion");
            throw new Error(error);
        }
    }

}

const startListQueue = ()=> {

    return async (dispatch, getState)=> {

        try {

            const resp = await fetch(`${url}/ticket/listTicketByQueue`, {
                method: 'GET',
            });

            const {body, ok} = await resp.json();
    
            if(ok){
                
                dispatch(listQueue(body));
            }
            
        } catch (error) {
            console.log("Falla en la conexion");
            throw new Error(error);
        }

    }

}


const getQueues = (data)=> ( {
    type: types.getQueues,
    payload: data 
})

const listQueue = (data)=> ( {
    type: types.listQueues,
    payload: data 
})


export {
    startGetQueue,
    startListQueue,
}