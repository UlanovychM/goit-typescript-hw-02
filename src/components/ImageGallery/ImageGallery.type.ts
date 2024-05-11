import { Images } from '../App/App.types';

export interface ImageGalleryProps {
	images: Images[];
	onOpen: (image: object) => void;
}
