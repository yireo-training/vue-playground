import config from "../../config";
import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: config.graphql_endpoint
});

export default apolloClient;
