import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seoByPath } from "../seoData";

export function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const seo = seoByPath[location.pathname] ?? seoByPath["/"];
    document.title = seo.title;

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", seo.description);
    }

    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) ogTitle.setAttribute("content", seo.title);

    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) ogDescription.setAttribute("content", seo.description);

    const ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);
  }, [location.pathname]);

  return null;
}
