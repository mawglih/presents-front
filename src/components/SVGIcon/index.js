import React from 'react';

const SVGIcon = ({
  icon,
  ...props
}) => {
  if (icon.viewBox && icon.url) {
    return (
      <svg
        {...props}
        viewBox={icon.viewBox}
        dangerouslySetInnerHTML={{ __html: `<use xlink:href="${icon.url}" />` }} // eslint-disable-line react/no-danger
      />
    );
  }

  return (
    <img src={icon} alt="icon" {...props} />
  );
};

export default SVGIcon;
