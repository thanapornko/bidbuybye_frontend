import useProduct from '../../hooks/useProduct';

export default function InputPrice({ placeholder }) {
  const { handleInputPrice, askPrice } = useProduct();
  return (
    <div>
      <input
        className="p-2 text-slate-900 text-lg"
        name="askPrice"
        type="text"
        required
        placeholder={placeholder}
        value={askPrice}
        onChange={handleInputPrice}
      />
    </div>
  );
}
