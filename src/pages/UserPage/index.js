import React from 'react';
import {
    StyledContainer,
    StyledSideBar,
    StyledContent
} from './styles';
import { UserInfo, Charts } from '../../components';
import mockUserData from '../../utils/mockUserData';
import mockLangData from '../../utils/mockLangData';
import mockReposData from '../../utils/mockReposData';

const UserPage = props => {
    const username = props.match.params.username
    return (
        <StyledContainer>
            <StyledSideBar>
                <UserInfo userData={mockUserData} />
            </StyledSideBar>
            <StyledContent>
                <Charts langData={mockLangData} repoData={mockReposData} username={username} />
            </StyledContent>
        </StyledContainer>
    )
}

export default UserPage;