import "../Application.scss";
import SpringModal from "../ItemDetail/index.jsx";

export default function Hero(props) {
  function showAbout() {
    // TODO - this is in Application.js currently - needs moved to helper function file for import elsewhere
  }
  const tempstyles = "marginTop: 40px";
  return (
    <div style={{tempstyles}}>
      <br/><br/>
    hero location: <br/><br/> <a className="socicons">
                  <i
                    onClick={() => showAbout()}
                    className="fa-solid fa-circle-question fa-xl"
                  ></i>
                </a> | cookies | 
                <br/><br/>

    <SpringModal></SpringModal>
    </div>
  );
};