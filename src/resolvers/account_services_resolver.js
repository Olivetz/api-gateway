const accountServicesResolver = {
    Query: {
        accountsProviders: async(root, args, { dataSources }) => {
            // llamar authAPI para verificar token
            return await dataSources.AccountServicesAPI.accountsProviders();
        },
        accountById: async(root, { id }, { dataSources }) => {
            // llamar authAPI para verificar token
            return await dataSources.AccountServicesAPI.accountById(id);
        }
    },
    Mutation: {
        newAccountService: async(root, args, { dataSources }) => {
            return await dataSources.AccountServicesAPI.newAccount(args);
        },
        updateAccount: async(root, args, { dataSources }) => {
            return await dataSources.AccountServicesAPI.updateAccount(args);
        },
        deleteAccount: async(root, { id }, { dataSources }) => {
            return await dataSources.AccountServicesAPI.deleteAccount(id);
        }
    }
}

export default accountServicesResolver;