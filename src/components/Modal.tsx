interface Props {
  messageError: string
}
export default function MyModal({messageError}: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          {messageError}
        </h1>
      </div>
    </div>
  );
}