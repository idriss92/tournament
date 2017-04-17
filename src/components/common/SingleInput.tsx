import * as React from 'react';

class SingleInput extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        const { onEntryChange } = this.props;
        onEntryChange((event.target as any).value);
    }

    render() {
        // const { name, className, onChange, placeholder, value, label } = this.props;
        const {title, name, inputType, content, controlFunc, placeholder, inputClassName, labelClassName, divClassName} = this.props;
        return (
<div className={divClassName}>
    <label className={labelClassName}>{title}</label>
            <input
                type={inputType}
                name={name}
                className={inputClassName}
                placeholder={placeholder}
                value={content}
                onChange={controlFunc} />
                </div>
        );
    }

    static propTypes = {
        inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
        title: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        controlFunc: React.PropTypes.func.isRequired,
        content: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
        ]).isRequired,
        // onEntryChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        // label: React.PropTypes.string,
        inputClassName: React.PropTypes.string,
        labelClassName: React.PropTypes.string,
        divClassName: React.PropTypes.string
    };
}

export default SingleInput;