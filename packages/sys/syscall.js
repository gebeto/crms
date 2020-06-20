const { exec } = require("child_process");

const syscall = (command, root = null) => {
	return new Promise((res, rej) => {
		exec(command, { cwd: root }, (err, stdout, stderr) => {
			if (err) {
				rej(err);
			} else {
				res(stdout ? stdout : stderr);
			}
		});
	});
}

module.exports = syscall;