import "../Application.scss";

export default function SiteFooter(props) {
  function showAbout() {
    // TODO - this is in Application.js currently - needs moved to helper function file for import elsewhere
  }

  return (
    <div>
    footer location: <a className="socicons">
                  <i
                    onClick={() => showAbout()}
                    className="fa-solid fa-circle-question fa-xl"
                  ></i>
                </a> | cookies | 
    </div>
  );
};