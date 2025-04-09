const VideoTitle = ({ title, overview, className }) => {
  return (
    <div className={className}>
      <h1 className="text-[3rem] font-bold">{ title }</h1>
      <p className="py-6 text-5 leading-6 mt-4">{ overview }</p>
      <div className="flex mt-4 gap-4">
        <button className="bg-white font-bold border-none text-black py-[10px] px-[20px] text-4 bg-opacity-50 cursor-pointer rounded-lg">&#9654; Play</button>
        <button className="bg-white/30 border-none text-white py-[10px] px-[20px] text-4 bg-opacity-50  rounded-lg">More info </button>
      </div>
    </div>
  )
}

export default VideoTitle