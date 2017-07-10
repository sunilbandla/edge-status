import * as React from 'react';

export class FeatureCategoryRow extends React.Component {
    render() {
        return (
            <li className="mdl-chip featureCategory">
                <div className="mdl-chip__text">
                    {this.props.category}
                </div>
            </li>
        );
    }
}