# Running Progress Graph

This repository contains a React component that visualizes my 5K running times over the years.

## Code

The main component is in `RunTimesGraph.jsx`. It uses React and Recharts to create an interactive line graph of running times.

## Usage

To use this component:

1. Ensure you have React and Recharts installed in your project.
2. Copy the `RunTimesGraph.jsx` file into your project.
3. Import and use the component in your React application.

Example:
```jsx
import RunTimesGraph from './RunTimesGraph';

function App() {
  return (
    <div>
      <h1>My Running Progress</h1>
      <RunTimesGraph />
    </div>
  );
}
