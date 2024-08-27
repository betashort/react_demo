import React from 'react'
import Profile from './Profile/Profile'
import TodoApp from './TodoApp/TodoApp'
import Dashboard from './Dashboard/Dashboard'

const Urls = [
    {path: '/', element: <Dashboard />, title: 'Home'},
    {path: '/profile', element: <Profile />, title: 'Profile'},
    {path: '/todo-app', element: <TodoApp />, title: 'Todo'},
]

export default Urls