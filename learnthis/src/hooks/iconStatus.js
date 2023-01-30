import React, {useState} from 'react';

export default function IconStatus(props) {

  // -------------------------------------------------------------
  // Toggle Favourite Status
  // TODO pass favourite status to database
  const [favourite, setFavourite] = useState('default')
  const addFavourites = (filter) => {
    if (filter === 'blur(0px)') {
      favourite === "pink"? setFavourite('default') : setFavourite('pink')
    }
    return
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
  // Toggle Lesson Plan status
  // TODO pass lesson plan status to database
  const [lesson, setLesson] = useState('default')
  const addLesson = () => {
      lesson === 'blue'? setLesson('default') : setLesson('blue')
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
  // Toggle Rate Review status
  // TODO pass lesson plan status to database
  const [rate, setRate] = useState('default')
  const addRate = () => {
      return rate === 'teal'? setRate('default') : setRate('teal')
  }
  // Show the rating and review panel
  // TODO pass the notes, category and level to database
  const [show, setShow] = useState('none');

  const rateReview = (tmp = false) => {
    if (tmp === true) {
      setRate('teal')
      setShow('flex')
    } else {
      addRate()
      if(show === "none") {
        return setShow('flex')
      } else {
        return setShow('none')
      }
    }
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
  // Toggle Bookmark status
  // TODO pass bookmark status to database
  const [bookmark, setBookmark] = useState('default')
  const addBookmark = () => {
      bookmark === 'green'? setBookmark('default') : setBookmark('green')
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
  // Toggle playlist status
  // TODO pass playlist status to database
  const [playlist, setPlaylist] = useState('default')
  const addPlaylist = () => {
      playlist === 'maroon'? setPlaylist('default') : setPlaylist('maroon')
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
  // Toggle share status
  // TODO pass share status to database
  const [share, setShare] = useState('default')
  const addShare = (filter) => {
    if (filter === 'blur(0px)') {
      share === 'purple'? setShare('default') : setShare('purple')
    }
    return
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
  // Toggle report status
  // TODO pass report status to database
  const [report, setReport] = useState('default')
  const [filter, setFilter] = useState('blur(0px)')
  const addReport = () => {
      report === 'red'? setReport('default') : setReport('red')
      filter === 'blur(3px)'? setFilter('blur(0px)') : setFilter('blur(3px)')
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
  // Toggle like status
  // TODO pass like status to database
  const [like, setLike] = useState('default')
  const addLike = (filter) => {
    if (filter === 'blur(0px)') {
      like === 'purple'? setLike('default') : setLike('purple')
    }
    return
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
  // Toggle more status
  const [more, setMore] = useState('default')
  const addMore = () => {
      more === 'warning'? setMore('default') : setMore('warning')
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
  // Toggle star rating status
  // TODO pass star rating status to database

  const [star, setStar] = useState(0)
  const addStar = (event, num) => {
    event.stopPropagation()
    setStar(num+1)
  }
// -------------------------------------------------------------

// -------------------------------------------------------------
  // Toggle hamburger menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseOut = () => {
    setAnchorEl(null);
  };
// -------------------------------------------------------------




  return {
    favourite,
    setFavourite,
    addFavourites,

    lesson,
    setLesson,
    addLesson,

    rate,
    setRate,
    addRate,
    rateReview,
    show,
    setShow,

    bookmark,
    setBookmark,
    addBookmark,

    playlist,
    setPlaylist,
    addPlaylist,

    share,
    setShare,
    addShare,

    report,
    setReport,
    addReport,

    like,
    setLike,
    addLike,

    more,
    setMore,
    addMore,

    star,
    setStar,
    addStar,

    anchorEl,
    setAnchorEl,
    handleClick,
    handleCloseOut,

    filter,
    setFilter
  }

}