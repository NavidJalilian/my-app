import "./Tablo.css";

export default function Tablo({ src, p }) {
  return (
    <div className="Tablo card">
      <div className="imgContainer">
        <img src={src} alt="" />
      </div>
      <h3>{p}</h3>
    </div>
  );
}
