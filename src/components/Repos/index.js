import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { RepoIcon, StarIcon, RepoForkedIcon, TriangleDownIcon } from '@primer/octicons-react';
import FlipMove from 'react-flip-move';
import { languageColors } from '../../utils';
import {
    StyledWrapper,
    StyledGrid,
    StyledRepo,
    StyledContent,
    StyledStats,
    StyledCard,
    StyledDropdown,
    StyledDropdownContainer,
    StyledLabel,
    StyledStatSection,
    StyledDropdownList,
    StyledDropdownListItem,
    StyledDropdownButton
} from './styles';

const FunctionalCard = forwardRef((props, ref) => (
    <StyledCard ref={ref}>
        {props.children}
    </StyledCard>
))


const Repos = ({ repoData }) => {
    const [topRepos, setTopRepos] = useState([]);
    const [sortType, setSortType ] = useState('stars');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const getTopRepos = category => {
        const LIMIT = 8;
        const map = {
            stars: 'stargazers_count',
            forks: 'forks_count',
            size: 'size'
        };
        const sortProperty = map[category];
        const sortedRepo = repoData.filter(repo => !repo.fork)
                                   .sort((a, b) => b[sortProperty] - a[sortProperty])
                                   .slice(0, LIMIT)
        setTopRepos(sortedRepo);
    };

    useEffect(() => {
        // Default sortType is 
        if(repoData.length) {
            getTopRepos();
        }
        // eslint-disable-next-line
    }, [])

    // eslint-disable-next-line
    useEffect(() => getTopRepos(sortType), [sortType]);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const changeSortType = sortType => {
        setSortType(sortType);
        toggleDropdown();
    };

    const sortTypes = ['stars', 'forks', 'size'];

    return (
        <StyledWrapper>
            <h2>Top Repos</h2>
            <StyledDropdownContainer>
                <StyledLabel>by</StyledLabel>
                <StyledDropdown active={dropdownOpen}>
                    <StyledDropdownButton
                        onClick={() => toggleDropdown()}
                        className="dropdown__button"
                    >
                        <label>{sortType}</label>
                        <TriangleDownIcon />
                    </StyledDropdownButton>
                    <StyledDropdownList className="dropdown__list">
                        {sortTypes.map((type, i) => (
                            <StyledDropdownListItem key={i}>
                                <StyledDropdownButton onClick={() => changeSortType(type)}>
                                    {type}
                                </StyledDropdownButton>
                            </StyledDropdownListItem>
                        ))}
                    </StyledDropdownList>
                </StyledDropdown>
            </StyledDropdownContainer>
            
            
            <StyledGrid>
                        {topRepos.map(repo => (
                            <StyledRepo key={repo.id} as="a" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <FlipMove typeName={null}>
                                <FunctionalCard>
                                    <StyledContent>
                                        <StyledStatSection>
                                            <RepoIcon />
                                            <h4>{repo.name}</h4>
                                        </StyledStatSection>
                                        <p>{repo.description}</p>
                                    </StyledContent>
                                    <StyledStats>
                                        <StyledStatSection>
                                            <div className="language" style={{backgroundColor: languageColors[repo.language]}} />
                                            {repo.language}
                                        </StyledStatSection>
                                        <StyledStatSection>
                                            <StarIcon />
                                            {repo.stargazers_count.toLocaleString()}
                                        </StyledStatSection>
                                        <StyledStatSection>
                                            <RepoForkedIcon />
                                            {repo.forks.toLocaleString()}
                                        </StyledStatSection>
                                        <div className="right">
                                            <span>{repo.size.toLocaleString()} KB</span>
                                        </div>
                                    </StyledStats>
                                </FunctionalCard>
                                </FlipMove>
                            </StyledRepo>
                        ))}
            </StyledGrid>
        </StyledWrapper>
    );
};

Repos.propTypes = {
    repoData: PropTypes.array.isRequired,
};

export default Repos;