import React, {useState} from 'react';

export default function StateStatus() {

// -------------------------------------------------------------
// State for video data
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [description, setDesc] = useState('');
  const [descriptionExpanded, setDescriptionExpanded] = useState('');
  const [category, setCategory] = useState('');
// -------------------------------------------------------------


// -------------------------------------------------------------
const [stage, setStage] = useState('');

const addSetStage = (rating) => {
  if (rating === -1) {
      setStage(`Complexity: Unrated`)
    } else if (rating <= 33 && rating >= 0) {
      setStage(`Complexity: Beginner`)
    } else if (rating >= 68 && rating <= 100) {
      setStage(`Complexity: Advanced`)
    } else if (rating > 33 && rating < 68) {
      setStage(`Complexity: Intermediate`)
    } else {
      setStage(`Complexity: Error`)
    }
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
// Expanded Section of Prevew Card
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = (filter) => {
    if (filter === 'blur(0px)') {
      setExpanded(!expanded);
    }
    return
  };
// -------------------------------------------------------------

// -------------------------------------------------------------
// handle open and close of item detail modal
  const [open, setOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState();

  const handleOpen = (filter) => {
    if (filter === 'blur(0px)') {
      setOpen(true);
    }
    return
  }

  const handleClose = () => {
    setOpen(false);
  };
// -------------------------------------------------------------

// -------------------------------------------------------------
// State for my comments date
// TODO - add comments to database
  const [myComments, setMyComments] = useState('');
  const addMyComments = (comments) => {
    setMyComments(comments)
    // console.log(comments)
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
// State for my complexity rating
// TODO - add my complexity rating to database
const [myComplexity, setMyComplexity] = useState(null);
const addMyComplexity = (complexity) => {
  setMyComplexity(complexity)
  // console.log(complexity)
}
// -------------------------------------------------------------

// -------------------------------------------------------------
// State for my category rating
// TODO - add my complexity rating to database
const [myCategory, setMyCategory] = useState([]);
const addMyCategory = (category) => {
  setMyCategory(category)
  // console.log(category)
}
// -------------------------------------------------------------

// -------------------------------------------------------------
// State for my stage - slider rating
// TODO - add my complexity/stage - slider rating to database
const [sliderActive, setSliderActive] = useState("grey")
const [myStage, setMyStage] = useState(null)

const addMyStage = (stage) => {
  setMyStage(stage)
  setSliderActive(false)
}
// -------------------------------------------------------------

// -------------------------------------------------------------
// State for my stage - slider rating
// TODO - add my complexity/stage - slider rating to database
const [newIcon, setNewIcon] = useState("none")

const addNewIcon = (created_at) => {
  // yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  // 2010-07-30T15:05:00.000Z
  // dateNow.toISOStrong()

  const dateCreated = new Date(created_at);
  const dateNow = new Date();
  // console.log(dateNow.toISOString());

  const diffTime = Math.abs(dateCreated - dateNow);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  // console.log(diffTime + " milliseconds");
  // console.log(diffDays + " days");

  if (diffDays <= 1) {
    setNewIcon("flex") 
  }
}
// -------------------------------------------------------------

// -------------------------------------------------------------
const [sendingEmail, setSendingEmail] = useState(false)
const [emailMessage, emailMyMessage] = useState('')
const [emailTo, emailMyTo] = useState('')
const [emailSent, setEmailSent] = useState(false)

const sendEmail = (email, message) => {
  setSendingEmail(true)
  setTimeout(() => {
    setSendingEmail(false)
    setEmailSent(true)
    console.log(`Email Sent To: ${email} -> with message ${message}`)
  }, 2000)
} 

const handleSharedClose = () => {
  setEmailSent(false)
  emailMyMessage("")
  emailMyTo("") 
}
// -------------------------------------------------------------

// -------------------------------------------------------------
// handle open and close of new resource modal
const [newResource, setNewResource] = useState(false);
const [newURL, setNewURL] = useState('')

const handleNewResourceOpen = () => {
  setNewResource(true);
}

const handleNewResourceClose = () => {
  setNewResource(false);
};
// -------------------------------------------------------------

  return {
    newResource,
    setNewResource,
    handleNewResourceClose,
    handleNewResourceOpen,

    newURL,
    setNewURL,

    title,
    setTitle,
    thumbnail,
    setThumbnail,
    description,
    setDesc,
    descriptionExpanded,
    setDescriptionExpanded,

    expanded,
    setExpanded,
    handleExpandClick,

    stage,
    setStage,
    addSetStage,

    category,
    setCategory,

    // video,
    // setVideo,

    open,
    setOpen,
    handleClose,
    handleOpen,

    selectedResource,
    setSelectedResource,

    myComments,
    setMyComments,
    addMyComments,

    myComplexity,
    addMyComplexity,
    setMyComplexity,

    myCategory,
    setMyCategory,
    addMyCategory,

    sliderActive,
    setSliderActive,

    myStage,
    setMyStage,
    addMyStage,

    newIcon,
    setNewIcon,
    addNewIcon,

    sendingEmail,
    setSendingEmail,
    sendEmail,
    emailMessage,
    emailMyMessage,
    emailTo,
    emailMyTo,
    emailSent,
    setEmailSent,
    handleSharedClose
  };
};