

const Banner = () => {
    return (
        <div className="flex  flex-col lg:flex-row justify-between bg-blue-700 rounded-lg mt-10">
        <div className="flex-1 items-center my-auto text-center" >
            <h1 className="text-5xl mb-10 text-white font-bold p-4">Tech & Gaming Experiences Await</h1>
            <h1 className="text-3xl font-semibold text-white">Let's Join Us</h1>
        </div>
       <div className="flex-1" >
       <img className="p-16" src="https://i.ibb.co/6wsH6xY/pngwing-com-1.png" alt="" />
       </div>
    </div>
    );
};

export default Banner;