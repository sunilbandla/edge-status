import React, {Component} from 'react';
import './App.css';
import {FeatureTableContainer} from './components/FeatureTableContainer';

class App extends Component {

    constructor() {
        super();
        this.features = [
            {
                "name": "Font Variation Properties",
                "category": "CSS",
                "link": "https://drafts.csswg.org/css-fonts-4/#font-variation-props",
                "summary": "Allows multiple instances of fonts to be defined by interpolating glyph outlines along different axis.",
                "standardStatus": "Editor's draft",
                "ieStatus": {
                    "text": "Under Consideration",
                    "priority": "High"
                }
            },
            {
                "name": "SVG Accessibility API Mappings",
                "category": "Misc",
                "link": "https://www.w3.org/TR/svg-aam-1.0/",
                "summary": "Defines how user agents map SVG markup to platform accessibility application programming interfaces.",
                "standardStatus": "Working draft or equivalent",
                "ieStatus": {
                    "text": "Under Consideration",
                    "priority": "Medium"
                }
            },
            {
                "name": "Digital Publishing Accessibility API Mappings",
                "category": "Misc",
                "link": "https://www.w3.org/TR/dpub-aam-1.0/",
                "summary": "Defines how user agents map the Digital Publishing WAI-ARIA Module markup to platform accessibility APIs.",
                "standardStatus": "Working draft or equivalent",
                "ieStatus": {
                    "text": "Under Consideration",
                    "priority": "Medium"
                },
                "safari_views": {
                    "text": "Shipped",
                    "value": 1
                },
                "ff_views": {
                    "text": "Enabled by default",
                    "value": 2
                }
            }
        ];
    }

    render() {
        return (
            <div className="app">
                <header className="appHeader">
                    <h3>Edge platform status</h3>
                </header>
                <section>
                    Features
                    <FeatureTableContainer features={this.features} />
                </section>
                <footer>

                </footer>
            </div>
        );
    }
}

export default App;
