import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 69,
      author: {
        _id: 1,
        name: 'Sabin Shrestha',
      },
      _id: 1,
      description: 'This is a description',
      image: 'https://picsum.photos/id/237/200/200',
      category: 'Robots',
      title: 'We Robots',
    },
  ];

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch Your Vision, <br />
          Connect With Entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search Results for "${query}"` : 'All Startups'}
        </p>
        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?.id} post={post} />
            ))
          ) : (
            <p className='no-results'>Np Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
