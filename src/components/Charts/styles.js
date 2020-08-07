import styled from 'styled-components';
import { theme, media, mixins } from '../../styles';
const { colors, typeScale } = theme;


export const StyledContainer = styled.div`
    ${mixins.flexCenter};
    flex-direction: column;
`

export const StyledWrapper = styled.div`
    ${mixins.flexCenter};
    max-width: 1400px !important;
    padding: 0.8;
    flex-wrap: wrap;
`

export const StyledChartContainer = styled.div`
    background-color: ${colors.white};
    min-width: 300px;
    padding: 1rem;
    margin: 0.8rem 2.5rem;
    max-width: 400px;
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    ${media.phablet`
        min-width: 300px;
        max-width: 400px;
    `};
    ${media.thone`
        min-width: 300px;
    `}
`;


export const StyledHeader = styled.div`
    ${mixins.flexCenter};
    h2 {
        padding: 0.3rem;
        font-size: ${typeScale.h5};
    }
`;

export const StyledDescription = styled.p`
    color: ${colors.white};
`