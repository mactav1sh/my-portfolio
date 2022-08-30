import { BsExclamationOctagonFill } from 'react-icons/bs';

const Blog = () => {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center space-y-5">
        <BsExclamationOctagonFill className="h-14 w-14 animate-bounce text-orange-500" />
        <h1 className="capitalize text-2xl md:text-4xl">No posts yet</h1>
      </div>
    </main>
  );
};

export default Blog;
