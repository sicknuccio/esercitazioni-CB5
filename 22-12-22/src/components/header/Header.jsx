import "./header.css";

const menuItems = [
  { label: "Instagram", href: "https://www.instagram.com/", id: 1 },
  { label: "YouTube", href: "https://www.youtube.com/", id: 2 },
  { label: "Facebook", href: "https://www.facebook.com/", id: 3 },
];

export function Header(props) {
  return (
    <header className="Header">
      <nav className="navBar">
        <ul role="menu">
          {menuItems.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
