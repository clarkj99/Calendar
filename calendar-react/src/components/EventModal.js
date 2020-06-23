import React from 'react'
import { toggleModal } from '../utils'

function EventModal(props) {
    const { modalActive, setModalActive, handleSubmit, handleInputChange, inputs } = props;
    return (
        <div id="eventModal" className={"modal-active"}>
            <div className="modal-content">
                <div>
                    <span className="close" onClick={() => toggleModal(modalActive, setModalActive)}>&times;</span>
                </div>
                <div className="modal-form">
                    <span className="modal-title">New Event</span>
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label>Title:</label>
                            <input type="text" name="title" onChange={handleInputChange} value={inputs.title} required />

                        </div>
                        <div>
                            <div>
                                <label>Start Date: </label>
                                <input name="startDate" type="date" onChange={handleInputChange} value={inputs.startDate} required />

                            </div>
                            <div><label>Time:  </label>
                                <input name="startTime" type="time" onChange={handleInputChange} value={inputs.startTime} required />

                            </div>
                        </div>
                        <div>
                            <div>
                                <label>End Date: </label>
                                <input name="endDate" type="date" onChange={handleInputChange} value={inputs.endDate} required />

                            </div>
                            <div><label>Time:  </label>
                                <input name="endTime" type="time" onChange={handleInputChange} value={inputs.endTime} required />

                            </div>
                        </div>
                        <div className="button">
                            <button>Add Event</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EventModal 