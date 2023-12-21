//Use a Set to manage the schedule of upcoming events. Each event has a unique identifier, and the set ensures that there are no conflicting events at the same time. Implement functions to add new events and check for scheduling conflicts.

function manageEventList() {
    let event = new Set();
    let dateSet = new Set()
    function addEvent(eventId, date) {
        if (dateSet.has(date)) {
            console.log('An event is already planned')
        }
        else {
            event.add(`${eventId} : ${date}`)
            dateSet.add(date)
        }
        return event
    }
    return { addEvent }
}
const result = manageEventList()
console.log(result.addEvent('newyear1', '01.02.2024'))
console.log(result.addEvent('newyear2', '01.02.2024'))
console.log(result.addEvent('newyear3', '02.02.2024'))
console.log(result.addEvent('newyear4', '02.02.2024'))