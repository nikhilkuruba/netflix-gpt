const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 absolute">
      <h1 className="text-6xl font-bold">{ title }</h1>
      <p className="py-6 text-lg w-1/4">{ overview }</p>
      <div className="flex gap-4">
        <button className="bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50  rounded-lg">&#9654; Play</button>
        <button className="bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50  rounded-lg">More info </button>
      </div>
    </div>
  )
}

export default VideoTitle