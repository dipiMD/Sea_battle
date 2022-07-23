class ComputerScene extends Scene {
	start () {
		const randomButton = document.querySelector(".random");
		randomButton.classList.add("hidden");
	}

	update() {
		const { mouse, opponent, player } = this.app;


		const cells = opponent.cells.flat();
		cells.forEach((cell) => cell.classList.remove("battlefield-item__active"));


		if (isUnderPoint(mouse, opponent.table)) {
			const cell = cells.find((cell) => isUnderPoint(mouse, cell));

			if (cell) {
				cell.classList.add("battlefield-item__active");

				if (player && mouse.left && !mouse.pLeft) {
					const x = parseInt(cell.dataset.x);
					const y = parseInt(cell.dataset.y);

					const shot = new ShotView(x, y);
					const result = opponent.addShot(shot);

					if (result) {
						this.playerTurn = shot.variant === "miss" ? false : true;
					}
				}
			}
		}


	}
}
