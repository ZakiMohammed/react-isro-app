import { ChangeEvent } from 'react';
import { useAppDispatch } from '../hooks';
import { SearchModel } from '../models/Search';

const Search = ({ placeholder, value, search, clearSearch }: SearchModel) => {
  const dispatch = useAppDispatch();

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value?.toLowerCase();
    if (!value) {
      dispatch(clearSearch());
      return;
    }

    dispatch(search(value));
  };

  const onClearSearch = () => {
    dispatch(clearSearch());
  };

  return (
    <>
      <div className="flex mb-5">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full"
          onChange={onSearch}
          autoFocus
          value={value || ''}
        />
        <button className="btn btn-light ms-3" onClick={onClearSearch}>
          ❌
        </button>
      </div>
    </>
  );
};

export default Search;
