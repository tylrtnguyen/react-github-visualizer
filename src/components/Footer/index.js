import React from 'react';
import {
    StyledFooter
} from './styles';


const Footer = () => (
    <StyledFooter>
        <div>
        <span>©{new Date().getFullYear()} - All rights reserved. Made
                with <span className="heart">❤</span> by{' '}</span> 
            <a href="https://www.thongba.io" target="_blank" rel="noopener noreferrer">Thong Nguyen.</a>{' '}
            Heavily inspired by <a href="https://www.github.com/bchiang7" target="_blank" rel="noopener noreferrer">@Bchiang7</a>
        </div>   
    </StyledFooter>
)

export default Footer;