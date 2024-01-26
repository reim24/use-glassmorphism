# react-glassmorphism

## Installation

```bash
npm install use-glassmorphism
```

### or

```bash
yarn add use-glassmorphism
```

## Usage

```
import React from 'react';
import { useGlassmorphism, GlassOptions } from 'use-glassmorphism';

const MyComponent = () => {
  const glassRef = useGlassmorphism<HTMLDivElement>({
    color: 'rgba(255, 255, 255, 0.8)',
    blur: 10,
    transparency: 0.5,
    animation: {
      duration: 0.5,
      timingFunction: 'ease-in-out',
      delay: 0.1,
    },
  });

  return (
    <div ref={glassRef} style={{ width: '200px', height: '200px', padding: '20px' }}>
      {/* Your content goes here */}
    </div>
  );
};
```

## Options

- **color**: The color for the glassmorphic effect. Accepts RGB, RGBA, or hex values.
- **blur**: The blur strength for the glassmorphic effect. Should be in the range 0 to 20. Default is 5.
- **transparency**: The transparency level for the glassmorphic effect. Should be in the range 0 to 1.
- **animation**: Animation properties for the glassmorphic effect.
  - **duration**: The duration of the animation. Default is 0.3 seconds.
  - **timingFunction**: The timing function for the animation. Default is 'ease'.
  - **delay**: The delay before the animation starts. Default is 0 seconds.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
