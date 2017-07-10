import * as React from 'react';
import {FeatureCategoryRow} from './FeatureCategoryRow';
import {FeatureRow} from './FeatureRow';

export class FeatureTable extends React.Component {
    render() {
        let rows = [];
        let lastCategory = null;
        this.props.features.forEach((feature) => {
            if (feature.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            if (feature.category !== lastCategory) {
                rows.push(<FeatureCategoryRow category={feature.category} key={feature.category} />);
            }
            rows.push(<FeatureRow feature={feature} key={feature.name} />);
            lastCategory = feature.category;
        });
        return (
            <ul className='mdl-list'>{rows}</ul>
        );
    }
}