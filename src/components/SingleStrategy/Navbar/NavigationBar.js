import React from 'react'
//import {HashRouter, BrowserRouter as Router, Route, Link} from "react-router-dom"
import Overview from '../NavbarComponents/OverviewComponent/Overview'
import Performance from '../NavbarComponents/PerformanceComponent/Performance'
import './NavigationBar.scss'

class NavigationBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loader: false,
            type: 'overview'
        }
        this.toggleTypeLoadNav = this.toggleTypeLoadNav.bind(this);
    }
    
    handleClick(e){
        console.log(e.target.id)
        this.setState({
            type: e.target.id
        })
        this.props.navToggle(false)
    }

    toggleTypeLoadNav(){
        this.props.navToggle(true)
    }
    render(){
        const {type} = this.state
        return (
            <div className="navigation">
                <div className="navigation-header">            
                    <ul className="tab-navigation">
                        <li className={type == 'overview' ? 'active' : ''}>
                            <a href="javascript:;" className="nav" onClick={(e) => this.handleClick(e)} id="overview">
                                <div className="tab-title">Overview</div>
                            </a>
                        </li>
                        <li className={type == 'performance' ? 'active' : ''}>
                            <a href="javascript:;" className="nav" onClick={(e) => this.handleClick(e)} id="performance">
                                <div>
                                    <div className="tab-title">Performance</div>
                                    <div className="tab-subtitle">Annualised</div>
                                    <div className="tab-value"><span>16.2</span><span> %</span><span></span></div>
                                </div>
                            </a>
                        </li>
                        <li className={type == 'risk' ? 'active' : ''}>
                            <a href="javascript:;" className="nav" onClick={(e) => this.handleClick(e)} id="risk">
                                <div>
                                    <div className="tab-title">Risk</div>
                                    <div className="tab-subtitle">Beta</div>
                                    <div className="tab-value"><span>0.09</span><span></span><span></span></div>
                                </div>
                            </a>
                        </li>
                        <li className={type == 'drivers' ? 'active' : ''}>
                            <a href="javascript:;" className="nav" onClick={(e) => this.handleClick(e)} id="drivers">
                                <div>
                                    <div className="tab-title">Drivers</div>
                                    <div className="tab-subtitle">Sector</div>
                                    <div className="tab-value"><span>12.1</span><span>%</span><span> Technology</span></div>
                                </div>
                            </a>
                        </li>
                        <li className={type == 'process' ? 'active' : ''}>
                            <a href="javascript:;" className="nav" onClick={(e) => this.handleClick(e)} id="process">
                                <div>
                                    <div className="tab-title">Process</div>
                                    <div className="tab-subtitle">Backtested</div>
                                    <div className="tab-value"><span>20</span><span> Years</span><span></span></div>
                                </div>
                            </a>
                        </li>
                        <li className={type == 'portfolio' ? 'active' : ''}>
                            <a href="javascript:;" className="nav" onClick={(e) => this.handleClick(e)} id="portfolio">
                                <div>
                                    <div className="tab-title">Portfolio</div>
                                    <div className="tab-subtitle">Holdings</div>
                                    <div className="tab-value"><span>96</span><span></span><span></span></div>
                                </div>
                            </a>
                        </li>
                        <li className={type == 'research' ? 'active' : ''}>
                            <a href="javascript:;" className="nav" onClick={(e) => this.handleClick(e)} id="research">
                                <div>
                                    <div className="tab-title">Research</div>
                                    <div className="tab-subtitle">Documents</div>
                                    <div className="tab-value"><span>3</span><span></span><span></span></div>
                                </div>
                            </a>
                        </li>
                        <li className={type == 'operations' ? 'active' : ''}>
                            <a href="javascript:;" className="nav" onClick={(e) => this.handleClick(e)} id="operations">
                                <div>
                                    <div className="tab-title">Operations</div>
                                    <div className="tab-subtitle">Interactive Broker</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navigation-content">
                    {type == 'overview' &&
                        <Overview navType={this.toggleTypeLoadNav}/>
                    }
                    {type == 'performance' &&
                        <Performance navType={this.toggleTypeLoadNav}/>
                    }
                </div>
            </div>
        )
    }
}

export default NavigationBar