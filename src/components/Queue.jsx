import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react'
import BoxTikect from './BoxTikect';

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
            <Text fontFamily={"monospace"}>{data.name}</Text>
        </Box>
        <Box
            width={"75%"}
            display="flex"
            flexWrap={"wrap"}
            background="whiteAlpha.300"
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
           
        </Box>
    </Flex>
  )
}

export default Queue;