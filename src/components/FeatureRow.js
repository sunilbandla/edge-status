import * as React from 'react';

export class FeatureRow extends React.Component {
    render() {
        let name = this.props.feature.name;
        return (
            <li className="feature mdl-card mdl-shadow--4dp">
                <summary className="featureSummary">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">{name}</h2>
                        <span className="featureStatus">
                            {this.props.feature.ieStatus.text}
                        </span>
                    </div>
                </summary>
                <section className="mdl-card__supporting-text">
                    <p>
                        {this.props.feature.summary}
                    </p>
                    <p>
                        Priority: <strong>{this.props.feature.ieStatus.priority}</strong>
                    </p>
                    {this.props.feature.link &&
                    <p>Spec:
                        <a className="mdl-card__actions"
                           href={this.props.feature.link}>{this.props.feature.link}</a>
                    </p>
                    }
                </section>
            </li>
        );
    }
}