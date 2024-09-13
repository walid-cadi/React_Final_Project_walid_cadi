import Carousel from "./components/Carousel";
import { Items } from "./components/Items";
import SectionBlog from "./components/secBlog";
import SecondCarousel from "./components/secondCarousel";

function Home() {
  return (
    <div className="mt-[9vh] flex flex-col gap-7">
      <Carousel />
      <Items />
      <SecondCarousel />
      <SectionBlog />
    </div>
  );
}

export default Home;
