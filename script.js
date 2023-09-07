const Weekday = [
    'Sunday','Monday','TuesDay','WednesDay','Thursday','Friday','Saturday'
]
const date = new Date().getDay()

const getTime = new Date().toUTCString()
console.log(getTime)


const hour = new Date().getUTCHours()
const minute = new Date().getUTCMinutes()

const SetTime = () => {
    const CurrentTime = `${hour} : ${minute}`
    document.getElementById('time').innerHTML =   CurrentTime
    
}


const currentDate = (Weekday[date])

document.getElementById('date').innerHTML =   currentDate;

setInterval(SetTime, 100);

