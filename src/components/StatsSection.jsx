import styles from './StatsSection.module.css';

const StatsSection = () => {
    const stats = [
        {
            value: '5+',
            label: 'End-to-End Products Designed',
        },
        {
            value: '4',
            label: 'Live Platforms in Production',
        },
        {
            value: '2+ Years',
            label: 'Designing Real-World Systems',
        }
    ];

    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <h2 className={styles.value}>{stat.value}</h2>
                            <p className={styles.label}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
