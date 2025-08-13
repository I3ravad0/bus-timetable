let timetable = {
    types: [],
    numbers: [],
    lastStops: [],
    nearest: [],
    next: [],
    language: 'RU'
}

function prepareInputData() {
    const inputNumber = document.querySelector('#input-number')
    const inputStop = document.querySelector('#input-stop')
    const inputTime = document.querySelector('#input-time')
    let inputType = document.getElementsByName('t-type')

    for (let i = 0; i < inputType.length; i++) {
        if (inputType[i].checked) {
            inputType = inputType[i].value
        }
    }
    const timetableIndex = alreadyInTimetable(inputNumber.value)
    if (timetableIndex == -1) {
        timetable.types.push(inputType)
        timetable.numbers.push(+inputNumber.value)
        timetable.lastStops.push(inputStop.value)
        timetable.nearest.push(+inputTime.value * 60)
        timetable.next.push('-')
    } else {
        if (+inputTime.value * 60 == timetable.nearest[timetableIndex]) {
            console.log('Nothing to change!');           
        } else if (+inputTime.value * 60 < 60 && timetable.nearest[timetableIndex] > 60) {
            timetable.next[timetableIndex] = timetable.nearest[timetableIndex]
            timetable.nearest[timetableIndex] = +inputTime.value * 60
        } else {
            if (+inputTime.value * 60 < timetable.nearest[timetableIndex]) {
               timetable.next[timetableIndex] = timetable.nearest[timetableIndex]
               timetable.nearest[timetableIndex] = +inputTime.value * 60 
            } else {
                timetable.next[timetableIndex] = +inputTime.value * 60
            }
        }
    }

    sortTimetable()
    updateTimetableHTML()
}

function timetableSwitchPoses(oldIndex, newIndex) {

    console.log(`Start switching from ${newIndex} to ${oldIndex}!`);
    timetableLog(oldIndex)
    timetableLog(newIndex)
    const tempTimetable = {
        types: '',
        numbers: 0,
        lastStops: '',
        nearest: '',
        next: '' 
    }

    // SAVE VALUE
    tempTimetable.types = timetable.types[newIndex]
    tempTimetable.numbers = timetable.numbers[newIndex]
    tempTimetable.lastStops = timetable.lastStops[newIndex]
    tempTimetable.nearest = timetable.nearest[newIndex]
    tempTimetable.next = timetable.next[newIndex]

    // SWITCH

    timetable.types[newIndex] = timetable.types[oldIndex]
    timetable.numbers[newIndex] = timetable.numbers[oldIndex]
    timetable.lastStops[newIndex] = timetable.lastStops[oldIndex]
    timetable.nearest[newIndex] = timetable.nearest[oldIndex]
    timetable.next[newIndex] = timetable.next[oldIndex]

    // LOAD FROM TEMP

    timetable.types[oldIndex] = tempTimetable.types
    timetable.numbers[oldIndex] = tempTimetable.numbers
    timetable.lastStops[oldIndex] = tempTimetable.lastStops
    timetable.nearest[oldIndex] = tempTimetable.nearest
    timetable.next[oldIndex] = tempTimetable.next

    console.log(`Switch from ${newIndex} to ${oldIndex} complete:`);
    timetableLog(oldIndex)
    timetableLog(newIndex)
}

// LOG TIMETABLE ROW BY {INDEX}
function timetableLog(i) {
    if (timetable.numbers[i]) {
        console.log(`| ${timetable.types[i]} | ${timetable.numbers[i]} | ${timetable.lastStops[i]} | ${timetable.nearest[i]} | ${timetable.next[i]} |`);
    } else {
        console.log(`${i}-row is clear!`);        
    }
    
}

// LOG ALL TIMETABLE
function timetableLogAll() {
    if (timetable.numbers[0]) {
        for (let i = 0; i < timetable.numbers.length; i++) {
            timetableLog(i)
        }
    } else {
        console.log(`Timetable is clear!`);
    }
}

// CHECK IF TRANSPORT ALREADY IN TIMETABLE ? {INDEX} : FALSE
function alreadyInTimetable(number) {
    for (let i = 0; i < timetable.numbers.length; i++) {
        if (timetable.numbers[i] == number) {
            return i;
        }
    }
    return -1;
}

// SORT TIMETABLE BY NEAREST
function sortTimetable() {
    for (let i = 0; i < timetable.numbers.length - 1; i++) {
        for (let j = i + 1; j < timetable.numbers.length; j++) {
            if (timetable.nearest[i] != '<1' && timetable.nearest[j] == '<1') {
                timetableSwitchPoses(i,j)
            } else if (timetable.nearest[i] != '<1' && timetable.nearest[j] != '<1') {
                if (+timetable.nearest[i] > +timetable.nearest[j]) {
                    timetableSwitchPoses(i,j)
                }
            }          
        }    
    }
}

function updateTimetableHTML() {
    const allTimetablesRows = document.querySelectorAll('.t-timetable')
    
    for (let i = 0; i < allTimetablesRows.length; i++) {
        allTimetablesRows[i].children.item(0).textContent = timetable.types[i]
        allTimetablesRows[i].children.item(1).textContent = timetable.numbers[i]
        allTimetablesRows[i].children.item(2).textContent = timetable.lastStops[i]
        if (timetable.nearest[i] === undefined) {
            allTimetablesRows[i].children.item(3).textContent = '-/-'
        } else if (timetable.nearest[i] < 60 && timetable.nearest[i] >= 0) {
            allTimetablesRows[i].children.item(3).textContent = '<1'
        } else if (timetable.nearest[i] < 0 && timetable.nearest[i] >= -10) {
            allTimetablesRows[i].children.item(3).textContent = '--'
            fadeText(i)
            setTimeout(() => {
                fadeText(i)
            }, 500)
        } else if (timetable.nearest[i] < -10) {
            timetable.nearest[i] = timetable.next[i];
            timetable.next[i] *= 2
            sortTimetable()
            
        } else {
            allTimetablesRows[i].children.item(3).textContent = Math.floor(timetable.nearest[i] / 60)
        }
        if (timetable.next[i] === undefined) {
            allTimetablesRows[i].children.item(4).textContent = '-/-'
        } else if (timetable.next[i] < 60 && timetable.next[i] >= 0) {
            allTimetablesRows[i].children.item(4).textContent = '<1'
        } else if (timetable.next[i] < 0) {
            allTimetablesRows[i].children.item(4).textContent = '--'
        } else {
            allTimetablesRows[i].children.item(4).textContent = Math.floor(timetable.next[i] / 60)
        }
    }
}

function runTests() {
    timetable = generateRandomTimetable(timetable)
    sortTimetable()
    updateTimetableHTML()
}

// TIMER CODE
let timerID;

function runTime() {
    timerID = setInterval(timerTick, 1000)
}

function clearTimer() {
    clearInterval(timerID)
}

function timerTick() {
    let str = ''
    for (let i = 0; i < timetable.nearest.length; i++) {
        timetable.nearest[i] -= 1
        timetable.next[i] -= 1
        str += `${timetable.nearest[i]} | `
    }
    console.log(str);
    updateTimetableHTML()
}

function fadeText(index) {
    const allTimetablesRows = document.querySelectorAll('.t-timetable')
    allTimetablesRows[index].classList.toggle('fade')
}