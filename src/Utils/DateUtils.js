export class DateUtils {
    static getTimeFromUnix(unixTime) {
        let timeStamp = new Date(unixTime * 1000)
        let hour = timeStamp.getHours()
        let meridiemHour = this.getAmPmFromTime(hour)
        let min = timeStamp.getMinutes()
        console.log(hour)
        console.log(min)
        if (meridiemHour === "PM") { hour -= 12; }
        if (min < 10) { min = `0${min}` }
        const convertedTime = `${hour}:${min} ${meridiemHour}`
        console.log(convertedTime)
        return convertedTime
    }

    static getAmPmFromTime(time) {
        return time > 12 ? "PM" : "AM"
    }

    static getLocalCityTime(UTCOffset) {
        const currDateTime = new Date()
        const rootLocalTime = currDateTime.getTime()
        console.log(rootLocalTime)
        const rootLocalOffset = currDateTime.getTimezoneOffset() * 60000
        const UTCTime = rootLocalTime + rootLocalOffset
        const cityLocalTime = UTCTime + (1000 * UTCOffset)
        console.log(cityLocalTime)
        this.getTimeFromUnix(cityLocalTime)
    }
}