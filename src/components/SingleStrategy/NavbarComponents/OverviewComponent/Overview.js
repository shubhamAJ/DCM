import React from 'react'

import Graph from 'react-plotly.js';
import './Overview.scss'
class Overview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            performance: {
                ltm_return: {
                  main: 47.5,
                  benchmark: 22.6
                },
                percentage_of_positive_return_days: {
                    main: 58.7,
                    benchmark: 51.2
                },
                sharpe_ratio: {
                    main: 2.62,
                    benchmark: 2.71
                }
              },
              risk: {
                market_beta: {
                  main: 0.06,
                  benchmark: 0.77
                },
                max_drawdown: {
                    main: -14.9,
                    benchmark: -18.51
                },
                annualized_volatility: {
                    main: 17,
                    benchmark: "NA"
                }
              }
        }
    }

    componentDidMount(){
        fetch('https://demo9636418.mockable.io/overview')
        .then(results => {
            return results.json();
        }).then(content => {
            
            let data = content.data
            // this.setState({
            //     performance: data.performance,
            //     risk: data.risk
            // })

            this.props.navType(true)
        })
    }
    render(){
        const {performance, risk} = this.state
        return (
            <div className="navigation-overview">
                <div className="navigation-overview-left">
                    <div className="navigation-overview-left-head">
                        <div className="navigation-overview-left-head-title">
                            <span>PERFORMANCE</span>
                        </div>    
                        <div className="navigation-overview-left-head-content">
                            <div className="navigation-overview-left-head-main">
                                <span>LTM RETURN</span>
                                <span>{performance.ltm_return.main}%</span>
                            </div>
                            <div className="navigation-overview-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{performance.ltm_return.benchmark}%</span>
                            </div>
                        </div>
                        <div className="navigation-overview-left-head-content">
                            <div className="navigation-overview-left-head-main">
                                <span>%age of positive return days</span>
                                <span>{performance.percentage_of_positive_return_days.main}%</span>
                            </div>
                            <div className="navigation-overview-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{performance.percentage_of_positive_return_days.benchmark}%</span>
                            </div>
                        </div>
                        <div className="navigation-overview-left-head-content">
                            <div className="navigation-overview-left-head-main">
                                <span>Sharpe ratio</span>
                                <span>{performance.sharpe_ratio.main}</span>
                            </div>
                            <div className="navigation-overview-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{performance.sharpe_ratio.benchmark}</span>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-overview-left-head">
                        <div className="navigation-overview-left-head-title">
                            <span>RISK</span>
                        </div>    
                        <div className="navigation-overview-left-head-content">
                            <div className="navigation-overview-left-head-main">
                                <span>Market Beta</span>
                                <span>{risk.market_beta.main}%</span>
                            </div>
                            <div className="navigation-overview-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{risk.market_beta.benchmark}%</span>
                            </div>
                        </div>
                        <div className="navigation-overview-left-head-content">
                            <div className="navigation-overview-left-head-main">
                                <span>Max Drawdown</span>
                                <span>{risk.max_drawdown.main}%</span>
                            </div>
                            <div className="navigation-overview-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{risk.max_drawdown.benchmark}%</span>
                            </div>
                        </div>
                        <div className="navigation-overview-left-head-content">
                            <div className="navigation-overview-left-head-main">
                                <span>Annualized Volatility</span>
                                <span>{risk.annualized_volatility.main}</span>
                            </div>
                            <div className="navigation-overview-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{risk.annualized_volatility.benchmark}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation-overview-middle">
                    <div className="navigation-overview-middle-graphs">
                        <div className="navigation-overview-middle-title">
                            <span>Portfolio Performance vs. Benchmark</span>
                        </div>
                        <div className="navigation-overview-middle-graph">
                            <Graph 
                                data={[
                                    {
                                        x: ['2015-02-17', '2015-03-17', '2015-04-17', '2015-05-17'],
                                        y: [.12, 0.108, 0.128, 0.141],
                                        type: 'scatter',
                                        mode: 'lines',
                                        marker: {color: 'green'},
                                        name: 'Strategy',
                                        fill: 'tonexty',
                                        fillcolor: '#b4f0e3',
                                    },
                                    {
                                        x: ['2015-02-17', '2015-03-17', '2015-04-17', '2015-05-17'],
                                        y: [-0.22, -0.108, -0.128, -0.141],
                                        type: 'scatter',
                                        mode: 'lines',
                                        marker: {color: 'grey'},
                                        name: 'Benchmark',
                                        fill: 'tozeroy',
                                        fillcolor: '#b4f0e3',
                                    },
                                    ]}
                            
                                    layout={
                                    {
                                        //autosize: true,
                                        xaxis: {
                                        autorange: true,
                                        fixedrange: true,
                                        rangeselector: {
                                            x: -0.025,
                                            //y: 1,
                                            buttons: [
                                            {
                                                count: 1,
                                                label: '1D',
                                                step: 'day',
                                                stepmode: 'backward'
                                                },
                                                {
                                                count: 5,
                                                label: '5D',
                                                step: 'day',
                                                stepmode: 'backward'
                                                },
                                                {
                                                count: 1,
                                                label: '1M',
                                                step: 'month',
                                                stepmode: 'backward'
                                                },
                                                {
                                                count: 3,
                                                label: '3M',
                                                step: 'month',
                                                stepmode: 'backward'
                                                },
                                                {
                                                count: 6,
                                                label: '6M',
                                                step: 'month',
                                                stepmode: 'backward'
                                                },
                                                {
                                                count: 1,
                                                label: 'YTD',
                                                step: 'year',
                                                stepmode: 'todate'
                                                },
                                                {
                                                count: 1,
                                                label: '1Y',
                                                step: 'year',
                                                stepmode: 'backward'
                                                },
                                                {
                                                count: 2,
                                                label: '2Y',
                                                step: 'year',
                                                stepmode: 'backward'
                                                },
                                                {
                                                count: 3,
                                                label: '3Y',
                                                step: 'year',
                                                stepmode: 'backward'
                                            },
                                            ]
                                        },
                                        type: 'date'
                                        },
                                        yaxis: {
                                        autorange: true,
                                        tickformat: ',.0%',
                                        type: 'linear',
                                        fixedrange: true
                                        },
                                        legend:{
                                            orientation: 'h',
                                            y:-0.2, 
                                            x:0  
                                        },
                                        margin: { t: 40, l: 40, r: 40, b: 40 }
                                    }
                                }
                                useResizeHandler = { true }
                                style = { {width: "100%", height: "100%"}}
                                config= {{displayModeBar: false}}
                            />
                        </div>
                    </div>
                    <div className="navigation-overview-middle-graphs">
                        <div className="navigation-overview-middle-title">
                            <span>Drawdown</span>
                        </div>
                        <div className="navigation-overview-middle-graph">
                            <Graph 
                                data={[
                                    {
                                        x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
                                        y: [0, -10, -5, -15, -10, -20, -5],
                                        type: 'scatter',
                                        mode: 'lines',
                                        marker: {color: 'green'},
                                        name: 'Strategy',
                                        fill: 'tonexty',
                                        fillcolor: '#f0e4f2',
                                    },
                                    {
                                        x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
                                        y: [0, -13, -8, -18, -13, -23, -8],
                                        type: 'scatter',
                                        mode: 'lines',
                                        marker: {color: 'grey'},
                                        name: 'Benchmark',
                                        fill: 'tonexty',
                                        fillcolor: '#e6c7eb',
                                    }
                                ]}
                            
                                layout={
                                    { 
                                        //autosize: true,
                                        xaxis: {
                                            side: 'top',
                                            type: 'date',
                                            tickformat: '%Y'
                                        },
                                        legend:{
                                            orientation: 'h',
                                            y:-0.2, 
                                            x:0  
                                        },
                                        margin: { t: 40, l: 40, r: 40, b: 40 }
                                    }
                                }
                                useResizeHandler = { true }
                                style = { {width: "100%", height: "100%"}}
                                config= {{displayModeBar: false}}
                            />
                        </div>
                    </div>

                    <div className="navigation-overview-middle-graphs">
                        <div className="navigation-overview-middle-title">
                            <span>Strategy performance during all benchmark drawdown months</span>
                        </div>
                        <div className="navigation-overview-middle-graph">
                            <Graph 
                                data={[
                                    {
                                        y: [-5, 1, 1, 2, 3, 5, 8, 13, 21],
                                        boxpoints: 'all',
                                        jitter: 0.3,
                                        pointpos: -1.8,
                                        type: 'box',
                                        name: 'Benchmark (SPY)(-1.75%)',
                                        marker: {
                                            color: 'rgb(219, 66, 90)'
                                        }
                                    },
                                    {
                                        y: [5, 6, 9, 9, 10, 11, 12, 13, 15, 17, 19, 21],
                                        boxpoints: 'all',
                                        jitter: 0.3,
                                        pointpos: -1.8,
                                        type: 'box',
                                        name: 'Strategy (-0.51%)',
                                        marker: {
                                            color: 'rgb(92, 181, 107)'
                                        }
                                    }
                                ]}
                            
                                layout={
                                    { 
                                        //autosize: true,
                                        yaxis: {
                                            zeroline: false,
                                            title: {
                                                text: '% Return',
                                                font: {
                                                    family: 'Nunito Sans',
                                                    size: 14,
                                                    color: '#7f7f7f'
                                                }
                                            }
                                        },
                                        showlegend: false,
                                        // legend:{
                                        //     orientation: 'h',
                                        //     y:-0.2, 
                                        //     x:0  
                                        // },
                                        margin: { t: 40, l: 40, r: 40, b: 40 }
                                    }
                                }
                                useResizeHandler = { true }
                                style = { {width: "100%", height: "100%"}}
                                config= {{displayModeBar: false}}
                            />
                        </div>
                    </div>

                    <div className="navigation-overview-middle-graphs">
                        <div className="navigation-overview-middle-title">
                            <span>Monthy (21B) Returns During Market drawdown periods vs following months performance</span>
                        </div>
                        <div className="navigation-overview-middle-graph">
                            <Graph 
                                data={[
                                    {
                                        y: [0.1, 0.2, 0.3, 0.4, 0.6, 1.0, 0.4, 0.5, 0.6, 0.2, 0.5, 0.7, 0.6, 0.8, 1, 0.4, 0.6, 0.8],
                                        x: ['Sept 2015','Sept 2015','Sept 2015',
                                        'Jan 2016', 'Jan 2016','Jan 2016',
                                        'Feb 2016', 'Feb 2016','Feb 2016',
                                        'Apr 2018', 'Apr 2018','Apr 2018',
                                        'Dec 2018', 'Dec 2018','Dec 2018'],
                                        boxpoints: 'all',
                                        jitter: 0.3,
                                        pointpos: -1.8,
                                        type: 'box',
                                        name: 'Benchmark',
                                        marker: {
                                            color: 'rgb(35, 100, 204)'
                                        }
                                    },
                                    {
                                        y: [0.5, 0.6, 0.7, 0.3, 0.4, 0.6, 0.0, 0.2, 0.5, 0.7, 0.8, 0.9, 0.5, 0.6, 0.8, 0.7, 0.8, 0.9],
                                        x: ['Sept 2015','Sept 2015','Sept 2015',
                                        'Jan 2016', 'Jan 2016','Jan 2016',
                                        'Feb 2016', 'Feb 2016','Feb 2016',
                                        'Apr 2018', 'Apr 2018','Apr 2018',
                                        'Dec 2018', 'Dec 2018','Dec 2018'],
                                        boxpoints: 'all',
                                        jitter: 0.3,
                                        pointpos: -1.8,
                                        type: 'box',
                                        name: 'Strategy',
                                        marker: {
                                            color: 'rgb(219, 66, 90)'
                                        }
                                    }
                                ]}
                            
                                layout={
                                    { 
                                        //autosize: true,
                                        xaxis:{
                                            side: 'top'
                                        },
                                        yaxis: {
                                            zeroline: false,
                                            title: {
                                                text: '% Return',
                                                font: {
                                                    family: 'Nunito Sans',
                                                    size: 14,
                                                    color: '#7f7f7f'
                                                }
                                            }
                                        },
                                        legend:{
                                            orientation: 'h',
                                            y:-0.2, 
                                            x:0  
                                        },
                                        margin: { t: 40, l: 40, r: 40, b: 40 },
                                        boxmode: 'group'
                                    }
                                }
                                useResizeHandler = { true }
                                style = { {width: "100%", height: "100%"}}
                                config= {{displayModeBar: false}}
                            />
                        </div>
                    </div>

                    <div className="navigation-overview-middle-graphs">
                        <div className="navigation-overview-middle-title">
                            <span>Strategy performance during worst benchmark period</span>
                        </div>
                        <div className="navigation-overview-middle-graph">
                            <Graph 
                                data={[
                                    {
                                        y: [0.1, 0.2, 0.3, 0.4, 0.6, 1.0, 0.4, 0.5, 0.6, 0.2, 0.5, 0.7, 0.6, 0.8, 1, 0.4, 0.6, 0.8],
                                        x: ['Dec 2018', 'Dec 2018','Dec 2018',
                                        'Jan 2016', 'Jan 2016','Jan 2016',
                                        'Jan 2016', 'Jan 2016','Jan 2016',
                                        'Feb 2016', 'Feb 2016','Feb 2016',
                                        'Sept 2015','Sept 2015','Sept 2015',
                                        ],
                                        boxpoints: 'all',
                                        jitter: 0.3,
                                        pointpos: -1.8,
                                        type: 'box',
                                        name: 'Strategy',
                                        marker: {
                                            color: 'rgb(35, 100, 204)'
                                        }
                                    },
                                    {
                                        y: [0.5, 0.6, 0.7, 0.3, 0.4, 0.6, 0.0, 0.2, 0.5, 0.7, 0.8, 0.9, 0.5, 0.6, 0.8, 0.7, 0.8, 0.9],
                                        x: ['Dec 2018', 'Dec 2018','Dec 2018',
                                        'Jan 2016', 'Jan 2016','Jan 2016',
                                        'Jan 2016', 'Jan 2016','Jan 2016',
                                        'Feb 2016', 'Feb 2016','Feb 2016',
                                        'Sept 2015','Sept 2015','Sept 2015',
                                        ],
                                        boxpoints: 'all',
                                        jitter: 0.3,
                                        pointpos: -1.8,
                                        type: 'box',
                                        name: 'SPY',
                                        marker: {
                                            color: 'rgb(219, 66, 90)'
                                        }
                                    }
                                ]}
                            
                                layout={
                                    { 
                                        //autosize: true,
                                        xaxis:{
                                            side: 'top'
                                        },
                                        yaxis: {
                                            zeroline: false,
                                            title: {
                                                text: '% Return',
                                                font: {
                                                    family: 'Nunito Sans',
                                                    size: 14,
                                                    color: '#7f7f7f'
                                                }
                                            }
                                        },
                                        legend:{
                                            orientation: 'h',
                                            y:-0.2, 
                                            x:0  
                                        },
                                        margin: { t: 40, l: 40, r: 40, b: 40 },
                                        boxmode: 'group'
                                    }
                                }
                                useResizeHandler = { true }
                                style = { {width: "100%", height: "100%"}}
                                config= {{displayModeBar: false}}
                            />
                        </div>
                    </div>

                    <div className="navigation-overview-middle-graphs">
                        <div className="navigation-overview-middle-title">
                            <span>Largest drawdown month vs following month performance</span>
                        </div>
                        <div className="navigation-overview-middle-graph">
                            <Graph 
                                data={[
                                    {
                                        y: [-5, 1, 1, 2, 3, 5, 8, 13, 21],
                                        boxpoints: 'all',
                                        jitter: 0.3,
                                        pointpos: -1.8,
                                        type: 'box',
                                        name: 'December 2018(-1.39%)',
                                        marker: {
                                            color: 'rgb(219, 66, 90)'
                                        }
                                    },
                                    {
                                        y: [5, 6, 9, 9, 10, 11, 12, 13, 15, 17, 19, 21],
                                        boxpoints: 'all',
                                        jitter: 0.3,
                                        pointpos: -1.8,
                                        type: 'box',
                                        name: 'January 2019 (-0.94%)',
                                        marker: {
                                            color: 'rgb(92, 181, 107)'
                                        }
                                    }
                                ]}
                            
                                layout={
                                    { 
                                        //autosize: true,
                                        yaxis: {
                                            zeroline: false,
                                            title: {
                                                text: '% Return',
                                                font: {
                                                    family: 'Nunito Sans',
                                                    size: 14,
                                                    color: '#7f7f7f'
                                                }
                                            }
                                        },
                                        showlegend: false,
                                        // legend:{
                                        //     orientation: 'h',
                                        //     y:-0.2, 
                                        //     x:0  
                                        // },
                                        margin: { t: 40, l: 40, r: 40, b: 40 }
                                    }
                                }
                                useResizeHandler = { true }
                                style = { {width: "100%", height: "100%"}}
                                config= {{displayModeBar: false}}
                            />
                        </div>
                    </div>

                </div>
                <div className="navigation-overview-right">
                    <div className="navigation-overview-right-title">
                        <span>Strategy Bold Claim Will Come Here</span>
                    </div>
                    <div className="navigation-overview-right-content">
                        <ul>
                            <li>
                                <span>Seeks to outperform the investment results of the Russell 1000® Growth Index, which measures the performance of large- and mid-capitalization growth sectors of the U.S. equity market</span>
                            </li>
                            <li>
                                <span>Weekly rebalancing of highest-conviction 1-month forecasts made by an ensemble of tree-based machine learning algorithms trained on price and company performance data</span>
                            </li>
                            <li>
                                <span>Diversified liquid portfolio of 50 names with at least 90% of its assets in securities of the underlying index. </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview
    