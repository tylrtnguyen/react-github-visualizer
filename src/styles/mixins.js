import { css } from 'styled-components';
import theme from './theme';
import media from './media'
const { colors, typeScale } = theme;

const mixins = {
    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    flexBetween: css`
        display: flex;
        justify-content: space-between;
    `,
    button: css`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 100%;
        max-width: 500px;
        padding: 1rem;
        margin-left: 20px;
        text-decoration: none;
        color: ${colors.white};
        font-size: ${typeScale.h5};
        border: none;
        border-radius: ${theme.borderRadius};
        font-family: Poppins-Medium;
        background: ${colors.red};
        line-height: 1.2;
        ${media.phablet`
            font-size: ${typeScale.p};
            padding: 0.8rem;
            line-height: 0;
            margin-left: 0;
        `};

        svg {
            padding: 0 0 0 15px;
            width: 32px;
            height: 32px;
            transition: all 0.4s;
        }

        &:hover {
        left: 0;
        background: ${colors.hover};
        svg {
            transform: translateX(10px);
        }

        svg {
            transition: all 0.4s;
        }
    }
    `
}

export default mixins;