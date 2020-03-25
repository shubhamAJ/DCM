import React from 'react'
import Navigation from './Navbar/NavigationBar'
import Summary from './Summary/SummarySection'
import './SingleStrategyPage.scss'
class SingleStrategy extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            summaryLoad: false,
            typeLoad: false,
            loaderHide: '',
        }
        this.toggleTypeLoad = this.toggleTypeLoad.bind(this);
        this.toggleSummaryLoad = this.toggleSummaryLoad.bind(this);
    }
    toggleTypeLoad(load){
        if(load){
            this.setState({
                loaderHide: ''
            })
        } else{
            this.setState({
                loaderHide: ''
            })
        }
        
    }
    toggleSummaryLoad(load){
        this.setState({
            loaderHide: ''
        })
    }
    componentDidMount(){
        //window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll(event){
        //console.log(window.scrollY)
    }
    render(){
        const {loaderHide} = this.state

        return(
            <>
            <div className="main">
                <div className={"loader-wrapper "+loaderHide}>
                    <div className="lds-dual-ring"></div>
                </div>
                <Summary sumToggle={this.toggleSummaryLoad} />
                <Navigation navToggle={this.toggleTypeLoad}/>
            </div>
            </>
        )
    }
}

export default SingleStrategy