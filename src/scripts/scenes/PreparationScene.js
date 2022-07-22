const shipDatas = [
	{ size: 4, direction: "row", },
	{ size: 3, direction: "row", },
	{ size: 3, direction: "row", },
	{ size: 2, direction: "row", },
	{ size: 2, direction: "row", },
	{ size: 2, direction: "row", },
	{ size: 1, direction: "row", },
	{ size: 1, direction: "row", },
	{ size: 1, direction: "row", },
	{ size: 1, direction: "row", },
];


class PreparationScene extends Scene {
	init() {
		const { player } = this.app;

		for (const { size, direction } of shipDatas) {
			const ship = new ShipView(size, direction );
			player.addShip(ship);
		}
	}
	start () {}
	update () {}
	stop () {}
}
