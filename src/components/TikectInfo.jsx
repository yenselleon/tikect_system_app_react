import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deseleccionarTicket } from '../reducers/tikect/actions';

const TikectInfo = () => {

    const dispatch = useDispatch();
    const {ticketSelected} = useSelector(state => state.ticket)

    const handleDeseleccionar = (e)=> {
        e.stopPropagation();

        dispatch(deseleccionarTicket());

    }


  return (
    <Box
        width={"100%"}
        padding={"25px"}
        background="#0E185F"
        marginTop={"20px"}
        height="400px"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        borderRadius="5px"
        boxShadow={"2xl"}
    >
        <Box
            width={"100%"}
            padding={"25px"}
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
                <Text fontSize='sm' color={'white'}>Nombre: {ticketSelected?.name}</Text>
                <Text fontSize='sm' color={'white'}>Numero de identificacion: {ticketSelected?.documentation_number}</Text>
            </Box>

            <Button
                colorScheme={"purple"}
                onClick={(e)=> { handleDeseleccionar(e) }}
            >
                Atras
            </Button>
        </Box>
    </Box>
  )
}

export default TikectInfo;