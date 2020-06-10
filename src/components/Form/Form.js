import React from 'react';
import './Form.css';
import { setAction, setPlace, setPerson, setTime } from '../../redux/actions';
import { connect } from 'react-redux';
import i18n from "i18next";
import { withTranslation, initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    "Title": "Title",
                    "WhoQ": "Who are you?",
                    "WhatQ": "What are you doing?",
                    "WhenQ": "When are you doing this?",
                    "WhereQ": "Where are you doing this?",
                    "Generate": "Generate sentence"
                }
            },
            cz: {
                translation: {
                    "Title": "Nadpis",
                    "WhoQ": "Kdo jste?",
                    "WhatQ": "Co děláte?",
                    "WhenQ": "Kdy to děláte?",
                    "WhereQ": "Kde to děláte?",
                    "Generate": "Vytvářet větu"
                }
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

const mapDispatchToProps = dispatch => ({
    setAction: action => dispatch(setAction(action)),
    setPlace: place => dispatch(setPlace(place)),
    setPerson: person => dispatch(setPerson(person)),
    setTime: time => dispatch(setTime(time)),
})

const mapStateToProps = state => ({
    person: state.setDataState.person,
    time: state.setDataState.time,
    place: state.setDataState.place,
    action: state.setDataState.action,
    lang: state.setServiceState.lang,
})

class Form extends React.Component {
    constructor() {
        super();
    }

    shouldComponentUpdate(nextProps) {
        console.log("next", nextProps)
        if (this.props.lang != nextProps.lang) {
            console.log('must')
            i18n.changeLanguage(nextProps.lang)
        }
        return true
    }

    render() {
        const { t } = this.props;

        const { place, person, time, action } = this.props;
        return (
            <div id="main-form">
                <div id="form-title">{t('Title')}</div>

                <div style={{ marginTop: '25px' }} className="line-wrapper">
                    <div>{t('WhoQ')}</div>
                    <input value={person} onChange={e => this.props.setPerson(e.target.value)} />
                </div>
                <div style={{ marginTop: '35px' }} className="line-wrapper">
                    <div>{t('WhatQ')}</div>
                    <input value={action} onChange={e => this.props.setAction(e.target.value)} />
                </div><div style={{ marginTop: '35px' }} className="line-wrapper">
                    <div>{t('WhenQ')}</div>
                    <input value={time} onChange={e => this.props.setTime(e.target.value)} />
                </div>
                <div style={{ marginTop: '35px' }} className="line-wrapper">
                    <div>{t('WhereQ')}</div>
                    <input value={place} onChange={e => this.props.setPlace(e.target.value)} />
                </div>

                <div style={{ display: place && person && time && action ? 'block' : 'none' }} id="submit-form">
                    <div>{t('Generate')}</div>
                </div>

            </div  >
        )
    }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Form));