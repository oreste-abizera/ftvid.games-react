import React from "react";
import { Helmet } from "react-helmet";
import defaultImage from "../assets/screenshot.png";
import { SEOProps } from "../utils/types";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.ftvid.games";
const defaultDescription =
  "FtVid | Football Videos | All football highlights and skills in one place. Get access to all football highlights from different regions of the world. We talk about football.";
export const SEO = ({
  title = "FtVid | Football Videos | All football highlights and skills in one place.",
  description = defaultDescription,
  image = defaultImage,
}: SEOProps) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: `description`,
          content:
            description !== defaultDescription
              ? `${description} ${defaultDescription}`
              : description,
        },
        {
          name: `image`,
          content: image === defaultImage ? `${url}${image}` : image,
        },

        //opengraph tags (for facebook)
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content:
            description !== defaultDescription
              ? `${description} ${defaultDescription}`
              : description,
        },
        {
          property: "og:image",
          content: image === defaultImage ? `${url}${image}` : image,
        },
        // {
        //   property: "fb:app_id",
        //   content: someFbAppId,
        // },

        //twitter tags

        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: "@AbizeraOreste",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content:
            description !== defaultDescription
              ? `${description} ${defaultDescription}`
              : description,
        },
        {
          name: "twitter:image",
          content: image === defaultImage ? `${url}${image}` : image,
        },
        {
          name: "twitter:url",
          content: url,
        },
      ]}
    />
  );
};
