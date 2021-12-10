import { gql } from "apollo-server";

const accountServicesTypeDefs = gql`
    type AccountP {
        id: String!
        name:           String!
        tip_document:   String!
        num_document:   Int!
        city:           String!
        address:        String!
        phone_num:      Int!
        mobile_num:     Int!
        social_security:Int!
        value:          Int!
        password:       String!
        tip_user:       String!
    }

    extend type Query {
        accountsProviders: [AccountP]
        accountById(id: String!): AccountP
    }

    extend type Mutation {
        newAccountService(
        
            name:           String!
            tip_document:   String!
            num_document:   Int!
            city:           String!
            address:        String!
            phone_num:      Int!
            mobile_num:     Int!
            social_security:Int!
            value:          Int!
            password:       String!
            tip_user:       String!
        ): AccountP
        updateAccount(
            id: String
            name:           String!
            tip_document:   String!
            num_document:   Int!
            city:           String!
            address:        String!
            phone_num:      Int!
            mobile_num:     Int!
            social_security:Int!
            value:          Int!
            password:       String!
            tip_user:       String!
        ): AccountP 
        deleteAccount(id: String!): AccountP
    }
`
export default accountServicesTypeDefs;