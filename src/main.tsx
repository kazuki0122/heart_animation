import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import HeartAnimation from './HeartAnimation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <HeartAnimation />
    </ChakraProvider>
  </React.StrictMode>,
)
