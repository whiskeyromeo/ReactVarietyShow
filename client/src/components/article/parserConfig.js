import React from 'react';

function transform(node, index) {
    // return an <i> element for every <b>
    // a key must be included for all elements
    if (node.type === 'tag' && node.name === 'b') {
        return <i key={index}>I am now in italics, not bold</i>;
    }

    // Ensure any images passed in are below the max size
    // currently max is 200x200
    if (node.type === 'tag' && node.name === 'img') {
        return <img key={index} src={node.attribs.src} height="200" width="300" alt={node.attribs.src} />;
    }
}

export const options = {
    transform,
};