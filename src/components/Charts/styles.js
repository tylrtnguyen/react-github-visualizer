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
    margin: 20px;
    max-width: 500px;
    border-radius: ${theme.borderRadius};
    box-shadow: 5px 5px 10px 0px rgba(150,141,150,1);
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
        font-size: ${typeScale.h4};
    }
`;

export const StyledDescription = styled.p`
    color: ${colors.white};
`