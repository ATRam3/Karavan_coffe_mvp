import { useEffect, useState } from 'react';
import type { BusinessHours, DayKey } from '../types';

const DAY_BY_INDEX: DayKey[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

/** Addis Ababa is UTC+3 all year with no daylight saving. */
const CAFE_TIME_ZONE = 'Africa/Addis_Ababa';

export interface OpenStatus {
  isOpen: boolean;
  today: DayKey;
  /** Short human readable hint, e.g. "Closes at 21:00". */
  note: string;
}

const toMinutes = (value: string): number => {
  const [h, m] = value.split(':').map(Number);
  return h * 60 + m;
};

/** Current weekday + minutes-since-midnight in the cafe's own time zone. */
const getCafeNow = (date: Date): { day: DayKey; minutes: number } => {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: CAFE_TIME_ZONE,
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(date);

    const weekday = parts.find((p) => p.type === 'weekday')?.value.toLowerCase().slice(0, 3);
    const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0) % 24;
    const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);

    if (weekday && (DAY_BY_INDEX as string[]).includes(weekday)) {
      return { day: weekday as DayKey, minutes: hour * 60 + minute };
    }
  } catch {
    /* fall through to local time */
  }
  return {
    day: DAY_BY_INDEX[date.getDay()],
    minutes: date.getHours() * 60 + date.getMinutes(),
  };
};

export const computeOpenStatus = (hours: BusinessHours[], date: Date = new Date()): OpenStatus => {
  const { day, minutes } = getCafeNow(date);
  const todayHours = hours.find((h) => h.day === day);

  if (!todayHours || !todayHours.open || !todayHours.close) {
    return { isOpen: false, today: day, note: 'Closed today' };
  }

  const openAt = toMinutes(todayHours.open);
  const closeAt = toMinutes(todayHours.close);

  if (minutes >= openAt && minutes < closeAt) {
    return { isOpen: true, today: day, note: `Closes at ${todayHours.close}` };
  }
  if (minutes < openAt) {
    return { isOpen: false, today: day, note: `Opens at ${todayHours.open}` };
  }
  return { isOpen: false, today: day, note: 'Closed for today' };
};

/** Live open/closed status that re-evaluates every minute. */
export const useOpenStatus = (hours: BusinessHours[]): OpenStatus => {
  const [status, setStatus] = useState<OpenStatus>(() => computeOpenStatus(hours));

  useEffect(() => {
    const tick = () => setStatus(computeOpenStatus(hours));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [hours]);

  return status;
};
