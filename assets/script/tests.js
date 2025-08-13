function generateRandomTimetable(language) {
    const timetable = {
    types: [],
    numbers: [],
    lastStops: [],
    nearest: [],
    next: [],
    'language': language
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
        timetable.lastStops.push(getRandomStopName(timetable.language))
        // NEAREST TIME
        const randomNearest = (getRandomInt(20) + 1) * 60
        timetable.nearest.push(randomNearest)
        // NEXT TIME
        timetable.next.push(timetable.nearest[timetable.nearest.length - 1] + getRandomInt(20) + timetable.nearest[timetable.nearest.length - 1])
    }

    return timetable
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomStopName(language) {
    if (language == 'EN') {
        const stopsArray = [
            'Greenwich Village','Midtown','Sixth Avenue',
            'Downtown',' Tottenville','Broadway',
            'Annadale','Church Street','Victory Boulevard',
            'Huguenot','Madison Avenue','Richmond Avenue',
            'Water Street','23rd Street','Nelson Avenue',
            'Narrows Road','42nd Street','Lincoln Tunnel',
        ]
        return stopsArray[getRandomInt(18)]
    } else {
        const stopsArray = [
        'ДС "Веснянка"', 'ДС "Дружная"', 'Брилевичи',
        'Зеленый Луг-6','ДС "Кунцевщина"','ДС "Восточная"',
        'ДС "Славинского"','ДС "Ангарская-4','ДС "Сухарево-5"',
        'ДС "Карастояновой"','ДС "Шабаны"','ДС "Уручье-2',
        'Копище','Люцинская','Степянка',
        'Каменная Горка-5','Ландера','ДС "Юго-Западная"'
        ]
        return stopsArray[getRandomInt(18)]
    }
    
}