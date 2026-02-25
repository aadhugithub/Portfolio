import { useAccessibility } from '../contexts/AccessibilityContext';
import styles from './AccessibilityPanel.module.css';
import { X } from 'lucide-react';

const AccessibilityPanel = ({ onClose }) => {
    const { settings, updateSetting } = useAccessibility();

    const handleToggle = (key) => {
        updateSetting(key, !settings[key]);
    };

    const handleTextSize = (size) => {
        updateSetting('textSize', size);
    };

    return (
        <div className={styles.panel} role="dialog" aria-label="Accessibility Settings">
            <div className={styles.header}>
                <h3 className={styles.title}>Accessibility</h3>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
                    <X size={18} />
                </button>
            </div>

            <div className={styles.content}>
                {/* Text Size */}
                <div className={styles.settingGroup}>
                    <p className={styles.label} id="text-size-label">Text Size</p>
                    <div className={styles.segmentedControl} role="group" aria-labelledby="text-size-label">
                        <button
                            onClick={() => handleTextSize('normal')}
                            aria-pressed={settings.textSize === 'normal'}
                            className={settings.textSize === 'normal' ? styles.activeSegment : styles.segment}
                        >
                            Default
                        </button>
                        <button
                            onClick={() => handleTextSize('large')}
                            aria-pressed={settings.textSize === 'large'}
                            className={settings.textSize === 'large' ? styles.activeSegment : styles.segment}
                        >
                            Large
                        </button>
                        <button
                            onClick={() => handleTextSize('x-large')}
                            aria-pressed={settings.textSize === 'x-large'}
                            className={settings.textSize === 'x-large' ? styles.activeSegment : styles.segment}
                        >
                            XL
                        </button>
                    </div>
                </div>

                {/* Toggles */}
                <ul className={styles.toggleList}>
                    <li>
                        <label className={styles.toggleRow}>
                            <span className={styles.toggleLabel}>Reduce Motion</span>
                            <input
                                type="checkbox"
                                checked={settings.reducedMotion}
                                onChange={() => handleToggle('reducedMotion')}
                                className={styles.checkbox}
                            />
                        </label>
                    </li>
                    <li>
                        <label className={styles.toggleRow}>
                            <span className={styles.toggleLabel}>High Contrast</span>
                            <input
                                type="checkbox"
                                checked={settings.highContrast}
                                onChange={() => handleToggle('highContrast')}
                                className={styles.checkbox}
                            />
                        </label>
                    </li>
                    <li>
                        <label className={styles.toggleRow}>
                            <span className={styles.toggleLabel}>Color-Blind Safe</span>
                            <input
                                type="checkbox"
                                checked={settings.colorBlindSafe}
                                onChange={() => handleToggle('colorBlindSafe')}
                                className={styles.checkbox}
                            />
                        </label>
                    </li>
                    <li>
                        <label className={styles.toggleRow}>
                            <span className={styles.toggleLabel}>Visible Focus Outline</span>
                            <input
                                type="checkbox"
                                checked={settings.focusVisible}
                                onChange={() => handleToggle('focusVisible')}
                                className={styles.checkbox}
                            />
                        </label>
                    </li>
                    <li>
                        <label className={styles.toggleRow}>
                            <span className={styles.toggleLabel}>Increased Spacing</span>
                            <input
                                type="checkbox"
                                checked={settings.increasedSpacing}
                                onChange={() => handleToggle('increasedSpacing')}
                                className={styles.checkbox}
                            />
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AccessibilityPanel;
