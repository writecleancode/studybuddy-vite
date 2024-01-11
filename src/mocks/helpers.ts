import { DefaultBodyType, StrictRequest } from "msw";

export const authenticateRequest = (req: StrictRequest<DefaultBodyType>) => {
	const token = localStorage.getItem('__be_token__')?.trim() || null;
	const userToken = req.headers.get('Authorization')?.replace('Bearer', '').trim();

	return token === userToken;
};
