import React from "react";
import { Helmet } from "react-helmet";
import defaultImage from "../assets/screenshot.png";
import { SEOProps } from "../utils/types";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.ftvid.games";
export const SEO = ({
  title = "FtVid | Football Videos | All football highlights and skills in one place.",
  description = "FtVid | Football Videos | All football highlights and skills in one place. Get access to all football highlights from different regions of the world. We talk about football.",
  image = defaultImage,
}: SEOProps) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `image`,
          content: `${url}${image}`,
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
          content: description,
        },
        {
          property: "og:image",
          content: `${url}${image}`,
        },
        // {
        //   property: "fb:app_id",
        //   content: someFbAppId,
        // },

        //twitter tags

        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:creator",
          content: "@AbizeraOreste",
        },
        {
          property: "twitter:title",
          content: title,
        },
        {
          property: "twitter:description",
          content: description,
        },
        {
          property: "twitter:image",
          content: `${url}${image}`,
        },
      ]}
    />
  );
};
