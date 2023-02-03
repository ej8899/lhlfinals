import * as React from 'react';
import { OutlinedBox } from './borderedSection';

export default function DiscreteSliderMarks(props) {

  return (
    <OutlinedBox label ={"Rate Resource Complexity"} myStage={props.myStage} setSliderActive={props.setSliderActive} addMyStage={props.addMyStage} sliderActive={props.sliderActive}>                
    </OutlinedBox>
  );
}