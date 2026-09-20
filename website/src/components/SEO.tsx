import { useEffect } from "react";
import logoImage from "@assets/joe.png";
import { defaultOpenGraphConfig, siteName } from "@/lib/seo";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

function updateMeta(attr: "name" | "property", key: string, value: string) {
  const selector = attr === "name" ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

function updateLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export default function SEO({ title, description, path, image }: SEOProps) {
  useEffect(() => {
    const pageTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    document.title = pageTitle;

    updateMeta("name", "description", description);
    updateMeta("property", "og:title", pageTitle);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:type", defaultOpenGraphConfig.type);
    updateMeta("property", "og:site_name", defaultOpenGraphConfig.siteName);
    updateMeta("name", "twitter:title", pageTitle);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:card", "summary_large_image");

    const origin = window.location.origin;
    const canonicalUrl = `${origin}${path}`;
    updateLink("canonical", canonicalUrl);
    updateMeta("property", "og:url", canonicalUrl);
    updateMeta("name", "twitter:url", canonicalUrl);

    const imageUrl = image || logoImage;
    updateMeta("property", "og:image", imageUrl);
    updateMeta("name", "twitter:image", imageUrl);
  }, [title, description, path, image]);

  return null;
}
