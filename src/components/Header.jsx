import { background, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'

const Header = () => {
  return (  
    <Flex
        sx={{
            width: "100%",
            height: "100px",
            padding: "0"
        }}
        /* border="1px solid red" */
        background="#4D5F9B"
        boxShadow={"2xl"}
        justifyContent={"center"}
    >
        <Box
            sx={{
                height:"100%",
                color:"white"
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
        >
            
            <Text fontSize='4xl'>Qsmarter</Text>
        </Box>

    </Flex>
  ) 
}

export default Header;   