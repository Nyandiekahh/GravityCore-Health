'use client';
import { CalendarDays, Clock, User, Building2 } from 'lucide-react';
import styles from './styles.module.css';

interface AppointmentCardProps {
  id: string;
  doctorName: string;
  specialty: string;
  hospital: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  onViewDetails?: (id: string) => void;
}

export default function AppointmentCard({
  id,
  doctorName,
  specialty,
  hospital,
  date,
  time,
  status,
  onViewDetails
}: AppointmentCardProps) {
  return (
    <div className={`${styles.appointmentCard} ${styles[status]}`}>
      <div className={styles.header}>
        <div className={styles.statusBadge}>{status}</div>
        <button 
          onClick={() => onViewDetails?.(id)}
          className={styles.detailsButton}
        >
          View Details
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.infoGroup}>
          <User className={styles.icon} />
          <div>
            <h4>Doctor</h4>
            <p>{doctorName}</p>
            <span className={styles.specialty}>{specialty}</span>
          </div>
        </div>

        <div className={styles.infoGroup}>
          <Building2 className={styles.icon} />
          <div>
            <h4>Hospital</h4>
            <p>{hospital}</p>
          </div>
        </div>

        <div className={styles.timeInfo}>
          <div className={styles.infoGroup}>
            <CalendarDays className={styles.icon} />
            <div>
              <h4>Date</h4>
              <p>{date}</p>
            </div>
          </div>

          <div className={styles.infoGroup}>
            <Clock className={styles.icon} />
            <div>
              <h4>Time</h4>
              <p>{time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}