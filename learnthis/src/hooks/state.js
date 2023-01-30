import React, {useState} from 'react';

export default function StateStatus() {

// -------------------------------------------------------------
// State for video data
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [description, setDesc] = useState('');
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

  const [descriptionExpanded, setDescriptionExpanded] = useState('');
  const [stage, setStage] = useState('');
  const [category, setCategory] = useState('');
  const [video, setVideo] = useState('');
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
const [myCategory, setMyCategory] = useState(null);
const addMyCategory = (category) => {
  setMyCategory(category)
  // console.log(category)
}
// -------------------------------------------------------------

  return {
    title,
    setTitle,
    thumbnail,
    setThumbnail,
    description,
    setDesc,
    expanded,
    setExpanded,
    handleExpandClick,
    descriptionExpanded,
    setDescriptionExpanded,
    stage,
    setStage,
    category,
    setCategory,
    video,
    setVideo,
    open,
    setOpen,
    selectedResource,
    setSelectedResource,
    handleClose,
    handleOpen,
    myComments,
    setMyComments,
    addMyComments,
    myComplexity,
    addMyComplexity,
    setMyComplexity,
    myCategory,
    setMyCategory,
    addMyCategory
  };
};