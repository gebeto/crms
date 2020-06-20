const { syscall } = require("@crms/sys");

async function clone(username, repo) {
	if (!fs.existsSync("repos")) {
		fs.mkdirSync("repos");
	}
	if (!fs.existsSync(`repos/${username}`)) {
		// const res = await syscall(`git clone --depth=1 https://github.com/${username}/${repo} repos/${username}`);
		const res = await syscall(`git clone https://github.com/${username}/${repo} repos/${username}`);
	} else {
		// await syscall(`git fetch --quiet && git reset --hard origin/master`, `repos/${username}`);
	}
}

module.exports = clone;
