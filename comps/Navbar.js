import Link from "next/link";
const Nabvar = () => {
  return (
    <div className="nav">
      <h1>Welcome to React Framework NextJS</h1>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Contact Person">Contact Person</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nabvar;
