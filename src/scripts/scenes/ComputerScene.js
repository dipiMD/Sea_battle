class ComputerScene extends Scene {
	untouchables = [];
	playerTurn = true;

	start (untouchables) {
		const { opponent } = this.app;

		const randomButton = document.querySelector(".random");
		randomButton.classList.add("hidden");

		opponent.clear();
		opponent.randomize(ShipView);

		this.untouchables = untouchables;
	}

	update() {
		const { mouse, opponent, player } = this.app;


		const cells = opponent.cells.flat();
		cells.forEach((cell) => cell.classList.remove("battlefield-item__active"));


		if (isUnderPoint(mouse, opponent.table)) {
			const cell = cells.find((cell) => isUnderPoint(mouse, cell));

			if (cell) {
				cell.classList.add("battlefield-item__active");

				if (this.playerTurn && mouse.left && !mouse.pLeft) {
					const x = parseInt(cell.dataset.x);
					const y = parseInt(cell.dataset.y);

					const shot = new ShotView(x, y);
					const result = opponent.addShot(shot);

					if (result) {
						this.playerTurn = shot.variant === "miss" ? false : true;

						// TODO: обновление поля количества кораблей, если корабль убит

						//if (shot.variant === "killed") {
						//	for (let i = 0; i < 10; i++) {
						//		const ship = opponent.ships[i];


						//}
					}
				}
			}
		}

		if (!this.playerTurn) {
			const x = getRandomBetween(0, 9);
			const y = getRandomBetween(0, 9);

			let inUntouchable = false;

			for (const item of this.untouchables) {
				if (item.x === x && item.y === y) {
					inUntouchable = true;
					break;
				}
			}

			if (!inUntouchable) {
				const shot = new ShotView(x, y);
				const result = player.addShot(shot);

				if (result) {
					this.playerTurn = shot.variant === "miss" ? true : false;

					// TODO: обновление поля количества кораблей, если корабль убит
				}
			}
		}

		//if (this.playerTurn) {
		//	this.status.textContent = "Ваш ход:";
		//} else {
		//	this.status.textContent = "Ход комьютера:";
		//}

	}
}
