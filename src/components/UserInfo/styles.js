import styled from 'styled-components';
import { theme, media, mixins } from '../../styles';
const { colors, typeScale } = theme;

export const StyledWrapper = styled.div`
    ${mixins.flexCenter};
    flex-direction: column;
    margin-bottom: 30px;
    text-align: center;
    padding: 0.8rem;

    ${media.thone`padding-top: 4rem;`};
`;

export const StyledAvatarContainer = styled.div`
    ${mixins.flexCenter};
    margin-bottom: 1.5rem;
    border: 0.5rem solid ${colors.red};
    border-radius: 50%;
    img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }
`;

export const StyledFullName = styled.h2`
    font-size: ${typeScale.h2};
    margin-bottom: 10px;
    color: ${colors.white};
    ${media.phablet`font-size: ${typeScale.h3};`};
`;

export const StyledLoginURL = styled.h3`
    margin-bottom: ${typeScale.h3};
    a {
        font-size: ${typeScale.h3};
        color: ${colors.green};
        text-decoration: none;
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: ${colors.white};
    &:hover,
    &:focus,
    &:active {
        text-decoration: underline;
    }
`;

export const StyledUserInfo = styled.div`
    ${mixins.flexCenter};
    flex-wrap: wrap;
    ${media.thone`display: block;`};
`;

export const StyledInfoItem = styled.span`
    ${mixins.flexCenter};
    margin: 0 1rem 0.5rem;
    white-space: nowrap;
    font-size: ${typeScale.p};
    svg {
        width: 28px;
        height: 28px;
        margin-right: 10px;
    }
`;

export const StyledStats = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 150px));
    grid-gap: 0.5rem;
    justify-content: center;
    margin-top: 2rem;
`;

export const StyledStatsItem = styled.div`
    ${mixins.flexCenter};
    flex-direction: column;
    background-color: ${colors.charcoal};
    padding: 0.8rem;
    border-radius: ${theme.borderRadius};
    color: ${colors.green};
    text-align: center;
    ${media.phablet`
        padding: 1rem 0.5rem;
    `};
`

export const StyledData = styled.span`
    font-size: ${typeScale.h4};
    ${media.phablet`font-size: ${typeScale.p}`};
`

export const StyledDataLabel = styled.span`
    text-transform: uppercase;
    font-size: ${typeScale.helper};
    letter-spacing: 1px;
    margin-top: ${typeScale.helper};
    ${media.phablet`font-size: ${typeScale.copyright};`};
`