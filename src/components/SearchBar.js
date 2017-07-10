import * as React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    render() {
        return (
            <form>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="search"
                           placeholder="Search..."
                           value={this.props.filterText}
                           onChange={this.handleFilterTextInputChange}
                    />
                    <label className="mdl-textfield__label" htmlFor="search">Search</label>
                </div>
            </form>
        );
    }
}
