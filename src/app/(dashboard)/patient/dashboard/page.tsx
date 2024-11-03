'use client';
import {
  CalendarDays,
  ActivitySquare,
  Heart,
  Link2,
  FileText
} from "lucide-react";
import styles from './styles.module.css';

interface ActivityItem {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  timeAgo: string;
}

export default function PatientDashboard() {
  const healthMetrics = [
    {
      icon: <CalendarDays className={styles.metricIcon} />,
      label: "Next Appointment",
      value: "2024-11-15"
    },
    {
      icon: <ActivitySquare className={styles.metricIcon} />,
      label: "Blood Pressure",
      value: "120/80"
    },
    {
      icon: <Heart className={styles.metricIcon} />,
      label: "Heart Rate",
      value: "72 bpm"
    },
    {
      icon: <Link2 className={styles.metricIcon} />,
      label: "Medication Reminders",
      value: "3 medications due"
    }
  ];

  const recentActivity: ActivityItem[] = [
    {
      id: '1',
      icon: <FileText size={20} className={styles.activityIcon} />,
      title: "Blood Test Results",
      description: "Dr. Smith reviewed your recent blood work",
      timeAgo: "2 days ago"
    },
    {
      id: '2',
      icon: <CalendarDays size={20} className={styles.activityIcon} />,
      title: "Appointment Scheduled",
      description: "Follow-up consultation with Dr. Johnson",
      timeAgo: "3 days ago"
    },
    {
      id: '3',
      icon: <Link2 size={20} className={styles.activityIcon} />,
      title: "Prescription Renewed",
      description: "Your medication prescription has been renewed",
      timeAgo: "5 days ago"
    }
  ];

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Patient Health Dashboard</h1>
      
      <div className={styles.metricsGrid}>
        {healthMetrics.map((metric, index) => (
          <div key={index} className={styles.metricCard}>
            {metric.icon}
            <div className={styles.metricContent}>
              <span className={styles.metricLabel}>{metric.label}</span>
              <span className={styles.metricValue}>{metric.value}</span>
            </div>
          </div>
        ))}
      </div>

      <section className={styles.activitySection}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>
        <div className={styles.activityList}>
          {recentActivity.map((activity) => (
            <div key={activity.id} className={styles.activityItem}>
              {activity.icon}
              <div className={styles.activityContent}>
                <h3 className={styles.activityTitle}>{activity.title}</h3>
                <p className={styles.activityDescription}>{activity.description}</p>
                <span className={styles.activityTime}>{activity.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}