import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CustomChart, languageColors } from '../../utils';
import {
    StyledWrapper,
    StyledChartContainer,
    StyledHeader,
    StyledDescription,
    StyledContainer
} from './styles';



const Charts = ({langData, repoData, username}) => {

    // Create language chart
    const [langChartData, setLangChartData] = useState(null);
    const initLangChart = () => {
        const context = document.getElementById('langChart')
        const labels = langData.map(lang => lang.label);
        const data = langData.map(lang => lang.value);
        
        setLangChartData(data);

        if(data.length > 0) {
            const backgroundColor = langData.map(
                ({color}) => color
            );
            const borderColor = langData.map(lang => lang.color)
            const chartType = "pie";
            const axes = false;
            const legend = true;
            const config = {context, chartType, labels, data, backgroundColor, borderColor, legend, axes};
            CustomChart(config)
        }
    };

    // Create the most starred repos chart
    const [starChartData, setStarChartData] = useState(null);
    const initStarChart = () => {
        const context = document.getElementById("starChart");
        const LIMIT = 5;
        const sortProperty = "stargazers_count";
        const mostStarredRepos = repoData.filter(repo => !repo.fork)
                                         .sort((a, b) => b[sortProperty] - a[sortProperty])
                                         .slice(0, LIMIT)
        const labels = mostStarredRepos.map(repo => repo.name);
        const data = mostStarredRepos.map(repo => repo[sortProperty])
        setStarChartData(data);
        
        if(data.length > 0) {
            const chartType = "bar";
            const axes = true;
            const legend = false;
            const backgroundColor = langData.map(
                ({color}) => color
            );
            const borderColor = langData.map(lang => lang.color)
            const config = { context, chartType, labels, data, borderColor, backgroundColor, legend, axes }
            CustomChart(config)
        }
    }

    // Create Stars per language chart
    const [doughnutChartData, setDoughnutChartData] = useState(null);
    const initDoughnutChart = () => {
        const context = document.getElementById("doughnutChart");
        const filteredRepos = repoData.filter(repo => !repo.fork && repo.stargazers_count > 0);
        const uniqueLangs = new Set(filteredRepos.map(repo => repo.language));
        const labels = Array.from(uniqueLangs.values()).map(label => label);
        const data = labels.map(lang => {
            const repos = filteredRepos.filter(repo => repo.language === lang);
            const starsArr = repos.map(repo => repo.stargazers_count);
            const starSum = starsArr.reduce((acc, curr) => acc + curr, 0);
            return starSum;
        });

        setDoughnutChartData(data);

        if(data.length > 0) {
            const chartType = "doughnut";
            const axes = false;
            const legend = true;
            const borderColor = labels.map(label => languageColors[label]);
            const backgroundColor = borderColor.map(color => `${color}B3`);
            const config = { context, chartType, labels, data, backgroundColor, borderColor, axes, legend }
            CustomChart(config);
        }
    }

    useEffect(() => {
        if(langData.length && repoData.length) {
            initLangChart();
            initStarChart();
            initDoughnutChart();
        }
        // eslint-disable-next-line
    }, [])

    const chartSize = 300;
    const langChartError = !(langChartData && langChartData.length > 0);
    const starChartError = !(starChartData && starChartData.length > 0);
    const doughnutChartError = !(doughnutChartData && doughnutChartData.length > 0);

    return (
        <StyledContainer>
            <StyledWrapper>
            <StyledChartContainer>
                <StyledHeader>
                    <h2>Top Languages</h2>
                </StyledHeader>
                <div className="chart-data">
                    {langChartError && <StyledDescription>Nothing to see here!</StyledDescription>}
                    <canvas id="langChart" width={chartSize} height={chartSize} />
                </div>
            </StyledChartContainer>
            <StyledChartContainer>
            <StyledHeader>
                    <h2>Most Starred</h2>
                </StyledHeader>
            <div className="chart-data">
                    {starChartError && <StyledDescription>Nothing about language data to show!</StyledDescription>}
                    <canvas id="starChart" width={chartSize} height={chartSize} />
                </div>
            </StyledChartContainer>
            <StyledChartContainer>
            <StyledHeader>
                    <h2>Stars per Language</h2>
            </StyledHeader>
            <div className="chart-data">
                    {doughnutChartError && <StyledDescription>Nothing about repository data to show!</StyledDescription>}
                    <canvas id="doughnutChart" width={chartSize} height={chartSize} />
                </div>
            </StyledChartContainer>
        </StyledWrapper>
        </StyledContainer>
    )
}

export default Charts;

Charts.propTypes = {
    langData: PropTypes.array.isRequired,
    repoData: PropTypes.array.isRequired
}
