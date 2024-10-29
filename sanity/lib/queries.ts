import { defineQuery } from 'next-sanity';

export const STARTUPS_QUERY =
  defineQuery(`*[_type == 'startup' && defined(slug.current) && !defined($search) || category match $search || author->name match $search || title match $search ]{
    category,
    image,
    author -> {
      id, name, image, bio
    },
    title,
    _createdAt,
    pitch,
    views,
    description,
    _id,
    slug
}`);
