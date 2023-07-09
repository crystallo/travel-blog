import { Category, Post, Subscriber } from "@/types/collection";
import { graphql, rest, staticToken, useDirectus } from "@directus/sdk";

interface Schema {
  post: Post[];
  category: Category[];
  subscribers: Subscriber[];
}

export const directusREST = useDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL as string)
  .use(rest())
  .use(staticToken(process.env.ADMIN_TOKEN as string));

export const directusGraphQL = useDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL as string)
.use(graphql())
.use(staticToken(process.env.ADMIN_TOKEN as string));
