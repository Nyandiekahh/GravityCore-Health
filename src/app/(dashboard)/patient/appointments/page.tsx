'use client';
import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Plus, 
  Search,
  Filter
} from 'lucide-react';
import styles from './styles.module.css';

type AppointmentType = {
  id: string;
  doctorName: string;
  specialty: string;
  location: string;
  date: string;
  time: string;
  type: 'check-up' | 'follow-up' | 'consultation';
  status: 'upcoming' | 'completed' | 'cancelled';
};

export default function AppointmentsPage() {
  const [selectedView, setSelectedView] = useState<'upcoming' | 'history'>('upcoming');
  const [showBooking, setShowBooking] = useState(false);

  const appointments: AppointmentType[] = [
    {
      id: '1',
      doctorName: 'Dr. Sarah Smith',
      specialty: 'Cardiologist',
      location: 'Heart Care Center, Building A',
      date: '2024-11-15',
      time: '10:30 AM',
      type: 'check-up',
      status: 'upcoming'
    },
    // Add more appointments...
  ];

  return (
    <div className={styles.appointmentsContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1>My Appointments</h1>
          <p className={styles.subtitle}>Manage your upcoming appointments and medical visits</p>
        </div>
        <button 
          className={styles.newAppointmentBtn}
          onClick={() => setShowBooking(true)}
        >
          <Plus size={20} />
          Book Appointment
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className={styles.searchBar}>
        <div className={styles.searchInput}>
          <Search size={20} />
          <input 
            type="text" 
            placeholder="Search appointments..." 
          />
        </div>
        <button className={styles.filterBtn}>
          <Filter size={20} />
          Filters
        </button>
      </div>

      {/* View Toggle */}
      <div className={styles.viewToggle}>
        <button 
          className={`${styles.toggleBtn} ${selectedView === 'upcoming' ? styles.active : ''}`}
          onClick={() => setSelectedView('upcoming')}
        >
          Upcoming
        </button>
        <button 
          className={`${styles.toggleBtn} ${selectedView === 'history' ? styles.active : ''}`}
          onClick={() => setSelectedView('history')}
        >
          History
        </button>
      </div>

      {/* Appointments Grid */}
      <div className={styles.appointmentsGrid}>
        {appointments.map((appointment) => (
          <div key={appointment.id} className={styles.appointmentCard}>
            <div className={styles.cardHeader}>
              <span className={`${styles.typeBadge} ${styles[appointment.type]}`}>
                {appointment.type}
              </span>
              <span className={`${styles.statusBadge} ${styles[appointment.status]}`}>
                {appointment.status}
              </span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.doctorName}>{appointment.doctorName}</h3>
              <p className={styles.specialty}>{appointment.specialty}</p>

              <div className={styles.appointmentDetails}>
                <div className={styles.detail}>
                  <Calendar size={16} />
                  <span>{appointment.date}</span>
                </div>
                <div className={styles.detail}>
                  <Clock size={16} />
                  <span>{appointment.time}</span>
                </div>
                <div className={styles.detail}>
                  <MapPin size={16} />
                  <span>{appointment.location}</span>
                </div>
              </div>
            </div>

            <div className={styles.cardActions}>
              <button className={styles.rescheduleBtn}>Reschedule</button>
              <button className={styles.cancelBtn}>Cancel</button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal - We'll implement this separately */}
      {showBooking && (
        <div className={styles.bookingModal}>
          {/* Booking form will go here */}
        </div>
      )}
    </div>
  );
}