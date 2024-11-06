import type { CollectionSlug } from "payload";

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: "/posts",
  pages: "",
};

type Props = {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
};

export const generatePreviewPath = ({ collection, slug }: Props) => {
  const path = `${collectionPrefixMap[collection]}/${slug}`;

  const params = {
    slug,
    collection,
    path,
  };

  const encodedParams = new URLSearchParams();

  const paramEntries = Object.entries(params);
  for (const param of paramEntries) {
    const [key, value] = param;
    encodedParams.append(key, value);
  }

  return `/next/preview?${encodedParams.toString()}`;
};
