export const convertUTCToLocal = (time: string, day: string): string => {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date();
  const dayMap: { [key: string]: number } = {
    'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
    'Thursday': 4, 'Friday': 5, 'Saturday': 6
  };
  
  date.setUTCHours(hours, minutes, 0);
  date.setUTCDate(date.getUTCDate() + (dayMap[day] - date.getUTCDay()));
  
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
}; 