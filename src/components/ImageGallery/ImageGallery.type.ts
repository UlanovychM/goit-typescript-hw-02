import { Images } from '../App/App.types';
import { LegacyRef } from 'react';

export interface ImageGalleryProps {
	images: Images[];
	onOpen: (image: object) => void;
	ref: LegacyRef<HTMLUListElement>;
}
