'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

type UserRole = 'patient' | 'admin' | 'medical';

export default function Login() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<UserRole>('patient');
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demonstration, just log the attempt
    console.log('Login attempt:', { ...formData, role: selectedRole });
    
    // Simple redirect based on role without authentication
    switch (selectedRole) {
      case 'patient':
        router.push('/patient/dashboard');
        break;
      case 'medical':
        router.push('/doctor/dashboard');
        break;
      case 'admin':
        router.push('/admin/dashboard');
        break;
    }
  };

  const getRoleSpecificLabel = () => {
    switch (selectedRole) {
      case 'patient':
        return 'National ID Number';
      case 'medical':
        return 'Medical License Number';
      case 'admin':
        return 'Admin ID';
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.logo}>
          <h1>GravityCore Health</h1>
        </div>

        <h2 className={styles.welcomeText}>Welcome Back</h2>
        <p className={styles.subtitle}>Sign in to your account to continue</p>

        <div className={styles.roleSelector}>
          <button
            className={`${styles.roleButton} ${selectedRole === 'patient' ? styles.activeRole : ''}`}
            onClick={() => setSelectedRole('patient')}
            type="button"
          >
            <span className={styles.roleIcon}>👤</span>
            Patient
          </button>
          <button
            className={`${styles.roleButton} ${selectedRole === 'medical' ? styles.activeRole : ''}`}
            onClick={() => setSelectedRole('medical')}
            type="button"
          >
            <span className={styles.roleIcon}>👨‍⚕️</span>
            Medical Staff
          </button>
          <button
            className={`${styles.roleButton} ${selectedRole === 'admin' ? styles.activeRole : ''}`}
            onClick={() => setSelectedRole('admin')}
            type="button"
          >
            <span className={styles.roleIcon}>🔑</span>
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="identifier">{getRoleSpecificLabel()}</label>
            <input
              type="text"
              id="identifier"
              value={formData.identifier}
              onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
              placeholder={`Enter your ${getRoleSpecificLabel()}`}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? '🔒' : '👁️'}
              </button>
            </div>
          </div>

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link href="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>
        </form>

        <div className={styles.footer}>
          <p>© {new Date().getFullYear()} GravityCore Health. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}