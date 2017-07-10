import * as React from 'react';
import {FeatureCategoryRow} from './FeatureCategoryRow';
import {FeatureRow} from './FeatureRow';

export class FeatureTable extends React.Component {

    filterOutFeature(filterText, feature) {
        let ret = false;
        if (feature.name && filterText) {
            ret = true;
            if (feature.name.toLowerCase().indexOf(filterText) > -1) {
                ret = false;
            }
            if (!ret && feature.category && feature.summary.toLowerCase().indexOf(filterText) > -1) {
                ret = false;
            }
            if (!ret && feature.ieStatus && feature.ieStatus.priority && feature.ieStatus.priority.toLowerCase().indexOf(filterText) > -1) {
                ret = false;
            }
            if (!ret && feature.ieStatus && feature.ieStatus.text && feature.ieStatus.text.toLowerCase().indexOf(filterText) > -1) {
                ret = false;
            }
        }
        return ret;
    }

    render() {
        let rows = [];
        let lastCategory = null;
        let filterText = this.props.filterText && this.props.filterText.toLowerCase();
        this.props.features.forEach((feature) => {
            if (this.filterOutFeature(filterText, feature)) {
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