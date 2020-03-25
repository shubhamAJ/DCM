import React from 'react'
import './Performance.scss'
class Overview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            performance: {
                mtd_return: {
                  main: 3.2,
                  sub: 16.2,
                  benchmark: 29.2
                },
                percentage_of_positive_return_days: {
                    main: 58.7,
                    sub: 0.64,
                    benchmark: 51.2
                },
                sharpe_ratio: {
                    main: 2.62,
                    sub: 12.4,
                    benchmark: 2.71
                }
            },
            performance_daily_stats: {
                daily_hit_ratio: {
                    main: 58.5,
                    benchmark: 40.8
                },
                average_positive_daily_return: {
                    main: 0.8,
                    benchmark: 0.2
                },
                average_negative_daily_return: {
                    main: -0.8,
                    benchmark: -1.0
                }
            }
        }
    }

    componentDidMount(){
        this.props.navType(true)
    }

    render(){
        const {performance, performance_daily_stats} = this.state
        return (
            <div className="navigation-performance">
                <div className="navigation-performance-left">
                    <div className="navigation-performance-left-head">
                        <div className="navigation-performance-left-head-title">
                            <span>PERFORMANCE</span>
                        </div>    
                        <div className="navigation-performance-left-head-content">
                            <div className="navigation-performance-left-head-main">
                                <span>MTD RETURN</span>
                                <span>{performance.mtd_return.main}%</span>
                            </div>
                            <div className="navigation-performance-left-head-main">
                                <span>Annualised return</span>
                                <span>{performance.mtd_return.sub}%</span>
                            </div>
                            <div className="navigation-performance-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{performance.mtd_return.benchmark}%</span>
                            </div>
                        </div>
                        <div className="navigation-performance-left-head-content">
                            <div className="navigation-performance-left-head-main">
                                <span>%-age of positive return days</span>
                                <span>{performance.percentage_of_positive_return_days.main}%</span>
                            </div>
                            <div className="navigation-performance-left-head-main">
                                <span>Average daily return</span>
                                <span>{performance.percentage_of_positive_return_days.sub}%</span>
                            </div>
                            <div className="navigation-performance-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{performance.percentage_of_positive_return_days.benchmark}%</span>
                            </div>
                        </div>
                        <div className="navigation-performance-left-head-content">
                            <div className="navigation-performance-left-head-main">
                                <span>Sharpe ratio</span>
                                <span>{performance.sharpe_ratio.main}</span>
                            </div>
                            <div className="navigation-performance-left-head-main">
                                <span>Average daily return</span>
                                <span>{performance.sharpe_ratio.sub}%</span>
                            </div>
                            <div className="navigation-performance-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{performance.sharpe_ratio.benchmark}</span>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-performance-left-head">
                        <div className="navigation-performance-left-head-title">
                            <span>PERFORMANCE DAILY STATS</span>
                        </div>    
                        <div className="navigation-performance-left-head-content">
                            <div className="navigation-performance-left-head-main">
                                <span>Daily hit ratio</span>
                                <span>{performance_daily_stats.daily_hit_ratio.main}%</span>
                            </div>
                            <div className="navigation-performance-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{performance_daily_stats.daily_hit_ratio.benchmark}%</span>
                            </div>
                        </div>
                        <div className="navigation-performance-left-head-content">
                            <div className="navigation-performance-left-head-main">
                                <span>Average positive daily return</span>
                                <span>{performance_daily_stats.average_positive_daily_return.main}%</span>
                            </div>
                            <div className="navigation-performance-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{performance_daily_stats.average_positive_daily_return.benchmark}%</span>
                            </div>
                        </div>
                        <div className="navigation-performance-left-head-content">
                            <div className="navigation-performance-left-head-main">
                                <span>Average negative daily return</span>
                                <span>{performance_daily_stats.average_negative_daily_return.main}%</span>
                            </div>
                            <div className="navigation-performance-left-head-benchmark">
                                <span>Benchmark</span>
                                <span>{performance_daily_stats.average_negative_daily_return.benchmark}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation-performance-right">
                    
                </div>
            </div>
        )
    }
}

export default Overview
    