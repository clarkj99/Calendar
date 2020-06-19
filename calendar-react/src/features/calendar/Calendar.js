import React, { useState } from 'react';
import './Calendar.css'

function adjustedMonth(month) {
    if (month < 0)
        month += 12
    else if (month > 11)
        month -= 12
    return month
}

function calendarDaysJS(dateForMonth) {
    const days = []
    const tempDate = new Date(dateForMonth.getTime())
    tempDate.setDate(1)
    tempDate.setDate(1 - tempDate.getDay())
    for (let i = 1; i <= 42; i++) {
        days[i] = { day: tempDate.getDate(), month: tempDate.getMonth(), year: tempDate.getFullYear() }
        tempDate.setDate(tempDate.getDate() + 1)
    }
    return days
}

function dateClass(item, month, today, events, selectedDate) {
    let className = item.month === month ? "active-day" : "inactive-day"

    if (item.day === today.getDate() && item.month === today.getMonth() && item.year === today.getFullYear()) {
        className += " current"
    }

    if (events.find(event => item.day === event.startTime.getDate() && item.month === event.startTime.getMonth())) {
        className += " events"
    }

    if (item.day === selectedDate.getDate() && item.month === selectedDate.getMonth() && item.year === selectedDate.getFullYear()) {
        className += " selected"
    }

    return className
}

const toggleModal = (modalActive, setModalActive) => {
    setModalActive(!modalActive)
}

const changeMonth = (number, dateForMonth, setDateForMonth) => {
    const newDate = new Date(dateForMonth.getTime())
    newDate.setMonth(dateForMonth.getMonth() + number, 1)
    setDateForMonth(newDate)
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function eventModal(modalActive, setModalActive) {
    return (
        <div id="eventModal" className={"modal-active"}>
            <div className="modal-content">

                <span className="close" onClick={() => toggleModal(modalActive, setModalActive)}>&times;</span>
                <div className="modal-form">
                    <span className="modal-title">New Event</span>
                    <form >

                        <div><label>Title:</label>
                            <input type="text" name="title" />

                        </div>
                        <div>
                            <label>Start Date: </label>
                            <input name="startdate" type="date" />

                        </div>
                        <div><label>Begins:  </label>
                            <input name="begins" type="time" />

                        </div>
                        <div><label>People:</label>
                            <input type="text" name="people" />

                        </div>
                        <div><label>Location:</label>
                            <input type="text" name="location" />

                        </div>
                        <div><label>Description: </label>
                            <input type="text" name="description" />

                        </div>
                        <button>Add Event</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

const sampleEvents = [
    { title: "Goat yoga", startTime: new Date(Date.UTC(2020, 5, 9, 14, 0, 0)), people: "Soren", location: "The Office", description: "I'm not sure what's happening, but I like it." },
    { title: "Dental Cleaning", startTime: new Date(Date.UTC(2020, 5, 14, 16, 0, 0)), people: "Adele", location: "The Office", description: "I'm not sure what's happening, but I like it." },
    { title: "Tee time", startTime: new Date(Date.UTC(2020, 4, 18, 11, 30, 0)), people: "Marge", location: "The Office", description: "I'm not sure what's happening, but I like it." },
    { title: "Meet with plumber", startTime: new Date(Date.UTC(2020, 4, 18, 18, 0, 0)), people: "Sam", location: "The Office", description: "I'm not sure what's happening, but I like it." }, { title: "Date with Adele", startTime: new Date(Date.UTC(2020, 4, 18, 23, 30, 0)), people: "Michael", location: "The Office", description: "I'm not sure what's happening, but I like it." }
]

// const useEventForm = (callback) => {
//     const [inputs, setInputs] = useState({});

//     const handleSubmit = (event) => {
//         if (event) {
//             event.preventDefault();
//         }
//         callback();
//     }

//     const handleInputChange = (event) => {
//         event.persist();
//         setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
//     }

//     return {
//         handleSubmit,
//         handleInputChange,
//         inputs
//     };
// }

// const useInput = initialValue => {
//     const [value, setValue] = useState(initialValue);

//     return {
//         value,
//         setValue,
//         reset: () => setValue(""),
//         bind: {
//             value,
//             onChange: event => {
//                 setValue(event.target.value);
//             }
//         }
//     };
// };

export function Calendar() {
    const today = new Date();

    const [modalActive, setModalActive] = useState(false);
    const [dateForMonth, setDateForMonth] = useState(new Date(today.getTime()))
    const [selectedDate, setSelectedDate] = useState(new Date(today.getTime()))

    const events = sampleEvents.filter(event => event.startTime.toLocaleDateString([], { year: 'numeric', month: '2-digit' }) === dateForMonth.toLocaleDateString([], { year: 'numeric', month: '2-digit' }))

    const selectedDayEvents = events.filter(event => event.startTime.toLocaleDateString() === selectedDate.toLocaleDateString())
    const month = dateForMonth.getMonth();
    // const { value, bind, reset } = useInput('');

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
                            {calendarDaysJS(dateForMonth).map(item => <div key={item.month + ' ' + item.day} className={dateClass(item, month, today, events, selectedDate)} onClick={() => setSelectedDate(new Date(item.year, item.month, item.day))}>
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
            {modalActive && eventModal(modalActive, setModalActive)}
        </div >
    )
}