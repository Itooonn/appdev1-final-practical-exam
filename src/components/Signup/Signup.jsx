import styles from './Signup.module.css';   
import blossomFlower from '../../assets/blossom-flower.svg';   

function Signup() {
    return (
        <div className={styles.signupContainer}>
            {/* Left section */}
            <section className={styles.leftSection}>
            </section>

            {/* Right section */}
            <section className={styles.rightSection}>
                <img 
                    src={blossomFlower} 
                    alt="Blossom flower" 
                    className={styles.flowerImage} 
                />
            </section>
        </div>
    );
}

export default Signup;
