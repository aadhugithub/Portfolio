import { useState } from 'react';
import classNames from 'classnames';
import styles from './TabSection.module.css';
import RecruiterView from './RecruiterView';
import WorkView from './WorkView';

const TabSection = () => {
    const [activeTab, setActiveTab] = useState('recruiter');

    return (
        <section id="work" className={styles.section}>
            <div className="container">
                <div className={styles.tabContainer}>
                    <div className={styles.tabList} role="tablist" aria-label="Views">
                        <button
                            role="tab"
                            aria-selected={activeTab === 'recruiter'}
                            aria-controls="recruiter-panel"
                            id="recruiter-tab"
                            onClick={() => setActiveTab('recruiter')}
                            className={classNames(styles.tab, { [styles.active]: activeTab === 'recruiter' })}
                        >
                            Recruiter
                        </button>
                        <button
                            role="tab"
                            aria-selected={activeTab === 'work'}
                            aria-controls="work-panel"
                            id="work-tab"
                            onClick={() => setActiveTab('work')}
                            className={classNames(styles.tab, { [styles.active]: activeTab === 'work' })}
                        >
                            Work
                        </button>
                    </div>
                </div>

                <div className={styles.tabContent}>
                    {activeTab === 'recruiter' ? (
                        <div id="recruiter-panel" role="tabpanel" aria-labelledby="recruiter-tab" className={classNames(styles.panel, styles.panelEnter)}>
                            <RecruiterView />
                        </div>
                    ) : (
                        <div id="work-panel" role="tabpanel" aria-labelledby="work-tab" className={classNames(styles.panel, styles.panelEnter)}>
                            <WorkView />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TabSection;
