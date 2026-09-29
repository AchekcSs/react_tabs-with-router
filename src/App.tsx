import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import cn from 'classnames';

import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { NotFound } from './pages/NotFound';

import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const getClassName = ({ isActive }: { isActive: boolean }) =>
    cn('navbar-item', { 'is-active': isActive });

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getClassName}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getClassName}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path="tabs">
              <Route index element={<Tabs tabs={tabs} />} />

              <Route path=":tabId" element={<Tabs tabs={tabs} />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
