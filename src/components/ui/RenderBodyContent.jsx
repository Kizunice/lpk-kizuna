import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlForImage } from "@/sanity/image";
import Image from "next/image";

const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="my-10 overflow-hidden rounded-[15px]">
      <Image
        src={
            urlForImage(value.mainImage)
        }
        width={width}
        height={height}
        alt={value.alt || "blog image"}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

const Table = ({ value }) => {
  return (
    <div className="my-10">
      <table>
        <tbody>
          {value.rows.map((row) => (
            <tr key={row._key}>
              {row.cells.map((cell, key) => (
                <td
                  key={key}
                  className="first-of-type:bg-gray-100 max-w-[100px]"
                >
                  <span className="px-4">{cell}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const components = {
    ImageComponent,
    Table,
};

const RenderBodyContent = ({ post }) => {
  return (
    <>
      <PortableText value={post?.body} components={components} />
    </>
  );
};

export default RenderBodyContent;