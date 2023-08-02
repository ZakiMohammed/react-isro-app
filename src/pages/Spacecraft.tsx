import { useEffect } from 'react';
import appService from '../services/app.service';
import Container from '../components/Container';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setLoading } from '../reducers/AppReducers';
import PageTitle from '../components/PageTitle';
import {
  selectSpacecraftsFiltered,
  getAll as getSpacecrafts,
  clearSearch,
  search,
  selectSearchValue,
} from '../reducers/SpacecraftReducers';
import NoRecords from '../components/NoRecords';
import Search from '../components/Search';
import Icon from '../components/Icon';

const Spacecraft = () => {
  const filtered = useAppSelector(selectSpacecraftsFiltered);
  const searchValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getAll = async () => {
      try {
        dispatch(setLoading(true));
        const data = await appService.getSpacecrafts();
        dispatch(getSpacecrafts(data.spacecrafts));
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
      <PageTitle title="Spacecraft" icon={'rocket'} />

      <Search
        placeholder="Search spacecrafts..."
        value={searchValue}
        search={search}
        clearSearch={clearSearch}
      />

      {filtered && (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th className="w-1">#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">
                        <Icon icon="rocket" classes="w-10" />
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">Spacecraft</div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <NoRecords filtered={filtered} />
    </Container>
  );
};

export default Spacecraft;
