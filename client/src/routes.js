import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {CreateUser} from './pages/CreateUser'
import {MyProfile} from './pages/MyProfile'
import {AuthPage} from './pages/AuthPage'

export  const useRoutes = isAuthenticated =>{
    if (isAuthenticated){
        return(
            <Switch>
                <Route path="/home" exact>
                    <HomePage />
                </Route>
                <Route path="/createuser" exact>
                    <CreateUser />
                </Route>
                <Route path="/profile/:id" exact>
                    <MyProfile />
                </Route>
                <Redirect to="/createuser" />
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}