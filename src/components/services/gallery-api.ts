import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const ACCESS_KEY = 'GEK5Uurp5MDRBkiseDO6xROL9qpSTR_if0WdLuhMfHo';

import toast from 'react-hot-toast';

const fetchImageApi = async (stringValue: string, pageNumber: number) => {
	const response = await axios.get('/search/photos', {
		params: {
			query: stringValue,
			page: pageNumber,
			per_page: 10,
			orientation: 'landscape',
			client_id: ACCESS_KEY,
		},
	});
	if (!response.data.total) {
		toast.error('On this value, images no found');
	}
	return {
		data: response.data.results,
		total_pages: response.data.total_pages,
	};
};

export default fetchImageApi;
