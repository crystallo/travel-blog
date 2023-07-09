import { Category, Post } from "@/types/collection";
import { DirectusClient, GraphqlClient, StaticTokenClient, graphql, rest, staticToken, useDirectus } from "@directus/sdk";

interface Schema {
  post: Post[];
  category: Category[];
}

export const useDirectusClient = (): DirectusClient<Schema> & GraphqlClient<Schema> & StaticTokenClient<Schema> => {
  const getGraphQLClient = useDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL as string)
    .use(graphql())
    .use(staticToken(process.env.ADMIN_TOKEN as string));

  return getGraphQLClient;
}
