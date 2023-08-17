const staff = [
    {
        "id": 1,
        "name": "Alex Rosetta",
        "email": "alexyrosetta@egmail.com",
        "image": "staff-1.png",
    },
    {
        "id": 2,
        "name": "Maria July",
        "email": "mariajuly@egmail.com",
        "image": "staff-2.png",
    }
];
const services = [
    {
        "id": 1,
        "name": "Oral hygiene",
        "image": "service-1.png",
        "duration": "1 hour",
        "price": 50.00,
    },
    {
        "id": 2,
        "name": "Implants",
        "image": "service-2.png",
        "duration": "1 hour 30 minutes",
        "price": 120.00,
    }
];

const date = [
    "2023-01-04", "2023-01-05", "2023-01-06",
    "2023-02-04", "2023-02-05", "2023-02-06",
    "2023-03-04", "2023-03-05", "2023-03-06",
    "2023-04-04", "2023-04-05", "2023-04-06",
    "2023-05-04", "2023-05-05", "2023-05-06",
    "2023-06-04", "2023-06-05", "2023-06-06",
    "2023-07-04", "2023-07-05", "2023-07-06",
    "2023-08-04", "2023-08-05", "2023-08-06",
    "2023-09-04", "2023-09-05", "2023-09-06",
    "2023-10-04", "2023-10-05", "2023-10-06",
    "2023-11-04", "2023-11-05", "2023-11-06",
    "2023-12-04", "2023-12-05", "2023-12-06"];

const time = [
    {
        "start_time": "09:00",
        "end_time": "09:30"
    },
    {
        "start_time": "09:30",
        "end_time": "10:00"
    }
];

const staffItemsContainer = document.querySelector('.staff_items');
const staffs = document.querySelector('.reservation_main .staffs');
const servicess = document.querySelector('.reservation_main .services');
const dateTime = document.querySelector('.reservation_main .dates_times');
const confirmation = document.querySelector('.reservation_main .confirmation');

const staffConfirm = document.querySelector('.staffss .con');
const serviceConfirm = document.querySelector('.servicess .con');
const dateConfirm = document.querySelector('.date_timess .con');

const staffNum = document.querySelector('.staffss .num');
const serviceNum = document.querySelector('.servicess .num');
const dateNum = document.querySelector('.date_timess .num');
const confirmNum = document.querySelector('.confirmations .num');

serviceNum.style.backgroundColor = '#4d545a';
dateNum.style.backgroundColor = '#4d545a';
confirmNum.style.backgroundColor = '#4d545a';

const staffname = document.querySelector('.staffss p');
const serviceName = document.querySelector('.servicess p');
const dateName = document.querySelector('.date_timess p');
const confirmName = document.querySelector('.confirmations p');

staffname.style.color = '#4d545a';
serviceName.style.color = '#4d545a';
dateName.style.color = '#4d545a';
confirmName.style.color = '#4d545a';

staff.forEach(person => {
    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'items';

    const itemDiv = document.createElement('div');
    itemDiv.className = 'item staff';
    itemDiv.setAttribute('data-id', person.id);

    const imgElement = document.createElement('img');
    imgElement.src = `./assets/images/${person.image}`;
    imgElement.alt = '';

    const staffAboutDiv = document.createElement('div');
    staffAboutDiv.className = 'staff_about';

    const nameHeader = document.createElement('h6');
    nameHeader.textContent = person.name;

    const emailSpan = document.createElement('span');
    emailSpan.textContent = person.email;

    staffAboutDiv.appendChild(nameHeader);
    staffAboutDiv.appendChild(emailSpan);

    itemDiv.appendChild(imgElement);
    itemDiv.appendChild(staffAboutDiv);

    itemsDiv.appendChild(itemDiv);

    staffItemsContainer.appendChild(itemsDiv);
});

const serviceItemsContainer = document.querySelector('.service_items');

services.forEach(service => {
    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'items';

    const itemDiv = document.createElement('div');
    itemDiv.className = 'item service';
    itemDiv.setAttribute('data-id', service.id);

    const imgElement = document.createElement('img');
    imgElement.src = `./assets/images/${service.image}`;
    imgElement.alt = '';

    const staffAboutDiv = document.createElement('div');
    staffAboutDiv.className = 'staff_about';

    const nameHeader = document.createElement('h6');
    nameHeader.textContent = service.name;

    const durationSpan = document.createElement('span');
    durationSpan.textContent = service.duration;

    staffAboutDiv.appendChild(nameHeader);
    staffAboutDiv.appendChild(durationSpan);

    const priceSpan = document.createElement('span');
    priceSpan.className = 'price';
    priceSpan.textContent = service.price + '$';

    itemDiv.appendChild(imgElement);
    itemDiv.appendChild(staffAboutDiv);
    itemDiv.appendChild(priceSpan);

    itemsDiv.appendChild(itemDiv);

    serviceItemsContainer.appendChild(itemsDiv);
});

