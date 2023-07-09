import { CTACard } from "@/components/elements/CTACard";
import { SocialLink } from "@/components/elements/SocialLink";
import { PaddingContainer } from "@/components/layout/PaddingContainer";
import { PostBody } from "@/components/post/PostBody";
import { PostHero } from "@/components/post/PostHero";
import { directusGraphQL } from "@/lib/directus";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const { post } = await directusGraphQL.query(`
    query {
      post {
        slug
      }
    }
  `);
  return post;
};

const Page = async ({ params }: { params: { slug: string } }) => {
  // const post = DUMMY_POSTS.find((post) => post.slug == params.slug);

  const { post } = await directusGraphQL.query(`
    query {
      post(filter: {
        slug: {
          _eq: "${params.slug}"
        }
      }) {
        title
        description
        slug
        body
        date_created
        image {
          id
        }
        author {
          first_name
          last_name
        }
        category {
          title
        }
      }
    }
  `)

  if (!post || post.length === 0) {
    notFound();
  }

  const thisPost = post[0];

  return (
    <PaddingContainer>
      <article className="space-y-10">
        <PostHero post={thisPost} />
        <div className="flex flex-col gap-10 mt-10 md:flex-row">
          <div className="relative">
            <div className="sticky flex items-center gap-5 md:flex-col top-20">
              <p className="font-medium md:hidden">Share this content:</p>
              <SocialLink
                platform="youtube"
                link="https://youtube.com"
                isShareURL
              />
              <SocialLink
                platform="twitter"
                link="https://youtube.com"
                isShareURL
              />
              <SocialLink
                platform="instagram"
                link="https://youtube.com"
                isShareURL
              />
            </div>
          </div>
            <PostBody body={thisPost.body} />
          </div>
        <CTACard />
      </article>
    </PaddingContainer>
  );
};

export default Page;
