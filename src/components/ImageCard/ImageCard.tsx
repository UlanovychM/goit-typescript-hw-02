import { FC } from 'react';
import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: FC<ImageCardProps> = ({
	image: {
		urls: { small },
		alt_description,
	},
}) => {
	return (
		<div>
			<img className={css.galleryImg} src={small} alt={alt_description} />
		</div>
	);
};

export default ImageCard;
