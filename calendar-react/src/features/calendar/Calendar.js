import React from 'react'
import './Calendar.css'
// import moment from 'moment'

function adjustedMonth(month) {
    if (month < 0)
        month += 12
    else if (month > 11)
        month -= 12
    return month
}

function calendarDays(day) {
    const days = []
    day.date(1)
    day.add(-(day.day() + 1), "d")
    for (let i = 1; i <= 42; i++) {
        day.add(1, "d")
        days[i] = { day: day.date(), month: day.month() }
    }
    return days
}

function calendarDaysJS(day) {
    const days = []
    day.setDate(1)
    day.setDate(1 - day.getDay())
    // day.add(-(day.day() + 1), "d")
    for (let i = 1; i <= 42; i++) {
        days[i] = { day: day.getDate(), month: day.getMonth() }
        day.setDate(day.getDate() + 1)
    }
    return days
}

export function Calendar() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const weekday = today.getDay();

    // const day = moment()

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
                <div className="divider-line">
                    <hr />
                </div>
                <div className="calendar-days">
                    {days.map(day => <span key={day}>{day}</span>)}
                </div>
                <div className="calendar-dates">
                    {calendarDaysJS(today).map(item => <span key={item.day} className={item.month == month ? "active-day" : "inactive-day"}>{item.day}</span>)}
                </div>
            </div>
            <div className="event-box">
                <div className="event-date"><span>{fullDays[weekday]}</span> <span>{fullMonths[month]} {date}</span></div>

                <div className="event-details">
                    <div className="vl"></div>
                    <div className="list">
                        <div>10:30 Goat Yoga</div>
                        <div>10:30 Goat Yoga</div>
                        <div>10:30 Goat Yoga</div>
                    </div>
                </div>
            </div>
        </div>
    )
}