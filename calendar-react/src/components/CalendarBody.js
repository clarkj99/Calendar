import React from 'react'
import { adjustedMonth, calendarDaysJS, dateClass, changeMonth, months, days } from '../utils'

function CalendarBody(props) {
    const { today, dateForMonth, setDateForMonth, selectedDate, setSelectedDate, currentMonthEvents } = props;
    const month = dateForMonth.getMonth();
    return (
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
    );
}

export default CalendarBody