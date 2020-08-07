import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {
    StyledContainer,
    StyledSideBar,
    StyledContent,
    StyledSectionHeader,
} from './styles';
import GhPolyglot from 'gh-polyglot';
import { UserInfo, Charts, Repos, RateLimit, Head, Footer } from '../../components';

const UserPage = props => {
    const username = props.match.params.username;
    const [userData, setUserData] = useState(null);
    const [repoData, setRepoData] = useState(null);
    const [langData, setLangData] = useState(null);
    const [error, setError] = useState({ active: false, status: 200});
    const [rateLimit, setRateLimit] = useState(null);

    const getUserData = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            if(!response) {
                setError({ active: true, status: 404})
            }
            console.log(response.data);
            setUserData(response.data);
        } 
        catch (err) {
            setError({active: true, status: 400});
            console.error('Error:',err)
        }
        
    }

    const getRepoData = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
            if(!response) {
                setError({ active: true, status: 404});
            }
            setRepoData(response.data);
        }
        catch (err) {
            setError({ active: true, status: 400});
            console.error('Error:',err)
        }
        
    }

    const getLangData = () => {
        const langStat = new GhPolyglot(`${username}`);
        langStat.userStats((err, stats) => {
            if(err) {
                console.error('Error:',error);
                setError({ active: true, status: 400});
            }
            setLangData(stats);
        });
    }

    const getRateLimit = async () => {
        try {
            const response = await axios.get(`https://api.github.com/rate_limit`);
            if(!response) {
                setError({ active: true, status: 404});
            }
            console.log(response.data.rate);
            setRateLimit(response.data.rate);
            console.log(response);
        } catch (err) {
            setError({active: true, status: 400})
            console.error('Error:',err)
        }
        
    }

    useEffect(() => {
        async function getData() {
            await getLangData();
            await getRepoData();
            await getUserData();
            await getRateLimit();
        }
        getData();
    }, [])

    return (
        <StyledContainer>
                <StyledSideBar>
                {rateLimit && <RateLimit rateLimit={rateLimit} />}
                    {userData && <UserInfo userData={userData} />}
                    <Footer />
                </StyledSideBar>
                <Head title={`${username ? `${username} | GitHub Profile Visualizer` : 'GitHub Profile Visualizer'}`} />
                <StyledContent>
                    <StyledSectionHeader>Hello, {username}. Here are your GitHub profile statistics.</StyledSectionHeader>
                    {langData && repoData && <Charts langData={langData} repoData={repoData} username={username} />}
                    {repoData && <Repos repoData={repoData} />}
                </StyledContent>
        </StyledContainer>
    )
}

export default UserPage;