import styles from '../style/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/NatanaelSaymon.png" alt="Natanael Saymon"/>
            <div>
                <strong>Natanael Saymon</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}