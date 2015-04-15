var DEFAULT_FINGERPRINT = '';

function applyFingerprint (filename, extension, fingerprint){
	return filename + (fingerprint ? ('-' + fingerprint) : '') + '.' + extension;
}

function resolveFingerprint (){
	var fingerprint = DEFAULT_FINGERPRINT,
		argIndex = -1;
	process.argv.forEach(function(val, index, array) {
		if (val === '--fingerprint') {
			argIndex = index + 1
		}
		if (index === argIndex) {
			fingerprint = val;
		}
	});
	return fingerprint;
}


module.exports = function fingerprintByCliArg(filename, extension) {
	return applyFingerprint(filename, extension, resolveFingerprint());
};