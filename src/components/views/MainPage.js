import React, { Component, PropTypes } from 'react';
import MainPageHeader from '../headers/MainPageHeader';
import styles from '../../styleSheets/mainPage.css';

class MainPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.mainPageWrapper}>
                <MainPageHeader />
                <div className={styles.mainPageBody}>
                    <h3> This is body of the page</h3>
                </div>
            </div>

        );
    }
}

export default MainPage;
