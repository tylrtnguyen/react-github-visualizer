import { css } from 'styled-components';


const sizes = {
    giant: 1440,
    bigDesktop: 1300,
    desktop: 1000,
    tablet: 768,
    thone: 600,
    phablet: 480,
    phone: 376,
    tiny: 330
}

const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)}
        }
    `;
    return accumulator;
}, {}) // Initial Value

export default media;