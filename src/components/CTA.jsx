import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a porject in mind? <br className="sm:block hidden" />
        Let&apos;s build something together!
      </p>
      <Link to="/contact" className="btn">
        Contact Me
      </Link>
    </section>
  );
}
