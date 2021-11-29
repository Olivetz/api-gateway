import {gql} from "apollo-server";

// Se define el tipo de datos que llegan
const accountTypeDefs=gql`
    type Account{
        id: Int!
        first_name: String!
        last_name: String!
        username: String!
        email: String!
        password:String!
    }

    type Query {
        accounts: [Account]
        accountByUsername(username:String!):Account
    }

`

export default accountTypeDefs;