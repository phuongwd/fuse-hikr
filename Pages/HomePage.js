var hikes = require("hikes");

function chooseHike(arg) {
	// TODO
}

function goToHike(arg) {
	var hike = arg.data;
	router.push('editHike', hike);
}

module.exports = {
	hikes: hikes,

	chooseHike: chooseHike,
	goToHike: goToHike
};