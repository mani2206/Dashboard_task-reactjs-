import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const MyResponsivePie = ({ data }) => {
  return (
    <div style={{ height: 200, width: "40%" }} className="bg-white rounded-lg">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.85}
        startAngle={-180}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        
        // Custom colors for blue and white shades
        colors={['#1e3a8a', '#3b82f6', '#93c5fd', '#e0f2fe', '#ffffff']} // Add shades of blue and white
        
        // Arc labels
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        
        // Legends
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default MyResponsivePie;
