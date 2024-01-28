import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { useGlassmorphism } from '../lib/hooks/useGlassmorphism';
import { GlassOptions } from '../lib/types';
import './index.css';
const Demo = () => {
  const [options, setOptions] = useState<GlassOptions>({
    animation: {
      duration: 0.5,
      timingFunction: 'ease-in-out',
      delay: 0.2,
    },
    outline: 0.5,
  });
  const glassRef = useGlassmorphism<HTMLDivElement>(options);

  const handleChange = (key, value) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  return (
    <div className='glass-container'>
      <div
        className='ball'
        style={{
          backgroundColor: 'rgb(183 35 35)',
          top: '400px',
          left: '600px',
        }}
      ></div>
      <div
        className='ball'
        style={{
          backgroundColor: 'rgb(46, 48, 143)',
          top: '500px',
          right: '600px',
        }}
      ></div>
      <div ref={glassRef} className='content'>
        <h1>Glassmorphism Demo</h1>
        <div>
          <label>
            Background Color:
            <input
              type='color'
              value={options.color}
              onChange={(e) => handleChange('color', e.target.value)}
            />
          </label>

          <label>
            Blur:
            <input
              type='range'
              min={0}
              max={20}
              value={options.blur}
              onChange={(e) => handleChange('blur', Number(e.target.value))}
            />
            {options.blur}
          </label>

          <label>
            Transparency:
            <input
              type='range'
              min={0}
              max={1}
              step={0.01}
              value={options.transparency}
              onChange={(e) =>
                handleChange('transparency', Number(e.target.value))
              }
            />
            {options.transparency}
          </label>
          <label>
            Outline:
            <input
              type='range'
              min={0}
              max={1}
              step={0.01}
              value={options.outline}
              onChange={(e) => handleChange('outline', Number(e.target.value))}
            />
            {options.outline}
          </label>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Demo />);
