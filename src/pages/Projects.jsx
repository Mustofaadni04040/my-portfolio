import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import SocialLinks from '../components/SocialLinks';

export default function Projects() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <motion.div
            className="lg:w-[400px] w-full"
            key={project.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: 'spring',
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="project-icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="min-h-44 mt-5 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
              </div>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_black"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-900"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
      <SocialLinks />
    </section>
  );
}
