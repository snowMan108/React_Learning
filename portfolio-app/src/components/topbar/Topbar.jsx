import "./topbar.scss";

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <h1>Hello</h1>
        <div className="left">
          <a href="#intro">INTRO</a>
        </div>
        <div className="right">This is right</div>
      </div>
    </div>
  );
}
