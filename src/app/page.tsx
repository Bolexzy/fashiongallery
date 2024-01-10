import Carousel from "./components/Carousel";
import Feature from "./components/Feature";
import GenderTab from "./components/GenderTab";
import Logos from "./components/Logos";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center p-4 lg:p-10 pb-0 pt-16 lg:pt-20">
      <Carousel />
      <Logos />
      <GenderTab />
      <div className="w-screen feature -mb-10">
        <Feature />
      </div>
      <div
        className="scroll_background w-screen h-full relative lg:-mb-12 "
        id="newsletter"
      >
        <div className="absolute inset-0 top-[50%] flex flex-col gap-5 p-4 text-center">
          <p className="text-white font-medium tracking-wide text-2xl">
            Be the first to know!{" "}
          </p>
          <div className="flex gap-2 items-center justify-center">
            <input
              type="text"
              placeholder="Enter your email now"
              className="input input-bordered w-full max-w-xs rounded-none bg-gray-200 text-gray-700"
            />
            <button className="btn rounded-none text-gray-700 hover:text-gray-50 bg-gray-200">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
