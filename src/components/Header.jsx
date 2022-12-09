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
        className="w-96 h-72"
      >
        <img
          className="w-full h-full"
          src={require("../assets/profil.jpg")}
          alt="profile"
        />

      </div>
      <div className="bg-emerald-500 absolute" style={{
        top: 237,
        left: 471,
        transform: 'rotate(142deg)',
        height: 8,
        width: 200,
      }} />
      <div className="w-full py-8 flex flex-col justify-between ">
        <h1 className="inline-flex mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {firstName}
          <div className="w-4"></div>
          <mark className="px-2 text-white bg-emerald-500 rounded dark:bg-emerald-500">
            {lastName}
          </mark>
        </h1>
        <p className="mb-4 text-lg italic font-normal text-gray-500 lg:text-xl dark:text-gray-200">{objectives}</p>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{motivation}</p>
      </div>
    </div>
  );
};

export default Header;
