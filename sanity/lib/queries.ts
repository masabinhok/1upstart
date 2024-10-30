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

export const STARTUP_BY_ID_QUERY = defineQuery(`
  *[_type == 'startup' && _id == $id][0]{
    category,
    image,
    author -> {
      id, name, username, image, bio
    },
    title,
    _createdAt,
    pitch,
    views,
    description,
    _id,
    slug
}
  `);

export const STARTUP_VIEWS_QUERY =
  defineQuery(`*[_type=="startup" && _id == $id][0]{
    _id, views}`);
