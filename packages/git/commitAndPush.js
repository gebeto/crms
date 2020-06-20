const { syscall } = require("@crms/sys");

async function commitAndPush(username) {
	try {
		const res = await syscall(`git commit -am "test" && git push`,  `repos/${username}`);
		return true;
	} catch(err) {
		return false;
	}
}

module.exports = commitAndPush;
