/** Helper Functions and Constants */

export function adjustedMonth(month) {
    if (month < 0)
        month += 12
    else if (month > 11)
        month -= 12
    return month
}

export function calendarDaysJS(dateForMonth) {
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

export function dateClass(item, month, today, events, selectedDate) {
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

export const toggleModal = (modalActive, setModalActive) => {
    setModalActive(!modalActive)
}

export const changeMonth = (number, dateForMonth, setDateForMonth) => {
    const newDate = new Date(dateForMonth.getTime())
    newDate.setMonth(dateForMonth.getMonth() + number, 1)
    setDateForMonth(newDate)
}

export function stringToDate(startDate, startTime) {
    return new Date(startDate.substring(0, 4), startDate.substring(5, 7) - 1, startDate.substring(8, 10), startTime.substring(0, 2), startTime.substring(3, 5))
}

export function localTimeString(time) {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];