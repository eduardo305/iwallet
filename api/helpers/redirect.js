import Router from 'next/router';

export default (target, context = {}) => {
	// Handle redirect on the server
	if (context.res) {
		context.res.writeHead(303, { Location: target });
		context.res.end();
	} else {
		// Handle redirect on the client
		Router.replace(target);
	}
};
