import Head from "next/head";
import { getPosts } from "../data/ghost";
import Link from "next/link";
import Image from "next/image";

export const getServerSideProps = async () => {
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
        <p className="text-secondary">
          Bite-sized Insights into the{" "}
          <span className="text-tertiary">Cloud Computing</span> Industry for
          Students and Young Professionals.
        </p>
        <p className="text-secondary">
          Learn though Fortnightly Newsletters & Podcast Episodes.
        </p>
        <form>
          <button className="h-10 px-5 m-2 text-white uppercase transition-colors duration-150 bg-tertiary rounded-lg focus:shadow-outline hover:bg-tertiary-dark">
            Subscribe for Free
          </button>
        </form>
        <Image
          src="/role2.png"
          alt="Picture of roles"
          width={500}
          height={500}
        />
        <ul className="list-disc list-inside">
          {props.posts.map((post) => (
            <li className="font-body" key={post.id}>
              <Link href={`/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </span>
      <span className="block bg-tertiary">
        <h1 className="text-white">What is Cloudbites?</h1>
        <p className="text-white">
          Cloudbites sheds light into the cloud computing industry for students
          and young professionals. Subscribe for bite-sized, easy-to-understand
          content through fortnightly newsletters! Our goal is to encourage more
          students, and people early in their career, to start their cloud
          learning journey, and possibly consider a career within Cloud.
        </p>
      </span>
      <span className="block">
        <Image
          src="/role1.png"
          alt="Picture of roles"
          width={500}
          height={500}
        />

        <h1>What's included in each Newsletter?</h1>

        <ul className="list-disc list-inside">
          <li>Cloud Computing Concepts 101</li>
          <li>Career Advice – Kickstarting your Cloud Career</li>
          <li>Latest Cloud Computing Trends</li>
          <li>Interviews with Industry Professionals</li>
        </ul>
        <form>
          <button className="h-10 px-5 m-2 text-white uppercase transition-colors duration-150 bg-tertiary rounded-lg focus:shadow-outline hover:bg-tertiary-dark">
            Subscribe Now
          </button>
        </form>
      </span>
      <span className="block">
        <h3>Cloudbites</h3>
      </span>
    </div>
  );
};

export default Home;
