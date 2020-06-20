import React from 'react'
import { toggleModal } from '../utils'

function EventModal(props) {
    const { modalActive, setModalActive, handleSubmit, handleInputChange, inputs } = props;
    return (
        <div id="eventModal" className={"modal-active"}>
            <div className="modal-content">

                <span className="close" onClick={() => toggleModal(modalActive, setModalActive)}>&times;</span>
                <div className="modal-form">
                    <span className="modal-title">New Event</span>
                    <form onSubmit={handleSubmit}>

                        <div><label>Title:</label>
                            <input type="text" name="title" onChange={handleInputChange} value={inputs.title} required />

                        </div>
                        <div>
                            <label>Start Date: </label>
                            <input name="startDate" type="date" onChange={handleInputChange} value={inputs.startDate} required />

                        </div>
                        <div><label>Begins:  </label>
                            <input name="startTime" type="time" onChange={handleInputChange} value={inputs.startTime} required />

                        </div>
                        {/* <div><label>People:</label>
                            <input type="text" name="people" />

                        </div>
                        <div><label>Location:</label>
                            <input type="text" name="location" />

                        </div>
                        <div><label>Description: </label>
                            <input type="text" name="description" />

                        </div> */}
                        <button>Add Event</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EventModal 