import { useEffect } from 'react';
import appService from '../services/app.service';
import Container from '../components/Container';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setLoading } from '../reducers/AppReducers';
import PageTitle from '../components/PageTitle';
import {
  selectCountries,
  selectCustomerSatellitesFiltered,
  getAll as getCustomerSatellites,
  clearSearch,
  search,
  selectSearchValue,
  getAllCountries,
} from '../reducers/CustomerSatelliteReducers';
import NoRecords from '../components/NoRecords';
import Search from '../components/Search';
import Icon from '../components/Icon';

const CustomerSatellite = () => {
  const countries = useAppSelector(selectCountries);
  const filtered = useAppSelector(selectCustomerSatellitesFiltered);
  const searchValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getAll = async () => {
      try {
        dispatch(setLoading(true));
        const data = await appService.getCustomerSatellites();
        dispatch(getCustomerSatellites(data.customer_satellites));

        if (countries === null) {
          const dataCountries = await appService.getCountries();
          dispatch(getAllCountries(dataCountries));
        }
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
      <PageTitle title="Customer Satellite" icon='satellite' />

      <Search
        placeholder="Search customer satellite by name, country, date, mass, launcher..."
        value={searchValue}
        search={search}
        clearSearch={clearSearch}
      />

      {filtered && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(item => (
            <div className="card bg-base-100 shadow-xl" key={item.id}>
              <div className="card-body">
                <h2 className="card-title justify-between pb-4">
                  <Icon icon="satellite" classes="w-8" />
                  <span>{item.id}</span>
                </h2>
                <p className="border-b-2 pb-2 flex justify-between">
                  <span className="font-semibold text-slate-500">Country</span>
                  <span>
                    <span className="pe-2">{item.country}</span>
                    {item.flag && (
                      <img
                        className="w-10 inline rounded border"
                        src={item.flag}
                        alt=""
                        width="40px"
                      />
                    )}
                  </span>
                </p>
                <p className="border-b-2 pb-2 flex justify-between">
                  <span className="font-semibold text-slate-500">
                    Launch Date
                  </span>
                  <span>{item.launch_date}</span>
                </p>
                <p className="border-b-2 pb-2 flex justify-between">
                  <span className="font-semibold text-slate-500">Mass</span>
                  <span>{item.mass}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-slate-500">Launcher</span>
                  <span>{item.launcher}</span>
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

export default CustomerSatellite;
