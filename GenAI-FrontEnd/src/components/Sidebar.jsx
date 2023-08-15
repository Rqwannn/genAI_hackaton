import PropTypes from "prop-types";

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

function Sidebar({ isSidebarOpen }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-[400px] h-screen pt-24 bg-white border-r border-gray-200 transition-transform  ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-7 overflow-y-auto bg-white">
        <h5 className="text-lg font-medium ">User Guidlines</h5>
        <ul className="space-y-4 font-medium pt-5">
          <ButtonSidebar title="Mulai Tutorial" />
          <ButtonSidebar title="Panduan Cara Menggunakan" />
          <ButtonSidebar title="Contoh Use-Case" />
        </ul>
      </div>
    </aside>
  );
}

ButtonSidebar.propTypes = {
  title: PropTypes.string.isRequired,
};

function ButtonSidebar({ title }) {
  return (
    <li>
      <a
        href="#"
        className="flex items-center justify-between px-5 py-4 text-gray-900 border hover:bg-gray-100"
      >
        <span className="text-lg">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </a>
    </li>
  );
}

export default Sidebar;
