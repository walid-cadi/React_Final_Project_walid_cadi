import { images } from "../constant";

function Contact() {
  return (
    <div className="mt-[20vh] w-full flex flex-col">
      <div className="relative h-[35vh] ">
        <img src={images.bg_contact} className="w-[100%] h-[100%]" alt="" />
        <h1 className="text-6xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          CONTACT
        </h1>
      </div>
      <div className="flex gap-x-6 h-[90vh] w-full py-14 px-[10vw]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.423448427251!2d-7.663010125181926!3d33.51637454583712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62cf8ca24cbf3%3A0xa05daf5045d82588!2sCasablanca!5e0!3m2!1sfr!2sma!4v1726155144398!5m2!1sfr!2sma"
          width="600"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        <form action="" className="flex flex-col gap-y-5 w-[40vw] ">
          <label htmlFor="" className="text-3xl">
            Send us your message
          </label>
          <input
            type="text"
            placeholder="Name"
            className="px-10 py-4 border-2 border-gray-300"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-10 py-4 border-2 border-gray-300"
          />
          <input
            type="text"
            placeholder="Phone"
            className="px-10 py-4 border-2 border-gray-300"
          />
          <textarea
            placeholder="Message"
            className="px-10 py-4 border-2 border-gray-300"
          />
          <button className="w-[13vw] bg-black text-white text-lg  py-4 rounded-full hover:bg-[#e65540] duration-500">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
