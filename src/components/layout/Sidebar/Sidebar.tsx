'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  Pill,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import styles from './styles.module.css';

const menuItems = [
  {
    path: '/patient/dashboard',
    icon: <LayoutDashboard size={20} />,
    label: 'Dashboard'
  },
  {
    path: '/patient/appointments',
    icon: <Calendar size={20} />,
    label: 'Appointments'
  },
  {
    path: '/patient/medical-history',
    icon: <ClipboardList size={20} />,
    label: 'Medical History'
  },
  {
    path: '/patient/prescriptions',
    icon: <Pill size={20} />,
    label: 'Prescriptions'
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className={styles.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.logo}>
          <h1>GravityCore Health</h1>
        </div>

        <nav className={styles.navigation}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.navItem} ${
                pathname === item.path ? styles.active : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on navigation
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.bottomMenu}>
          <Link href="/settings" className={styles.navItem} onClick={() => setIsMobileMenuOpen(false)}>
            <Settings size={20} />
            <span>Settings</span>
          </Link>
          <Link href="/login" className={styles.navItem} onClick={() => setIsMobileMenuOpen(false)}>
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}