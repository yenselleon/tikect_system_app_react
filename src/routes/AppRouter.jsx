import { Container } from '@chakra-ui/react';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import HomeScreen from '../pages/homeScreen';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Container
            sx={{
                minHeight: '100vh',
                maxWidth:"100%",
                padding: "0"
            }}
            background="#253d75"
        >
            <Header/>
            <Routes>
                <Route path="/"  element={<HomeScreen />} />
            </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default AppRouter;