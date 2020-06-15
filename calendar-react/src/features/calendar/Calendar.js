import React from 'react'
import './Calendar.css'
// import moment from 'moment'

function adjustedMonth(month) {
    if (month < 0)
        month += 12
    else if (month > 11)
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
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    const month = today.getMonth();

    // const day = moment()

    return (
        <div className='calendar-box'>
            <div className="calendar-header">
                <span className="calendar-title">eCalendar</span>
                <span className="calendar-year">{today.getFullYear()}</span>
            </div>
            <span>{months[adjustedMonth(today.getMonth() - 1)]}</span>
            <span>{months[today.getMonth()]}</span>
            <span>{months[adjustedMonth(today.getMonth() + 1)]}</span>

            <div className="calendar-days">
                {days.map(day => <span key={day}>{day}</span>)}
            </div>
            <div className="divider-line">
            </div>
            <div className="calendar-dates">
                {calendarDaysJS(today).map(item => <span key={item.day} className={item.month == month ? "active-month" : "inactive-month"}>{item.day}</span>)}
            </div>
        </div>
    )
}