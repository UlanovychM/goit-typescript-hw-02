type urls = {
	regular: string;
};

type data = {
	urls: urls;
	alt_description: string;
};

export interface ImagePropsModal {
	isOpen: boolean;
	data: data;
	onClose: () => void;
}
