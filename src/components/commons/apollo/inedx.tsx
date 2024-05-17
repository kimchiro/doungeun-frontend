import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloSettingProps {
    children: JSX.Element
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const client = new ApolloClient({
        uri: "https://backend-practice.codebootcamp.co.kr/graphqlㄴ",
        cache: new InMemoryCache(),
      });
      // @ts-ignore
    
    return (
        <ApolloProvider client={client}> 
        {props.children}
        </ApolloProvider>
    )
}

