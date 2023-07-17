
// http://api.weatherapi.com/v1/current.json?key= 215dfed506944852abf64435231707&q=kerala&aqi=no

const temperatureField = document.querySelector(".temp")
const locationField = document.getElementsByClassName(".time_location p ")
const dateandTimeField = document.querySelector(".time_location span")
const conditionField = document.querySelector(".condition p")
const searchField = document.querySelector(".search_area")
const form = document.querySelector('form')
form.addEventListener('submit', searchForLocation)



let target ='kollam'

const fetchDetails =  async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key= 215dfed506944852abf64435231707&q=${targetLocation}&aqi=no`

    const res = await  fetch(url)

    const data =  await res.json()

    console.log(data);
    
     let Name = data.location.name
    
    let time = data.location.localtime
    let temp = data.current.temp_c+" °C"
    let condition = data.current.condition.text
     updateDetails( time, temp, Name, condition)
}
function updateDetails(  time, temp, Name, condition) {

    
     let spiltDate = time.split(' ')[0]
     let spiltTime = time.split(' ')[1]
    let currentDay = getDayName(new Date(spiltDate).getDay())
    temperatureField.innerText = temp
    locationField.innerHTML = Name
     dateandTimeField.innerText =`${spiltDate} ${currentDay} ${spiltTime}`
    conditionField.innerText = condition
   
}
function searchForLocation(e) {
    e.preventDefault()
    target = searchField.value
    fetchDetails(target)
}
fetchDetails(target)

 function getDayName(number){
    switch (number) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }


}