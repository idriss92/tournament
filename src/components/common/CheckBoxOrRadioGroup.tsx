import * as React from 'react';

class CheckBoxOrRadioGroup extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        const { title, type, setName, options, selectedOptions, controlFunc, inputClassName, labelClassName, divClassName } = this.props;
        return (
            <div>
                <label className={labelClassName}>{title}</label>
                <div className={divClassName}>
                    {options.map(opt => {
                        return (
                            <label key={opt} className={labelClassName}>
                                <input
                                    className={inputClassName}
                                    name={setName}
                                    onChange={controlFunc}
                                    value={opt}
                                    checked={selectedOptions.indexOf(opt) > -1}
                                    type={type} /> {opt}
                            </label>
                        );
                    })}
                </div>
            </div>
        );
    }

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
        setName: React.PropTypes.string.isRequired,
        options: React.PropTypes.array.isRequired,
        selectedOptions: React.PropTypes.array,
        controlFunc: React.PropTypes.func.isRequired,
        inputClassName: React.PropTypes.string.isRequired,
        labelClassName: React.PropTypes.string.isRequired,
        divClassName: React.PropTypes.string.isRequired,
    };
}

export default CheckBoxOrRadioGroup;