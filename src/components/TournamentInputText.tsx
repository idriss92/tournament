import * as React from 'react';

const ENTER_KEY_CODE = 13;

export default class TournamentInputText extends React.Component<any,any>{
    
    constructor(props){
        super(props);
        this.onSave = this.onSave.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
    }

    onSave(){
        const { onEntrySave, value} = this.props;
        onEntrySave(value);
    }
    onChange(event){
        const { onEntryChange } = this.props;
        onEntryChange((event.target as any).value);
    }

    onKeydown(event){
        if(event.keyCode === ENTER_KEY_CODE){
            this.onSave();
        }
    }

    render(){
        const { className, placeholder, value } = this.props;
        return(
            <input 
            className={className}
            placeholder={placeholder}
            onChange={this.onChange}
            onKeyDown={this.onKeydown}
            value={value}
            autoFocus />
        );
    }

    static propTypes = {
        className : React.PropTypes.string,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        onEntrySave: React.PropTypes.func,
        onEntryChange: React.PropTypes.func
    };
}

