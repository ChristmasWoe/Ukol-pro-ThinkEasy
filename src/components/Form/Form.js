import React from 'react';
import './Form.css';
import { setAction, setPlace, setPerson, setTime } from '../../redux/actions';
import { connect } from 'react-redux';

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
})

class Form extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { place, person, time, action } = this.props;
        return (
            <div id="main-form">
                <div id="form-title">Title</div>

                <div style={{ marginTop: '25px' }} className="line-wrapper">
                    <div>Some sample question</div>
                    <input value={person} onChange={e => this.props.setPerson(e.target.value)} />
                </div>
                <div style={{ marginTop: '35px' }} className="line-wrapper">
                    <div>Some sample qestion</div>
                    <input value={action} onChange={e => this.props.setAction(e.target.value)} />
                </div><div style={{ marginTop: '35px' }} className="line-wrapper">
                    <div>Some sample qestion</div>
                    <input value={time} onChange={e => this.props.setTime(e.target.value)} />
                </div>
                <div style={{ marginTop: '35px' }} className="line-wrapper">
                    <div>Some sample qestion</div>
                    <input value={place} onChange={e => this.props.setPlace(e.target.value)} />
                </div>

                <div style={{ display: place && person && time && action ? 'block' : 'none' }} id="submit-form">
                    <div>Go do something</div>
                </div>

            </div  >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);