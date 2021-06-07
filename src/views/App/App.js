import './App.css';
import Header  from '../../components/Header.js';
import ClickableCard from '../../components/ClickableCard.js';

export default function App() {
  return (
    <div className="">
      <Header URL="/" />
      <ClickableCard URL="/locations">Locations</ClickableCard>
      <ClickableCard URL='/suggestions'>I'm Feeling Lucky</ClickableCard>
    </div>
  );
}
