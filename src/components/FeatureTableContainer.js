import * as React from 'react';
import {SearchBar} from './SearchBar';
import {FeatureTable} from './FeatureTable';
import './featureTableContainer.css';

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
        let displayValue = (this.props.loaded && this.props.features.length > 0) ? "block" : "none";
        return (
            <div className="featureTableContainer">
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextInput={this.handleFilterTextInput}
                    display={displayValue}
                />
                <FeatureTable
                    features={this.props.features}
                    filterText={this.state.filterText}
                />
                <p style={{display: this.props.loaded && this.props.features.length === 0 ? "block" : "none"}}>
                    Sorry, couldn't load features list. Please try again later.
                </p>
            </div>
        );
    }
}