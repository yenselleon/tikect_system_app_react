import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import BoxTikect from './BoxTikect';
import TicketBox from './TicketBox';

const Queue = ({data}) => {

  return (
    <Flex
        width={"100%"}
        /* border={"1px solid red"} */
        marginTop="15px"
    >
        <Box
            width={"25%"}
            minHeight="40px"
            display="flex"
            textAlign={"center"}
            justifyContent="center"
            alignItems="center"
            background={"whiteAlpha.800"}
        >
            <Text>{data.name}</Text>
        </Box>
        <TicketBox
            width={"75%"}
            display="flex"
            flexWrap={"wrap"}
            dataQueue={data}
        >
            {
                (data.ticketList.length > 0) &&
                    data.ticketList.map(tickect => (
                        <BoxTikect data={tickect} 
                                    key={tickect._id} 
                                    currentTicketList={data.ticketList} 
                                    atention_time={data.atention_time}
                        />
                ))

            }
           
        </TicketBox>
    </Flex>
  )
}

export default Queue;