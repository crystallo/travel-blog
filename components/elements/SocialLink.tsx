import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export const SocialLink = ({
  platform,
  link,
  isShareURL = false,
}: {
  platform: string;
  link: string;
  isShareURL?: boolean;
}) => {
  const size = 16;

  const getIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook size={size} />;
      case "twitter":
        return <Twitter size={size} />;
      case "instagram":
        return <Instagram size={size} />;
      case "youtube":
        return <Youtube size={size} />;
    }
  };

  return (
    <Link href={link}>
      <div
        className={`${
          isShareURL
            ? "py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-800 hover:text-neutral-100 duration-100 ease-in-out transition-colors"
            : ""
        }`}
      >
        {getIcon(platform)}
      </div>
    </Link>
  );
};
