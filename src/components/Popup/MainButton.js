import React from 'react';
import './MainButton.css';
// import ReactFlagsSelect from 'react-flags-select';
// import { setLanguage } from '../../redux/actions'
// import 'react-flags-select/css/react-flags-select.css';
import { connect } from "react-redux";
import posed from 'react-pose';
import Modal from 'react-modal';
import Form from '../Form/Form'
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
    // setLanguage: lang => dispatch(setLanguage(lang)),
})

const mapStateToProps = state => ({
    // mode: state.setServiceState.mode
    lang: state.setServiceState.lang,
})

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '460px',
        height: '560px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflowY: 'hidden'
    }
};

class MainButton extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            // inAttention: false,
        }
    }

    handleClick = () => {
        this.setState({
            isOpen: true,
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

    closeModal = () => {
        this.setState({
            isOpen: false,
        })
    }

    render() {
        const { isOpen, } = this.state;
        const { t } = this.props;
        // console.log('ina/', inAttention)
        return (<div>
            <Modal
                isOpen={isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Form />
            </Modal>
            <div onClick={this.handleClick} id="main-button">
                <div>{t('Click')}</div>
            </div>
        </div>
        )
    }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(MainButton));