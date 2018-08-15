import React from 'react'

class Contact extends React.Component {
    render() {
        return (
            <div>
                <section id="contact">
                    <h1>Contact</h1>

                    <div className="contact__cards" uk-grid="true">

                        <div className="uk-card contact__card--left uk-width-1-2">
                            <h2>We want to help!</h2>
                            <a href="#" uk-icon="icon: mail" className="uk-icon-button"></a>
                            <a href="https://github.com/custonote/custonote/tree/master" uk-icon="icon: github, ratio: 2" class="uk-icon-button"></a>
                        </div>

                        <div className="uk-card contact__card--right uk-width-1-2">
                            <img src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=427bcc1d8e2505d31a239d0de6b13f75&auto=format&fit=crop&w=1650&q=80"></img>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Contact;