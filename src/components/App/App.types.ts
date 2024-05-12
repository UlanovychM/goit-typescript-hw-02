export interface Images {
	id: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
		small_s3: string;
	};
	alt_description: string;
	updated_at: string;
	links: {
		self: string;
		html: string;
		download: string;
		download_location: string;
	};
	likes: number;
}

export type DataRequest = {
	total: number;
	total_pages: number;
	results: Images[];
};
