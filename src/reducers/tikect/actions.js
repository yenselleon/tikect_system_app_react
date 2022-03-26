import dayjs from "dayjs";
import types from "./types";

const url = 'http://localhost:3031/api';

const createTicket = (data)=> {

    return async (dispatch, getState)=> {

        try {
            const {listTicketByQueue} = getState().queue;
            
            //validar si las taquillas estan completamente sin usuarios
            if(listTicketByQueue.every( queue => queue.ticketList.length === 0)){
                //determinar cual de las colas tiene menos cantidad de minutos de espera por defecto para asignarle el primer usuario
                const timeAtentionPerQueue = listTicketByQueue.map(queue => queue.atention_time);
                const minTimeAtentionQueue = Math.min(...timeAtentionPerQueue)
                const queue = listTicketByQueue.find( queue => queue.atention_time === minTimeAtentionQueue);

                data.queue = queue._id;
                data.due_date = dayjs().add(queue.atention_time, 'minute');

                

                const resp = await fetch(`${url}/ticket/add`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                const body = await resp.json();

                console.log(body);
            }else{
                //validar si hay algunas taquillas vacias
                if(listTicketByQueue.some( queue => queue.ticketList.length === 0)){
                    const queue = listTicketByQueue.find( queue => queue.ticketList.length === 0);

                    data.queue = queue._id;
                    data.due_date = dayjs().add(queue.atention_time, 'minute');

                    const resp = await fetch(`${url}/ticket/add`, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    });
                    const body = await resp.json();

                    console.log(body);
                }else{
                    let timePerQueue = [];
                    listTicketByQueue.forEach(queue => {
                        if(queue.ticketList.length === 1){

                            const diference = dayjs().diff(dayjs(queue.ticketList[0].createAt), 'second');
                            const remainingSeconds = queue.atention_time * 60 - diference;
                            
                            timePerQueue.push(remainingSeconds);
                        }else if(queue.ticketList.length > 1){

                            const diference = dayjs().diff(dayjs(queue.ticketList[0].createAt), 'second');
                            const remainingSecondsQueue = (queue.ticketList.length - 1) * queue.atention_time * 60;
                            const remainingSeconds = (queue.atention_time * 60 - diference);
                            const plusCount = remainingSeconds + remainingSecondsQueue;
                            
                            timePerQueue.push(plusCount);
                        }
                    });
                    const indexQueue = timePerQueue.indexOf(Math.min(...timePerQueue));
                    
                    data.queue = listTicketByQueue[indexQueue]._id;
                    const ticketList = listTicketByQueue[indexQueue].ticketList.map( ticketList => ticketList)

                    data.due_date = dayjs(ticketList[ticketList.length - 1].due_date).add(listTicketByQueue[indexQueue].atention_time, 'minute');


                    const resp = await fetch(`${url}/ticket/add`, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    });
                    const body = await resp.json();
                    console.log(body);
                }
            }
            

            
        } catch (error) {
            console.log("Falla en la conexion");
            throw new Error(error);
        }

    }


}

const desactivateTicket =  (data, id) => {

    return async ()=> {

        try {
            
            const resp = await fetch(`${url}/ticket/desactivate/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const body = await resp.json();

        } catch (error) {
            console.log("Falla en la conexion");
            throw new Error(error);
        }
    }
}


const startGetListTickets = ()=> {

    return async(dispatch)=> {

        try {
            
            const resp = await fetch(`${url}/ticket/list`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            });
            const {body} = await resp.json();

            dispatch(getListTickets(body));

        } catch (error) {
            console.log("Falla en la conexion");
            throw new Error(error);
        }

    }
}

const getListTickets = (data)=> ({
    type: types.getListTickets,
    payload: data
})

export {
    createTicket,
    desactivateTicket,
    startGetListTickets,
    getListTickets
}