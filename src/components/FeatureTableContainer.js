import * as React from 'react';
import {SearchBar} from './SearchBar';
import {FeatureTable} from './FeatureTable';

export class FeatureTableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextInput={this.handleFilterTextInput}
                />
                <FeatureTable
                    features={this.props.features}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}