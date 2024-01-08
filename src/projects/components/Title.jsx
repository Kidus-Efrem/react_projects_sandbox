import React from 'react';

export default function Title({ text, classes }) {
  const className = classes ? `header text-align ${classes}` : 'header text-align';

  return (
    <div>
      <h1 className={className}>{!text ? 'Title' : text}</h1>
    </div>
  );
}
