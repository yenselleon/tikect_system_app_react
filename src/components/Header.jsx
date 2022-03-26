import { background, Box, Flex } from '@chakra-ui/react';
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
        
    >
        <Box
            sx={{
                height:"100%",
                color:"white"
            }}
        >
            <h1>header</h1>

        </Box>

    </Flex>
  ) 
}

export default Header;   