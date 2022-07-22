const shipDatas = [
	{ size: 4, direction: "row", startX: null, startY: null},
	{ size: 3, direction: "row", startX: null, startY: null},
	{ size: 3, direction: "row", startX: null, startY: null},
	{ size: 2, direction: "row", startX: null, startY: null},
	{ size: 2, direction: "row", startX: null, startY: null},
	{ size: 2, direction: "row", startX: null, startY: null},
	{ size: 1, direction: "row", startX: null, startY: null},
	{ size: 1, direction: "row", startX: null, startY: null},
	{ size: 1, direction: "row", startX: null, startY: null},
	{ size: 1, direction: "row", startX: null, startY: null},
];


class PreparationScene extends Scene {
	init() {
		const { player } = this.app;

		for (const { size, direction, startX, startY } of shipDatas) {
			const ship = new ShipView(size, direction, startX, startY);
			player.addShip(ship);
		}
		console.log(this.app);
	}
	start () {
		this.app.player.randomize(ShipView);
	}
	update () {
	//	const { mouse, player } = this.app;

	//	// Потенциально хотим начать тянуть корабль
	//	if (!this.draggedShip && mouse.left && !mouse.pLeft) {
	//		const ship = player.ships.find((ship) => ship.isUnder(mouse));

	//		if (ship) {
	//			const shipRect = ship.div.getBoundingClientRect();

	//			this.draggedShip = ship;
	//			this.draggedOffsetX = mouse.x - shipRect.left;
	//			this.draggedOffsetY = mouse.y - shipRect.top;

	//			ship.x = 1;
	//			ship.y = 1;
	//		}
	//	}

	//	// Перетаскивание
	//	if (mouse.left && this.draggedShip) {
	//		const { left, top } = player.root.getBoundingClientRect();
	//		const x = mouse.x - left - this.draggedOffsetX;
	//		const y = mouse.y - top - this.draggedOffsetY;

	//		this.draggedShip.div.style.left = `${x}px`;
	//		this.draggedShip.div.style.top = `${y}px`;
	//	}

	//	// Бросание
	//	if (!mouse.left && this.draggedShip) {
	//		const ship = this.draggedShip;
	//		this.draggedShip = 1;

	//		const { left, top } = ship.div.getBoundingClientRect();
	//		const { width, height } = player.cells[0][0].getBoundingClientRect();

	//		const point = {
	//			x: left + width / 2,
	//			y: top + height / 2,
	//		};

	//		const cell = player.cells
	//			.flat()
	//			.find((cell) => isUnderPoint(point, cell));

	//		if (cell) {
	//			const x = parseInt(cell.dataset.x);
	//			const y = parseInt(cell.dataset.y);

	//			player.removeShip(ship);
	//			player.addShip(ship, x, y);
	//		} else {
	//			player.removeShip(ship);
	//			player.addShip(ship);
	//		}
	//	}

	//	// Вращаение
	//	if (this.draggedShip && mouse.delta) {
	//		this.draggedShip.toggleDirection();
	//	}

	//	if (player.complete) {
	//		document.querySelector('[data-computer="simple"]').disabled = false;
	//		document.querySelector('[data-computer="middle"]').disabled = false;
	//		document.querySelector('[data-computer="hard"]').disabled = false;
	//	} else {
	//		document.querySelector('[data-computer="simple"]').disabled = true;
	//		document.querySelector('[data-computer="middle"]').disabled = true;
	//		document.querySelector('[data-computer="hard"]').disabled = true;
	//	}
	//}
	}
	stop () {}
}
