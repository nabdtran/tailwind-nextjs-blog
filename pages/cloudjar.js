import Head from "next/head";
import { getPosts } from "../data/ghost";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const Home = (props) => {
  return (
    <div className="font-body min-h-screen bg-gray-100 space-y-4">
      <div>
        <div className="mx-auto max-w-8xl px-6">
          <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
            <div className="flex items-center text-base flex-1">
              <nav className="hidden ml-6 space-x-4 lg:block">
                <Link href="/">
                  <a>Cloudbites</a>
                </Link>
                <Link href="/about">
                  <a>About</a>
                </Link>
                <Link href="/newsletter">
                  <a>Newsletter</a>
                </Link>
                <Link href="/cloudjar">
                  <a>Cloud Jar</a>
                </Link>
                <Link href="/community">
                  <a>Our Community</a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <span className="block">
        <p className="text-secondary">Ideas</p>
        <ul className="text-secondary list-disc list-inside">
          <li>How to use a CMS to create a blog</li>
          <li>Serverless using Netlify/Vercel</li>
          <li>AWS Serverless using Serverless.io</li>
          <li>Amplify</li>
          <li>Podcast with Paul/Paul</li>
          <li>Podcast with M</li>
          <li>Podcast with Pe</li>
        </ul>
      </span>
    </div>
  );
};

export default Home;
