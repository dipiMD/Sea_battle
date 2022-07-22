class ShipView extends Ship {
	div = null;

	constructor(size, direction) {
		super(size, direction);

		const div = document.createElement("div");
		div.classList.add("ship")

		this.div = div;
	}

	isUnder(point) {
		return (isUnderPoint(point, this.div));
	}
}
