export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        twitter: string;
        youtube: string;
        instagram: string;
    }
}

const siteConfig: SiteConfig = {
    siteName: "Explorer",
    description: "A minimal and lovely travel blog which shares experiences and cities around the world!",
    currentlyAt: "Budapest",
    socialLinks: {
        twitter: "https://twitter.com/",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com/"
    }
}

export default siteConfig;