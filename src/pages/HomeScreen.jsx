import { border, Box, Container } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormTicket from '../components/FormTicket';
import Queue from '../components/Queue'
import TikectInfo from '../components/TikectInfo';
import { startGetQueue, startListQueue } from '../reducers/queue/actions';
import logo from '../images/white.png'

const HomeScreen = () => {

  const dispatch = useDispatch();
  const {listTicketByQueue, queues} = useSelector(state => state.queue)

  useEffect(() => {

    dispatch(startGetQueue())
    dispatch(startListQueue());

  }, []);
  
  return (
    <Container
        sx={{
            maxWidth: {xs: 'xs', md: 'md', lg: 'lg'},
        }}
        maxW={["100%", "100%", "container.md", "container.md"]}
        height="auto"
        paddingBottom={["5","20"]}
        centerContent
    >   
        <Box
          width={"100%"}
          height="150px"
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"

        >
          <Box
            width={"100px"}
            height={"100px"}
            objectFit={"cover"}
          >
            <img src={logo} alt="logo"  className='img_logo'/>

          </Box>
        </Box>
        {
          (listTicketByQueue.length > 0) &&
            listTicketByQueue.map((data, i) => (

                  <Queue data={data} key={data._id}/>

            ))
        }
        <FormTicket/>
        {/* <TikectInfo/> */}
    </Container>
  )
}

export default HomeScreen;