import { Box } from '@chakra-ui/react';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startListQueue, timerValidTicket } from '../reducers/queue/actions';
import { desactivateTicket } from '../reducers/tikect/actions';


const BoxTikect = ({data, currentTicketList, atention_time}) => {
  /* console.log(data)
  
  let timer = useRef();

  const {listTicketByQueue} = useSelector(state => state.queue)

  const dispatch = useDispatch(); */


  /* const isCurrentTicket = ()=> {
    const mapListTicket = listTicketByQueue.map( queue => {
      
        return queue.ticketList

    });

    const isCurrentTikect = mapListTicket.find( ticketList => ticketList[0]._id === data._id)

    if(isCurrentTikect){
      setCurrentTikect(true);
    };
  } */

  /* const validCurrentTikect = async ()=> {
    
    isCurrentTicket();

    if(currentTicketList[0]._id === data._id ){
      timer = setInterval(async ()=> {
        const diference = dayjs().diff(dayjs(data.createAt), 'second');
        const remainingSeconds = atention_time * 60 - diference;
        
        console.log(remainingSeconds);

        if(remainingSeconds <= 0){
          clearInterval(timer);
            await dispatch(desactivateTicket(data , data._id));
            setCurrentTikect(false);
            await dispatch(startListQueue());

          console.log("stop")
        }

      },1000);
    }

  } */

  
  /* useEffect(() => {
    

    
  }, []) */
  

  return (
    <Box
        width={"50px"}
        height={"50px"}
        display="flex"
        textAlign={"center"}
        justifyContent="center"
        alignItems="center"
        margin={"3px"}
        cursor="pointer"
        background="whiteAlpha.500"
    >
        1
    </Box>
  )
}

export default BoxTikect;