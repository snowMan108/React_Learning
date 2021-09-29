import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function portfolio() {
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "web app",
    },
    {
      id: "mobile",
      title: "Mobile app",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
