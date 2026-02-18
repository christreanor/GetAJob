import React from 'react';

type HeadingProps = {
  text: string;
  importance?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
};

function Heading({ text, importance = 'h2' }: HeadingProps) {
    switch (importance) {
        case 'h1':
            return <h1>{text}</h1>;
        case 'h2':
            return <h2>{text}</h2>;
        case 'h3':
            return <h3>{text}</h3>;
        case 'h4':
            return <h4>{text}</h4>;
        case 'h5':
            return <h5>{text}</h5>;
        case 'h6':
            return <h6>{text}</h6>;
        default:
            return <p>{text}</p>;
    }
}

export default Heading;
