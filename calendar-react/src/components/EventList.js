import React from 'react'
import { toggleModal } from '../utils'

function EventList(props) {
    const { selectedDate, selectedDayEvents, modalActive, setModalActive } = props
    return (
        <div className="event-box">
            <div className="event-signin text-button">Sign In</div>
            <div className="event-date"><span>{selectedDate.toLocaleDateString(['us'], { weekday: 'long' })}</span> <span>{selectedDate.toLocaleDateString([], { month: 'long' })} {selectedDate.getDate()}</span></div>

            <div className="event-details">
                <div className="v-line"></div>
                <div className="list">
                    {selectedDayEvents.length ? selectedDayEvents.map((event, i) => <div key={i}>{event.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} {event.title}</div>) : <div>No events for this date</div>}
                </div>
            </div>
            <div className="event-create text-button" onClick={() => toggleModal(modalActive, setModalActive)}>+</div>
        </div>
    )

}

export default EventList