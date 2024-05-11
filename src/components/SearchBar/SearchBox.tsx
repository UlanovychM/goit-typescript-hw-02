import css from './SearchBox.module.css';
import toast from 'react-hot-toast';
import { SearchBoxProps } from './SearchBox.type';
import { FC, FormEvent } from 'react';

const SearchBar: FC<SearchBoxProps> = ({ onSearch }) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const form = e.currentTarget.elements.namedItem(
			'search'
		) as HTMLInputElement;
		const search: string = form.value.trim();
		if (search === '') {
			toast.error('Please enter search name of images!');
			return;
		}

		onSearch(search);
	};

	return (
		<div className={css.wrap}>
			<form onSubmit={handleSubmit} className={css.form}>
				<input
					className={css.input}
					type='text'
					name='search'
					placeholder='Search image...'
				/>
				<button className={css.btn}>Search</button>
			</form>
		</div>
	);
};

export default SearchBar;
