import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import AplloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const client = new AplloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
