import React from 'react';
import './Form.css';
import { setAction, setPlace, setPerson, setTime, setDefault } from '../../redux/actions';
import { connect } from 'react-redux';
import posed from 'react-pose';
import i18n from "i18next";
import { withTranslation, initReactI18next, } from "react-i18next";
import { resources } from '../../assets/translations'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: resources,
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
    setDefault: () => dispatch(setDefault()),
})

const mapStateToProps = state => ({
    person: state.setDataState.person,
    time: state.setDataState.time,
    place: state.setDataState.place,
    action: state.setDataState.action,
    lang: state.setServiceState.lang,
})

// const SecondWindow = posed.div({
//     hidden: { opacity: 0, y: '60%', },
//     visible: {
//         opacity: 1, transition: {
//             opacity: { ease: 'easeOut', duration: 200 },
//             default: { ease: 'linear', duration: 300 },
//         }, y: '0%',
//         beforeChildren: true,
//     },
// });

const Window = posed.div({
    hidden: { opacity: 0, x: '-40%' },
    visible: {
        opacity: 1, transition: {
            opacity: { ease: 'easeOut', duration: 150 },
            default: { ease: 'linear', duration: 300 },
        }, x: '0%',
        beforeChildren: true,
        zIndex: 999,
    },
    moveNext: {
        opacity: 0, transition: {
            opacity: { ease: 'easeOut', duration: 200 },
            default: { ease: 'linear', duration: 300 },
        }, y: '-60%',
    }
});

const Child = posed.div({
    hidden: { opacity: 0, },
    visible: {
        opacity: 1, transition: {
            opacity: { ease: 'easeOut', duration: 300 },
            default: { ease: 'linear', duration: 100 },
        },
    }
})


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
            showChildren: true,
            showSecond: false,
            showSentence: false,
            result: '',
        }
    }

    componentDidMount() {
        this.setState({
            isVisible: true,
        })
    }

    shouldComponentUpdate(nextProps) {
        console.log("next", nextProps)
        if (this.props.lang != nextProps.lang) {
            console.log('must')
            i18n.changeLanguage(nextProps.lang)
        }
        return true
    }

    generateSentence = () => {
        const { place, person, time, action } = this.props;
        const res = person.trim() + ' ' + action.trim() + ' ' + time.trim() + ' ' + place.trim();
        this.setState({
            showSecond: true,
            result: res,
            // isVisible: false,
        });

        setTimeout(() => {
            this.setState({
                showSentence: true,
            })
        },
            500);
        this.props.setDefault();

    }

    // componentWillUnmount(){
    //     this.setState
    // }

    render() {
        const { t } = this.props;
        const { isVisible, showChildren, showSentence, showSecond, result } = this.state;
        const { place, person, time, action } = this.props;
        if (showSentence) {
            return (
                // <SecondWindow pose={showSentence ? 'visible' : 'hidden'} >
                // {/* <div id="main-form"></div> */ }
                < div className="second-window" >
                    <div>{result}</div>
                </div >
                // </SecondWindow>
            )
        } else {
            return (
                <div>
                    <Window className="window" pose={showSecond ? 'moveNext' : isVisible ? 'visible' : 'hidden'} >
                        <div
                            // style={{ marginTop: '9%' }}
                            id="main-form">

                            <Child pose={showChildren ? 'visible' : 'hidden'} >
                                <div id="form-title">{t('Title')}</div>
                            </Child>
                            <Child pose={showChildren ? 'visible' : 'hidden'} >
                                <div style={{ marginTop: '25px' }} className="line-wrapper">
                                    <div>{t('WhoQ')}</div>
                                    <input value={person} onChange={e => this.props.setPerson(e.target.value)} />
                                </div>
                            </Child>
                            <Child pose={showChildren ? 'visible' : 'hidden'} >
                                <div style={{ marginTop: '35px' }} className="line-wrapper">
                                    <div>{t('WhatQ')}</div>
                                    <input value={action} onChange={e => this.props.setAction(e.target.value)} />
                                </div>
                            </Child>

                            <Child pose={showChildren ? 'visible' : 'hidden'} >
                                <div style={{ marginTop: '35px' }} className="line-wrapper">
                                    <div>{t('WhenQ')}</div>
                                    <input value={time} onChange={e => this.props.setTime(e.target.value)} />
                                </div>
                            </Child>

                            <Child pose={showChildren ? 'visible' : 'hidden'} >
                                <div style={{ marginTop: '35px' }} className="line-wrapper">
                                    <div>{t('WhereQ')}</div>
                                    <input value={place} onChange={e => this.props.setPlace(e.target.value)} />
                                </div>
                            </Child>


                            <div onClick={this.generateSentence} style={{ display: place && person && time && action ? 'block' : 'none' }} id="submit-form">
                                <div>{t('Generate')}</div>
                            </div>

                        </div  >
                    </Window>

                    {/* {(showSentence ?  */}

                    {/* : null)} */}


                </div>
            )
        }



    }
}



export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Form));