import { Stack } from 'expo-router';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// define apollo client
const client = new ApolloClient({
  uri: 'https://dingxi.stepzen.net/api/virtuous-hamster/__graphql', // graphql hosted on stepzen
  cache: new InMemoryCache(),
  headers: {
    Authorization: "apikey dingxi::stepzen.io+1000::86197f0397b4f075953ba18f4d3a910a809384e92a2db8c307e9cf58fa656aba"
  }
});

const RootLayout = () => {
  return (
  <ApolloProvider client={client}>
    <Stack />
  </ApolloProvider>
  )
};

export default RootLayout;
