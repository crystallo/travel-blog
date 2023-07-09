import { directusGraphQL, directusREST } from "@/lib/directus";
import { createItem } from "@directus/sdk";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import React from "react";

const SUBSCRIBERS_COUNT_TAG = "subscribers-count";

export const CTACard = async () => {
  const formAction = async (formData: FormData) => {
    "use server";
    try {
      const email: string = formData.get("email")?.toString() ?? "";
      await directusREST.request(createItem("subscribers", { email }));
      revalidateTag(SUBSCRIBERS_COUNT_TAG);
    } catch (error) {
      console.log(error);
      throw Error("error adding subscriber");
    }
  };

  const subscribersCount = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,
    {
      next: {
        tags: [SUBSCRIBERS_COUNT_TAG],
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.meta.total_count)
    .catch((error) => console.log(error));

  return (
    <div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      {/* Image */}
      <Image
        alt="CTA Card Image"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
        fill
      />
      {/** Content Container */}
      <div className="relative z-20 ">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          Explore the word with me!
        </h3>
        <p className="max-w-lg mt-2 text-lg">
          {`Explore the world with me! I'm traveling around the globe. I've
          visited most of the great cities of and currently I'm traveling in .
          Join me!`}
        </p>
        {/* Form */}
        <form
          key={subscribersCount + "subscribers-form"}
          action={formAction}
          className="flex items-center w-full gap-2 mt-6"
        >
          <input
            type="email"
            name="email"
            placeholder="Write your email"
            className="w-full px-3 py-2 text-base rounded-md outline-none md:w-auto bg-white/80 focus:ring-2 ring-neutral-600 placeholder:text-sm"
          />
          <button className="px-3 py-2 rounded-md bg-neutral-900 text-neutral-200 whitespace-nowrap">
            Sign Up
          </button>
        </form>

        <div className="mt-5 text-neutral-700">
          Join our{" "}
          <span className="px-2 py-1 rounded-md bg-neutral-700 text-neutral-100">
            {subscribersCount}
          </span>{" "}
          subscribers now!
        </div>
      </div>
    </div>
  );
};
