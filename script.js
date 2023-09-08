const date = new Date();
const Weekday = [
    'Sunday','Monday','TuesDay','WednesDay','Thursday','Friday','Saturday'
]



const index = date.getDay()
const currentDate = (Weekday[index])
document.querySelector('#date').innerText =   currentDate;

const Time = () => {
    const date = new Date() 
    const getTime = date.getTime()
    document.getElementById('getTime').textContent =   getTime
}


setInterval(Time,1000)





