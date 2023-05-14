import React from 'react';
import { Outlet } from 'react-router-dom';

const Maincontainer = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Maincontainer;
