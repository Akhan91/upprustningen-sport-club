type Schedule = {
  [day: string]: {
    [time: string]: string;
  };
};

export const timeSlots: string[] = [
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
];

export const days: string[] = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

export const schedule: Schedule = {
  'Måndag': { '18:00 - 19:00': 'Grappling' },
  'Tisdag': { '17:30 - 19:00': 'Kvinnor', '19:00 - 21:00': 'Brottning' },
  'Onsdag': { '18:00 - 19:00': 'Fys' },
  'Torsdag': { '17:30 - 18:30': 'Grappling', '19:00 - 21:00': 'Brottning' },
  'Lördag': { '11:00 - 12:30': 'Kvinnor', '19:00 - 21:00': 'Brottning' },
  'Söndag': { '13:00 - 14:30': 'Boxning' },
};