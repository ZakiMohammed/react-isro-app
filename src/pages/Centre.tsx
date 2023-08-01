import { useEffect } from 'react';
import appService from '../services/app.service';
import Container from '../components/Container';
import {
  getAll as getCentres,
  clearSearch,
  search,
  selectCentresFiltered,
  selectSearchValue,
} from '../reducers/CentreReducers';
import PageTitle from '../components/PageTitle';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setLoading } from '../reducers/AppReducers';
import NoRecords from '../components/NoRecords';
import Search from '../components/Search';

const Centre = () => {
  const filtered = useAppSelector(selectCentresFiltered);
  const searchValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getAll = async () => {
      try {
        dispatch(setLoading(true));
        const data = await appService.getCentres();
        dispatch(getCentres(data.centres));
      } catch (error) {
        console.log('Error Occurred', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (filtered === null) {
      getAll();
    }
  }, []);

  return (
    <Container>
      <PageTitle title="🏛️ Centre" />

      <Search
        placeholder="Search customer satellite by name, place, state..."
        value={searchValue}
        search={search}
        clearSearch={clearSearch}
      />

      {filtered && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {filtered.map(item => (
            <div className="card bg-base-100 shadow-xl" key={item.id}>
              <div className="card-body">
                <h2 className="card-title justify-between pb-4">
                  🏛️ {item.name}
                </h2>
                <p className="border-b-2 pb-2 flex justify-between">
                  <span className="font-semibold text-slate-500">Place</span>
                  <span>{item.Place}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-slate-500">State</span>
                  <span>{item.State}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <NoRecords filtered={filtered} />
    </Container>
  );
};

export default Centre;
