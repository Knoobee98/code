let Homepage = () => {
  return (
    <div className="flex items-center relative">
      <div className="flex flex-col basis-1/2 static">
        <h1 className="text-red-500 text-xl font-bold p-4">Joy to you!</h1>
      </div>
      <div className="flex items-center basis-1/2">
        <div className="flex flex-col">
            <div>
                <h1 className="px-2 py-3 text-2xl">purwadhika rewards</h1>
            </div>
            <div className="flex flex-cols gap-3 p-2">
                <div>
                    <img src="https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000" alt="reward-1" width='100px' height='100px'/>
                    <p className="text-md">Let us treat you—earn and redeem<br/>Stars for free drinks, food and more.</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000" alt="reward-2" width='100px' height='100px'/>
                    <p className="text-md">Customize your order in the app and<br/>pick it up when it’s ready.</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000" alt="reward-3" width='100px' height='100px'/>
                    <p className="text-md">Stop in on your birthday for a special<br/>treat on the house.</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000" alt="reward-3" width='100px' height='100px'/>
                    <p className="text-md">Enjoy Bonus Star challenges, Double<br/>Star Days and exclusive games.</p>
                </div>
            </div>
            <div className="flex gap-4 p-3">
                <button className="border border-black rounded-full px-5 py-2">Join now</button>
                <button className="bg-black text-white border border-black rounded-full px-5 py-2">Learn more</button>
            </div>
            <div className="p-2 mt-4">
                <div className="border border-green-500 p-4 my-3">
                    <h1 className="text-2xl font-bold">Answer a few questions to find something new</h1>
                    <p className="my-3">What type of drink are you looking for?</p>
                    <div className="flex flex-col gap-2">
                        <div className="bg-slate-100 border border-green-600 rounded-md w-50 p-3">
                            <p2>Iced</p2>
                        </div>
                        <div className="bg-slate-200 border border-green-600 rounded-md w-50 p-3">
                            <p2>Hot</p2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                picture
            </div>
            {/* <div className="fixed mt-10 self-end mr-10">
                <button className="my-bg-main px-7 py-3 rounded-full my-light text-xl mb-10 drop-shadow-lg font-bold">Start an order</button>
            </div> */}
        </div>
      </div>
      {/* jumbotron */}
            <footer>
                
            </footer>
    </div>
  );
};

export default Homepage;
