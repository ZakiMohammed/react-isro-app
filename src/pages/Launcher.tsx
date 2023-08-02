import { useEffect } from 'react';
import appService from '../services/app.service';
import Container from '../components/Container';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setLoading } from '../reducers/AppReducers';
import PageTitle from '../components/PageTitle';
import {
  selectLaunchersFiltered,
  getAll as getLaunchers,
  clearSearch,
  search,
  selectSearchValue,
} from '../reducers/LauncherReducers';
import NoRecords from '../components/NoRecords';
import Search from '../components/Search';
import Icon from '../components/Icon';

const Launcher = () => {
  const filtered = useAppSelector(selectLaunchersFiltered);
  const searchValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getAll = async () => {
      try {
        dispatch(setLoading(true));
        const data = await appService.getLaunchers();
        dispatch(getLaunchers(data.launchers));
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
      <PageTitle title="Launcher" icon={'launcher'} />

      <Search
        placeholder="Search launcher..."
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
              {filtered.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">
                        <Icon icon="launcher" classes="w-10" />
                      </div>
                      <div>
                        <div className="font-bold">{item.id}</div>
                        <div className="text-sm opacity-50">Launcher</div>
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

export default Launcher;
