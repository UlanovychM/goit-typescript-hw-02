import { FC, forwardRef } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.type';

const ImageGallery: FC<ImageGalleryProps> = forwardRef(
	({ images, onOpen }, ref): JSX.Element => {
		return (
			<>
				<ul className={css.list} ref={ref}>
					{images.map(image => (
						<li
							key={image.id}
							onClick={() => {
								onOpen(image);
							}}
						>
							<ImageCard image={image} />
						</li>
					))}
				</ul>
			</>
		);
	}
);

export default ImageGallery;
