
import accountResolver from "./account_resolver.js";
import accountServicesResolver from "./account_services_resolver.js";
import lodash from "lodash";

const resolvers = lodash.merge( accountResolver, accountServicesResolver);

export default resolvers;