const staffItems = document.querySelectorAll('.item.staff');

staffItems.forEach(item => {
    item.addEventListener('click', () => {
        staffItems.forEach(otherItem => {
            otherItem.style.border = 'none';
        });

        item.style.border = '1px solid green';
    });
});

const serviceitems = document.querySelectorAll('.item.service');

serviceitems.forEach(item => {
    item.addEventListener('click', () => {
        serviceitems.forEach(otherItem => {
            otherItem.style.border = 'none';
        });

        item.style.border = '1px solid green';
    });
});

const nextServiceButton = document.querySelector('.reservation_main .staffs .next_button');
const nextDateButton = document.querySelector('.reservation_main .services .next_button');

const staffAlert = document.querySelector('.reservation_main .staffs .alert');
const serviceAlert = document.querySelector('.reservation_main .services .alert');


const prevServiceButton = document.querySelector('.reservation_main .services .back_button');
const prevDateButton = document.querySelector('.reservation_main .dates_times .back_button');

prevServiceButton.addEventListener('click', () => {
    servicess.classList.remove('block');
    servicess.classList.add('none');
    staffs.classList.remove('none');
    staffs.classList.add('block');
    staffAlert.classList.add('none');
})

prevDateButton.addEventListener('click', () => {
    dateTime.classList.remove('block');
    dateTime.classList.add('none');
    servicess.classList.remove('none');
    servicess.classList.add('block');
    serviceAlert.classList.add('none');
})

const staffss = document.querySelectorAll('.item.staff');
const servicee = document.querySelectorAll('.item.service');

let selectedStaff = null;
let selectedService = null;

servicee.forEach(item => {
    item.addEventListener('click', () => {
        servicee.forEach(otherItem => {
            otherItem.style.border = 'none';
        });

        item.style.border = '1px solid green';

        selectedService = {
            id: item.getAttribute('data-id'),
            name: item.querySelector('.staff_about h6').textContent,
            duration: item.querySelector('.staff_about span').textContent,
            price: item.querySelector('.price').textContent,
        };

        console.log(selectedService);
    });
});


staffss.forEach(item => {
    item.addEventListener('click', () => {
        staffss.forEach(otherItem => {
            otherItem.style.border = 'none';
        });

        item.style.border = '1px solid green';

        selectedStaff = {
            id: item.getAttribute('data-id'),
            name: item.querySelector('.staff_about h6').textContent,
        };

        console.log(selectedStaff);
    });
});

nextServiceButton.addEventListener('click', function () {
    const hasBorder = Array.from(staffItems).some(item => {
        return item.style.border === '1px solid green';
    });

    if (hasBorder) {
        staffs.classList.remove('block');
        staffs.classList.add('none');
        servicess.classList.remove('none');
    } else {
        staffAlert.classList.remove('none');
    }
})

nextDateButton.addEventListener('click', function () {
    const hasBorder = Array.from(serviceitems).some(item => {
        return item.style.border === '1px solid green';
    });

    if (hasBorder) {
        servicess.classList.remove('block');
        servicess.classList.add('none');
        dateTime.classList.remove('none');
    } else {
        serviceAlert.classList.remove('none');
    }
})

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let calendarr = document.querySelector(".days ul");
let month = document.querySelector(".month");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

let selectedDate = null;

function calendar() {
    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let days = new Date(currentYear, currentMonth + 1, 0).getDate();
    calendarr.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
        let day = document.createElement("li");
        day.classList.add("calendar-day");
        calendarr.appendChild(day);
    }

    for (let i = 1; i <= days; i++) {
        let day = document.createElement("li");
        day.textContent = i;

        let formatDate = new Date(currentYear, currentMonth, i + 1).toISOString().split("T")[0];

        if (date.includes(formatDate)) {
            day.classList.add("active");
        } else {
            day.classList.add("disabled");
        }

        day.addEventListener("click", function () {
            if (day.classList.contains("active")) {

                const times = document.querySelectorAll(".time");

                times.forEach(item => {
                    item.classList.remove("none");
                });

                let previousDay = null;

                if (previousDay) {
                    previousDay.style.backgroundColor = "#eceff2";
                    previousDay.style.color = "black";
                }

                day.style.backgroundColor = "#6C70DC";
                day.style.color = "white";

                const currentDate = document.querySelector(".selected_date .date");

                currentDate.innerHTML = formatDate;

                previousDay = day;

                selectedDate = {
                    date: currentDate.textContent
                }

                console.log(selectedDate);
            }
        });

        month.textContent = `${new Intl.DateTimeFormat('en-us', { month: 'long', year: 'numeric' }).format(new Date(currentYear, currentMonth, i))}`;

        calendarr.appendChild(day);
    }
}

