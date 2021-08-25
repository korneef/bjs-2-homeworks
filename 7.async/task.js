class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    };

    addClock(time, callback, idTimer) {
        if (idTimer === undefined) {
            throw new Error('error text');
        } else if (this.alarmCollection.some((item, idx) => item.id === idTimer)) {
            return console.error('Данный Id уже существует');
        };

        this.alarmCollection.push({ id, time, callback });
    };

    removeClock(idTimer) {
        let alarmIdx = this.alarmCollection.findIndex((item, idx) => item.id = idTimer);

        if (alarmIdx === -1) {
            console.log(`Будильника с id = ${idTimer} не существует`)
        } else {
            this.alarmCollection.slice(alarmIdx, alarmIdx);
        };
    };

    getCurrentFormattedTime() {
        let date = new Date();
        return time = date.getHours() + ':' + date.getMinutes()
    };
};

let time = new Date()