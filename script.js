const Weekday = [
    'Sunday','Monday','TuesDay','WednesDay','Thursday','Friday','Saturday'
]
const date = new Date().getDay()

const getTime = new Date().toUTCString()
console.log(getTime)


const hour = new Date().getUTCHours()
const minute = new Date().getUTCMinutes()
setInterval(()=> {
    
},1000)

const CurrentTime = `${hour} : ${minute}`
const currentDate = (Weekday[date])


document.getElementById('time').innerHTML =   CurrentTime
document.getElementById('date').innerHTML =   currentDate


