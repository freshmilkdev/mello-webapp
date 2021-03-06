import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
// import {useProtectedRoute} from "./useProtectedRoute";
import {routes} from "./index";
import {loadState, localStorageKeys} from "../helpers/localStorage";

export const AppRoute = ({ component: Component, isAuthProtected = true, ...rest }) => {
    const {path} = rest;
    const accessToken = loadState(localStorageKeys.accessToken);
    // const {loading} = useProtectedRoute(accessToken, path);
    const isLogin = path === routes.login;
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!accessToken && !isLogin) {
                    return (
                        <Redirect
                            to={{pathname: routes.login, state: {from: props.location}}}
                        />
                    )
                }
                if (accessToken && isLogin) {
                    return (
                        <Redirect
                            to={{pathname: routes.home, state: {from: props.location}}}
                        />
                    )
                }

                // if (loading && token) return <div>Loading...</div>
                return (
                    <Layout>
                        <Component {...rest} {...props} />
                    </Layout>
                );
            }}
        />
    );
};
AppRoute.propTypes = {
    component: PropTypes.any,
    isAuthProtected: PropTypes.bool
};
