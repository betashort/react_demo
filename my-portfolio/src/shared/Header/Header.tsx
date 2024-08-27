import React from 'react'
import './Header.css'
import { BrowserRouter, Link, Outlet } from 'react-router-dom'
import Urls from '../../pages/Urls'

const Header = () => {
  const urls = Urls;
  return (
    <>
    <h2>βshortのホームページ</h2>
    <nav>
    <ul>
      {urls.map((url) => {
        return (
          <li key={url.title}>
            <a href={url.path}> {url.title}</a>
          </li>
        )
      })}
    </ul>
    </nav>
    </>
  )
};

export default Header