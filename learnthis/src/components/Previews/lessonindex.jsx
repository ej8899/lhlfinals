// --------------------------------------------------------
// React Imports
import React, { useContext, useEffect, useRef, useState } from "react";
import axios from 'axios';
// --------------------------------------------------------

// --------------------------------------------------------
// CSS/SCSS Imports
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Masonry from '@mui/lab/Masonry';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Grid, Typography,Button } from "@mui/material";
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { green, red } from "@mui/material/colors";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icons
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// --------------------------------------------------------

// --------------------------------------------------------
// Import Helper Functions
import zlog from "../../helpers/zlog";
// --------------------------------------------------------

// --------------------------------------------------------
// Import Handle Users Hooks
import { AuthProvider } from '../../hooks/handleUsers';

// Import Handle Filter State
import { FilterContext, FilterProvider } from "../../helpers/filter";

// Import Handle for Chip Reset
import { ChipProvider } from "../Hero/ChipsList";

// Import Handle for Icon Status
import { IconProvider } from "../../hooks/handleIcons";
// --------------------------------------------------------

// --------------------------------------------------------
// Import Modals
import { modalCookiesMessage } from "../Modal/contentMisc";
import AboutDialog from "../Modal/about";
// --------------------------------------------------------

// --------------------------------------------------------
// Import Components
import NavBar from "../Nav/NavBar.jsx";
import PreviewItem from "../Previews";
import LessonItem from "../Previews/lessonplan"
import SiteFooter from "../Footer";
import Hero from "../Hero/Hero.jsx";
import AddResourceFlow from "../NewResource/AddResource";
import { DeletedModal } from "../ItemDetail/deleted";
import { FavouriteStaleStats } from "../Icons/favourite";
// --------------------------------------------------------


export const LessonIndex = (props) => {
  
    const {
      filterData,
      myFilteredData,
      totalkeys,
      parsedBsampledata,
      parsedAsampledata,
      parsedIsampledata,
      setparsedAsampledata,
      setparsedBsampledata,
      setparsedIsampledata,
      pageA,
      pageB,
      pageI,
      setPageA,
      setPageB,
      setPageI
    } = useContext(FilterContext)
// --------------------------------------------------------

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  
// --------------------------------------------------------

// --------------------------------------------------------

  const beginnerChange = (event, value) => {
    event.stopPropagation()
    setPageB(value)
  }

  const intermediateChange = (event, value) => {
    setPageI(value)
  }

  const advancedChange = (event, value) => {
    setPageA(value)
  }
// --------------------------------------------------------

const propsArray = [
  ["Beginner", parsedBsampledata, pageB, beginnerChange],
  ["Intermediate", parsedIsampledata, pageI, intermediateChange],
  ["Advanced", parsedAsampledata, pageA, advancedChange]
]

  return (
    <React.Fragment>
      {propsArray.map((element, indice) => (
      <Accordion key={indice} defaultExpanded={true}>
      <AccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{element[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
              {element[1].length > 0 && element[1][element[2]-1].map((item, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <LessonItem
                    key={item.id} nowloading={props.nowloading} typeCategory={props.typeCategory}
                    id={item.id} resource_id={item.resource_id} profile_id={item.profile_id}
                    videoURL={ item.videoURL } created_at={item.created_at}
                    title={item.title} thumbnail={item.thumbnail} description={item.description} 
                    stage={item.stage} category={item.category} rating={item.rating} likes={item.likes} 
                    sampledata={props.sampledata} setsampledata={props.setsampledata} 
                    myCategory={item.myCategory} myStage={item.myStage} 
                    star={item.star} myComments={item.myComments}
                    setOpenDeleted={props.setOpenDeleted} combinedData={props.combinedData}
                    bookmark={item.bookmark} like={item.like} favourite={item.favourite} playlist={item.playlist} lesson={item.lesson} report={item.report} 
                  >
                    {item.id}
                  </LessonItem>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box display="flex" justifyContent="center" sx={{marginTop : 2}}>
            <Stack spacing={2}>
              <Pagination count={element[1].length} page={element[2]} onChange={(event,value) => element[3](event, value)} />
            </Stack>
          </Box>
        </AccordionDetails>
      </Accordion>
    ))}

    </React.Fragment>
  )
}
