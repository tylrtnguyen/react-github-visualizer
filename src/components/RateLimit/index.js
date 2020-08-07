import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledWrapper
} from './styles'

const RateLimit = ({ rateLimit }) => (
    <StyledWrapper>
        {rateLimit && (
            <div className="limit">
                <div className="num">
                    {`${rateLimit.remaining} / ${rateLimit.limit}`}
                </div>
                <p>Requests Left</p>
            </div>
        )}
    </StyledWrapper>
)

export default RateLimit;