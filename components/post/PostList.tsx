import { Post } from "@/types/collection";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}

export const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} layout={layout} />
      ))}
    </div>
  );
};
