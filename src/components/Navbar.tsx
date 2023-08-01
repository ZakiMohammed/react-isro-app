import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeNavLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'btn-active' : '';

  return (
    <>
      <li>
        <NavLink className={activeNavLink} to={'/'}>
          🏚️ Home
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNavLink} to={'/spacecrafts'}>
          🚀 Spacecraft
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNavLink} to={'/launchers'}>
          🛩️ Launcher
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNavLink} to={'/customer-satellites'}>
          🛰️ Customer Satellite
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNavLink} to={'/centers'}>
          🏛️ Centre
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNavLink} to={'/about'}>
          💖 About
        </NavLink>
      </li>
    </>
  );
};

export default Navbar;
