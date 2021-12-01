
export class Clock {

    constructor(hour = 0, minute = 0) {
        this._hour = hour;
        this._minute = minute;
        this._alarmHour = hour;
        this._alarmMinute = minute;
        this._alarmActive = false;
    }

    tick() {
        this._minute++;
        if (this._minute == 60) {
            this._minute = 0
            this._hour = (this._hour + 1) % 24;
        }
    }

    setAlarm(hour, minute) {
        this._alarmHour = hour;
        this._alarmMinute = minute;
        this._alarmActive = true;
    }

    deactivateAlarm() {
        this._alarmActive = false;
    }


    get isTriggered() {
        return this._alarmActive && (this._hour > this._alarmHour || (this._hour >= this._alarmHour && this._minute >= this._alarmMinute))
    }

    get time() {
        return {
            "hour": this._hour.toString().padStart(2, '0'),
            "minute": this._minute.toString().padStart(2, '0')
        }
    }

    get alarm() {
        return {
            "hour": this._alarmHour.toString().padStart(2, '0'),
            "minute": this._alarmMinute.toString().padStart(2, '0')
        }
    }

}
