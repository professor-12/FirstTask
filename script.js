const Weekday = [
    'Sunday','Monday','TuesDay','WednesDay','Thursday','Friday','Saturday'
]
const date = new Date().getDay()

const getTime = new Date().toUTCString()
console.log(getTime)



const SetTime = () => {
const hour = new Date().getUTCHours()
const minute = new Date().getUTCMinutes()
const second = new Date().getUTCSeconds()
    const CurrentTime = `${hour} : ${minute} : ${second}`
    document.getElementById('time').textContent =   CurrentTime
    
}


const currentDate = (Weekday[date])

document.getElementById('date').innerHTML =   currentDate;



setInterval(SetTime, 100);

