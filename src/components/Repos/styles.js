import styled, {
    css
} from 'styled-components';
import {
    theme,
    media,
    mixins
} from '../../styles';
const {
    colors,
    typeScale
} = theme;

export const StyledWrapper = styled.div `
    padding: 2rem 0;
    margin-left: 2rem;
    ${media.phablet`
        margin-left: 1rem;
    `}
`;

export const StyledGrid = styled.div `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 8fr;
    grid-gap: 1rem;
    ${media.desktop`
        grid-template-columns: repeat(2, 1fr);
    `};
    ${media.phablet`
        grid-template-columns: 1fr;
    `}
    .card {
        padding: 1rem;
        background: ${colors.white};
        width: 100%;
        height: 100%;
    }
`

export const StyledRepo = styled.div `
    height: auto;
    box-shadow: ${theme.boxShadow};
    overflow: hidden;
    height: 100%;
    color: ${colors.charcoal};
    h4 {
        ${mixins.ellipsis};
        color: ${colors.background};
        margin-bottom: 0.25rem;
        font-size: ${typeScale.h5};
    }
    text-decoration: none;
    &:focus,
    $:hover {
        box-shadow: ${theme.boxShadow};
    }
`;

export const StyledCard = styled.div `
    padding: 1rem;
    background: ${colors.white};
    width: 100%;
    height: 100%;
`;

export const StyledStatSection = styled.span `
    display: flex;
    align-items: center;
    margin-right: 0.75rem;
    svg {
        margin-right: 0.25rem;
    }
    font-size: 13px;
    .language {
        border-radius: 100%;
        width: 10px;
        height: 10px;
        background-color: blue;
        margin-right: 0.25rem;
    }
`

export const StyledContent = styled.div `
    padding: 1rem 0;
    p {
        ${mixins.ellipsis};
        font-size: 14px;
    }
`;

export const StyledStats = styled.div `
    display: flex;
    align-items: center;
    div {
        display: flex;
        &:first-child {
            margin-right: 0.5rem;
        }
        img {
            margin: 0;
        }
        svg {
            margin-right: 0.5rem;
            min-width: 16px;
        }
        span {
            color: ${colors.charcoal};
            margin-left: 0.5rem;
        }
    }
    .right {
        font-size: 13px;
        float: right;
    }
`

export const StyledDropdownContainer = styled.div `
    display: flex;
    align-items: center;
    font-size: ${typeScale.p};
    font-family: Poppins-Regular;
    color: ${colors.charcoal}; 
`;

export const StyledDropdown = styled.div `
    position: relative;
    width: 100px;
    font-size: ${typeScale.p};
    ${({active}) => active && css`
    .dropdown__list {
        opacity: 1;
        visibility: visible;
    }
    .dropdown__button {
        background: rgba(0, 118, 255, 0.1);
        svg {
            transform: rotate(0.5 turn);
        }
    }
`}
`;

export const StyledDropdownButton = styled.button `
    ${mixins.flexBetween};
    align-items: center;
    width: 100%;
    font-size: 14px;
    font-family: Poppins-Regular;
    line-height: 1;
    text-align: left;
    color: ${colors.red};
    background-color: transparent;
    border: rgba(0, 118, 255, 0.1);
    padding: 10px 7px;
    border-radius: 5px;

    &:hover,
    &:focus {
        color: ${colors.green};
        background: rgba(0, 118, 255, 0.1);
        border-color: rgba(0, 118, 255, 0.1);
    }
    svg {
        margin-left: 0.5rem;
    }
    label {
        transition: ${theme.transition};
        cursor: pointer;
    }
`;


export const StyledDropdownList = styled.ul `
    position: absolute;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    transition: ${theme.transition};
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    background-color: ${colors.white};
`

export const StyledDropdownListItem = styled.li `
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
    &:hover,
    &:focus {
        background-color: transparent;
    }
    &:first-of-type {
      button {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
    &:last-of-type {
      button {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    button {
        color: ${colors.red};
        background: rgba(0, 118, 255, 0.1);
        padding: 10px 7px;
        width: 100%;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        text-align: left;
    }
`

export const StyledLabel = styled.span `
    margin: 0 1rem;
`;