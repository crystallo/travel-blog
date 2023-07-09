import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import { PostContent } from "./PostContent";

interface PostProps {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
}

export default function PostCard({
  post,
  layout = "horizontal",
  reverse = false,
}: PostProps) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className={`@container ${
        layout === "horizontal"
          ? "grid items-center grid-cols-1 md:grid-cols-2 gap-10"
          : "space-y-10"
      }`}
    >
      {/* Post Iamge */}
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image.id}?key=optimized`}
        width={600}
        height={300}
        alt={post.title}
        className={`object-cover object-center w-full h-full rounded-md max-h-[300px] ${
          reverse ? "md:order-last" : ""
        }`}
      />
      {/* Post Content */}
      <PostContent post={post} />
    </Link>
  );
}
