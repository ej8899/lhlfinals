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
// --------------------------------------------------------

// --------------------------------------------------------
// Import Helper Functions
import zlog from "../../helpers/zlog";
// --------------------------------------------------------

// --------------------------------------------------------
// Import Handle Users Hooks
import { AuthProvider } from '../../hooks/handleUsers';

// Import Handle Filter State
import { FilterProvider } from "../../helpers/filter";

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




// --------------------------------------------------------
// --------------------------------------------------------
import PlaylistAdd from "@mui/icons-material/PlaylistAdd";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getdata } from "../../helpers/helpers";
// --------------------------------------------------------
// --------------------------------------------------------


export const LessonIndex = (props) => {
  
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
  
  
    const [expanded, setExpanded] = useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
// --------------------------------------------------------

    const [paginationBCount, setPaginationBCount] = useState(0);
    const [paginationICount, setPaginationICount] = useState(0);
    const [paginationACount, setPaginationACount] = useState(0);

    const [parsedBsampledata, setparsedBsampledata] = useState([])
    const [parsedIsampledata, setparsedIsampledata] = useState([])
    const [parsedAsampledata, setparsedAsampledata] = useState([])

    const [pageB, setPageB] = useState(1)
    const [pageI, setPageI] = useState(1)
    const [pageA, setPageA] = useState(1)


// --------------------------------------------------------
  useEffect(() => {

    setPaginationBCount(Math.ceil(getdata(props.sampledata, "beginner").length/5))
    initialDataBeginner(pageB, getdata(props.sampledata, "beginner"))
  }, [pageB])

  const setDataBeginner = (event, value) => {
    setPageB(value)
    let maxCount = Math.ceil(getdata(props.sampledata, "beginner").length/5)
    // console.log(props.sampleBdata)
    let tmpArray = []
    if (value === maxCount) {
      for (let x = ((value - 1) * 5); x < getdata(props.sampledata, "beginner").length; x++) {
        tmpArray.push(getdata(props.sampledata, "beginner")[x])
      }
      setparsedBsampledata(tmpArray)
      return
    } else {
      for (let x = ((value - 1) * 5); x < ((value -1) * 5) + 5; x++) {
        tmpArray.push(getdata(props.sampledata, "beginner")[x])
      }
      setparsedBsampledata(tmpArray)
      // console.log(tmpArray)
      return 
    }
  }

  const initialDataBeginner = (value, data) => {
    let maxCount = Math.ceil(data.length/5)
    console.log(props.sampleBdata)
    let tmpArray = []
    if (value === maxCount) {
      for (let x = ((value - 1) * 5); x < data.length; x++) {
        tmpArray.push(data[x])
      }
      setparsedBsampledata(tmpArray)
      return
    } else {
      for (let x = ((value - 1) * 5); x < ((value -1) * 5) + 5; x++) {
        tmpArray.push(data[x])
      }
      setparsedBsampledata(tmpArray)
      // console.log(tmpArray)
      return 
    }
  }
// --------------------------------------------------------


// --------------------------------------------------------
  useEffect(() => {
    setPaginationICount(Math.ceil(getdata(props.sampledata, "intermediate").length/5))
    initialDataIntermediate(pageI, getdata(props.sampledata, "intermediate"))
  }, [pageI]);

  const setDataIntermediate = (event, value) => {
    setPageI(value)
    let maxCount = Math.ceil(props.sampleIdata.length/5)
    // console.log(props.sampleBdata)
    let tmpArray = []
    if (value === maxCount) {
      for (let x = ((value - 1) * 5); x < props.sampleIdata.length; x++) {
        tmpArray.push(props.sampleIdata[x])
      }
      setparsedIsampledata(tmpArray)
      return
    } else {
      for (let x = ((value - 1) * 5); x < ((value -1) * 5) + 5; x++) {
        tmpArray.push(props.sampleIdata[x])
      }
      setparsedIsampledata(tmpArray)
      // console.log(tmpArray)
      return 
    }
  }

  const initialDataIntermediate = (value, data) => {
    let maxCount = Math.ceil(data.length/5)
    let tmpArray = []
    if (value === maxCount) {
      for (let x = ((value - 1) * 5); x < data.length; x++) {
        tmpArray.push(data[x])
      }
      setparsedIsampledata(tmpArray)
      return
    } else {
      for (let x = ((value - 1) * 5); x < ((value -1) * 5) + 5; x++) {
        tmpArray.push(data[x])
      }
      setparsedIsampledata(tmpArray)
      // console.log(tmpArray)
      return 
    }
  }
// --------------------------------------------------------

// --------------------------------------------------------
  useEffect(() => {
    setPaginationACount(Math.ceil(getdata(props.sampledata, "advanced").length/5))
    initialDataAdvanced(pageA, getdata(props.sampledata, "advanced"))
  }, [pageA]);

  const setDataAdvanced = (event, value) => {
    setPageA(value)
    let maxCount = Math.ceil(props.sampleAdata.length/5)
    // console.log(props.sampleBdata)
    let tmpArray = []
    if (value === maxCount) {
      for (let x = ((value - 1) * 5); x < props.sampleAdata.length; x++) {
        tmpArray.push(props.sampleAdata[x])
      }
      setparsedAsampledata(tmpArray)
      return
    } else {
      for (let x = ((value - 1) * 5); x < ((value -1) * 5) + 5; x++) {
        tmpArray.push(props.sampleAdata[x])
      }
      setparsedAsampledata(tmpArray)
      // console.log(tmpArray)
      return 
    }
  }

  const initialDataAdvanced = (value, data) => {
    let maxCount = Math.ceil(data.length/5)
    let tmpArray = []
    if (value === maxCount) {
      for (let x = ((value - 1) * 5); x < data.length; x++) {
        tmpArray.push(data[x])
      }
      setparsedAsampledata(tmpArray)
      return
    } else {
      for (let x = ((value - 1) * 5); x < ((value -1) * 5) + 5; x++) {
        tmpArray.push(data[x])
      }
      setparsedAsampledata(tmpArray)
      // console.log(tmpArray)
      return 
    }
  }
// --------------------------------------------------------

  return (
    <React.Fragment>
      <Accordion defaultExpanded={true}>
      <AccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Beginner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
              {parsedBsampledata.map((item, index) => (
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
                    setsampleAdata={props.setsampleAdata} setsampleBdata={props.setsampleBdata} setsampleIdata={props.setsampleIdata}
                  >
                    {item.id}
                  </LessonItem>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box display="flex" justifyContent="center" sx={{marginTop : 2}}>
            <Stack spacing={2}>
              <Pagination count={paginationBCount} page={pageB} onChange={setDataBeginner} />
            </Stack>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded={true}>
      <AccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Intermediate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
              {parsedIsampledata.map((item, index) => (
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
                    setsampleAdata={props.setsampleAdata} setsampleBdata={props.setsampleBdata} setsampleIdata={props.setsampleIdata}
                  >
                    {item.id}
                  </LessonItem>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box display="flex" justifyContent="center" sx={{marginTop : 2}}>
            <Stack spacing={2}>
              <Pagination count={paginationICount} page={pageI} onChange={setDataIntermediate} />
            </Stack>
          </Box>
        </AccordionDetails>
      </Accordion>


      <Accordion defaultExpanded={true}>
      <AccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Advanced</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
              {parsedAsampledata.map((item, index) => (
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
                    setsampleAdata={props.setsampleAdata} setsampleBdata={props.setsampleBdata} setsampleIdata={props.setsampleIdata}
                  >
                    {item.id}
                  </LessonItem>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box display="flex" justifyContent="center" sx={{marginTop : 2}}>
            <Stack spacing={2}>
              <Pagination count={paginationACount} page={pageA} onChange={setDataAdvanced} />
            </Stack>
          </Box>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  )
}
