let Homepage = () => {
  return (
    <div className="flex mt-5">
        {/* card fixed greeting */}
      <div className="flex flex-col basis-2/5">
        <div className="fixed h-screen bottom-0 flex items-center justify-center pl-32">
            <h1 className="text-red-500 text-xl font-bold">Holiday your way 🧣</h1>
        </div>
      </div>
      {/* cards reward */}
      <div className="flex items-center basis-3/5 py-10">
        <div className="flex flex-col">
            <div>
                <h1 className="px-2 py-4 text-xl font-bold">Purwadhika® Rewards</h1>
            </div>
            <div className="flex flex-cols gap-3 p-2">
                <div>
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-1_tcm121-77064.jpg" alt="reward-1" className="rounded-md"/>
                    <p className="text-md">Let us treat you—earn and redeem<br/>Stars for free drinks, food and more.</p>
                </div>
                <div>
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-2_tcm121-77065.jpg" alt="reward-2" className="rounded-md"/>
                    <p className="text-md">Customize your order in the app and<br/>pick it up when it’s ready.</p>
                </div>
                <div>
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-3_tcm121-77066.jpg" alt="reward-3" className="rounded-md"/>
                    <p className="text-md">Stop in on your birthday for a special<br/>treat on the house.</p>
                </div>
                {/* <div>
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-4_tcm121-77067.jpg" alt="reward-4"/>
                    <p className="text-md">Enjoy Bonus Star challenges, Double<br/>Star Days and exclusive games.</p>
                </div> */}
            </div>
            <div className="flex gap-4 p-3">
                <button className="border border-black rounded-full px-5 py-2">Join now</button>
                <button className="bg-black text-white border border-black rounded-full px-5 py-2">Learn more</button>
            </div>
            {/* cards-1 menu choice */}
            <div className="px-32 mt-20">
                <div className="border border-green-500 p-4 my-3 rounded-md">
                    <h1 className="text-2xl font-bold">Answer a few questions to find something new</h1>
                    <p className="my-3">What type of drink are you looking for?</p>
                    <div className="flex flex-col gap-2">
                        <div className="bg-cyan-300 border border-green-600 rounded-md w-50 p-3 flex flex-rows justify-around items-center">
                            <div>
                                <h2 className="text-xl font-bold">Iced</h2>
                                <p>Cool off and uplift</p>
                            </div>
                            <div>
                                <img src="https://app.starbucks.com/weblx/images/drink-finder/iced_drink.png" alt="iced-coffee" className="w-12" />
                            </div>
                        </div>
                        <div className="bg-red-400 border border-green-600 rounded-md w-50 p-3 flex flex-rows justify-around items-center">
                            <div>
                                <h2 className="text-xl font-bold">Hot</h2>
                                <p>Warm up and get going</p>
                            </div>
                            <div>
                                <img src="https://app.starbucks.com/weblx/images/drink-finder/hot_drink.png" alt="iced-coffee" className="w-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cards-2 advertising */}
            <div className="px-32 mt-3 mb-10 gap-4">
                <div className="border border-green-500 my-3 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1665370429633-46f4b3077dab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="ads" width='100%' height='100%' className="object-cover rounded-t-lg"/>
                    <div className="flex flex-col items-center m-3">
                        <h2 className="text-xl font-bold mb-3">Closer to moments that matter</h2>
                        <p className="text-md">Add extra cheer this holiday season by joining Purwadhika® Rewards, linking it to Delta SkyMiles® to unlock 1 mile per $1 spent at Purwadhika (excludes taxes & tips).</p>
                    </div>
                    <div className="p-10 mt-5 self-end">
                        <button className="bg-black text-white border border-black rounded-full px-5 py-2">Join now</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* jumbotron */}
    </div>
  );
};

export default Homepage;
