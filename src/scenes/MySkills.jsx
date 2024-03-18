import LineGradient from "../components/LineGradient";
import BootstrapIcon from "../components/icons/Bootstrap";
import GitHubIcon from "../components/icons/GitHub";
import JSIcon from "../components/icons/JS";
import NextIcon from "../components/icons/Next";
import ReactIcon from "../components/icons/React";
import SassIcon from "../components/icons/Sass";
import StorybookIcon from "../components/icons/Storybook";
import TSIcon from "../components/icons/TS";
import TailwindCSSIcon from "../components/icons/TailwindCSS";
import ReduxIcon from "../components/icons/Redux";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const skills = [
    {
      id: 1,
      skill: "Sass",
      icon: <SassIcon />,
    },
    {
      id: 2,
      skill: "Bootstrap",
      icon: <BootstrapIcon />,
    },
    {
      id: 3,
      skill: "Tailwind CSS",
      icon: <TailwindCSSIcon />,
    },
    {
      id: 4,
      skill: "Javascript",
      icon: <JSIcon />,
    },
    {
      id: 5,
      skill: "Typescript",
      icon: <TSIcon />,
    },
    {
      id: 6,
      skill: "React JS",
      icon: <ReactIcon />,
    },
    {
      id: 7,
      skill: "Next JS",
      icon: <NextIcon />,
    },
    {
      id: 8,
      skill: "Storybook",
      icon: <StorybookIcon />,
    },
    {
      id: 10,
      skill: "GIT / GitHub",
      icon: <GitHubIcon />,
    },
    {
      id: 11,
      skill: "Redux Toolkit",
      icon: <ReduxIcon />,
    },
  ];

  return (
    <section id="skills" className="pt-3 pb-12">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <div className="flex flex-col gap-2  mt-4 mb-7">
            {skills.map((element) => (
              <div key={element.id} className="flex items-center gap-2">
                {element.icon} <p>{element.skill}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
            morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
            odio sit sagittis,
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute r ight-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
            amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
            nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
            faucibus a
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in
            curabitur. Lectus libero, egestas enim aliquam quis felis amet.
            Sagittis, amet netus fringilla netus lobortis odio sed platea.
            Bibendum.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
