import React from 'react'
import './SummarySection.scss'

class Summary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            summary: '',
            tags: [],
            details: [],
            analysis: {
                ltm_return: {
                    label: 'LTM RETURN',
                    value: 47.5,
                    prefix: '+',
                    postfix: '%'
                },
                alpha_value: {
                    label: 'ALPHA',
                    value: 24.9,
                    prefix: '+',
                    postfix: '%'
                },
                vs_details: {
                    label: 'IWF Russel 1000 Growth ETF'
                }
            }
        }
    }
    renderTags(tags){
        //console.log(tags)
        return tags.map((tag) => {
            return(
                <button className="tags-element">{tag.label}</button>                        
            )
        })
    }
    renderDetails(detail){
        return(
            <>
            <div className="details-elements-wrap">
                <div className="details-elements-backtested-traded">
                    <span className="details-elements-backtested-traded-label">Backtested:</span>
                    <span className="details-elements-backtested-traded-value">{detail.backtested}</span>
                    <span className="details-elements-backtested-traded-postfix">Yr</span>
                    <span className="details-elements-backtested-traded-description"></span>
                </div>          
                <div className="details-elements-backtested-traded">
                    <span className="details-elements-backtested-traded-label">Traded:</span>
                    <span className="details-elements-backtested-traded-value">{detail.traded}</span>
                    <span className="details-elements-backtested-traded-postfix">Yr</span>
                    <span className="details-elements-backtested-traded-description"></span>
                </div>          
            </div>            
            <div className="details-elements-wrap">    
                <div className="details-elements-other">
                    <span className="details-elements-other-label"></span>
                    <span className="details-elements-other-value">{detail.bps_mgmt}</span>
                    <span className="details-elements-other-postfix"> bps </span>
                    <span className="details-elements-other-description">mgmt</span>
                </div>          
                <div className="details-elements-other">
                    <span className="details-elements-other-label"></span>
                    <span className="details-elements-other-value">{detail.alpha_share}</span>
                    <span className="details-elements-other-postfix">% </span>
                    <span className="details-elements-other-description"> Alpha Share</span>
                </div>     
            </div>     
            </>     
        )
    }
    renderAnalysisLTM(ltm){
        return(
            <>
                <div className="title">{ltm.label}</div>
                <div className="value">
                    <span className="prefix">{ltm.prefix}</span>
                    <span className="val">{ltm.value}</span>
                    <span className="postfix">{ltm.postfix}</span>
                </div>
            </>
        )
    }
    renderAnalysisALPHA(alpha){
        return(
            <>
                <div className="title">{alpha.label}</div>
                <div className="value">
                    <span className="prefix">{alpha.prefix}</span>
                    <span className="val">{alpha.value}</span>
                    <span className="postfix">{alpha.postfix}</span>
                </div>
            </>
        )
    }
    componentDidMount() {
        fetch('https://demo9636418.mockable.io/summary')
        .then(results => {
            return results.json();
        }).then(content => {
            
            let data = content.data
            console.log(data)
            this.setState({
                title: data.title,
                summary: data.content,
                tags: data.tags,
                details: data.details,
                analysis: data.analysis
            })

            this.props.sumToggle(true)
        })        
    }

    render(){
    
        const {title, summary, tags, details, analysis} = this.state
        
        let ltm = analysis.ltm_return
        let alpha = analysis.alpha_value
        return(
            <div className="summary sticky-element" id="sticky-element1">
                <div className="summary-header">
                    <div className="container">
                        <div className="section-top">
                            <div className="left">
                                <div className="title">
                                    <span>{title}</span>
                                </div>
                                <div className="sum">
                                    <span>{summary}</span>
                                </div>
                                <div className="details">
                                    <div className="tags">
                                        {this.renderTags(tags)}
                                    </div>
                                    <div className="details-elements">
                                        {this.renderDetails(details)}
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <div className="analysis">
                                        <div className="analysis-wrap">
                                            <div className="analysis-wrap-left">
                                                {this.renderAnalysisLTM(ltm)}
                                            </div>
                                            <div className="analysis-wrap-right">
                                                {this.renderAnalysisALPHA(alpha)}
                                            </div>
                                        </div>
                                        <div className="analysis-vs">
                                            <span className="title"><span className="title-vs">v/s: </span><span className="title-content"><b>IWF</b> Russell 1000 Growth ETF</span></span>
                                            <span className="link"></span>
                                        </div>
                                    </div>
                                    <div className="last-updated">
                                        <span className="label">Last updated:</span>
                                        <span className="time">2mins ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-bottom">
                            <div className="left flex-fill">
                                <div className="buttons">
                                    <button className="btn-outline-primary watchlist-btn mr-15"><span className="icon-round-time"></span>ADD TO WATCHLIST</button>
                                    <button className="btn-gradient-primary invest-btn"><span className="icon-round-dollar">$</span> INVEST NOW</button>
                                </div>
                            </div>
                            <div className="right">
                                <div className="buttons">
                                    <button className="buttons-factsheet">Fact Sheet</button>
                                    <button className="buttons-share">Share</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="sticky-summary-header">
                    <div className="container">
                        <div className="sh-wrapper">
                            <div className="left-column">
                                <h2 className="strategy-title">{title}</h2>
                                <div className="strategy-actions">
                                    <button className="watchlist-btn icon-btns"><span className="icon-round-time icon"></span></button>
                                    <button className="invest-btn icon-btns"><span className="icon-round-dollar icon-primary icon">$</span></button>
                                </div>
                            </div>
                            <div className="right-column">
                                <div className="analysis-wrapper">
                                    <div className="analysis-data ltm">
                                        <label className="label">LTM NET</label>
                                        <label className="value">
                                            <span>+</span>
                                            <span>47.5</span>
                                            <span>%</span>
                                        </label>
                                    </div>
                                    <div className="analysis-data alpha">
                                        <label className="label">ALPHA NET</label>
                                        <label className="value">
                                            <span>+</span>
                                            <span>24.9</span>
                                            <span>%</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summary