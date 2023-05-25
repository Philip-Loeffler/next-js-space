//when we have [slug], it means that its a dynamic route parameter that we can access from the URL

// creating an interface for the shape of the data we are fetching
interface Post {
  title: string;
  content: string;
  slug: string;
}

// this is essentially saying we are passing something to the url
interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  // fetch our content from our api
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  //  find the one that matches
  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
