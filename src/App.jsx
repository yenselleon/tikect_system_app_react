import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import AppRouter from './routes/AppRouter';
import {Provider} from 'react-redux'
import store from './store/store';


function App() {

  return (
    <ChakraProvider>
      <Provider store={store}>
          <AppRouter/>

      </Provider>
    </ChakraProvider>
      
  )
}

export default App;
