This is a timetable system for city monitors.
To the left - timetable table, to the right pushing form

Timetable shows:
  * Type of transport (bus - "A", trolley - "T")
  * Route number
  * Last stop name
  * Nearest transport (time in minutes; if "<1" that means <1 minutes; if "--" it has already arrived)
  * Next transport (time in minutes)

Pushing form can:
  * Add new transport to the timetable (for the first time you input time for nearest transport, if you want to input next time - fill the same type, route number and last stop name and input your time)
  * Start and stop clock
  * Reset the form
  * Fill timetable with random data

Using console you can see:
  * Timer log with all transport nearest time
  * Process of sorting timetable
Using console you can:
  * Log current transport using index => timetableLog(index)
  * Log all transport => timetableLogAll()
  * Check if transport already in timetable using route number => alreadyInTimetable(number) {if true return index, else return false}
