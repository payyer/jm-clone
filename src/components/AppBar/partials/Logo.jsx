import { Link } from "react-router";
import jmLogo from "../../../assets/jm-logo.png";
export default function Logo() {
  return (
    <Link
      to="/"
      className="hover-effect absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
    >
      <img
        className="w-[62px] sm:w-[102px] h-auto "
        src={jmLogo}
        height={48}
        width={101}
        alt="JM DRESS DESIGN"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
