import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

const Spinner = () => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        <>
            {promiseInProgress && (
                <div className={styles.loader}>
                    <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
                </div>
            )}
        </>
    );
};
export default Spinner;
