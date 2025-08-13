// LANGUAGE SET
const languageWrapper = document.querySelector('#language-button-wrapper')

languageWrapper.addEventListener('click', (e) => {
    if (e.target.tagName == 'SPAN' && !e.target.classList.contains('active-language')) {
        changeLang()
    }
})

const ruLanguage = document.querySelector('#ru')
const enLanguage = document.querySelector('#en')

function changeLang() {
    if (ruLanguage.classList.contains('active-language')) {
        ruLanguage.classList.remove('active-language')
        enLanguage.classList.add('active-language')
        timetable.language = 'EN'
        translateTo('EN')
    } else {
        ruLanguage.classList.add('active-language')
        enLanguage.classList.remove('active-language')
        timetable.language = 'RU'
        translateTo('RU')
    }
}

function translateTo(language) {
    const languageNumber = document.querySelector('#language-number')
    const languageStop = document.querySelector('#language-stop')
    const languageTime = document.querySelector('#language-time')
    const languageNear = document.querySelector('#language-near')
    const languageNext = document.querySelector('#language-next')

    const languageFormLegend = document.querySelector('#language-form-legend')
    const languageFormNumber = document.querySelector('#language-form-number')
    const languageFormStop = document.querySelector('#language-form-stop')
    const languageFormTime = document.querySelector('#language-form-time')
    const languageFormTrolley = document.querySelector('#language-form-trolley')
    const languageFormBus = document.querySelector('#language-form-bus')
    const languageFormSend = document.querySelector('#language-form-send')
    const languageFormReset = document.querySelector('#language-form-reset')
    const languageFormRuntime = document.querySelector('#language-form-runtime')
    const languageFormStoptime = document.querySelector('#language-form-stoptime')
    const languageFormRuntest = document.querySelector('#language-form-runtest')
    const languageFormTReset = document.querySelector('#language-form-t-reset')

    if (language === 'EN') {
        languageNumber.textContent = '# T-RT'
        languageStop.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LAST&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        languageTime.textContent = 'ARRIVALS'
        languageNear.textContent = 'NEAR'
        languageNext.textContent = 'NEXT'
        languageFormLegend.textContent = 'Add transport'
        languageFormNumber.textContent = 'Route Number:'
        languageFormStop.textContent = 'Last stop:'
        languageFormTime.textContent = 'Time untill coming:'
        languageFormTrolley.textContent = 'Trolley'
        languageFormBus.textContent = 'Bus'
        languageFormSend.textContent = 'Send'
        languageFormReset.textContent = 'Reset form'
        languageFormRuntime.textContent = 'Start time'
        languageFormStoptime.textContent = 'Stop time'
        languageFormRuntest.textContent = 'Run tests'
        languageFormTReset.textContent = 'Reset timetable'


    } else {
        languageNumber.textContent = '№ Т-ТА'
        languageStop.innerHTML = '&nbsp;КОНЕЧНЫЙ ПУНКТ&nbsp;' 
        languageTime.textContent = 'ПРИБЫТИЕ'
        languageNear.textContent = 'БЛИЖ.'
        languageNext.textContent = 'СЛЕД.'
        languageFormLegend.textContent = 'Добавить транспорт'
        languageFormNumber.textContent = 'Номер транспорта:'
        languageFormStop.textContent = 'Конечная станция:'
        languageFormTime.textContent = 'Время до прибытия'
        languageFormTrolley.textContent = 'Троллейбус'
        languageFormBus.textContent = 'Автобус'
        languageFormSend.textContent = 'Отправить'
        languageFormReset.textContent = 'Сбросить форму'
        languageFormRuntime.textContent = 'Запустить время'
        languageFormStoptime.textContent = 'Остановить время'
        languageFormRuntest.textContent = 'Запустить тесты'
        languageFormTReset.textContent = 'Сбросить расписание'     
    }
}