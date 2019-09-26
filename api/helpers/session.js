import cookie from 'js-cookie';

const setCookie = (name, value) => {
	if (process.browser) {
		cookie.set(name, value);
	}
};

const getCookie = (name, req) => {
	return process.browser
		? getCookieFromBrowser(name)
		: getCookieFromServer(name, req);
};

const getCookieFromBrowser = name => cookie.get(name);

const getCookieFromServer = (name, req) => {
	if (!req.headers.cookie) {
		return null;
	}
	const rawCookie = req.headers.cookie
		.split(';')
		.find(cookie => cookie.trim().startsWith(`${name}=`));

	return rawCookie ? rawCookie.split('=')[1] : null;
};

const section = {
	setCookie,
	getCookie
};

export default section;
