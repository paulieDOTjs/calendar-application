function initScript() {
    let time;
    const timeEl = document.getElementById("currentDay");
    let hourMoment= moment().get('hour');

    const times = [{
        time: "9AM",
        value: "",
        timeValue: 9,
    },
    {
        time: "10AM",
        value: "",
        timeValue: 10,
    },
    {
        time: "11AM",
        value: "",
        timeValue: 11,
    },
    {
        time: "12PM",
        value: "",
        timeValue: 12,
    },
    {
        time: "1PM",
        value: "",
        timeValue: 13,
    },
    {
        time: "2PM",
        value: "",
        timeValue: 14,
    },
    {
        time: "3PM",
        value: "",
        timeValue: 15,
    },
    {
        time: "4PM",
        value: "",
        timeValue: 16,
    },
    {
        time: "5PM",
        value: "",
        timeValue: 17,
    }]
    function createCalendar() {

        for (let i = 0; i < times.length; i++) {
            $('#container').append(`
            <div class="row">
                <div class="col-1 hour no-padding d-flex justify-content-end align-items-center" id=timeBlock`+ i +`>
                    `+ times[i].time + `
                </div>
                <div class="col-10 no-padding">
                    <textarea class="description" id="textArea`+ i + `"></textarea>
                </div>
                <div class="col-1 time-block no-padding">
                     <button class=saveBtn id="saveBtn`+ i + `"><img src="https://image.flaticon.com/icons/png/512/17/17636.png" class="lock"></button>
                </div>
            </div>
            `);
            const saveEl = document.getElementById(`saveBtn` + i);
            const inputEl = document.getElementById(`textArea` + i);
            let savedValue = JSON.parse(localStorage.getItem("inputEl" + i));
            
            colorify(inputEl, times, i);

            if (savedValue) {
                inputEl.value = savedValue;
            }
            saveEl.addEventListener("click", function () {
                let userInput = inputEl.value;
                saveInput(userInput, i, inputEl);
            });
        }
    }
    function saveInput(userInput, i) {
        times[i].value = userInput;
        localStorage.setItem('inputEl' + i, JSON.stringify(userInput));
    }

    function startClock() {
        myInterval = setInterval(function () {
            hourMoment = moment().get('hour');
            time = moment().format('MMMM Do YYYY, h:mm:ss a');
            timeEl.innerText = time;
        }, 1000);
    } startClock();

    function colorify(inputEl, times, i){
        let timeTimeValue = times[i].timeValue;
        if (timeTimeValue < hourMoment){
            inputEl.classList.add("past");
        } 
        else if (timeTimeValue === hourMoment) {
            inputEl.classList.add("present");
        } 
        else if (timeTimeValue > hourMoment) {
            inputEl.classList.add("future");
        }
    }

    createCalendar();
} initScript();