import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Sidbar from '../Components/Sidbar';
import './../css/style.css?v=0.01';

const HomeLeyout = () => {
    return (
        <>
            <Sidbar />

            <Header />

            <Outlet />
        </>
    );
};

export default HomeLeyout;