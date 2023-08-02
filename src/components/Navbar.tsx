import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const Navbar = () => {
  const activeNavLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'btn-active' : '';

  return (
    <>
      <li>
        <NavLink className={activeNavLink} to={'/'}>
          <Icon icon="house" classes="w-4" /> Home
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNavLink} to={'/spacecrafts'}>
          <Icon icon="rocket" classes="w-4" /> Spacecraft
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNavLink} to={'/launchers'}>
          <Icon icon="launcher" classes="w-4" /> Launcher
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNavLink} to={'/customer-satellites'}>
          <Icon icon="satellite" classes="w-4" /> Customer Satellite
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNavLink} to={'/centers'}>
          <Icon icon="centre" classes="w-4" /> Centre
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNavLink} to={'/about'}>
          <Icon icon="heart" classes="w-4" /> About
        </NavLink>
      </li>
    </>
  );
};

export default Navbar;
