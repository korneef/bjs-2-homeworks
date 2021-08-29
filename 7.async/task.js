class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, callback, idTimer) {
        if (idTimer === undefined) {
            throw new Error('error text');
        } else if (this.alarmCollection.some((item, idx) => item.id === idTimer)) {
            return console.error('Данный Id уже существует');
        };

        this.alarmCollection.push({
            id: idTimer, time: time, callback: callback
        });
    };

    removeClock(idTimer) {
        let alarmIdx = this.alarmCollection.findIndex((item, idx) => item.id === idTimer);

        if (alarmIdx === -1) {
            console.log(`Будильника с id = ${idTimer} не существует`)
        } else {
           this.alarmCollection.splice(alarmIdx, 1);
        };
    };

    getCurrentFormattedTime(uppMinutes = 0) {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }

        let minutes = date.getMinutes() + uppMinutes;
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return hours + ':' + minutes;
    };

    start() {
        let savedThis = this;

        function checkClock(item) {
            if (savedThis.getCurrentFormattedTime() === item.time) {
                item.callback();
            };
        };

        function bruteForceAlarm() {
            savedThis.alarmCollection.forEach((item, idx) => {
                checkClock(item);
            });
        };

        if (this.timerId === null) {
            this.timerId = setInterval(() => bruteForceAlarm(), 10000);
        };
    };

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        };
    };

    printAlarms() {
        this.alarmCollection.forEach((item, idx) => console.log(item));
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
};

function testCase(alertName) {
    let phoneAlarm = new AlarmClock;

    //создание основого будильника и два будильника с +1й минутой от предыдущего
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('ПОДЪЕМ'), 1);
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(1), () => console.log('УЖЕ ВТОРОЙ БУДИЛЬНИК'), 2)
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(2), () => console.log('ТЫ ОСТАЛСЯ БЕЗ ЗАВТРАКА'), 3)

    //печать будильников
    phoneAlarm.printAlarms();

    //добавить будильник без id
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('ПОДЪЕМ'));

    //добавить будильник в существующий id
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('ПОДЪЕМ'), 1);

    //удалить будильник 
    phoneAlarm.removeClock(3);

    //после удаления еще раз печатаем будильники 
    phoneAlarm.printAlarms();

    //удалить будильник которого не существует
    phoneAlarm.removeClock(666);

    //запускаем будильники и курим (интервал setTimeout каждые 10 секунд, чтоыб Вам долго не ждать)
    phoneAlarm.start()

    //тормозим всё, чтобы не звенело
    phoneAlarm.stop()

    //еще раз смотрим будильники
    phoneAlarm.printAlarms();
};