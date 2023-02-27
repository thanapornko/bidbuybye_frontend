import product from '../../assets/1-remove.png';

export default function ProductImage({ imageURL }) {
  return (
    <div className="w-[500px] m-10">
      <img className="border bg-gray-100" src={imageURL || product} />
    </div>
  );
}
