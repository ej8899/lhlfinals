import React from "react";
import {Box, FormLabel} from "@mui/material";
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0
  },
  {
    value: 10,
    label: 'Beginner',
  },
  {
    value: 50,
    label: 'Intermediate',
  },
  {
    value: 90,
    label: 'Advanced',
  },
];

function valuetext(value) {
  if (value >= 10 && value <= 30) {
    return "Beginner"
  }
  if (value > 30 && value < 80) {
    return "Intermediate"
  }
  if (value >= 90) {
    return "Advanced"
  }

}

const OutlinedBox = (props) => {
  let color = "rgba(0, 0, 0, 0.2)"
  if (global.config.currentTheme === 'dark'){
    color = "rgba(255, 255, 255, 0.2)"
  }
  

  return (
    <Box width="325px" marginRight="1rem">
      <FormLabel
        sx={{
          marginLeft: "0.71em",
          marginTop: "-0.71em",
          paddingLeft: "0.44em",
          paddingRight: '2em',

          position: "absolute",
          fontSize: "0.75em",
          width: 'auto',
        }}>{props.label}</FormLabel>
      <Box
        sx={{
          position: 'relative',
          borderRadius: '4px',
          fontSize: '0.875rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width:"95%",
            paddingLeft: "1rem",
            paddingTop: "0.5rem",
          }}
        >
                <Slider 
                  aria-label="Custom marks"
                  value={props.myStage}
                  step={10}
                  // getAriaValueText={valuetext}
                  valueLabelFormat={valuetext}
                  marks={marks}
                  onMouseDown={() => props.setSliderActive(false)}
                  style={{color : props.sliderActive}}
                  onChange={(event, value) => props.addMyStage(value)}
                  disabled={props.disabled}
                />
        </Box>
        <fieldset aria-hidden={"true"} style={{
          textAlign: 'left',
          position: 'absolute',
          bottom: 0,
          right: 0,
          top: '-5px',
          left: 0,
          margin: 0,
          padding: '0px 8px',
          pointerEvents: 'none',
          borderRadius: 'inherit',
          borderStyle: 'solid',
          borderWidth: '1px',
          overflow: 'hidden',
          minWidth: '0%',
          borderColor: color
        }}
        >
          <legend style={{
            float: 'unset',
            overflow: 'hidden',
            display: 'block',
            width: 'auto',
            padding: "0px 8px",
            height: '11px',
            fontSize: '0.75em',
            visibility: 'hidden',
            maxWidth: '100%',
            whiteSpace: 'nowrap',
          }}><span>{props.label}</span></legend>
          
        </fieldset>
      </Box>
    </Box>
  );
}

export { OutlinedBox };