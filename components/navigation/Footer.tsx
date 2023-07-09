import siteConfig from "@/config/site";
import { PaddingContainer } from "../layout/PaddingContainer";
import { SocialLink } from "../elements/SocialLink";

export const Footer = () => {
  return (
    <footer className="py-8 mt-10 border-t">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
            {/* Social */}
            <div className="flex flex-wrap justify-between gap-4 mt-6">
              <div>
                <div className="text-lg font-medium">#exploretheworld</div>
                <div className="flex items-center gap-3 mt-2 text-neutral-600">
                  <SocialLink
                    platform="twitter"
                    link={siteConfig.socialLinks.twitter}
                  />
                  <SocialLink
                    platform="instagram"
                    link={siteConfig.socialLinks.instagram}
                  />
                  <SocialLink
                    platform="youtube"
                    link={siteConfig.socialLinks.youtube}
                  />
                </div>
              </div>
              <div>
                <div className="text-sm text-neutral-400">Currently At</div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  {siteConfig.currentlyAt}
                </div>
              </div>
            </div>
            {/* Bottom Section */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 mt-16 border-t">
              <div className="text-sm text-neutral-400">
                All rights reserved | Copyright 2023
              </div>
              <div className="text-sm">Made with love by @Monkey</div>
            </div>
        </div>
      </PaddingContainer>
    </footer>
  );
};
