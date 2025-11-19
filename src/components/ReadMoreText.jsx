import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ReadMoreText({ text, maxLength }) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  const displayText =
    showFullText || text.length <= maxLength
      ? text
      : `${text.slice(0, maxLength)}...`;

  return (
    <div>
      <p>{displayText}</p>
      {text.length > maxLength && (
        <button
          type="button"
          className="text-blue-500 hover:underline"
          onClick={toggleFullText}
        >
          {showFullText ? 'Show Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}

ReadMoreText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};
