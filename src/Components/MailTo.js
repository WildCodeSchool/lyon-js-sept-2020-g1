import React from 'react';

const Mailto = ({ email, subject, body, children }) => {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ''
      }&body=${encodeURIComponent(body) || ''}`}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Mailto;
