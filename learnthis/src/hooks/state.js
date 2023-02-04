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

const handleReviewOpen = () => {
    setOpenReview(true);
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


const handleOpenEdit = () => {
    setOpenEdit(true);
  return
}

const handleEditClose = () => {
  setOpenEdit(false);
};

const handleEditedClose = () => {
  setOpenEdited(false);
};
// -------------------------------------------------------------

// -------------------------------------------------------------
// handle open and close of item delete detail modal
const [openDelete, setOpenDelete] = useState(false);
const [openDeleting, setOpenDeleting] = useState(false)
const [openDeleted, setOpenDeleted] = useState(false)

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
// Share Resource through Email
const [sendingEmail, setSendingEmail] = useState(false)
const [emailMessage, emailMyMessage] = useState('')
const [emailTo, emailMyTo] = useState('')
const [emailSent, setEmailSent] = useState(false)

// TODO -- This will become a PUT statement or other API for email
const sendEmail = (email, message) => {
  setSendingEmail(true)
  setTimeout(() => {
    setSendingEmail(false)
    setEmailSent(true)
    zlog('Info',"Email sent to:", email) 
    zlog('Info',"Email was sent With message:", message) 
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
  // Screen to add website link under add new resource
const [newResource, setNewResource] = useState(false);

  // State for new url added after hit save
const [newURL, setNewURL] = useState('')

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

const handleNewResourceOpen = () => {
  setNewResource(true);
}

const handleNewResourceClose = () => {
  setNewResource(false);
};

const handleAddNewResourceClose =() => {
  setAddNewResource(false);
}

const handleSavedClose =() => {
  setSavedNewResource(false);
}


// -------------------------------------------------------------

  return {

    domain, 
    setDomain,
    
    openDeleted, 
    setOpenDeleted,
    openDeleting,
    setOpenDeleting,
    handleDeletingClose,
    handleOpenDeleting,

    handleEditedClose,
    openEdited,
    setOpenEdited,
    openEditing, 
    setOpenEditing,
    openEdit,
    setOpenEdit,
    handleOpenEdit,
    handleEditClose,

    openDelete,
    setOpenDelete,
    handleDeleteClose,
    handleOpenDelete,

    openReview, 
    setOpenReview,
    handleReviewOpen,
    handleReviewClose,

    categoryExpanded,
    setCategoryExpanded,

    savingNewResource, 
    setSavingNewResource,
    savedNewResource, 
    setSavedNewResource,
    errorSavingNewResource, 
    setSavingErrorNewResource,
    handleSavedClose,

    videoURL,
    setVideoURL,
    videoId,
    setVideoId,

    newResource,
    setNewResource,
    handleNewResourceClose,
    handleNewResourceOpen,
    newURL,
    setNewURL,
    addNewResource,
    setAddNewResource,
    fetchingNewResource,
    setFetchingNewResource,
    handleAddNewResourceClose,

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