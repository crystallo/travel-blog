import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import { PaddingContainer } from "@/components/layout/PaddingContainer";
import { PostList } from "@/components/post/PostList";
import { useDirectusClient } from "@/hooks/directus";
import { directusGraphQL } from "@/lib/directus";

export const generateStaticParams = async () => {
  const { category } = await directusGraphQL.query(`
    query {
      category {
        slug
      }
    }
  `);
  return category;
};

const Page = async ({ params }: { params: { category: string } }) => {
  const getData = async () => {
    try {
      const result  = await directusGraphQL.query(`
      query {
        category(filter: { 
          slug: {
            _eq: "${params.category}"
          }
        }) {
          id
          title
          posts {
            title
            description
            body
            date_created
            image {
              id
            }
            author {
              id
              first_name
              last_name
            }
            category {
              id
              title
            }
          }
        }
      }
    `);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching categories");
    }
  };

  const data = await getData();
  const category = data?.category[0];
  const posts = data?.category[0]?.posts;

  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">{category?.title}</h1>
        <p className="text-lg text-neutral-600">{category?.description}</p>
      </div>
      <PostList posts={posts} />
    </PaddingContainer>
  );
};

export default Page;
