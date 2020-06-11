import React from 'react';
import './Header.css';
import ReactFlagsSelect from 'react-flags-select';
import { setLanguage, toggleMode } from '../../redux/actions'
import 'react-flags-select/css/react-flags-select.css';
import { connect } from "react-redux"

const mapDispatchToProps = dispatch => ({
    setLanguage: lang => dispatch(setLanguage(lang)),
    toggleMode: () => dispatch(toggleMode()),
})

const mapStateToProps = state => ({
    mode: state.setServiceState.mode
})

//import css module


class Header extends React.Component {
    constructor() {
        super()
    }

    onLangSelect = countryCode => {
        switch (countryCode) {
            case ("GB"):
                this.props.setLanguage('en');
                break;
            case ("CZ"):
                this.props.setLanguage('cz');
                break;
            case ("RU"):
                this.props.setLanguage('ru');
                console.log('ru')
                break;
            default:
                this.props.setLanguage('en');
        }
    }

    render() {
        const { mode } = this.props;
        return (
            <div id="header">
                <div id="nav-wrapper">


                    {/* <div className="header-button">1</div> */}
                    <div className="header-button">
                        <ReactFlagsSelect
                            defaultCountry="GB"
                            countries={["GB", "CZ", "RU"]}
                            customLabels={{ "GB": "EN", "CZ": "CZ", "RU": "RU" }}
                            showSelectedLabel={false}
                            selectedSize={20}
                            onSelect={this.onLangSelect}
                        />
                    </div>
                    <div onClick={this.props.toggleMode} style={{ display: "inline-block" }} className="header-button">
                        <div id="header-mode">{mode}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);