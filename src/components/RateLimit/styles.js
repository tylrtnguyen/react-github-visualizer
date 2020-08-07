import styled from 'styled-components';
import { theme } from '../../styles';
const { colors, typeScale } = theme;

export const StyledWrapper = styled.main`
    color: ${colors.green};
    .limit {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0.3rem;
    }
    .num {
        font-size: ${typeScale.h4};
        margin-bottom: 0.5rem;
    }
    p {
        text-transform: uppercase;
        font-size: ${typeScale.copyright};
        letter-spacing: 1px;
        margin: 0;
    }
`;