'use client';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import styles from './layout.module.css';

export default function PatientDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutWrapper}>
      <Sidebar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}