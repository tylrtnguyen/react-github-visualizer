import React from 'react';
import PropTypes from 'prop-types';
import { 
    StyledWrapper,
    StyledErrorContainer,
    StyledError,
    StyledErrorMessage,
    StyledStatusCode,
    StyledButtonLink
} from './styles'


const Error = ({error}) => {
    const { status, message } = error;

    return (
        <StyledWrapper>
            <StyledErrorContainer>
                <StyledError>
                    <StyledStatusCode>{status}</StyledStatusCode>
                    <StyledErrorMessage>Oops! {message}</StyledErrorMessage>
                    <StyledButtonLink to="/">Go Back</StyledButtonLink>
                </StyledError>
            </StyledErrorContainer>
        </StyledWrapper>
    )

}

Error.propTypes = {
    error: PropTypes.object.isRequired,
};

export default Error;

