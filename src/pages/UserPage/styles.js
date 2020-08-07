import styled from 'styled-components';
import { theme, media, mixins } from '../../styles';
const { colors, typeScale } = theme;

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
    padding: 0;
    margin: 0;
    ${media.bigDesktop`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `};
`;

export const StyledSectionHeader = styled.span`
    text-align: center;
    font-family: Poppins-Medium;
    font-size: ${typeScale.h3};
    ${media.phablet`
        font-size: ${typeScale.h5};
    `}
`;

export const StyledSideBar = styled.div`
    height: 100vh;
    padding: 1.5rem;
    background: ${colors.background};
    font-size: ${typeScale.h3};
    text-align: center;
    color: ${colors.white};
    ${media.bigDesktop`
        width: 100%;
        height: auto;
    `};
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100vh;
`;
