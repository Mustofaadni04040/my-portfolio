import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants';

export default function SocialLinks() {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <p className="text-slate-500">Let&apos;s Connect</p>
        <div className="flex items-center gap-5">
          {socialLinks.map((icon) => (
            <Link to={icon.link}>
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
