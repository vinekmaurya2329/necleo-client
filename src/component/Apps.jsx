// Import React and any other necessary modules
import React, { useState } from 'react';

// Define the ShowApps component
const Apps = () => {
  // State to manage the list of apps
  const [apps, setApps] = useState([
    'App 1',
    'App 2',
    'App 3',
    // Add more apps as needed
  ]);

  return (
    <div>
      <h1>Available Apps</h1>
      <ul>
        {/* Map through the list of apps and render each one */}
        {apps.map((app, index) => (
          <li key={index}>{app}</li>
        ))}
      </ul>
    </div>
  );
};

// Export the ShowApps component
export default Apps
