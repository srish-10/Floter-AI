import NavLink from "./NavLink";
import navigation from "../../data/navigation";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`
      md:hidden
      overflow-hidden
      transition-all
      duration-300
      ${
        isOpen
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0"
      }
    `}
    >
      <div className="flex flex-col gap-5 px-6 py-5 bg-white shadow-lg">
        {navigation.map((item) => (
          <NavLink
            key={item.id}
            {...item}
            onClick={closeMenu}
            isMobile = {true}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;