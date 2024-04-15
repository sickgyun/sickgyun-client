import type { Metadata } from 'next';
import { META } from '@/constants/metadata';

type GetMetadataProps = {
  title?: string;
  description?: string;
  asPath?: string;
  ogImage?: string;
};

export const getMetadata = (props?: GetMetadataProps) => {
  const { title, description, asPath, ogImage } = props || {};

  const TITLE = title ? `${title} | 식견` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? META.url + asPath : META.url;
  const OG_IMAGE = ogImage || META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: 'ko_KR',
      type: 'website',
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};
