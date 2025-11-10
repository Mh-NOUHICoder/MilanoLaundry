// This component assumes you are using Tailwind CSS.
// We use React.FC (Functional Component) for strong typing.

import React from 'react';

// Define the type for the component's props. Since it takes no props, 
// we use an empty object {}.
type LoadingProps = {}; 

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="flex justify-center items-center h-full w-full py-10">
      {/* The main spinner div.
        - w-8 h-8 for size
        - border-4 for thickness
        - border-t-transparent makes the top border clear, creating the 'gap'
        - border-cyan-400 sets the main color
        - rounded-full makes it a perfect circle
        - animate-spin applies a standard spin animation
      */}
      <div
        className="
          w-8 h-8 border-4 border-t-transparent 
          border-cyan-400 rounded-full animate-spin
        "
        role="status" // Accessibility role
        aria-label="loading" // Accessibility label
      >
        {/* Visually hidden text for screen readers */}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;