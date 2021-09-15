import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import {useProtectedRoute} from "./useProtectedRoute";
import {routes} from "./index";
import {loadState, tokenKey} from "../helpers/localStorage";

export const AppRoute = ({ component: Component, isAuthProtected = true, ...rest }) => {
    const {path} = rest;
    const token = loadState(tokenKey);
    const {loading} = useProtectedRoute(token, path);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (token && path === routes.login) {
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
