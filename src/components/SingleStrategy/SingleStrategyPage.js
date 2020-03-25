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
        if(!load){
            this.setState({
                typeLoad: false,
                loaderHide: ''
            })
        }
        this.timeout = setTimeout(() => {
            const {summaryLoad} = this.state
            this.setState({
                typeLoad: true,
                loaderHide: (summaryLoad) ? 'hide' : ''
            })
        }, 2000);
    }
    toggleSummaryLoad(load){
        this.timeout = setTimeout(() => {
            const {typeLoad} = this.state
            this.setState({
                summaryLoad: true,
                loaderHide: (typeLoad) ? 'hide' : ''
            })
        }, 2000);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll() {
        console.log('scrolling => 2020');

        let header = document.getElementById("sticky-element-offset");
        let elements1 = document.getElementById("sticky-element1");
        let sticky = header.offsetTop;
        let height = 0;

        if (window.pageYOffset > sticky) {           
            header.classList.add("sticky");
            elements1.classList.add("sticky");
            console.log()
           height =  (header.offsetHeight);
        } else {
            header.classList.remove("sticky");
            elements1.classList.remove("sticky");
        }
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