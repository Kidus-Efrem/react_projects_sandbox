import React from 'react';

export default function Title({ text, classes }) {
  const className = classes ? `header text-center ${classes}` : 'header text-center';

  return (
    <div>
      <h1 className={className}>{!text ? 'Title' : text}</h1>
    </div>
  );
}
