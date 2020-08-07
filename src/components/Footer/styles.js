import styled from 'styled-components';
import { theme, media, mixins } from '../../styles';
const { colors, typeScale } = theme;

export const StyledFooter = styled.footer`
    ${mixins.flexCenter};
    bottom: 0;
    color: ${colors.white};
    text-align: center;
    margin-top: 60%;
    font-family: Poppins-Regular;
    font-size: ${typeScale.p};
    a {
        color: ${colors.green};
        padding: 5px;
        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }
    .heart {
        color: ${colors.red};
    };
    ${media.bigDesktop`
        display: none;
    `};
`;