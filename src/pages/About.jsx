import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { AnimatePresence, motion } from 'framer-motion';
import { skills, experiences } from '../constants/index';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import SocialLinks from '../components/SocialLinks';

export default function About() {
  const skillsTransition = {
    repeat: Infinity,
    duration: 0.9,
    repeatType: 'mirror',
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        안녕하세요/Hello/Hi I&apos;m{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Mustofa Adny
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Junior Front-End Web Developer with interest career as a Full-Stack
          Web Developer and with strong desire for continuous learning.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          <AnimatePresence>
            {skills.map((skill, index) => (
              <motion.div
                className="block-container w-20 h-20"
                animate={{
                  scale: [0.75, 1.1],
                }}
                transition={{
                  ...skillsTransition,
                  delay: skill.delay,
                }}
                key={index}
              >
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center cursor-pointer">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="pt-16 pb-5 lg:pb-0">
        <h3 className="subhead-text">Experience</h3>
      </div>

      <div className="mb-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>

                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={index}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200" />

      <CTA />
      <SocialLinks />
    </section>
  );
}
