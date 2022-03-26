import { Box } from '@chakra-ui/react';
import dayjs from 'dayjs';
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { startListQueue, timerValidTicket } from '../reducers/queue/actions';
import { desactivateTicket } from '../reducers/tikect/actions';


const TicketBox = ({dataQueue, children}) => {
    const {atention_time, ticketList} = dataQueue;
    const dispatch = useDispatch();

    useEffect(() => {
        
        if(ticketList.length > 0){
            dispatch(timerValidTicket(ticketList[0], atention_time ));
        }

    }, [ticketList.length])

  return (
    <Box
        width={"75%"}
        display="flex"
        flexWrap={"wrap"}
        background="whiteAlpha.300"
        border={"1px solid red"}
    >
        {
            children
        }
    </Box>
  )
}

export default TicketBox;