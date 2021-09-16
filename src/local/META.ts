import { ImageMetaField } from "~/components/MetaSettings";
import { basePath } from "~/local/constants";

const META: {
  TITLE: string;
  DESCRIPTION?: string;
  URL: string;
  KEYWORDS?: string[];
  DEFAULT_SHARE_IMAGE?: ImageMetaField;
  FAVICON_IMAGE?: ImageMetaField;
} = {
  TITLE: "canvas",
  DESCRIPTION: "Awsome next.js project.",
  KEYWORDS: ["next", "javascript"],
  URL: `${process.env.SITE_ORIGIN}${basePath}`,
  // DEFAULT_SHARE_IMAGE: ASSETS_OGP,
  // FAVICON_IMAGE: ASSETS_FAVICON
};

export default META;
