import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="cta">
      <p className="cta-text">Let&apos;s build project together!</p>
      <Link to="/contact" className="btn">
        Contact Me
      </Link>
    </section>
  );
}
