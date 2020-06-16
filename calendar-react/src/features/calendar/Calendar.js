import React from 'react'
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
    day.setDate(1)
    day.setDate(1 - day.getDay())
    for (let i = 1; i <= 42; i++) {
        days[i] = { day: day.getDate(), month: day.getMonth() }
        day.setDate(day.getDate() + 1)
    }
    return days
}

function dateClass(item, month, today) {
    let dateClass = item.month === month ? "active-day" : "inactive-day"

    if (item.day === today) {
        dateClass += " current"
    }
    return dateClass
}

function eventModal() {
    return (
        <div id="myModal" class="modal-inactive">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>

        </div>
    )
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function Calendar() {

    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const weekday = today.getDay();

    return (
        <div className="section">
            <div className='calendar-box'>
                <div className="calendar-header">
                    <span className="calendar-title">eCalendar</span>
                    <span className="calendar-year">{today.getFullYear()}</span>
                </div>
                <div className="calendar-months">
                    <span className="inactive-month">{months[adjustedMonth(today.getMonth() - 1)]}</span>
                    <span>{months[today.getMonth()]}</span>
                    <span className="inactive-month">{months[adjustedMonth(today.getMonth() + 1)]}</span>
                </div>
                <div className="h-line">
                    <hr />
                </div>
                <div className="calendar-controls">
                    <div className="calendar-arrow"> {String.fromCharCode(10132)} </div>
                    <div className="calendar-body">
                        <div className="calendar-days">
                            {days.map(day => <span key={day}>{day}</span>)}
                        </div>
                        <div className="calendar-dates">
                            {calendarDaysJS(today).map(item => <span key={item.month + ' ' + item.day} className={dateClass(item, month, date)}>{item.day}</span>)}
                        </div>
                    </div>
                    <div className="calendar-arrow">{String.fromCharCode(10132)}</div>
                </div>
            </div>
            <div className="event-box">
                <div className="event-signin">Sign In</div>
                <div className="event-date"><span>{fullDays[weekday]}</span> <span>{fullMonths[month]} {date}</span></div>

                <div className="event-details">
                    <div className="v-line"></div>
                    <div className="list">
                        <div>10:30 Goat Yoga</div>
                        <div>10:30 Goat Yoga</div>
                        <div>10:30 Goat Yoga</div>
                    </div>
                </div>
                <button className="event-create">+</button>
            </div>
            {eventModal()}
        </div>
    )
}