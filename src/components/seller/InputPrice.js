export default function inputPrice({ placeholder }) {
  return (
    <div>
      <input
        className="p-2"
        name="askPrice"
        type="text"
        required
        placeholder={placeholder}
        value=""
      />
    </div>
  );
}
