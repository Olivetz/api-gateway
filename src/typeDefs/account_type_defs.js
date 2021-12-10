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
    type token{
        access: String!
        refresh: String!
    }
    type Query {
        accounts: [Account]
        accountByUsername(username:String!):Account
    }
    type Mutation {
        newAccount(
            first_name: String!
            last_name: String!
            username: String!
            email: String!
            password: String!
        ): Account
        
        signIn(
            username: String!
            password: String!
        ): token

        updateAccountUser(
            id: Int!
            first_name: String!
            last_name: String!
            username: String!
            email: String!
            password: String!            
        ):Account

        deleteAccountUser(id: Int!): Account
    }

`

export default accountTypeDefs;