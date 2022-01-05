/**
 * React Page Loader
 */
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const PageLoader = () => (
    <div className="page-loader d-flex justify-content-center mb-30">
        <CircularProgress />
    </div>
);

export default PageLoader;