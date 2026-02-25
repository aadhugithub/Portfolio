import { createContext, useState, useEffect, useContext } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }) => {
    const defaultSettings = {
        textSize: 'normal', // 'normal', 'large', 'x-large'
        reducedMotion: false,
        highContrast: false,
        colorBlindSafe: false,
        focusVisible: false,
        increasedSpacing: false,
        // Screen reader enhancements can be handled by aria tags, 
        // but we can toggle global ARIA live regions if needed.
    };

    const [settings, setSettings] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('portfolio-a11y');
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch {
                    return defaultSettings;
                }
            }
        }
        return defaultSettings;
    });

    const updateSetting = (key, value) => {
        setSettings((prev) => ({
            ...prev,
            [key]: value
        }));
    };

    useEffect(() => {
        localStorage.setItem('portfolio-a11y', JSON.stringify(settings));

        const root = document.documentElement;

        // Apply dataset attributes for CSS to hook into
        if (settings.textSize !== 'normal') {
            root.setAttribute('data-a11y-text-size', settings.textSize);
        } else {
            root.removeAttribute('data-a11y-text-size');
        }

        if (settings.reducedMotion) {
            root.setAttribute('data-a11y-reduced-motion', 'true');
        } else {
            root.removeAttribute('data-a11y-reduced-motion');
        }

        if (settings.highContrast) {
            root.setAttribute('data-a11y-high-contrast', 'true');
        } else {
            root.removeAttribute('data-a11y-high-contrast');
        }

        if (settings.colorBlindSafe) {
            root.setAttribute('data-a11y-color-blind', 'true');
        } else {
            root.removeAttribute('data-a11y-color-blind');
        }

        if (settings.focusVisible) {
            root.setAttribute('data-a11y-focus', 'visible');
        } else {
            root.removeAttribute('data-a11y-focus');
        }

        if (settings.increasedSpacing) {
            root.setAttribute('data-a11y-spacing', 'increased');
        } else {
            root.removeAttribute('data-a11y-spacing');
        }
    }, [settings]);

    return (
        <AccessibilityContext.Provider value={{ settings, updateSetting }}>
            {children}
        </AccessibilityContext.Provider>
    );
};
