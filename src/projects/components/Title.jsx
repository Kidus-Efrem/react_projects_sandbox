import React from 'react';

export default function Title({ text, classes, styles}) {
  const className = classes ? `header text-center ${classes}` : 'header text-center';
  const style= styles? styles:""
  return (
    <div>
      <h1 className={className} style={styles}>{!text ? 'Title' : text}</h1>
    </div>
  );
}
