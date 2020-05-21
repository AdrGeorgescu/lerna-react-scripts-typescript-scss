import React, { ReactNode } from 'react';
import styles from './TestComp.scss';

interface TestComp {
    title: string;
    children: ReactNode;
}

const TestComp = ({ title, children }: TestComp) => {
    return (
        <div className={styles.TestComp}>
            <h1>Shared components</h1>
            {title} - {children}
        </div>
    );
};

export default TestComp;
