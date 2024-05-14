import "../App.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";

const posts = [
  {
    id: 1,
    title: "Kabootar",
    href: "https://kabootar.meghrathod.dev",
    description:
      "Secure and fast peer to peer file sharing application built using WebRTC.",
    languages: ["Golang", "TypeScript   ", "WebRTC"],
    links: {
      github: "https://github.com/meghrathod/kabootar",
      website: "https://kabootar.meghrathod.dev",
    },
  },
  {
    id: 2,
    title: "Friday",
    href: "https://github.com/meghrathod/friday",
    description:
      "A modular coding assignment correction utility crafted for instructors.",
    languages: ["React", "Python", "Sqlite"],
    links: {
      github: "https://github.com/meghrathod/friday",
      website: "",
    },
  },
  {
    id: 3,
    title: "ChatX",
    href: "https://github.com/meghrathod/chatx",
    description:
      "A concurrent chat server and client built using Java and Swing.",
    languages: ["Java", "Swing"],
    links: {
      github: "https://github.com/meghrathod/chatx",
      website: "",
    },
  },
];

const About = () => {
  return (
    <div className="global-body">
      <div className="background-wrapper">
        <div className="gradient"></div>
      </div>
      <Header noBack="false" />
      <div className="py-16 sm:py-15">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto border-b bottom-border-pink">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white ">
              Me and my Work
            </h2>
            <p className="my-4 text-lg leading-8 text-gray-800 dark:text-gray-200 ">
              Full Stack dev in making, currently exploring the Cloud.
            </p>
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-800 dark:text-gray-200 ">
            Here's what I've been working on lately
          </p>

          <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-3 sm:mt-10 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div
                className="backdrop-blur dark:bg-gray-700/30 bg-white/40  "
                key={post.id}
              >
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between group-card"
                >
                  <div className="relative">
                    <h1 className="my-5 text-2xl font-semibold leading-6">
                      <a
                        href={post.href}
                        className=" text-gray-900 group-hover:text-gray-600 dark:ext-gray-100 dark:text-gray-200 dark:group-hover:text-gray-100 "
                      >
                        {post.title}
                      </a>
                    </h1>
                    <div className="flex items-center gap-x-2 text-xs my-2 justify-center flex-wrap">
                      {post.languages.map((language) => (
                        <div
                          key={language + post.id}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 my-0.5 mx-0 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                        >
                          {language}
                        </div>
                      ))}
                    </div>
                    <p className="my-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-x-4 text-xs my-2 justify-center">
                      <a href={post.links.github}>
                        <button className="text-xs">
                          <FontAwesomeIcon icon={faGithub} />
                          {/* <span className="ml-2" />
                                                GitHub */}
                        </button>
                      </a>

                      {post.links.website && (
                        <a href={post.links.website}>
                          <button className="text-xs">
                            <FontAwesomeIcon icon={faSquareUpRight} />
                            {/* <span className="ml-2" />
                                                    Website */}
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
