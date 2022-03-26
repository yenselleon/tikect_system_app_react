import { Box } from '@chakra-ui/react';
import dayjs from 'dayjs';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startListQueue } from '../reducers/queue/actions';
import { desactivateTicket, startSelectedTicket } from '../reducers/tikect/actions';


const BoxTikect = ({data, currentTicketList, atention_time}) => {
  
  let timer = useRef();

  const {ticketlist} = useSelector(state => state.ticket)
  
  const dispatch = useDispatch();
  
  clearInterval(timer)

  const handledSelectedTicket = (e)=> {
    e.stopPropagation();

    dispatch(startSelectedTicket(data));
  }

  const validCurrentTikect = async ()=> {
    
    
    if(currentTicketList[0]._id === data._id ){
      
      const diference = dayjs(data.due_date).diff(dayjs(), 'second');
      
      
      if(diference <= 0){
        await dispatch(desactivateTicket(data , data._id));
        await dispatch(startListQueue());
        clearInterval(timer);
        
      }
      
    }
    
  }
  
  
  useEffect(() => {
    
    if( ticketlist.length > 0){
      validCurrentTikect()
    }
    
    return ()=> {
      clearInterval(timer)
    }
    
  }, [ticketlist.length])
  
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
        onClick={(e)=> handledSelectedTicket(e)}
    >
        •
    </Box>
  )
}

export default BoxTikect;