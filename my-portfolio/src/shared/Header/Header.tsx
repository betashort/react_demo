import React from 'react'
import './Header.css'
import { BrowserRouter, Link, Outlet } from 'react-router-dom'
import Urls from '../../pages/Urls'

const Header = () => {
  const urls = Urls;
  return (
    <>
    <BrowserRouter>
    <h2>βshortのホームページ</h2>
    <nav>
    <ul>
      {urls.map((url) => {
        return (
          <li key={url.title}>
            <Link to={url.path}> {url.title}</Link>
          </li>
        )
      })}
    </ul>
    </nav>
    </BrowserRouter>
    </>
  )
};

export default Header