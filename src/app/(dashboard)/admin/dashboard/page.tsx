'use client';
import { useState } from 'react';
import { Building2, UserPlus, Stethoscope, LineChart } from 'lucide-react';
import styles from './styles.module.css';

export default function AdminDashboard() {
  const [hospitalMetrics] = useState({
    totalPatients: 15420,
    activeDoctors: 89,
    occupancyRate: '75%',
    departmentCount: 12
  });

  return (
    <div className={styles.dashboardContainer}>
      <h1>Hospital Administration Dashboard</h1>
      
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <UserPlus className={styles.icon} />
          <h3>Total Patients</h3>
          <p>{hospitalMetrics.totalPatients}</p>
        </div>
        
        <div className={styles.metricCard}>
          <Stethoscope className={styles.icon} />
          <h3>Active Doctors</h3>
          <p>{hospitalMetrics.activeDoctors}</p>
        </div>
        
        <div className={styles.metricCard}>
          <Building2 className={styles.icon} />
          <h3>Occupancy Rate</h3>
          <p>{hospitalMetrics.occupancyRate}</p>
        </div>
        
        <div className={styles.metricCard}>
          <LineChart className={styles.icon} />
          <h3>Departments</h3>
          <p>{hospitalMetrics.departmentCount}</p>
        </div>
      </div>

      <div className={styles.performanceMetrics}>
        <h2>Hospital Performance</h2>
        <div className={styles.performanceGrid}>
          <div className={styles.performanceCard}>
            <h4>Patient Satisfaction</h4>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '85%' }}>85%</div>
            </div>
          </div>
          {/* Add more performance metrics as needed */}
        </div>
      </div>
    </div>
  );
}