import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';


function App() {
  return (
    <>
      <Nav />
      <div className="hero--right-background w-3/6 h-[410px] rounded-bl-[80px] absolute top-0 right-0 -z-10 sm:h-[450px] xl:w-5/12 2xl:w-6/12"></div>
      <Hero />
    </>
  );
}

export default App;
