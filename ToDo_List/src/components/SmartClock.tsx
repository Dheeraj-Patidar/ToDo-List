


import React, { useState, useEffect } from 'react';

const SmartClock=() => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [is24Hour, setIs24Hour] = useState<boolean>(false);
  const [timeZone, setTimeZone] = useState<string>('America/New_York'); 
  const [selectedCountry, setSelectedCountry] = useState<string>('US');

  const timeZones: { [key: string]: string } = {
    US: 'America/New_York',
    UK: 'Europe/London',
    India: 'Asia/Kolkata',
    Australia: 'Australia/Sydney',
    Japan: 'Asia/Tokyo',
    France: 'Europe/Paris',
    Germany: 'Europe/Berlin',
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date, is24Hour: boolean, timeZone: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: !is24Hour,
      timeZone,
    };

    return date.toLocaleString('en-US', options);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    setTimeZone(timeZones[selectedCountry]);
  };

  const toggleTimeFormat = () => {
    setIs24Hour(!is24Hour);
  };

  const formattedTime = formatTime(currentTime, is24Hour, timeZone);

  return (
    <div className='w-400 ml-10'>
      <div style={styles.timeDisplay}>
        <h1>{formattedTime}</h1>
      </div>
      <div >
        <label htmlFor="country" style={styles.label}>
          Select Country:
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          style={styles.select}
        >
          {Object.keys(timeZones).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <div style={styles.toggle}>
          <button onClick={toggleTimeFormat} style={styles.button}>
            Switch to {is24Hour ? '12-hour' : '24-hour'} format
          </button>
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  timeDisplay: {
    fontSize: '5rem',
    marginBottom: '20px',
  },
  controls: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  toggle: {
    marginTop: '10px',
  },
  label: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  select: {
    fontSize: '1.2rem',
    padding: '10px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default SmartClock;
