import React from 'react';
import './Header.css';
import ReactFlagsSelect from 'react-flags-select';
import { setLanguage } from '../../redux/actions'
import 'react-flags-select/css/react-flags-select.css';
import { connect } from "react-redux"

const mapDispatchToProps = dispatch => ({
    setLanguage: lang => dispatch(setLanguage(lang)),
})

const mapStateToProps = state => ({

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
            default:
                this.props.setLanguage('en');
        }
    }

    render() {
        return (
            <div id="header">
                <div id="nav-wrapper">

                    <div className="header-button"></div>
                    {/* <div className="header-button">1</div> */}
                    <div className="header-button">
                        <ReactFlagsSelect
                            defaultCountry="GB"
                            countries={["GB", "CZ"]}
                            customLabels={{ "GB": "EN", "CZ": "CZ" }}
                            showSelectedLabel={false}
                            selectedSize={20}
                            onSelect={this.onLangSelect}
                        />
                    </div>
                    <div className="header-button"></div>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);