import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Accessibility, Mail, Linkedin, Dribbble, Home, Box, User, Settings } from 'lucide-react';
import AccessibilityPanel from './AccessibilityPanel';
import Dock from './Dock';
import styles from './FooterNav.module.css';

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
            onClick: () => window.open('mailto:hello@example.com', '_blank'),
        },
        {
            icon: <Linkedin size={20} />,
            label: 'LinkedIn',
            onClick: () => window.open('https://linkedin.com', '_blank'),
        },
        {
            icon: <Dribbble size={20} />,
            label: 'Behance',
            onClick: () => window.open('https://behance.net', '_blank'),
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
