import { Box } from '@chakra-ui/react';
import dayjs from 'dayjs';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startListQueue } from '../reducers/queue/actions';
import { desactivateTicket } from '../reducers/tikect/actions';


const BoxTikect = ({data, currentTicketList, atention_time}) => {
  console.log({data, currentTicketList, atention_time})
  
  let timer = useRef();

  const {listTicketByQueue} = useSelector(state => state.queue)
  
  const dispatch = useDispatch();
  
  clearInterval(timer)

  const validCurrentTikect = async ()=> {
    
    
    if(currentTicketList[0]._id === data._id ){
      
      const diference = dayjs(data.due_date).diff(dayjs(), 'second');
      
      console.log(diference);
      
      if(diference <= 0){
        await dispatch(desactivateTicket(data , data._id));
        await dispatch(startListQueue());
        clearInterval(timer);
        
        console.log("stop")
      }
      
    }
    
  }
  
  
  useEffect(() => {
    
    if( currentTicketList[0]._id === data._id){
      validCurrentTikect()
    }
    
    return ()=> {
      clearInterval(timer)
    }
    
  }, [currentTicketList[0]._id])
  
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