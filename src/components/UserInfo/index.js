import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledWrapper,
    StyledAvatarContainer,
    StyledFullName,
    StyledLoginURL,
    StyledLink,
    StyledUserInfo,
    StyledInfoItem,
    StyledStats,
    StyledStatsItem,
    StyledData,
    StyledDataLabel
} from './styles';
import { ReactComponent as Company } from '../../assets/icons/company.svg';
import { ReactComponent as Calendar } from '../../assets/icons/date.svg';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { ReactComponent as Blog } from '../../assets/icons/blog.svg';

const UserInfo = ({ userData }) => {
    return (
        <StyledWrapper>
            {
                userData.avatar_url && (
                    <StyledAvatarContainer>
                        <img src={userData.avatar_url} alt="user avatar" />
                    </StyledAvatarContainer>
                )
            }
            { userData.name && <StyledFullName>{userData.name}</StyledFullName> }

            { userData.login && (
                <StyledLoginURL>
                    <StyledLink href={userData.html_url} target="_blank" rel="noreferrer noopener">
                        @{userData.login}
                    </StyledLink>
                </StyledLoginURL>
            )}
            <StyledUserInfo>
            {
                userData.company && (
                        <StyledInfoItem>
                            <Company />
                            {userData.company}
                        </StyledInfoItem>
                    
            )}

            { 
                userData.location && (
                        <StyledInfoItem>
                            <Location />
                            {userData.location}
                        </StyledInfoItem>
            )}

            { 
                userData.blog && (
                        <StyledInfoItem>
                            <Blog />
                            <StyledLink href={`https://www.${userData.blog}`} target="_blank" rel="noreferrer noopener">
                                {userData.blog}
                            </StyledLink>
                        </StyledInfoItem>
            )}

            {
                userData.created_at && (
                    <StyledInfoItem>
                        <Calendar />
                        Joined{' '}
                        {new Date(userData.created_at).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </StyledInfoItem>
            )}
            </StyledUserInfo>

            <StyledStats>
                <StyledStatsItem>
                    <StyledData>{userData.public_repos.toLocaleString()}</StyledData>
                    <StyledDataLabel>Repositories</StyledDataLabel>
                </StyledStatsItem>
                <StyledStatsItem>
                    <StyledData>{userData.followers.toLocaleString()}</StyledData>
                    <StyledDataLabel>Followers</StyledDataLabel>
                </StyledStatsItem>
                <StyledStatsItem>
                    <StyledData>{userData.following.toLocaleString()}</StyledData>
                    <StyledDataLabel>Following</StyledDataLabel>
                </StyledStatsItem>
            </StyledStats>
        </StyledWrapper>
    )
}

UserInfo.propTypes = {
    userData: PropTypes.object.isRequired
}

export default UserInfo;