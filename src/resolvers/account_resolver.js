const accountResolver={
    Query: {
        accounts: async(root, args,{dataSources}) => {
            //Llammar authAPI para verificar el token
            return await dataSources.accountAPI.accounts();

        },
        accountByUsername: async(root,{username},{dataSources}) =>{
            return await dataSources.accountAPI.accountByUsername(username)

        }
    },
    Mutation: {
        newAccount: async(root, args,{dataSources}) =>{
            return await dataSources.accountAPI.newAccount(args);
        }, 
        signIn: async(root,args,{dataSources}) =>{
            return await dataSources.accountAPI.signIn(args);
        },
        updateAccountUser: async(root, args,{dataSources,userToken}) =>{
            console.log(userToken);
            return await dataSources.accountAPI.updateAccount(args);
        }, 
        deleteAccountUser: async(root, {id},{dataSources}) =>{
            return await dataSources.accountAPI.deleteAccount(id);
        }
    }
}

export default accountResolver;
