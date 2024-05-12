import Loader from 'react-ts-loaders';
import css from './Loader.module.css';

const LoaderSpinner = () => {
	return (
		<div className={css.loader}>
			<Loader type='spinner' color='#3f51b5' size={150} />
		</div>
	);
};

export default LoaderSpinner;
