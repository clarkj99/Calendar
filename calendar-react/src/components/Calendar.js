import React, { useState } from 'react';
import './Calendar.css'
import useEventForm from '../hooks/eventForm'
import EventModal from './EventModal'
import CalendarBody from './CalendarBody';
import EventList from './EventList';

const sampleEvents = [
    { title: "Goat yoga", startTime: new Date(Date.UTC(2020, 4, 18, 14, 0, 0)) },
    { title: "Dental Cleaning", startTime: new Date(Date.UTC(2020, 5, 14, 16, 0, 0)) },
    { title: "Tee time", startTime: new Date(Date.UTC(2020, 5, 9, 11, 30, 0)) },
    { title: "Meet with plumber", startTime: new Date(Date.UTC(2020, 5, 9, 18, 0, 0)) }, { title: "Date with Adele", startTime: new Date(Date.UTC(2020, 5, 9, 23, 30, 0)) }
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
    // const month = dateForMonth.getMonth();

    return (
        <div className="section">
            <CalendarBody today={today} dateForMonth={dateForMonth} setDateForMonth={setDateForMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate} currentMonthEvents={currentMonthEvents} />
            <EventList selectedDate={selectedDate} selectedDayEvents={selectedDayEvents} modalActive={modalActive} setModalActive={setModalActive} />
            {modalActive && <EventModal modalActive={modalActive} setModalActive={setModalActive} handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputs={inputs} />}
        </div >
    )
}