import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'

const TikectInfo = () => {
  return (
    <Box
        width={"100%"}
        border="1px solid red"
        padding={"25px"}
    >
        <span>Tiempo restante para ser atendido</span>
        <Box
            width={"100%"}
            border="1px solid red"
            padding={"25px"}
            background="red"
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box
                border={"2px solid white"}
                width="150px"
                height={"120px"}
                borderRadius="10px"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                marginBottom="10px"
            >
                <Text fontSize='3xl' color={'white'}>1</Text>
            </Box>

            <Box
                width="auto"
                height={"auto"}
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                alignItems={"center"}
                marginBottom="10px"
            >
                <Text fontSize='sm' color={'white'}>Yensel Leon</Text>
                <Text fontSize='sm' color={'white'}>ID: 24315898</Text>
            </Box>

            <Button
                colorScheme={"purple"}
            >Atras</Button>
        </Box>
    </Box>
  )
}

export default TikectInfo;