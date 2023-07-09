import { CTACard } from "@/components/elements/CTACard";
import { PaddingContainer } from "@/components/layout/PaddingContainer";
import PostCard from "@/components/post/PostCard";
import { PostList } from "@/components/post/PostList";
import { directusGraphQL } from "@/lib/directus";

export default async function Home({ params }: {
  params: {
    lang: string;
  }
}) {
  console.log(params)
  const getAllPosts = async () => {
    try {
      const { post } = await directusGraphQL.query(`
        query {
          post {
            id
            title
            description
            slug
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
      `);
      return post;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };

  const posts = await getAllPosts();

  return (
    <PaddingContainer>
      <div className="h-auto space-y-10">
        <PostCard post={posts[0]} />
        <PostList posts={posts.slice(1, 3)} />
        <CTACard />
        <PostCard reverse post={posts[5]} />
        <PostList posts={posts.slice(3, 5)} />
      </div>
    </PaddingContainer>
  );
}
