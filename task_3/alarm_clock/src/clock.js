
export class Clock {

    constructor(hour = 0, minute = 0) {
        this._hour = hour;
        this._minute = minute;
        
    }

    tick() {
        this._minute++;
        if (this._minute == 60) {
            this._minute = 0
            this._hour = (this._hour + 1) % 24;
        }
    }

    set alarm(alarm){
        this._alarm=alarm;
    }

    get alarm(){
        return this._alarm;
    }

    get isTriggered(){
        return this.time>=this.alarm
    }

    get time() {
        return {
            "minute": this._minute,
            "hour": this._hour
        }
    }

}
