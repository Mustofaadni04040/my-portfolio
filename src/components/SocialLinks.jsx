import React from 'react';
import { Link } from 'react-router-dom';
import { RxDownload } from 'react-icons/rx';
import { socialLinks } from '../constants';

export default function SocialLinks() {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <p className="text-slate-500">Let&apos;s Connect</p>
        <div className="flex items-center gap-5">
          <div>
            <a
              href="/mustofa-adny-CV.pdf"
              download="mustofa-adny-CV.pdf"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-700 duration-200"
            >
              Download CV
              <RxDownload />
            </a>
          </div>
          {socialLinks.map((icon) => (
            <Link to={icon.link} key={icon.name} target="_blank">
              <img
                src={icon.iconUrl}
                alt={icon.name}
                className="w-5 h-5 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
