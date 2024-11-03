'use client';
import { LucideIcon } from 'lucide-react';
import styles from './styles.module.css';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCard({
  icon: Icon,
  title,
  value,
  trend
}: StatsCardProps) {
  return (
    <div className={styles.statsCard}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} size={24} />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value}</p>
        
        {trend && (
          <div className={`${styles.trend} ${trend.isPositive ? styles.positive : styles.negative}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </div>
        )}
      </div>
    </div>
  );
}