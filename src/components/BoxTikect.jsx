import { Box } from '@chakra-ui/react';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startListQueue, timerValidTicket } from '../reducers/queue/actions';
import { desactivateTicket } from '../reducers/tikect/actions';


const BoxTikect = ({data, currentTicketList, atention_time}) => {
  console.log({data, currentTicketList, atention_time})
  
  let timer = useRef();
  clearInterval(timer)
  const {listTicketByQueue} = useSelector(state => state.queue)
  const mapList = listTicketByQueue.find( queue => queue._id === currentTicketList[0].queue).ticketList
  console.log(mapList)

  const dispatch = useDispatch();


  const isCurrentTicket = ()=> {
    const mapListTicket = listTicketByQueue.map( queue => {
      
        return queue.ticketList

    });

    const isCurrentTikect = mapListTicket.find( ticketList => ticketList[0]._id === data._id)

    if(isCurrentTikect){
      setCurrentTikect(true);
    };
  }

  const validCurrentTikect = async ()=> {
    

    if(currentTicketList[0]._id === data._id ){
      
        const diference = dayjs(data.due_date).diff(dayjs(), 'second');
        
        console.log(diference);

        if(diference <= 0){
          clearInterval(timer);
            await dispatch(desactivateTicket(data , data._id));
            await dispatch(startListQueue());

          console.log("stop")
        }

      
    }

  }

  
  useEffect(() => {
    
    if(mapList.length > 0){
      validCurrentTikect()
    }
    
    return ()=> {
      clearInterval(timer)
    }
    
  }, [mapList.length])
  
  timer = setInterval(validCurrentTikect,1000);

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