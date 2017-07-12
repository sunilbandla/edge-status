import * as React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    componentDidUpdate(){
        this.filterTextInput.focus();
    }

    render() {
        return (
            <form style={{display: this.props.display}}>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="filterTextInput"
                           value={this.props.filterText}
                           onChange={this.handleFilterTextInputChange}
                           ref={(input) => { this.filterTextInput = input; }}
                    />
                    <label className="mdl-textfield__label" htmlFor="filterTextInput">
                        Search on name, summary and category
                    </label>
                </div>
            </form>
        );
    }
}
