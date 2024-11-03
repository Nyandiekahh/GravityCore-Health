'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Heart, Users, Building2, Shield, Clock } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const statsFadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className={styles.container}>
      <div className={styles.medicalDecoration}>
        <div className={styles.pulseRing}></div>
        <div className={styles.pulseRing} style={{ left: '75%', top: '30%' }}></div>
        <div className={styles.heartbeat}></div>
        <div className={styles.dnaHelix}></div>
        <div className={styles.crossSymbol}></div>
        <div className={styles.crossSymbol} style={{ right: '10%', top: '20%' }}></div>
        
        {/* Floating Medical Icons */}
        <div className={styles.floatingIcon} style={{ top: '15%', left: '20%' }}>
          <Heart size={24} />
        </div>
        <div className={styles.floatingIcon} style={{ top: '75%', right: '15%' }}>
          <Activity size={24} />
        </div>
        <div className={styles.floatingIcon} style={{ top: '35%', right: '25%' }}>
          <Building2 size={24} />
        </div>
      </div>

      <main className={styles.main}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          GravityCore Health
        </motion.h1>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Advanced Healthcare Management System
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/login" className={styles.loginButton}>
            Access Portal
            <span className={styles.arrow}>→</span>
          </Link>
        </motion.div>

        <div className={styles.stats}>
          <motion.div className={styles.stat} {...statsFadeIn} transition={{ delay: 0.7 }}>
            <Clock className={styles.statIcon} />
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Healthcare Access</span>
          </motion.div>

          <motion.div className={styles.stat} {...statsFadeIn} transition={{ delay: 0.8 }}>
            <Building2 className={styles.statIcon} />
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Medical Facilities</span>
          </motion.div>

          <motion.div className={styles.stat} {...statsFadeIn} transition={{ delay: 0.9 }}>
            <Users className={styles.statIcon} />
            <span className={styles.statNumber}>1M+</span>
            <span className={styles.statLabel}>Patient Records</span>
          </motion.div>
        </div>

        <motion.div 
          className={styles.features}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className={styles.featureCard}>
            <Shield size={24} />
            <h3>Secure Records</h3>
            <p>End-to-end encrypted patient data</p>
          </div>
          <div className={styles.featureCard}>
            <Activity size={24} />
            <h3>Real-time Updates</h3>
            <p>Instant access to medical records</p>
          </div>
          <div className={styles.featureCard}>
            <Users size={24} />
            <h3>Collaborative Care</h3>
            <p>Connected healthcare providers</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}