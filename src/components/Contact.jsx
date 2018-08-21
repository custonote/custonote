import React from 'react'

class Contact extends React.Component {
    render() {
        return (
            <div>
                <section id="contact">
                    <h1 id="contact__title">Contact</h1>

                    <div className="contact__cards uk-grid-match" uk-grid="true">

                        <div className="uk-card contact__card--left uk-width-1-2@s">
                            <h2 className="card__heading">We want to help you!</h2>
                            <div className="contact__icons uk-flex uk-flex-center">
                                <a href="#" uk-icon="icon: mail; ratio: 4" className="uk-icon-link contact__icon"></a>
                                <a href="https://github.com/custonote/custonote/tree/master" uk-icon="icon: github; ratio: 4" className="contact__icon"></a>
                            </div>
                        </div>

                        <div className="uk-card contact__card--right uk-width-1-2@s">
                            
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Contact;