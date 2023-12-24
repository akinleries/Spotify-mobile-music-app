import { PropsWithChildren } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: " https://kusti.stepzen.net/api/oldfashioned-aardvark/__graphql",
  headers: {
    authorization:
      "kusti::stepzen.net+1000::87b583b687fa42249ef71bab6ae1799d0e858df1f131d68c711d660af2984eab",
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
