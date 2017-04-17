import * as React from 'react';

class Select extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        const { name, className, selectedOption, controlFunc, placeholder, options, selectClassName, divClassName } = this.props;
        return (
            <div className={divClassName}>
                <select
                    name={name}
                    value={selectedOption}
                    onChange={controlFunc}
                    className={selectClassName}>
                    <option value="">{placeholder}</option>
                    {options.map(opt => {
                        return (
                            <option
                                key={opt}
                                value={opt}>{opt}</option>
                        );
                    })}
                </select>
            </div>
        );
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        options: React.PropTypes.array.isRequired,
        selectedOption: React.PropTypes.string,
        controlFunc: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        selectClassName: React.PropTypes.string.isRequired,
        divClassName: React.PropTypes.string.isRequired,
    };
}

export default Select;