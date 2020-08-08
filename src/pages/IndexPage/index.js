import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as NextIcon } from '../../assets/icons/next.svg';
import {
    StyledContainer
} from './styles';

const IndexPage = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const handleChange = e => setUsername(e.target.value);
    
    return (
        <StyledContainer>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    history.push(`/user/${username}`)
                }}
            >
                <label htmlFor="username">GitHub Profile Visualizer</label>
                <input name="username" type="text" placeholder="GitHub username here" onChange={handleChange} />
                <button disabled={username===''} className="submit" type="submit">Submit <NextIcon /></button>

            </form>
        </StyledContainer>
    )
}

export default IndexPage;