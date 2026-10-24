import styles from './Login.module.css';   
import blossomFlower from '../../assets/blossom-flower.svg';   

function Login({ onNavigateToSignup }) {
    return (
        <div className={styles.loginContainer}>
            {/* Left section */}
            <section className={styles.leftSection}>
                <div className={styles.formWrapper}>
                    <div className={styles.header}>
                        <h1>Welcome back!</h1>
                        <p className={styles.subtitle}>Enter your Credentials to access your account</p>
                    </div>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                required 
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <div className={styles.labelRow}>
                                <label htmlFor="password">Password</label>
                                <a href="#forgot" className={styles.forgotPassword}>Forgot password?</a>
                            </div>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                required 
                            />
                        </div>

                        <div className={styles.checkboxGroup}>
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">
                                Remember for 30 days
                            </label>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Login
                        </button>

                        <div className={styles.divider}>
                            <span>Or</span>
                        </div>

                        <div className={styles.socialButtons}>
                            <button type="button" className={styles.socialBtn}>
                                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                                </svg>
                                <span>Sign in with Google</span>
                            </button>

                            <button type="button" className={styles.socialBtn}>
                                <svg width="18" height="18" viewBox="0 0 170 170" fill="#000000" aria-hidden="true">
                                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.7-11.7-13.98-5.44-8.38-9.75-18.06-12.93-29.04-3.18-10.98-4.77-21.72-4.77-32.22 0-14.24 3.43-26.04 10.29-35.4 6.86-9.35 15.68-14.16 26.46-14.42 5.01 0 10.45 1.25 16.32 3.75 5.88 2.51 9.8 3.82 11.76 3.93 1.53-.11 5.61-1.48 12.24-4.11 6.63-2.64 12.29-3.78 16.98-3.42 12.86.87 23.01 5.72 30.45 14.54-11.11 6.75-16.55 16.12-16.33 28.11.22 9.58 3.97 17.58 11.26 24 3.7 3.37 8.01 5.87 12.93 7.51-2.4 7.07-5.44 14.36-9.13 21.87zM119.22 33.15c0-7.18 2.61-13.88 7.84-20.1 5.23-6.22 11.66-10.36 19.29-12.42-.43 2.5-.92 5.16-1.47 7.98-.54 2.83-1.47 5.76-2.77 8.8-1.52 3.59-3.7 6.96-6.53 10.11-2.83 3.15-6.09 5.66-9.79 7.51-1.96 1.09-4.13 1.85-6.53 2.29-.04-1.31-.04-2.71-.04-4.17z"/>
                                </svg>
                                <span>Sign in with Apple</span>
                            </button>
                        </div>
                    </form>

                    <div className={styles.footer}>
                        <p>
                            Don’t have an account? <a href="#signup" onClick={(e) => { e.preventDefault(); onNavigateToSignup ? onNavigateToSignup() : (window.location.hash = 'signup'); }}>Sign Up</a>
                        </p>
                    </div>
                </div>
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

export default Login;
