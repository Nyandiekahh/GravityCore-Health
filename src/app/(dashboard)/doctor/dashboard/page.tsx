'use client';
import { useState } from 'react';
import { Users, Clock, FileCheck, AlertCircle, Activity } from 'lucide-react';
import styles from './styles.module.css';

export default function DoctorDashboard() {
  const [metrics] = useState({
    patientsToday: 12,
    pendingAppointments: 5,
    criticalCases: 2,
    completedConsultations: 45
  });

  return (
    <div className={styles.dashboardContainer}>
      <h1>Medical Staff Dashboard</h1>
      
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <Users className={styles.icon} />
          <h3>Today's Patients</h3>
          <p>{metrics.patientsToday} patients</p>
        </div>
        
        <div className={styles.metricCard}>
          <Clock className={styles.icon} />
          <h3>Pending Appointments</h3>
          <p>{metrics.pendingAppointments} pending</p>
        </div>
        
        <div className={styles.metricCard}>
          <AlertCircle className={styles.icon} />
          <h3>Critical Cases</h3>
          <p>{metrics.criticalCases} cases</p>
        </div>
        
        <div className={styles.metricCard}>
          <FileCheck className={styles.icon} />
          <h3>Completed</h3>
          <p>{metrics.completedConsultations} consultations</p>
        </div>
      </div>

      <div className={styles.upcomingAppointments}>
        <h2>Upcoming Appointments</h2>
        <div className={styles.appointmentsList}>
          <div className={styles.appointmentItem}>
            <Activity className={styles.icon} />
            <div>
              <h4>John Doe - Cardiology Follow-up</h4>
              <p>10:30 AM - Regular Checkup</p>
              <small>Patient History: Hypertension</small>
            </div>
          </div>
          {/* Add more appointments as needed */}
        </div>
      </div>
    </div>
  );
}