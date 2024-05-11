import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';
import { FC } from 'react';

const Loader: FC = () => {
	return (
		<div className={css.loader}>
			<RotatingLines
				visible={true}
				height='96'
				width='96'
				strokeColor='#3f51b5'
				strokeWidth='5'
				animationDuration='0.75'
				ariaLabel='rotating-lines-loading'
				wrapperStyle={{}}
				wrapperClass=''
			/>
		</div>
	);
};

export default Loader;
