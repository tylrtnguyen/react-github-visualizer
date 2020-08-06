import styled from 'styled-components';
import { theme, media, mixins } from '../../styles';
const { colors, typeScale } = theme;

export const StyledWrapper = styled.div`
    max-width: 1200px !important;
    padding: 0.8;
    ${mixins.flexCenter};
    justify-content: center;
    flex-wrap: wrap;
`

export const StyledChartContainer = styled.div`
    background-color: ${colors.white};
    min-width: 375px;
    margin: 10px;
    max-width: 500px;
    border-radius: ${theme.borderRadius};
    box-shadow: 5px 5px 10px 0px rgba(150,141,150,1);
    ${media.phablet`
        min-width: 350px;
        max-width: 400px;
    `};
    ${media.thone`
        min-width: 300px;
    `}
`;

export const StyledHeader = styled.div`
    ${mixins.flexCenter};
    h2 {
        padding-top: 0.3rem;
        font-size: ${typeScale.h3};
    }
`;

export const StyledDescription = styled.p`
    color: ${colors.white};
`