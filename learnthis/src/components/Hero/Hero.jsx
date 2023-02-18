//---------------------------------------------------------
// Import user filter
import { FilterContext } from "../../helpers/filter";
import { AuthContext } from "../../hooks/handleUsers.js";
//---------------------------------------------------------

import React, { useEffect, useRef, useState, useContext } from "react";

import { Container, Grid, Typography,Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';

import "../Application.scss";
import SpringModal from "../ItemDetail/index.jsx";
import ChipsArray, { ChipContext } from "./ChipsList";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tab from "@mui/material/Tab";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import PropTypes from 'prop-types';
import { useSelect } from '@mui/base';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

import zlog from "../../helpers/zlog.js";
import Heroslider from "./Slider";




export default function Hero(props) {


  const heroContainer = {
    paddingTop: "4px",
    border: "0px solid red"
  };

  const heroContent =  {
      textAlign: "center",
      padding: "12px",
      border: "0px solid red"
    };

  function DoDivider(props) {
    if(props.type === 'spacer') {
    return (
      <span>complexity:</span>
    );
    }
    else return ( 
      <Chip
        key={props.index}
        label={props.type}
        color="success"
        variant={props.variant}
        onClick={props.onClick}
        sx={{ textTransform: "none",
                fontWeight: "normal",
                borderRadius: "5px",
            }}
        disabled={props.disabled}
      />
    );
  }

  const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const Root = styled('div')`
    position: relative;
  `;

  const Toggle = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    height: 32px;
    width: 225px;
    padding: 8px;
    border-radius: 5px;
    text-align: left;
    line-height: 1;
    background: ${theme.palette.mode === 'dark' ? '#000' : '#fff'};
    border: 0.3px solid ${theme.palette.mode === 'dark' ? '#ce93d8' : '#6a1b9a'};
    color: ${theme.palette.mode === 'dark' ? '#ce93d8' : '#6a1b9a'};
    position: relative;

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    vertical-align: middle;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#f3e5f5'};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      cursor: pointer;
    }

    &:focus-visible {
      border-color: ${blue[400]};
      outline: 0 solid ${theme.palette.mode === 'dark' ? grey[600] : grey[200]};
    }

    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `,
  );

  const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    height: 35px;
    width: 200px;
    padding: 6px;
    border-radius: 12px;
    text-align: left;
    line-height: 1;
    background: ${theme.palette.mode === 'dark' ? '#000' : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    padding: 5px;
    margin: 5px 0 0 0;
    position: absolute;
    height: auto;
    width: 100%;
    overflow: auto;
    z-index: 1500;
    outline: 0px;
    list-style: none;

    &.hidden {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.4s ease, visibility 0.4s step-end;
    }
    `,
  );

  const Option = styled('li')(
    ({ theme }) => `
    padding: 8px;
    border-radius: 0.45em;

    &[aria-selected='true'] {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }

    &.highlighted,
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : '#f3e5f5'};
      cursor: pointer;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }

    &[aria-selected='true'].highlighted {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : '#f3e5f5'};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }

    &:before {
      content: '';
      width: 1ex;
      height: 1ex;
      margin-right: 1ex;
      background-color: var(--color);
      display: inline-block;
      border-radius: 50%;
      vertical-align: middle;
    }
    `,
  );

  function renderSelectedValue(value, options) {
    const selectedOption = options.find((option) => option.value === value);

    // return selectedOption ? `Sorted: ${selectedOption.label}` : null;
    props.setSort(`Sorted: ${selectedOption.label}`)
  }

  function CustomSelect({ options, placeholder }) {
    const listboxRef = React.useRef(null);
    const [listboxVisible, setListboxVisible] = React.useState(false);

    const { getButtonProps, getListboxProps, getOptionProps, getOptionState, value } =
      useSelect({
        listboxRef,
        onOpenChange: setListboxVisible,
        open: listboxVisible,
        options,
      });

    React.useEffect(() => {
      if (listboxVisible) {
        listboxRef.current?.focus();
      }
    }, [listboxVisible]);

    return (
      <Root>
        <Toggle {...getButtonProps()} style={{ '--color': '#ce93d8' }}
        value="this is mine"
        placeholder="Sort by..."
        >
          {props.sort}
          <UnfoldMoreRoundedIcon />
        </Toggle>
        <Listbox
          {...getListboxProps()}
          aria-hidden={!listboxVisible}
          className={listboxVisible ? '' : 'hidden'}
        >
          {options.map((option) => {
            const optionState = getOptionState(option);
            return (
              <Option
                key={option.value}
                {...getOptionProps(option)}
                className={optionState.highlighted ? 'highlighted' : ''}
                onClick={() => handleSort(option.type, option.label)}
              >
                {option.label}
              </Option>
            );
          })}
        </Listbox>
      </Root>
    );
  }

  CustomSelect.propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        disabled: PropTypes.bool,
        label: PropTypes.node,
        value: PropTypes.number.isRequired,
      }),
    ).isRequired,
    placeholder: PropTypes.string,
  };

  const options = [
    {
      label: 'A-Z',
      value : 0,
      type: "alpha_a-z",
    },
    {
      label: 'Z-A',
      value : 1,
      type: "alpha_z-a",
    },
    {
      label: 'Newest -> Oldest',
      value : 2,
      type: "newest",
    },
    {
      label: 'Oldest -> Newest',
      value : 3,
      type: "oldest",
    },
    {
      label: 'Highest Rated',
      value : 4,
      type: "top_rated",
    },
    {
      label: 'Lowest Rated',
      value : 5,
      type: "lowest_rated",
    },
    {
      label: 'Easiest -> Hardest',
      value : 6,
      type: "lowest_ranked",
    },
    {
      label: 'Hardest -> Easiest',
      value : 7,
      type: "top_ranked",
    },
    {
      label: 'Most Liked',
      value : 8,
      type: "most_liked",
    },
  ];

  const { filterData, totalkeys } = useContext(FilterContext);
  const { isAuth, user, userid, logout } = useContext(AuthContext);
  const {chipReset} = useContext(ChipContext)

  const handleSort = (type, label) => {
    filterData("sort", type, props.setsampledata, props.sampledata, props.combinedData, false, false, true, props.setResourceCount, props.setShowMoreCards)
    props.setSort(`Sorted: ${label}`)

  }


  const handleClick = (index) => {
    zlog('info','rating chip:',index);

    if (index === 200 ) {
      props.setFilled(false)
      props.setClearFilter(true)
      props.setSort("Sort by...")
      filterData("clear", userid, props.setsampledata, props.sampledata, props.combinedData, false, false, true, props.setResourceCount, props.setShowMoreCards)
      chipReset(props.catList, props.setChipFilled)
    } else {
      props.setFilled({...props.filled, [index]: !props.filled[index]});
      // console.log({...filled, [index]: !filled[index]})
      filterData("complexity", {...props.filled, [index]: !props.filled[index]}, props.setsampledata, props.sampledata, props.combinedData, false, false, false, props.setResourceCount, props.setShowMoreCards)
      props.setClearFilter(false)
    }
  };


  const [personName, setPersonName] = React.useState([]);

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const chipData = ["New", "Watch Later",];
  // const chipData = ["New", "Watch Later","Most Liked", "Rated 3+",];
  const chipDataComplexity = ["Beginner", "Intermediate", "Advanced", ];


  return (

    <Container maxWidth="xl" style={heroContainer}>
    <Grid container>
      <Grid item xs={12}>
        <div style={heroContent}>
          {!props.lessonTrue &&
            <div>
            <Heroslider/>
            </div>
          } 
          {props.lessonTrue &&
            <Typography variant="h2" sx={{marginBottom : "8px"}}>Welcome to Your Crowd Sourced Lesson Plan!</Typography>
          }

          <ChipsArray catList={props.catList}
            setsampledata={props.setsampledata} sampledata={props.sampledata}
            combinedData={props.combinedData} clearFilter={props.clearFilter} setClearFilter={props.setClearFilter} filled={props.chipfilled} setFilled={props.setChipFilled}
            setResourceCount={props.setResourceCount} setShowMoreCards={props.setShowMoreCards}
          ></ChipsArray>

      <center>
      <Paper
      sx={{
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'nowrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        mt: 0.2,
        width: 1400,
      }}>
          <Grid container spacing={3}>

       

        <Grid item xs={6} sx={{my: 1}}>
          
       
          <Stack direction="row" spacing={2} sx={{alignItems: "flex-start", marginLeft : "3em"}}>
          {totalkeys <= 1 &&
          <Chip
            color="primary"
            label="Clear Filters"
            icon={<FilterAltOffIcon />}
            variant="default"
            sx={{ textTransform: "none",
                  fontWeight: "normal",
                  borderRadius: "5px"
                }}
            disabled
          />}
          {totalkeys > 1 &&
            <Chip
              color="primary"
              label="Clear Filters"
              icon={<FilterAltOffIcon />}
              variant="default"
              sx={{ textTransform: "none",
                    fontWeight: "normal",
                    borderRadius: "5px"
                  }}
              onClick={()=> {handleClick(200)}}
            />}

<CustomSelect placeholder="Sort by…" options={options} />

          {chipData.map((chip, index) => (
            (chip === "Watch Later" && !userid) ?
            (<div key={index}><DoDivider type={chip} key={index} label={chip} variant="outlined" disabled={true}
            ></DoDivider>
            </div>
            ) : (chip === "Rated 3+" && props.lessonTrue) ? 
            (<div key={index}></div>
            ):(       
            <div key={index}><DoDivider type={chip} key={index} label={chip} color="success" variant={props.filled[index] ? "default" : "outlined"}
            onClick={()=> {handleClick(index)}}
            ></DoDivider>
            </div>)
          ))}







          </Stack>
          

        </Grid>
        
        <Grid item xs={6} sx={{my: 1}}>
          <div >
          {!props.lessonTrue && 
            <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{alignItems: "flex-end", marginRight : "3em"}}>
            {chipDataComplexity.map((chip, index) => (
              <div key={index+10}><DoDivider type={chip} key={index+10} label={chip} color="success" variant={props.filled[index+10] ? "default" : "outlined"}
              onClick={()=> {handleClick(index+10)}}
              ></DoDivider>
              </div>
            ))}
            </Stack>
          }
          {props.lessonTrue && 
            <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{alignItems: "flex-end", marginRight : "3em"}}>
            {chipDataComplexity.map((chip, index) => (
              <div key={index+10}><DoDivider type={chip} key={index+10} label={chip} variant="outlined" disabled={true}
              ></DoDivider>
              </div>
            ))}
            </Stack>
          }
          </div>
        </Grid>
        
      </Grid>
      </Paper>  </center>
        </div>
      </Grid>
    </Grid>
    </Container>

  );
};

