import { Post } from "@/types/collection";
import { PostContent } from "./PostContent";
import Image from "next/image";

interface PostHeroProps {
  post: Post;
}

export const PostHero = ({ post }: PostHeroProps) => {
  return (
    <>
      <PostContent post={post} isPostPage />
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image.id}?key=optimized`}
        width={1280}
        height={500}
        alt={post.title}
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
      />
    </>
  );
};
