import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme, media, mixins } from '../../styles';
const { colors, typeScale } = theme;

export const StyledWrapper = styled.div`
    ${mixins.flexCenter};
    background-color: ${colors.background};
    color: ${colors.white};
    height: 100vh;
`

export const StyledErrorContainer = styled.div`
    max-width: 520px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
`

export const StyledError = styled.div`
    position: relative;
    height: 600px;
    ${media.tablet`
        height: 200px;
    `};
    ${media.phablet`
        height: 162px;
    `};
`

export const StyledStatusCode = styled.h1`
    font-family: Poppins-Bold;
    font-size: 230px;
    font-weight: 900;
    margin: 0px;
    text-transform: uppercase;
    letter-spacing: -40px;
    margin-left: -20px;
    span {
        text-shadow: -8px 0px 0px ${colors.white};
    }
    ${media.tablet`
        font-size: 200px;
    `};
    ${media.phablet`
        font-size: 162px;
        height: 150px;
        line-height: 162px;
    `};
`

export const StyledErrorMessage = styled.h3`
    font-family: Poppins-Medium;
    position: relative;
    font-size: ${typeScale.h4};
    font-weight: 600;
    text-transform: uppercase;
    margin: 0px;
    letter-spacing: 3px;
    padding-left: 6px;
`

export const StyledButtonLink = styled(Link)`
    ${mixins.button};
    margin: 2rem 0.8rem;
`