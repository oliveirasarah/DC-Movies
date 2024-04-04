export default function Filter({ title, onClick, isSelected, count }) {
  return (
    <button
      onClick={onClick}
      className={`filter ${isSelected ? "active" : ""}`}
    >
      {title} ({count})
    </button>
  )
}
