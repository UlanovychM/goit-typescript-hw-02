import { FC } from 'react';
import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.type';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoad }) => {
	return (
		<div className={css.wrap}>
			<button className={css.btnmore} type='button' onClick={onLoad}>
				Load more
			</button>
		</div>
	);
};

export default LoadMoreBtn;
