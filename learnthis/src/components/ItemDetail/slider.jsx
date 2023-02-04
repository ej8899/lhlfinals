// --------------------------------------------------------
// React Imports
import * as React from 'react';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
// --------------------------------------------------------

// --------------------------------------------------------
// Import Manual Field Functions
import { OutlinedBox } from './borderedSection';
// --------------------------------------------------------

export default function DiscreteSliderMarks(props) {

  return (
    <OutlinedBox label ={props.label} myStage={props.myStage} setSliderActive={props.setSliderActive} addMyStage={props.addMyStage} sliderActive={props.sliderActive} disabled={props.disabled}>                
    </OutlinedBox>
  );
}