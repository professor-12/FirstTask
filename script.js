const Weekday = [
    'Sunday','Monday','TuesDay','WednesDay','Thursday','Friday','Saturday'
]
const date = new Date().getDay();





const Time = () => {
    const getTime = new Date().toUTCString()

    document.getElementById('getTime').textContent =   getTime
}
    

const currentDate = (Weekday[date])

document.getElementById('date').innerHTML =   currentDate;


setInterval(Time,1000)