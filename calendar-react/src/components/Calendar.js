import React, { useState, useEffect } from 'react';
import './Calendar.css'
import useEventForm from '../hooks/eventForm'
import EventModal from './EventModal'
import CalendarBody from './CalendarBody';
import EventList from './EventList';
import { stringToDate } from '../utils'

export function Calendar() {
    const today = new Date();

    const [modalActive, setModalActive] = useState(false);
    const [dateForMonth, setDateForMonth] = useState(new Date(today.getTime()))
    const [selectedDate, setSelectedDate] = useState(new Date(today.getTime()))
    // const [events, setEvents] = useState(sampleEvents)
    const [events, setEvents] = useState([])


    const fetchEvents = async () => {
        const result = await fetch("http://localhost:9000/events");
        result
            .json()
            .then(data => {
                console.log(data);
                setEvents(data)
            });
    };

    useEffect(() => {
        fetchEvents();
    }, [])


    const currentMonthEvents = events.filter(
        event => new Date(event.startTime).toLocaleDateString([], {
            year: 'numeric',
            month: '2-digit'
        }) === dateForMonth.toLocaleDateString([], {
            year: 'numeric',
            month: '2-digit'
        })
    )

    const addEvent = () => {
        setEvents([...events, {
            title: inputs.title,
            startTime: stringToDate(inputs.startDate, inputs.startTime),
            endTime: stringToDate(inputs.endDate, inputs.endTime)
        }])
        setModalActive(false)
    }
    const initialState = { title: "", startTime: "", startDate: "", endTime: "", endDate: "" }
    const { handleSubmit, handleInputChange, inputs } = useEventForm(initialState, addEvent);

    const selectedDayEvents = currentMonthEvents.filter(
        event => new Date(event.startTime).toLocaleDateString() === selectedDate.toLocaleDateString()
    )

    return (
        <div className="section">
            <CalendarBody
                today={today}
                dateForMonth={dateForMonth}
                setDateForMonth={setDateForMonth}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                currentMonthEvents={currentMonthEvents} />

            <EventList
                selectedDate={selectedDate}
                selectedDayEvents={selectedDayEvents}
                modalActive={modalActive}
                setModalActive={setModalActive} />

            {modalActive && <EventModal
                modalActive={modalActive}
                setModalActive={setModalActive}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                inputs={inputs} />}
        </div >
    )
}