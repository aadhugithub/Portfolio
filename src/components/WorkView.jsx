import { ArrowUpRight } from 'lucide-react';
import styles from './WorkView.module.css';

const projects = [
    {
        id: 'field-ops',
        name: 'Field Operations Platform',
        summary: 'A unified platform for managing remote logistics and ground teams.',
        role: 'Lead Product Designer',
        contribution: 'UX Architecture, Design System Integration'
    },
    {
        id: 'edu-platform',
        name: 'Education Platform',
        summary: 'A scalable LMS for higher education institutions to manage coursework.',
        role: 'Senior UX Designer',
        contribution: 'Student Experience, Accessibility Compliance'
    },
    {
        id: 'donation-app',
        name: 'Donation App',
        summary: 'A micro-donation platform increasing retention through transparent tracking.',
        role: 'Product Designer',
        contribution: 'End-to-End Design, Prototyping'
    },
    {
        id: 'rent-pay',
        name: 'Rent Payment App',
        summary: 'A streamlined tool for tenants and landlords to track recurring payments.',
        role: 'UX/UI Designer',
        contribution: 'Payment Flow, Notification System'
    },
    {
        id: 'product-website',
        name: 'Product Website',
        summary: 'A high-conversion marketing site for a B2B SaaS startup.',
        role: 'Web Designer',
        contribution: 'Visual Identity, Motion Design'
    }
];

const WorkView = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {projects.map((p) => (
                    <article key={p.id} className={styles.projectCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.projectName}>{p.name}</h3>
                            <ArrowUpRight className={styles.arrowIcon} size={20} />
                        </div>
                        <p className={styles.projectSummary}>{p.summary}</p>
                        <div className={styles.meta}>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Role</span>
                                <span className={styles.metaValue}>{p.role}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Contribution</span>
                                <span className={styles.metaValue}>{p.contribution}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className={styles.skillsSection}>
                <div className={styles.skillBlock}>
                    <h4>Skills</h4>
                    <ul>
                        <li>Product Design</li>
                        <li>UX Strategy</li>
                        <li>Dashboard UX</li>
                        <li>Workflow Systems</li>
                        <li>Design Systems</li>
                    </ul>
                </div>

                <div className={styles.skillBlock}>
                    <h4>Tools</h4>
                    <ul>
                        <li>Figma</li>
                        <li>Framer</li>
                        <li>Notion</li>
                        <li>Adobe Suite</li>
                    </ul>
                </div>

                <div className={styles.skillBlock}>
                    <h4>Frontend Understanding</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WorkView;
