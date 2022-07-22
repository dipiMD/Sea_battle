class stat {
    constructor (played, wins, singleCage, doubleCage, tripleCage, quadroCage, user_id) {
        this.played = played;
        this.wins = wins;
        this.singleCage = singleCage,
        this.doubleCage = doubleCage;
        this.tripleCage = tripleCage;
        this.quadroCage = quadroCage;
        this.user_id = user_id;
    }
}

module.exports = stat;