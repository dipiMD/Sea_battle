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
	start () {console.log("prep scene start")}
	update () {console.log("prep scene upd")}
	stop () {console.log("prep scene stop")}
}
