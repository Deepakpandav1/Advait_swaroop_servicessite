import { useState, useEffect } from 'react';

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Get visitor count from localStorage or initialize
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Increment visitor count
    const newCount = currentCount + 1;
    setVisitorCount(newCount);
    
    // Store in localStorage
    localStorage.setItem('visitorCount', newCount.toString());
  }, []);

  return visitorCount;
};
