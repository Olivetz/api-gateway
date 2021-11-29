const accountResolver={
    Query: {
        accounts: async(root, args,{dataSources}) => {
            //Llammar authAPI para verificar el token
            return await dataSources.accountAPI.accounts();

        },
        accountByUsername: async(root,{username},{dataSources}) =>{
            return await dataSources.accountAPI.accountByUsername(username)

        }
    }
}

export default accountResolver;