const timesContainer = document.querySelector('.times');
timesContainer.innerHTML = "";
time.forEach(timeSlot => {
    const timeDiv = document.createElement('div');
    timeDiv.className = 'time none';
    timeDiv.style.cursor = 'pointer';

    const startTimeP = document.createElement('p');
    startTimeP.classList.add('startTime');
    startTimeP.textContent = timeSlot.start_time;

    const endTimeP = document.createElement('p');
    endTimeP.classList.add('endTime');
    endTimeP.textContent = timeSlot.end_time;

    timeDiv.appendChild(startTimeP);
    timeDiv.appendChild(endTimeP);

    timesContainer.appendChild(timeDiv);
});

const selectedTimes = document.querySelectorAll(".time");
const nextConfirmButton = document.querySelector('.reservation_main .dates_times .next_button');
const prevConfirmButton = document.querySelector('.reservation_main .confirmation .back_button');
const dateTimeAlert = document.querySelector('.reservation_main .dates_times .alert');

let selectedTime = null;

selectedTimes.forEach(item => {
    item.addEventListener("click", () => {
        selectedTimes.forEach(otherItems => {
            otherItems.style.backgroundColor = "#eceff2";
            otherItems.style.color = "black";
        });

        item.style.backgroundColor = "green";
        item.style.color = "white";
    });
});

selectedTimes.forEach(item => {
    item.addEventListener('click', () => {
        selectedTimes.forEach(otherItem => {
            otherItem.style.backgroundColor = "#eceff2";
            otherItem.style.color = "black";
        });

        item.style.backgroundColor = "green";
        item.style.color = "white";

        selectedTime = {
            start_time: item.querySelector('.startTime').textContent,
            end_time: item.querySelector('.endTime').textContent,
        };

        console.log(selectedTime);
    });
});

calendar();

const userDetail = document.querySelector('.user_detail');

nextConfirmButton.addEventListener('click', function () {
    const hasSelect = Array.from(selectedTimes).some(item => {
        return item.style.backgroundColor === 'green', item.style.color === 'white';
    });

    if (hasSelect) {
        dateTime.classList.remove('block');
        dateTime.classList.add('none');
        confirmation.classList.remove('none');
    } else {
        dateTimeAlert.classList.remove('none');
    }

    // Set user details
    userDetail.innerHTML = `
    <p>Staff:</p>
    <span>${selectedStaff.name}</span><br />
    <p>Service:</p>
    <span>${selectedService.name}</span><br />
    <p>Date:</p>
    <span>${selectedDate.date} / ${selectedTime.start_time} - ${selectedTime.end_time}</span><br />
    <p>Price:</p>
    <span class="price">${selectedService.price}</span>
`;
})

const name = document.getElementById("first_name");
const surname = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let userDetaill = null;

const confirmButton = document.querySelector('.reservation_main .confirmation .confirm_button');

confirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value != "" && surname.value != "" && email.value != "" && phone.value != "") {
        userDetaill = {
            name: name.value,
            surname: surname.value,
            email: email.value,
            phone: phone.value
        };
        console.log(userDetaill);

        let result = {
            customer: {
                name: userDetaill.name,
                surname: userDetaill.surname,
                email: userDetaill.email,
                phone: userDetaill.phone
            },

            date: selectedDate.date,
            service_id: selectedService.id,
            staff_id: selectedStaff.id,
            time: selectedTime.start_time
        }

        console.log(result);
    }
});

prevConfirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    confirmation.classList.add('none');
    dateTime.classList.add('block');
    dateTime.classList.remove('none');
})

function navMonth(direction) {
    if (direction === "prev") {
        if (currentMonth === 0) {
            currentMonth = 11;
        } else {
            currentMonth--;
        }
    } else if (direction === "next") {
        if (currentMonth === 11) {
            currentMonth = 0;
        } else {
            currentMonth++;
        }
    }

    calendar();
}

prev.addEventListener("click", function () {
    navMonth("prev")
})

next.addEventListener("click", function () {
    navMonth("next")
})

calendar();