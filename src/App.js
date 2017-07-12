import React, {Component} from 'react';
import './App.css';
import {FeatureTableContainer} from './components/FeatureTableContainer';

class App extends Component {

    constructor() {
        super();
        this.state = {
            features: [],
            loaded: false
        };
    }

    componentDidMount() {
        fetch(`https://cdn.rawgit.com/MicrosoftEdge/Status/production/status.json`)
            .then(res => {
                let contentType = res.headers.get("content-type");
                if(contentType && contentType.indexOf("application/json") !== -1) {
                    res.json()
                        .then(json => {
                            let features = this.groupFeatures(json);
                            this.setState({
                                features: features,
                                loaded: true
                            });
                        })
                        .catch(err => {
                            this.handleFeaturesListError('Features list did not return JSON.', err);
                        });
                } else {
                    this.handleFeaturesListError('Features list did not return JSON.', res);
                }
            })
            .catch(err => {
                this.handleFeaturesListError('Could not load features list', err);
            });
    }

    groupFeatures(features) {
        let categories = {};
        features.forEach(feature => {
            let cat = feature.category.replace(/ /g, '');
            if (!categories[cat]) {
                categories[cat] = [];
            }
            categories[cat].push(feature);
        });
        let list = [];
        Object.keys(categories).forEach(cat => {
            list = list.concat(categories[cat]);
        });
        return list;
    }

    handleFeaturesListError(message, err) {
        console.warn(message);
        this.setState({
            features: [],
            loaded: true
        });
        err && err.text().then(console.warn);
    }

    render() {
        return (
            <div>
                <div className="mdl-layout mdl-js-layout">
                    <header className="mdl-layout__header">
                        <div className="mdl-layout-icon"></div>
                        <div className="mdl-layout__header-row">
                            <span className="mdl-layout__title">Edge platform status</span>
                        </div>
                    </header>
                </div>
                <main className="mdl-layout__content content">
                    {
                        !this.state.loaded && <div className="mdl-spinner mdl-js-spinner is-active"></div>
                    }
                    <FeatureTableContainer features={this.state.features} loaded={this.state.loaded} />
                </main>
                <footer className="mdl-mini-footer">
                    <div className="mdl-mini-footer__left-section">
                        <p>Credits: Microsoft Edge</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
