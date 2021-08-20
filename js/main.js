const floors = document.querySelectorAll(".main__img path");
const currentFloorEl = document.querySelector(".num__value");
const upBtnEl = document.querySelector(".num__up");
const downBtnEl = document.querySelector(".num__down");
let currentFloor = 02;
floors.forEach((floor) => {
	floor.addEventListener("mouseover", function (e) {
		const currentHover = document.querySelector(".current");
		if (currentHover) {
			currentHover.classList.remove("current");
		}
		currentFloor = this.getAttribute("data-floor");
		currentFloorEl.innerHTML = currentFloor;
	});
	floor.addEventListener("click", function (e) {
		floor.classList.add("current");
	});
});

upBtnEl.addEventListener("click", function (e) {
	if (currentFloor < 18 && currentFloor >= 2) {
		currentFloor++;
		if (currentFloor < 10) currentFloor = "0" + currentFloor;
		currentFloorEl.innerHTML = currentFloor;
		const currentHover = document.querySelector(".current");
		if (currentHover) {
			currentHover.classList.remove("current");
		}
		document.querySelector(`[data-floor='${currentFloor}']`).classList.add("current");
	}
});
downBtnEl.addEventListener("click", function (e) {
	if (currentFloor < 19 && currentFloor > 2) {
		currentFloor--;
		if (currentFloor < 10) currentFloor = "0" + currentFloor;
		currentFloorEl.innerHTML = currentFloor;
		const currentHover = document.querySelector(".current");
		if (currentHover) {
			currentHover.classList.remove("current");
		}
		document.querySelector(`[data-floor='${currentFloor}']`).classList.add("current");
	}
});

const btn = document.querySelector(".main__btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const modalNumber = document.querySelector(".modal__number");
const rooms = document.querySelectorAll(".modal__rooms path");
const roomsList = document.querySelectorAll(".modal__list li");

btn.addEventListener("click", function (e) {
	if (modal) {
		modal.classList.add("active");
		modalNumber.textContent = currentFloorEl.textContent;
	}
});
modalClose.addEventListener("click", function (e) {
	if (modal) {
		modal.classList.remove("active");
		rooms.forEach((el) => {
			el.classList.remove("current-room");
		});
		roomsList.forEach((element) => {
			element.classList.remove("active");
		});
	}
});

rooms.forEach((room, i) => {
	room.addEventListener("mouseover", function (e) {
		rooms.forEach((el) => {
			el.classList.remove("current-room");
		});
		roomsList.forEach((element) => {
			element.classList.remove("active");
		});
		room.classList.add("current-room");
		roomsList[9 - i].classList.add("active");
	});
	room.addEventListener("click", function (e) {
		rooms.forEach((element) => {
			element.classList.remove("current-room");
		});
		room.classList.add("current-room");
	});
});

roomsList.forEach((element, i) => {
	element.addEventListener("mouseover", function (e) {
		roomsList.forEach((li) => {
			li.classList.remove("active");
		});
		rooms.forEach((room) => {
			room.classList.remove("current-room");
		});
		rooms[9 - i].classList.add("current-room");
		element.classList.add("active");
	});
});
