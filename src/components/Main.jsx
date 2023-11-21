import '../styles/main.css';

export default function Main({ Comp }) {
  return (
    <div className="main-wrapper">
      <div className="outer-container">
        <div className="inner-container">{Comp}</div>
      </div>
    </div>
  );
}
