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
  const handleExpandClick = () => {
    setExpanded(!expanded);
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

  const handleOpen = () => 
    setOpen(true);
  ;

  const handleClose = () => {
    setOpen(false);
};
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
    handleOpen
  };
};