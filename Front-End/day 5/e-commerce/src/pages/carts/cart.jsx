export default function cart() {
  return (
    <div className="flex">
      <div className="basis-2/5 bg-green-400 h-screen px-10 py-12">
        <div className=" flex flex-col align-center">
          <div classname="text-lg text-white font-bold">
            <h1>Order List</h1>
          </div>
          <div className="py-12">
            <h1 className="text-lg text-white font-bold">Americano</h1>
            <br />
            <h3>Less Sugar, No ice, With Topping</h3>
            <div className="button flex gap-10 py-5">
              <div className="border px-2 py-1 bg-green-700 text-white">
                <button>+</button>
              </div>
              <div classname="text-lg text-white font-bold">10</div>
              <div className="border px-2 py-1 bg-green-700 text-white">
                <button>-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-3/5 h-screen"></div>
    </div>
  );
}
