import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import  fetch from 'node-fetch'
import { setContext } from 'apollo-link-context'


const HttpLink = createHttpLink({
    uri: 'http://localhost:4000/',
    fetch
})

const athLink = setContext((_,{headers}) => {

const token = localStorage.getItem('token')

    return {
        headers:{
            ...headers,
                authorization: token ? ` Bearer ${token}`:''
            
        }
    }
})

const client = new ApolloClient({
    connectToDevTools:true,
        cache: new InMemoryCache(),
    link: athLink.concat(HttpLink)
});

export default client