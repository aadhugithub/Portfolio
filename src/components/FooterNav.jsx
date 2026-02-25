import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Accessibility, Mail, Linkedin, Home, Box, User, Settings } from 'lucide-react';
import AccessibilityPanel from './AccessibilityPanel';
import Dock from './Dock';
import styles from './FooterNav.module.css';

const BehanceIcon = ({ size = 20, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M22 7h-7v-2h7v2zm1.776 5.574c0-3.11-2.034-5.574-5.336-5.574-3.109 0-5.334 2.464-5.334 5.574 0 3.11 2.225 5.574 5.334 5.574 3.012 0 4.885-1.895 5.234-4.238h-2.186c-.233 1.258-1.554 2.096-2.951 2.096-1.438 0-2.817-1.066-2.953-2.617h8.172c.01-.258.02-.534.02-.815zm-8.498-1.127c.214-1.358 1.458-2.292 2.977-2.292 1.419 0 2.508.835 2.723 2.292h-5.7zm-4.706-4.447H0v10h10.572V7zm-8.432 2.145H7.74c1.244 0 2.056.815 2.056 2.038 0 1.222-.812 2.037-2.056 2.037H2.14v-4.075zm5.6 6H2.14V13.2h5.6c1.244 0 2.056.814 2.056 2.037 0 1.223-.812 2.037-2.056 2.037z" />
    </svg>
);

const FooterNav = () => {
    const { theme, toggleTheme } = useTheme();
    const [a11yOpen, setA11yOpen] = useState(false);
    const panelRef = useRef(null);

    // Close panel on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (panelRef.current && !panelRef.current.contains(event.target)) {
                setA11yOpen(false);
            }
        };
        if (a11yOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [a11yOpen]);

    const dockItems = [
        {
            icon: theme === 'light' ? <Moon size={20} /> : <Sun size={20} />,
            label: 'Theme',
            onClick: toggleTheme,
        },
        {
            icon: <Accessibility size={20} />,
            label: 'Accessibility',
            onClick: () => setA11yOpen(!a11yOpen),
        },
        {
            icon: <Mail size={20} />,
            label: 'Email',
            onClick: () => window.open('mailto:aadhu333h007@gmail.com', '_blank'),
        },
        {
            icon: <Linkedin size={20} />,
            label: 'LinkedIn',
            onClick: () => window.open('https://www.linkedin.com/in/adarsh-n-351961244', '_blank'),
        },
        {
            icon: <BehanceIcon size={20} />,
            label: 'Behance',
            onClick: () => window.open('https://www.behance.net/aadhuadarsh', '_blank'),
        },
    ];

    return (
        <>
            <div ref={panelRef} className={styles.a11yPanelWrapper}>
                {a11yOpen && (
                    <AccessibilityPanel onClose={() => setA11yOpen(false)} />
                )}
            </div>
            <Dock items={dockItems} panelHeight={68} baseItemSize={50} magnification={70} />
        </>
    );
};

export default FooterNav;
