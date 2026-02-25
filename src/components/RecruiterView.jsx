import styles from './RecruiterView.module.css';

const RecruiterView = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>Why hire me?</h2>
                <p className={styles.subtitle}>A brief overview of my value proposition for recruiters scanning quickly.</p>
            </header>

            <div className={styles.grid}>
                <section className={styles.card}>
                    <h3>What I Solve</h3>
                    <ul>
                        <li>Operational complexity</li>
                        <li>Decision visibility</li>
                        <li>Workflow friction</li>
                    </ul>
                </section>

                <section className={styles.card}>
                    <h3>My Product Thinking</h3>
                    <ul>
                        <li>User layer</li>
                        <li>System layer</li>
                        <li>Business layer</li>
                    </ul>
                </section>

                <section className={styles.card}>
                    <h3>Strength Areas</h3>
                    <ul>
                        <li>Designing complex dashboards</li>
                        <li>Building workflow systems</li>
                        <li>Creating scalable UX architecture</li>
                    </ul>
                </section>

                <section className={styles.card}>
                    <h3>Industries</h3>
                    <ul>
                        <li>Operations</li>
                        <li>Education</li>
                        <li>Financial workflows</li>
                        <li>Digital services</li>
                    </ul>
                </section>
            </div>

            <div className={styles.actions}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                    Download Resume
                </a>
                <a href="mailto:hello@example.com" className={styles.secondaryBtn}>
                    Contact
                </a>
            </div>
        </div>
    );
};

export default RecruiterView;
