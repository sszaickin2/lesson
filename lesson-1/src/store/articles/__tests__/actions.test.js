import { getArticles, getArticlesFailure, getArticlesSuccess, GET_ARTICLES_SUCCESS } from "../actions";
//=====================================================================================================================
describe('getArticlesSuccess tests', () => {
	it('returns obj with type and payload', () => {
		const payload = [];
		const expected = {
			type: GET_ARTICLES_SUCCESS,
			payload,
		}
		const received = getArticlesSuccess(payload);
		expect(expected).toEqual(received);
	});
});
//=====================================================================================================================
describe('getArticlesTest', () => {
	//=====================================================================================================================
	it('calls fn passed as an arg with getArticlesSuc if fetch was successful', async () => {
		const mockDispatch = jest.fn();
		const result = ["test"];

		fetchMock.mockResponseOnce(JSON.stringify(result));
		await getArticles()(mockDispatch);
		expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(result));
	});
	//=====================================================================================================================
	it('calls fn passed as an arg with getArticlesFail if fetch was unsuccessful', async () => {
		const mockDispatch = jest.fn();
		const error = new Error('some fetch error');

		fetchMock.mockRejectOnce(error);
		await getArticles()(mockDispatch);
		expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesFailure(error));
	});
	//=====================================================================================================================
});
//=====================================================================================================================

