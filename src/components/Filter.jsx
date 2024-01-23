export default function Filter({ title, onClick }) {
  return (
    <button onClick={onClick} className="filter">
      {title}
    </button>
  );
}
