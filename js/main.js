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
