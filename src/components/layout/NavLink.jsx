const NavLink = ({ title, href, onClick, isMobile }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative font-medium transition-all duration-300
        ${
          isMobile
            ? "text-blue-350 hover:text-blue-500 after:w-0"
            : "text-white hover:text-blue-500 after:w-0"
        }
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:bg-blue-500
        after:transition-all
        after:duration-300
        hover:after:w-full`}
    >
      {title}
    </a>
  );
};

export default NavLink;