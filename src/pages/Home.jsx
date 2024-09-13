import Carousel from "./components/Carousel";
import { Items } from "./components/Items";

function Home() {
  return (
    <div className="mt-[10vh] flex flex-col gap-7">
      <Carousel />
      <Items/>
    </div>
  );
}

export default Home;
