import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CustomChart } from '../../utils';
import {
    StyledWrapper,
    StyledChartContainer,
    StyledHeader,
    StyledDescription
} from './styles';



const Charts = ({langData, repoData}) => {
    // Create language chart
    const [langChartData, setLangChartData] = useState(null);
    const [langConfig, setLangConfig] = useState(null);
    const initLangChart = () => {
        const chartType = "pie";
        const customData = langData.map(lang => {
            return {
                name: lang.label,
                y: lang.value
            }
        })

        setLangChartData(customData);

        if(customData.length > 0) {
            const backgroundColor = langData.map(
                ({color}) => color
            );
            // const { chartType, labels, data, title, backgroundColor, borderColor, axes, legend, id } = config;
            const legend = true;
            const config = {chartType, customData, backgroundColor, legend };
            setLangConfig(config);
        }
    };

    // Create the most starred repos chart
    const [starChartData, setStarChartData] = useState(null);
    const [starConfig, setStarConfig] = useState(null);
    const initStarChart = () => {
        const LIMIT = 5;
        const sortProperty = "stargazers_count";
        const mostStarredRepos = repoData.filter(repo => !repo.fork)
                                         .sort((a, b) => b[sortProperty] - a[sortProperty])
                                         .slice(0, LIMIT)
        const labels = mostStarredRepos.map(repo => repo.name);
        const data = mostStarredRepos.map(repo => repo[sortProperty])
        const customData = mostStarredRepos.map(repo => {
            return {
                name: repo.name,
                data: [repo[sortProperty]]
            }
        })
        setStarChartData(customData);
        
        if(data.length > 0) {
            const chartType = "column";
            const xAxis = "category";
            const yAxis = "Total star"
            const legend = false;
            const config = { chartType, labels, customData, legend, xAxis, yAxis }
            setStarConfig(config);
        }
    }

    useEffect(() => {
        if(langData.length && repoData.length) {
            console.log(langData);
            console.log(repoData);
            initLangChart();
            initStarChart();
        }
    }, [])

    const langChartError = !(langChartData && langChartData.length > 0);

    return (
        <StyledWrapper>
            <StyledChartContainer>
                <StyledHeader>
                    <h2>Top Languages</h2>
                </StyledHeader>
                <div className="chart-data">
                    {langChartError && <StyledDescription>Nothing to see here!</StyledDescription>}
                    <CustomChart config={langConfig} />
                </div>
            </StyledChartContainer>
            <StyledChartContainer>
            <StyledHeader>
                    <h2>Most Starred</h2>
                </StyledHeader>
            <div className="chart-data">
                    {langChartError && <StyledDescription>Nothing to see here!</StyledDescription>}
                    <CustomChart config={langConfig} />
                </div>
            </StyledChartContainer>
            <StyledChartContainer>
            <StyledHeader>
                    <h2>Stars per Language</h2>
             </StyledHeader>
            <div className="chart-data">
                    {langChartError && <StyledDescription>Nothing to see here!</StyledDescription>}
                    <CustomChart config={langConfig} />
                </div>
            </StyledChartContainer>
        </StyledWrapper>
    )
}

export default Charts;

Charts.propTypes = {
    langData: PropTypes.array.isRequired,
    repoData: PropTypes.array.isRequired
}
