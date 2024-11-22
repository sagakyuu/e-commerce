import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <header className="flex justify-between px-2 py-1">
        <div>MeetMeat</div>
        <nav className="flex gap-2">
          <ul className="flex gap-2">
            <li>Product</li>
            <li>Daging</li>
            <li>Bumbu</li>
            <li>Bahan Lengkap</li>
            <li>Peralatan</li>
          </ul>
        </nav>
        <div>
          <Link to={"/auth/login"}>Akun</Link>
        </div>
      </header>
    </div>
  );
};

export default App;
