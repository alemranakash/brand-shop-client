

const Banner = () => {
    return (
        <div className="flex  flex-col lg:flex-row justify-between bg-blue-100 rounded-lg mt-10">
        <div className="flex-1 items-center my-auto text-center" >
            <h1 className="text-5xl mb-10 text-black font-bold p-4">Unleash the <span className="text-blue-700">Power</span> of <span className="text-blue-700">Electronics</span></h1>
            <h1 className="text-3xl font-semibold text-black">Discover Tomorrow's Tech Today</h1>
        </div>
       <div className="flex-1" >
       <img className="p-16" src="https://i.ibb.co/6wsH6xY/pngwing-com-1.png" alt="" />
       </div>
    </div>
    );
};

export default Banner;