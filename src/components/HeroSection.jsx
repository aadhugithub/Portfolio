import styles from './HeroSection.module.css';
import { ArrowDownRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.name}>Adarsh N &mdash; UI UX Designer</p>
                        <h1 className={styles.headline}>
                            I design systems that simplify complex workflows and help teams operate with clarity.
                        </h1>
                        <p className={styles.subtext}>
                            Experience designing operational platforms, education systems, payment tools, and product websites.
                        </p>
                    </div>

                    <div className={styles.actions}>
                        <a href="#work" className={styles.primaryCta}>
                            View Work <ArrowDownRight size={18} />
                        </a>
                        <a href="tel:+919539372035" className={styles.secondaryCta}>
                            Call Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
