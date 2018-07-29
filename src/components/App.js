var React = require('react');

class App extends React.Component {
    render() {
        return (
            <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid="true">
                <div>
                    <div className="uk-card uk-card-primary uk-card-body">
                        <h3 className="uk-card-title">Hello World</h3>
                        <p>Test, test 1,2,3 houston do you copy?</p>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = App;