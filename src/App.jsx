import Description from "./components/Description/Description";
import Feadback from "./components/Feadback/Feadback";
import Options from "./components/Options/Options";

const App = () => {
  const titleButton = [
    {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  ];
  return (
    <div>
      <Description />
      <Options data={titleButton} />
      <Feadback data={titleButton} />
    </div>
  );
};

export default App;
