import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import {useProtectedRoute} from "./useProtectedRoute";

export const AppRoute = ({ component: Component, isAuthProtected = true, ...rest }) => {
    const {path} = rest;
    const {token, loading} = useProtectedRoute(path);
    return (
        <Route
            {...rest}
            render={(props) => {
                /*if (!token) {
                    // if the component is private and the user is not authorized
                    return (
                        <Redirect
                            to={{pathname: "/login", state: {from: props.location}}}
                        />
                    )
                }*/
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
