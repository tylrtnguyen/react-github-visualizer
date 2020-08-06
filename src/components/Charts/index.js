import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CustomChart from '../../utils/CustomChart';
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
        });

        setLangChartData(customData);

        if(customData.length > 0) {
            const backgroundColor = langData.map(
                ({color}) => color
            );
            // const { chartType, labels, data, title, backgroundColor, borderColor, axes, legend, id } = config;
            const borderColor = langData.map(lang => lang.color);
            const axes = false;
            const legend = true;
            const title = "Top Languages"
            const config = {chartType, customData, title, backgroundColor, borderColor, axes, legend };
            setLangConfig(config);
        }
    };

    useEffect(() => {
        if(langData.length && repoData.length) {
            console.log(langData);
            console.log(repoData);
            initLangChart();

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
