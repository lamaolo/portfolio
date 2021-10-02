import styles from "../styles/MyProjects.module.css";
import ProjectCard from "./ProjectCard";

const MOCK_PROJECTS = [
  {
    id: 1,
    name: "Scrum.io",
    description:
      "Scrum.io is a platform designed to manage projects based on agile methodologies, providing a set of tools and utilities for both scrum masters and developers.",
    picture: "/scrum-io-desktop.JPG",
    liveViewLink: "https://scrum-io.vercel.app/",
    githubLink: "https://github.com/SHIMER-jpg/Scrum.io/",
  },
  {
    id: 2,
    name: "Scrum.io",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    picture: "/scrum-io-desktop.JPG",
    liveViewLink: "https://scrum-io.vercel.app/",
    githubLink: "https://github.com/SHIMER-jpg/Scrum.io/",
  },
  {
    id: 3,
    name: "Scrum.io",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    picture: "/scrum-io-desktop.JPG",
    liveViewLink: "https://scrum-io.vercel.app/",
    githubLink: "https://github.com/SHIMER-jpg/Scrum.io/",
  },
  {
    id: 4,
    name: "Scrum.io",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    picture: "/scrum-io-desktop.JPG",
    liveViewLink: "https://scrum-io.vercel.app/",
    githubLink: "https://github.com/SHIMER-jpg/Scrum.io/",
  },
  {
    id: 5,
    name: "Scrum.io",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    picture: "/scrum-io-desktop.JPG",
    liveViewLink: "https://scrum-io.vercel.app/",
    githubLink: "https://github.com/SHIMER-jpg/Scrum.io/",
  },
];

const MyProjects = () => {
  return (
    <section className={styles.container}>
      {MOCK_PROJECTS.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
};

export default MyProjects;
