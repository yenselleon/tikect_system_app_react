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

const timerValidTicket = (ticketData, atention_time)=> {
    let timer;

    return async ( dispatch, getState )=> {

        try {
            
            /* const {queue} = getState();

            const {listTicketByQueue} = queue;

            const list =  listTicketByQueue.map( queue => queue.ticketList);
            const firtsTicket = list.map( ticket =>  ticket.length > 0 ? ticket[0]._id : {})

            if(!firtsTicket.includes(ticketData._id)){
                return
            }
            
            const validTimeTicket = async (ticketD = ticketData)=>{
                
                const diference = dayjs(new Date().now).diff(dayjs(ticketD.createAt), 'second');
                console.log(diference);

                if(diference >= atention_time * 60 ){
                    clearInterval(timer);
                      await dispatch(desactivateTicket(ticketData , ticketData._id));
                      await dispatch(startListQueue())
                }

            }

            timer = setInterval(validTimeTicket, 1000); */
            /* timer = setInterval(async ()=> {
                const diference = dayjs(new Date().now).diff(dayjs(ticketData.createAt), 'second');
                const remainingSeconds = atention_time * 60 - diference;
                console.log(remainingSeconds);

                if(remainingSeconds === 0){
                    clearInterval(timer);
                      await dispatch(desactivateTicket(ticketData , ticketData._id));
                      setCurrentTikect(false);
                      await dispatch(startListQueue());
          
                    console.log("stop")
                }

            },1000) */

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
    timerValidTicket
}