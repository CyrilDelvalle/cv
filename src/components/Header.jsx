import infos from "../data/Infos.json";

const { firstName, lastName, objectives, motivation } = infos;

const Header = () => {
  return (
    <div className="flex flex-row gap-8 w-full h-fit">
      <div
        style={{
          clipPath:
            "polygon(100% 0px, 99% 54%, 38% 100%, -4px 75.00%, 0px 0px)",
        }}
        className="w-80"
      >
        <img
          className="w-full h-full"
          src={require("../assets/profil-cartoon.jpg")}
          alt="profile"
        />
      </div>
      <div className=" w-full p-8 flex flex-col justify-between ">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{firstName} <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">{lastName}</mark></h1>
        <p class="mb-4 text-lg italic font-normal text-gray-500 lg:text-xl dark:text-gray-400">{objectives}</p>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{motivation}</p>
      </div>
    </div>
  );
};

export default Header;
