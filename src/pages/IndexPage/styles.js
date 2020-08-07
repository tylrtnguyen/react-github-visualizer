import styled from 'styled-components';
import { theme, mixins, media } from '../../styles';
const { colors, typeScale } = theme;

export const StyledContainer = styled.div`
    ${mixins.flexCenter};
    background-color: ${colors.background};
    color: ${colors.white};
    height: 100vh;

    form {
        background-color: transparent;
        border-radius: ${theme.borderRadius};
        padding: 1rem;
        margin-bottom: 20vh;
        max-width: 600px;
        text-align: center;
        label {
            display: block;
            font-family: Poppins-SemiBold;
            font-size: ${typeScale.h1};
            margin: 1rem;
            ${media.phablet`
                font-size: ${typeScale.h3};
                margin-bottom: 1rem;
            `};
            ${media.tiny`
                font-size: ${typeScale.h4};
            `}
        }
        input {
            outline: 0;
            border: 0;
            border-radius: ${theme.borderRadius};
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            padding: 1rem;
            color: ${colors.charcoal};
            font-family: Poppins-Regular;
            font-size: ${typeScale.h5};
            text-align: center;
            letter-spacing: 3px;
            ${media.thone`
                font-size: ${typeScale.p};
                padding: 0.8rem;
                max-width: 300px;
            `};
        }
        .submit {
            ${mixins.button};
            margin-top: 2rem;
            filter: none;
            &:disabled {
                background-color: ${colors.disabled};
            }
        }
    }
`