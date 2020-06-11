import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form'
import MainButton from './components/Popup/MainButton'
import { connect } from 'react-redux'
import Modal from 'react-modal';

const mapDispatchToProps = dispatch => ({
  // setLanguage: lang => dispatch(setLanguage(lang)),
})

const mapStateToProps = state => ({
  mode: state.setServiceState.mode,
})

Modal.setAppElement(document.getElementById('root'))

function App(props) {
  return (
    <div>
      <Header />
      {props.mode == 'form' ?
        <div style={{ marginTop: '9%' }}>
          <Form />
        </div>

        :
        <MainButton />
      }
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
