import React from 'react';
import styles from './HomePage.module.scss';
import { TestComp } from '@shared/components';

interface HomePageProps {
    title: string;
    name: string;
}

const HomePage = (props: HomePageProps) => {
    return (
        <div className={styles.HomePage}>
            <h1>
                This is the Front Page of the application (Main Component)
                {props.title}
            </h1>
            <TestComp title="Welcome">I am a child</TestComp>
        </div>
    );
};

export default HomePage;
