import React, { useState } from 'react';
import './Calendar.css'

function adjustedMonth(month) {
    if (month < 0)
        month += 12
    else if (month > 11)
        month -= 12
    return month
}

function calendarDaysJS(day) {
    const days = []
    const tempDate = new Date(day.getTime())
    tempDate.setDate(1)
    tempDate.setDate(1 - tempDate.getDay())
    for (let i = 1; i <= 42; i++) {
        days[i] = { day: tempDate.getDate(), month: tempDate.getMonth(), year: tempDate.getYear() }
        tempDate.setDate(tempDate.getDate() + 1)
    }
    return days
}

function dateClass(item, month, today) {
    let className = item.month === month ? "active-day" : "inactive-day"

    if (item.day === today.getDate() && item.month === today.getMonth() && item.yesr === today.getYear()) {
        className += " current"
    }
    return className
}

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

const toggleModal = (modalActive, setModalActive) => {
    setModalActive(!modalActive)
}

const changeMonth = (number, dateForMonth, setDateForMonth) => {
    // alert(number)
    const newDate = new Date(dateForMonth.getTime())
    newDate.setMonth(dateForMonth.getMonth() + number, 1)
    setDateForMonth(newDate)
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function Calendar() {
    const today = new Date();

    const [modalActive, setModalActive] = useState(false);
    const [dateForMonth, setDateforMonth] = useState(new Date())

    const month = dateForMonth.getMonth();
    const date = today.getDate();
    const weekday = dateForMonth.getDay();

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
                    <span className="calendar-arrow text-button" onClick={() => changeMonth(-1, dateForMonth, setDateforMonth)}> {String.fromCharCode(10132)} </span>
                    <div className="calendar-body">
                        <div className="calendar-days">
                            {days.map(day => <span key={day}>{day}</span>)}
                        </div>
                        <div className="calendar-dates">
                            {calendarDaysJS(dateForMonth).map(item => <span key={item.month + ' ' + item.day} className={dateClass(item, month, today)}>{item.day}</span>)}
                        </div>
                    </div>
                    <span className="calendar-arrow text-button" onClick={() => changeMonth(1, dateForMonth, setDateforMonth)}>{String.fromCharCode(10132)}</span>
                </div>
            </div>
            <div className="event-box">
                <div className="event-signin text-button">Sign In</div>
                <div className="event-date"><span>{fullDays[weekday]}</span> <span>{fullMonths[month]} {date}</span></div>

                <div className="event-details">
                    <div className="v-line"></div>
                    <div className="list">
                        <div>10:30 Goat Yoga</div>
                        <div>10:30 Goat Yoga</div>
                        <div>10:30 Goat Yoga</div>
                    </div>
                </div>
                <div className="event-create text-button" onClick={() => toggleModal(modalActive, setModalActive)}>+</div>
            </div>
            {modalActive && eventModal(modalActive, setModalActive)}
        </div>
    )
}