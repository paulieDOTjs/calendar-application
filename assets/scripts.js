function initScript() {
    const times = [{
        time: "9AM",
        value: "",
    },
    {
        time: "10AM",
        value: "",
    },
    {
        time: "11AM",
        value: "",
    },
    {
        time: "12PM",
        value: "",
    },
    {
        time: "1PM",
        value: "",
    },
    {
        time: "2PM",
        value: "",
    },
    {
        time: "3PM",
        value: "",
    },
    {
        time: "4PM",
        value: "",
    },
    {
        time: "5PM",
        value: "",
    }]
    function createCalendar() {

        for (let i = 0; i < times.length; i++) {
            $('#container').append(`
            <div class="row">
                <div class="col-1 hour no-padding d-flex justify-content-end align-items-center">
                    `+ times[i].time + `
                </div>
                <div class="col-10 no-padding">
                    <textarea class="description" id="textArea`+ i + `"></textarea>
                </div>
                <div class="col-1 time-block no-padding">
                    <button class=saveBtn id="saveBtn`+ i + `"></button>
                </div>
            </div>
        </div>
        `);
            const saveEl = document.getElementById(`saveBtn` + i);
            const inputEl = document.getElementById(`textArea` + i);
            let savedValue = JSON.parse(localStorage.getItem("inputEl"+i));
            if (savedValue) {
                inputEl.value = savedValue;
            }
            saveEl.addEventListener("click", function () {
                let userInput = inputEl.value;
                console.log(userInput);
                console.log(i);
                saveInput(userInput, i, inputEl);
            });
        }
    }
    function saveInput(userInput, i, inputEl) {
        times[i].value = userInput
        inputEl
        localStorage.setItem('inputEl'+i, JSON.stringify(inputEl));
    }
    createCalendar();
} initScript();