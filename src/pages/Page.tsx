import * as React from 'react';
import * as Helmet from 'react-helmet';

class Page extends React.Component<any,any>{
    constructor(props){
        super(props);
    }

    static propTypes = {
        title: React.PropTypes.string,
        link: React.PropTypes.array,
        meta: React.PropTypes.array,
        // children: React.PropTypes.element
    }
    render(){
        return(
            <div>
                <Helmet title = {this.props.title} link={this.props.link} meta={this.props.meta} />
                { this.props.children }
            </div>
        )
    }
}

export default Page;
