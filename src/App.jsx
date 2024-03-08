import Navbar from "../src/Navbar/index";
import Hero from "../src/Hero/index";
import Benefit from "./Benefit";
import Exlucive from "./Exclusive";
export default function App() {
  return (
    <div className=" mb-20 min-h-screen">
      <Navbar />
      <Hero />
      <Benefit />
      <Exlucive/>
    </div>
  );
}
