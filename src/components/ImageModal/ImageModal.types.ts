export interface ImagePropsModal {
	isOpen: boolean;
	data: {
		urls: {
			regular: string;
		};
		alt_description: string;
	};
	onClose: () => void;
}
