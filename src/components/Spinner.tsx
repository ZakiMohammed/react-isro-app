import { FaSpinner } from 'react-icons/fa';
import { selectLoading } from '../reducers/AppReducers';
import { useAppSelector } from '../hooks';

const Spinner = () => {
  const loading = useAppSelector(selectLoading);

  return (
    loading && (
      <div className="w-full h-full fixed top-0 flex justify-center items-center bg-indigo-400 bg-opacity-80">
        <div>
          <FaSpinner size={60} className="animate-spin fill-white" />
        </div>
      </div>
    )
  );
};

export default Spinner;
