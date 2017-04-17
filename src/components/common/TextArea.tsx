import * as React from 'react';

class TextArea extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        const { title, rows, name, content, resize, placeholder, controlFunc, textAreaClassName, labelClassName, divClassName } = this.props;
        return (
            <div className={divClassName}>
                <label className={labelClassName}>{title}</label>
                <textarea
                    className={textAreaClassName}
                    style={resize ? null : { resize: 'none' }}
                    name={name}
                    rows={rows}
                    value={content}
                    onChange={controlFunc}
                    placeholder={placeholder} />
            </div>
        );
    }

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        rows: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        content: React.PropTypes.string.isRequired,
        resize: React.PropTypes.bool,
        placeholder: React.PropTypes.string,
        controlFunc: React.PropTypes.func.isRequired,
        textAreaClassName: React.PropTypes.string.isRequired,
        labelClassName: React.PropTypes.string.isRequired,
        divClassName: React.PropTypes.string.isRequired,
    };
}

export default TextArea;