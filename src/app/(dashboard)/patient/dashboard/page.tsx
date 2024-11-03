'use client';
import { useState } from 'react';
import {
  CalendarDays,
  ActivitySquare,
  Heart,
  PillIcon,
  FileText,
} from "lucide-react";
import styles from './styles.module.css';

export default function PatientDashboard() {
  const [healthMetrics] = useState({
    nextAppointment: '2024-11-15',
    bloodPressure: '120/80',
    heartRate: '72 bpm',
    medicationReminders: 3,
    upcomingTests: 2
  });

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardTitle}>Patient Health Dashboard</h1>
      
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <CalendarDays size={24} className={styles.icon} />
          <h3>Next Appointment</h3>
          <p>{healthMetrics.nextAppointment}</p>
        </div>
        
        <div className={styles.metricCard}>
          <ActivitySquare size={24} className={styles.icon} />
          <h3>Blood Pressure</h3>
          <p>{healthMetrics.bloodPressure}</p>
        </div>
        
        <div className={styles.metricCard}>
          <Heart size={24} className={styles.icon} />
          <h3>Heart Rate</h3>
          <p>{healthMetrics.heartRate}</p>
        </div>
        
        <div className={styles.metricCard}>
          <PillIcon size={24} className={styles.icon} />
          <h3>Medication Reminders</h3>
          <p>{healthMetrics.medicationReminders} medications due</p>
        </div>
      </div>

      <div className={styles.recentActivity}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>
        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <FileText size={20} className={styles.icon} />
            <div className={styles.activityContent}>
              <h4>Blood Test Results</h4>
              <p>Dr. Smith reviewed your recent blood work</p>
              <small>2 days ago</small>
            </div>
          </div>

          <div className={styles.activityItem}>
            <CalendarDays size={20} className={styles.icon} />
            <div className={styles.activityContent}>
              <h4>Appointment Scheduled</h4>
              <p>Follow-up consultation with Dr. Johnson</p>
              <small>3 days ago</small>
            </div>
          </div>

          <div className={styles.activityItem}>
            <PillIcon size={20} className={styles.icon} />
            <div className={styles.activityContent}>
              <h4>Prescription Renewed</h4>
              <p>Your medication prescription has been renewed</p>
              <small>5 days ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}