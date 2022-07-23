const countPlayer = [];
const countOpponent = [];

class ComputerScene extends Scene {
	untouchables = [];
	playerTurn = true;

	init() {
		countPlayer.push(document.querySelector(".ship-count.player.x4"),
						 document.querySelector(".ship-count.player.x3"),
						 document.querySelector(".ship-count.player.x2"),
						 document.querySelector(".ship-count.player.x1"));

		countOpponent.push(document.querySelector(".ship-count.opponent.x4"),
						   document.querySelector(".ship-count.opponent.x3"),
						   document.querySelector(".ship-count.opponent.x2"),
						   document.querySelector(".ship-count.opponent.x1"));

	}

	start(untouchables) {
		const { opponent } = this.app;

		const randomButton = document.querySelector(".random");
		randomButton.classList.add("hidden");

		opponent.clear();
		opponent.randomize(ShipView);

		this.untouchables = untouchables;

		const repeatbutton = document.querySelector('[data-action="repeat"]');
		repeatbutton.addEventListener('click', () => {
			this.app.start("preparation");
		});
	}

	stop() {
		const repeatbutton = document.querySelector('[data-action="repeat"]');
		repeatbutton.removeEventListener('click', () => {
			this.app.start("preparation");
		});
	}

	update() {
		const { mouse, opponent, player } = this.app;

		const isEnd = opponent.loser || player.loser;

		const cells = opponent.cells.flat();
		cells.forEach((cell) => cell.classList.remove("battlefield-item__active"));

		if (isEnd) {
			if (opponent.loser) {
				document.querySelector('.battle-now').src = "src/img/prise.png";
				document.querySelector('.battle-text').textContent = "You win!!";
			} else {
				document.querySelector('.battle-now').src = "src/img/sad.png";
				document.querySelector('.battle-text').textContent = "You lost..";
			}

			document.querySelector(".repeat").classList.remove("hidden");

			return;
		}

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

						if (shot.variant === "killed") {
							let counter = this.countShipStats(opponent);
							this.updateCounter(counter, countOpponent);
						}
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
					if (shot.variant === "killed") {
						let counter = this.countShipStats(player);
						this.updateCounter(counter, countPlayer);
					}
				}
			}
		}
	}

	countShipStats(user) {
		let arr = [0, 0, 0, 0];

		for (let i = 0; i < 10; i++) {
			const ship = user.ships[i];
			if (!ship.killed) {
				arr[ship.size - 1] += 1;
			}
		}
		return (arr.reverse());
	}

	updateCounter(counter, countDivs) {
		for (let i = 0; i < 4; i++)
		{
			countDivs[i].textContent = counter[i];
		}
	}
}
