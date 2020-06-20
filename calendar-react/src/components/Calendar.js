import React, { useState } from 'react';
import './Calendar.css'
import useEventForm from '../hooks/eventForm'
import { adjustedMonth, calendarDaysJS, dateClass, toggleModal, changeMonth, months, days } from '../utils'
import EventModal from './EventModal'

const sampleEvents = [
    { title: "Goat yoga", startTime: new Date(Date.UTC(2020, 4, 18, 14, 0, 0)), people: "Soren", location: "The Office", description: "I'm not sure what's happening, but I like it." },
    { title: "Dental Cleaning", startTime: new Date(Date.UTC(2020, 5, 14, 16, 0, 0)), people: "Adele", location: "The Office", description: "I'm not sure what's happening, but I like it." },
    { title: "Tee time", startTime: new Date(Date.UTC(2020, 5, 9, 11, 30, 0)), people: "Marge", location: "The Office", description: "I'm not sure what's happening, but I like it." },
    { title: "Meet with plumber", startTime: new Date(Date.UTC(2020, 5, 9, 18, 0, 0)), people: "Sam", location: "The Office", description: "I'm not sure what's happening, but I like it." }, { title: "Date with Adele", startTime: new Date(Date.UTC(2020, 5, 9, 23, 30, 0)), people: "Michael", location: "The Office", description: "I'm not sure what's happening, but I like it." }
]

export function Calendar() {
    const today = new Date();

    const [modalActive, setModalActive] = useState(false);
    const [dateForMonth, setDateForMonth] = useState(new Date(today.getTime()))
    const [selectedDate, setSelectedDate] = useState(new Date(today.getTime()))
    const [events, setEvents] = useState(sampleEvents)
    const currentMonthEvents = events.filter(event => event.startTime.toLocaleDateString([], { year: 'numeric', month: '2-digit' }) === dateForMonth.toLocaleDateString([], { year: 'numeric', month: '2-digit' }))

    const addEvent = () => {
        setEvents([...events, { title: inputs.title, startTime: new Date(inputs.startDate.substring(0, 4), inputs.startDate.substring(5, 7) - 1, inputs.startDate.substring(8, 10), inputs.startTime.substring(0, 2), inputs.startTime.substring(3, 5)) }])
        setModalActive(false)
    }

    const { handleSubmit, handleInputChange, inputs } = useEventForm(addEvent);

    const selectedDayEvents = currentMonthEvents.filter(event => event.startTime.toLocaleDateString() === selectedDate.toLocaleDateString())
    const month = dateForMonth.getMonth();

    return (
        <div className="section">
            <div className='calendar-box'>
                <div className="calendar-header">
                    <span className="calendar-title">eCalendar</span>
                    <span className="calendar-year">{dateForMonth.getFullYear()}</span>
                </div>
                <div className="calendar-months">
                    <span className="inactive-month">{months[adjustedMonth(dateForMonth.getMonth() - 1)]}</span>
                    <span>{months[dateForMonth.getMonth()]}</span>
                    <span className="inactive-month">{months[adjustedMonth(dateForMonth.getMonth() + 1)]}</span>
                </div>
                <div className="h-line">
                    <hr />
                </div>
                <div className="calendar-controls">
                    <span className="calendar-arrow text-button" onClick={() => changeMonth(-1, dateForMonth, setDateForMonth)}> {String.fromCharCode(10132)} </span>
                    <div className="calendar-body">
                        <div className="calendar-days">
                            {days.map(day => <span key={day}>{day}</span>)}
                        </div>
                        <div className="calendar-dates">
                            {calendarDaysJS(dateForMonth).map(item => <div key={item.month + ' ' + item.day} className={dateClass(item, month, today, currentMonthEvents, selectedDate)} onClick={() => setSelectedDate(new Date(item.year, item.month, item.day))}>
                                <span>{item.day}</span>
                                <span></span>
                            </div>)}
                        </div>
                    </div>
                    <span className="calendar-arrow text-button" onClick={() => changeMonth(1, dateForMonth, setDateForMonth)}>{String.fromCharCode(10132)}</span>
                </div>
            </div>
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
            {modalActive && <EventModal modalActive={modalActive} setModalActive={setModalActive} handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputs={inputs} />}
        </div >
    )
}