import product from '../../assets/1-remove.png';

export default function ProductImage({ imageURL }) {
  return (
    <div>
      <img className="w-[600px] border bg-gray-100" src={imageURL || product} />
    </div>
  );
}
