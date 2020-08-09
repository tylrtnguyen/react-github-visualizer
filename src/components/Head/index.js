import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const defaultTitle = "GitHub Profile Visualizer";
const defaultDescription = "A GitHub visualization tool built with GitHub Public API and React";
const defaultOGURL = "https://www.github-visualizer.netlify.app";
const defaultOGImage = "https://www.github-visualizer.netlify.app/public/og.png";

const Head = (props) => (
    <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Icon section */}
        <link rel="icon" href="public/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="120x120" href="public/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="public/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="public/icons/favicon-32x32.png" />
        <link rel="manifest" href="/public/manifest.json" />
        <meta name="theme-color" content="#24292E" />
        {/* OG Section */}
        <meta name="og:url" content={props.url || defaultOGURL} />
        <meta name="og:title" content={props.title || defaultTitle} />
        <meta name="og:description" content={props.description || defaultDescription} />
        <meta name="og:image" content={props.ogImage || defaultOGImage} />
        <meta name="og:image:width" content="1225" />
        <meta name="og:image:height" content="630" />
        {/* Twitter section */}
        <meta name="twitter:site" content={props.url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
        <meta name="twitter:description" content={props.description || defaultDescription} />
        <meta name="twitter:title" content={props.title || defaultTitle} />
        <title>{props.title || defaultTitle}</title>
    </Helmet>
)

Head.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    ogImage: PropTypes.string,
    description: PropTypes.string,
}

export default Head;