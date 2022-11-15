import infos from "../data/Infos.json";

const { firstName, lastName, objectives, motivation } = infos;

const Header = () => {
  // Ajouter un style dans le nom de famille, fond en vert avec lettre en gras noir
  return (
    <div className="flex flex-row gap-8 bg-orange-500 w-full h-fit">
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
      <div className="bg-green-600 w-full p-8 flex flex-col justify-between ">
        <div className="">
          <div className="font-sans text-4xl">{firstName + " " + lastName}</div>
          <div className="font-sans italic">{objectives}</div>
        </div>
        <div className="">
          <div className="">MES OBJECTIFS</div>
          <div>{motivation}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
