function generateRandomTimetable() {
    const timetable = {
        types: [],
        numbers: [],
        lastStops: [],
        nearest: [],
        next: []
    }

    for (let i = 0; i < 10; i++) {
        // TYPE OF TRANSPORT
        const randomType = getRandomInt(2);
        if (randomType) {
            timetable.types.push('A')
        } else {
            timetable.types.push('T')
        }
        // NUMBER OF TRANSPORT
        timetable.numbers.push(i*3+5)
        // LAST STOPS
        timetable.lastStops.push('TEST')
        // NEAREST TIME
        const randomNearest = getRandomInt(20)
        if (randomNearest) {
            timetable.nearest.push(randomNearest)
        } else {
            timetable.nearest.push('<1')
        }
        // NEXT TIME
        const randomNext = getRandomInt(20)
        if ((typeof timetable.nearest[i]) == 'number') {
            timetable.next.push(+timetable.nearest[i] + randomNext)
        } else {
            timetable.next.push(randomNext)
        }
    }

    return timetable
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}