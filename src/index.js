/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var x = 0;
  var y = 0;
  var z = 0;

  if (preferences.length == 0) {finalcount = 0}
  	else {

	for (var n=0; n<=preferences.length-1; n++) {

	var kx = preferences[n];
	var ky = preferences[kx-1];
	var kz = preferences[ky-1];

	if ((kz == n+1)&&(kz != (ky))) {
		count++;
	}

	finalcount = count/3; // because each triangle will be counted 3 times abc, bca, cab
}
}

	return finalcount;
};
