import * as React from 'react'

class LabelFor extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }
    render() {
        const { htmlFor, label, className } = this.props;
        return (
            <label
                htmlFor={htmlFor}
                className={className}>
                {label}
            </label>
        )
    }

    static propTypes = {
        htmlFor: React.PropTypes.string.isRequired,
        label: React.PropTypes.string,
        className: React.PropTypes.string
    }
}

export default LabelFor