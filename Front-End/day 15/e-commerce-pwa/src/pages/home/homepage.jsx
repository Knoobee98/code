import {Link} from 'react-router-dom'


let Homepage = () => {
  return (
    <div className="flex mt-5">
        {/* card fixed greeting */}
      <div className="flex flex-col basis-2/5">
        <div className="h-screen bottom-0 flex items-center justify-center pl-32">
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
                <button className="bg-black text-white border border-black rounded-full px-5 py-2"><Link to='/register'>Learn more</Link></button>
            </div>
            {/* cards-1 menu choice */}
            <div className="px-36 mt-20">
                <div className="border border-green-500 p-4 my-3 rounded-md">
                    <h1 className="text-2xl font-bold">Answer a few questions to find something new</h1>
                    <p className="my-3">What type of drink are you looking for?</p>
                    <div className="flex flex-col gap-2">
                        <div className="bg-cyan-300 border border-green-600 rounded-md w-50 p-2 flex flex-rows justify-around items-center">
                            <div>
                                <h2 className="text-xl font-bold">Iced</h2>
                                <p>Cool off and uplift</p>
                            </div>
                            <div>
                                <img src="https://app.starbucks.com/weblx/images/drink-finder/iced_drink.png" alt="iced-coffee" className="w-12" />
                            </div>
                        </div>
                        <div className="bg-red-400 border border-green-600 rounded-md w-50 p-2 flex flex-rows justify-around items-center">
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
            {/* cards-2 article */}
            <div className="px-36 py-30 mt-3 mb-10 gap-4">
                <div className="border border-green-500 my-3 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1642483452954-622c969ce6f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FydWRhJTIwaW5kb25lc2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="ads" width='100%' height='100%' className="object-cover rounded-t-lg"/>
                    <div className="flex flex-col items-center m-3">
                        <h2 className="text-xl font-bold mb-3">Garuda Members benefits</h2>
                        <p className="text-md">As a member of Garuda Indonesia you will be entitled to receive special discount as well as exclusive benefits on selected purchase in selected City/Airport in Indonesia and Asean Countries.</p>
                    </div>
                    <div className="p-10 mt-5 self-end">
                        <button className="bg-black text-white border border-black rounded-full px-5 py-2">Learn more</button>
                    </div>
                </div>
            </div>
            {/* cards-3 article */}
            <div className="px-36 py-30 mt-3 mb-10 gap-4">
                <div className="border border-green-500 my-3 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hyaXN0bWFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="ads" width='100%' height='100%' className="object-cover rounded-t-lg"/>
                    <div className="flex flex-col items-center m-3">
                        <h2 className="text-xl font-bold mb-3">Closer to moments that matter</h2>
                        <p className="text-md">Purwadhika Coffee Team congratulates to everyone who joined purwadhika's coffee member right now. We are delighted to celebrate Chrismast with our great discounts for all the members in this season. If you are not a member of purwadhika yet, please kindly sign up your membership today and take advantage of this great offer!</p>
                    </div>
                    <div className="p-10 mt-5 self-end">
                        <button className="bg-black text-white border border-black rounded-full px-5 py-2">Learn more</button>
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
