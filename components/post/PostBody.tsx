import parse, { Element } from "html-react-parser";
import Image from "next/image";

export const PostBody = ({ body }: { body: string }) => {
  const options = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === "img") {
          const { src, alt } = domNode.attribs;
          return (
            <Image
              className="object-cover object-ceter w-full my-3 rounded-md h-auto max-h-[300px]"
              src={src}
              alt={alt}
              width={1200}
              height={620}
            />
          );
        }
      }
    },
  };

  const getParsedHTML = (body: string) => {
    return parse(body, options);
  };

  return <div className="rich-text">{getParsedHTML(body)}</div>;
};
