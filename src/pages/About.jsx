import { images } from "../constant";

function About() {
  return (
    <div className="mt-[20vh] w-full flex flex-col ">
      <img src={images.bg_about} className="" alt="" />
      <div className="py-10 xl:flex justify-center gap-x-10 ">
        <div className="w-[25vw] h-[60vh] overflow-hidden ">
          <img
            src={images.about}
            className="w-[100%] h-[100%] hover:scale-110 duration-500"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-3 w-[50vw] p-3">
          <h1 className="text-2xl">Our story</h1>
          <p className="text-gray-400 text-xl">
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
            porta est ac neque bibendum viverra. Vivamus lobortis magna ut
            interdum laoreet. Donec gravida lorem elit, quis condimentum ex
            semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
            ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
            orci.
          </p>
          <div className="ps-7 border-s-2 border-gray-400">
            <p className="text-gray-400 text-xl">
              Creativity is just connecting things. When you ask creative people
              how they did something, they feel a little guilty because they
              didn't really do it, they just saw something. It seemed obvious to
              them after a while.
            </p>
            <p className="text-gray-500">- Steve Job’s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
