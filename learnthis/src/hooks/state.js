import React, {useState, useEffect} from 'react';
import axios from "axios"; // npx install axios
import zlog from "../helpers/zlog";

export default function StateStatus() {

// -------------------------------------------------------------
// State for video data
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [description, setDesc] = useState('');
  const [descriptionExpanded, setDescriptionExpanded] = useState('');
  const [category, setCategory] = useState('');
  const [categoryExpanded, setCategoryExpanded] = useState('')
  const [videoId, setVideoId] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [domain, setDomain] = useState('')
// -------------------------------------------------------------

// -------------------------------------------------------------
// State for complexity
const [stage, setStage] = useState(null);

const addSetStage = (rating) => {
  if (rating === null || rating === -1) {
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
// handle open and close of item view detail modal
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
// handle open and close of item review detail modal
const [openReview, setOpenReview] = useState(false);

const handleReviewOpen = (filter) => {
  if (filter === 'blur(0px)') {
    setOpenReview(true);
  }
  return
}

const handleReviewClose = () => {
  setOpenReview(false);
};
// -------------------------------------------------------------

// -------------------------------------------------------------
// handle open and close of item edit detail modal
const [openEdit, setOpenEdit] = useState(false);
const [openEditing, setOpenEditing] = useState(false)
const [openEdited, setOpenEdited] = useState(false);
const [openErrorEditing, setOpenErrorEditing] = useState(false);
const [openErrorReview, setOpenErrorReview] = useState(false);

const handleOpenEdit = () => {
    setOpenEdit(true);
  return
}

const handleEditClose = () => {
  setOpenEdit(false);
  setErrorBlank(false)
};

const handleEditedClose = () => {
  setOpenEdited(false);
  setErrorBlank(false)
};
// -------------------------------------------------------------

// -------------------------------------------------------------
// handle open and close of item delete detail modal
const [openDelete, setOpenDelete] = useState(false);
const [openDeleting, setOpenDeleting] = useState(false)
const [openErrorDeleting, setOpenErrorDeleting] = useState(false)


const handleOpenDelete = () => {
    setOpenDelete(true);
  return
}

const handleDeleteClose = () => {
  setOpenDelete(false);
};

const handleOpenDeleting = () => {
  setOpenDeleting(true);
  setOpen(false)
return
}

const handleDeletingClose = () => {
  setOpenDeleting(false);
};
// -------------------------------------------------------------


// -------------------------------------------------------------
// State for my comments data
// TODO - add comments to database
  const [myComments, setMyComments] = useState(undefined);
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
  setSliderActive(null)
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

  if (diffDays <= 36/24) {
    setNewIcon("flex") 
  }
}
// -------------------------------------------------------------

// -------------------------------------------------------------
// Share Resource through Email
const [sendingEmail, setSendingEmail] = useState(false)
const [emailMessage, emailMyMessage] = useState('')
const [emailTo, emailMyTo] = useState('')
const [emailSent, setEmailSent] = useState(false)
const [errorEmail, setErrorEmail] = useState(false)

// TODO -- This will become a PUT statement or other API for email
const sendEmail = (email, message, close) => {
  if (!email) {
    setErrorBlank(true)
  } else if (!email.includes("@")) {
    setErrorEmail(true)
  } else {
    close()
    setEmailSent(false)
    setSendingEmail(true)
    setErrorBlank(false)
    setErrorEmail(false)
    setTimeout(() => {
      setSendingEmail(false)
      setEmailSent(true)
      zlog('Info',"Email sent to:", email) 
      zlog('Info',"Email was sent With message:", message) 
    }, 2000)
  }
} 

const handleSharedClose = () => {
  setEmailSent(false)
  emailMyMessage("")
  emailMyTo("") 
  setErrorBlank(false)
  setErrorEmail(false)
}
// -------------------------------------------------------------

// -------------------------------------------------------------
// handle open and close of new resource modal


  // State for new url added after hit save
const [newURL, setNewURL] = useState('')

  // Validation - blank url
const [errorBlank, setErrorBlank] = useState(false)

  // Edit screen for new resource
const [addNewResource, setAddNewResource] = useState(false);

  //API calls for new resource
const [fetchingNewResource, setFetchingNewResource] = useState(false)

  //Status Screen for saving to database
const [savingNewResource, setSavingNewResource] = useState(false)

  //Status Screen for success saved to database
const [savedNewResource, setSavedNewResource] = useState(false)

  //Status Screen for error saving to database
const [errorSavingNewResource, setSavingErrorNewResource] = useState(false)

  //Status Screen for error fecthing youtube url
const [errorFetchingNewResource, setFetchingErrorNewResource] = useState(false)

  //Status Screen for error fecthing non-youtube url
  const [errorFetchingNewResource1, setFetchingErrorNewResource1] = useState(false)

const handleAddNewResourceClose =() => {
  setAddNewResource(false);
}
const handleAddNewResourceAbort =() => {
  setAddNewResource(false);
  setNewURL('')
  setTitle('')
  setDescriptionExpanded('')
  setThumbnail('')
  setMyCategory([])
  setMyStage(null)
  setSliderActive("grey")
  setVideoURL('')
  setDomain('')
  setErrorBlank(false)
}

const handleSavedClose =() => {
  setSavedNewResource(false);
  setNewURL('')
  setTitle('')
  setDescriptionExpanded('')
  setThumbnail('')
  setMyCategory([])
  setMyStage(null)
  setSliderActive("grey")
  setVideoURL('')
  setDomain('')
  setErrorBlank(false)
}

const handleErrorFetchingNewResourceClose = () => {
  setFetchingErrorNewResource(false);
};

const handleErrorFetchingNewResourceClose1 = () => {
  setFetchingErrorNewResource1(false);
};

const handleErrorSavingNewResourceClose = () => {
  setSavingErrorNewResource(false);
};

// -------------------------------------------------------------

  return {
    title,
    setTitle,
    thumbnail,
    setThumbnail,

    description,
    setDesc,
    descriptionExpanded,
    setDescriptionExpanded,

    category,
    setCategory,
    categoryExpanded,
    setCategoryExpanded,

    videoURL,
    setVideoURL,
    videoId,
    setVideoId,

    domain, 
    setDomain,
    
    stage,
    setStage,
    addSetStage,

    expanded,
    setExpanded,
    handleExpandClick,

    open,
    setOpen,
    handleClose,
    handleOpen,

    selectedResource,
    setSelectedResource,

    openReview, 
    setOpenReview,
    handleReviewOpen,
    handleReviewClose,

    handleEditedClose,
    openEdited,
    setOpenEdited,
    openEditing, 
    setOpenEditing,
    openEdit,
    setOpenEdit,
    handleOpenEdit,
    handleEditClose,
    openErrorEditing, 
    setOpenErrorEditing,
    openErrorReview,
    setOpenErrorReview,

    openDelete,
    setOpenDelete,
    handleDeleteClose,
    handleOpenDelete,

    openDeleting,
    setOpenDeleting,
    handleDeletingClose,
    handleOpenDeleting,
    openErrorDeleting, 
    setOpenErrorDeleting,

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

    errorEmail, 
    setErrorEmail,
    sendingEmail,
    setSendingEmail,
    sendEmail,
    emailMessage,
    emailMyMessage,
    emailTo,
    emailMyTo,
    emailSent,
    setEmailSent,
    handleSharedClose,

    savingNewResource, 
    setSavingNewResource,
    savedNewResource, 
    setSavedNewResource,
    errorSavingNewResource, 
    setSavingErrorNewResource,
    handleSavedClose,

    errorBlank, 
    setErrorBlank,
    newURL,
    setNewURL,
    addNewResource,
    setAddNewResource,
    fetchingNewResource,
    setFetchingNewResource,
    handleAddNewResourceClose,
    handleAddNewResourceAbort,
    errorFetchingNewResource, 
    setFetchingErrorNewResource,
    handleErrorFetchingNewResourceClose,
    errorFetchingNewResource1, 
    setFetchingErrorNewResource1,
    handleErrorFetchingNewResourceClose1,
    handleErrorSavingNewResourceClose
  };
};