import './assets/styles/header.css'
import './assets/styles/home.css'

function App() {

  return (
   <div id="home">
    <header>
      <ul className='menu'>
        <li><button className='menuOpt'><span className='id'>00</span> Home</button></li>
        <li><button className='menuOpt'><span className='id'>01</span> Destination</button></li>
        <li><button className='menuOpt'><span className='id'>02</span> Crew</button></li>
        <li><button className='menuOpt'><span className='id'>03</span> Technology</button></li>
      </ul>
    </header>

    <article className='intro'>
    <h5>So, you want to travel to <br /> <span>Space</span></h5>
    
    <p>Let’s face it; if you want to go to space, you might as well <br />genuinely go to 
    outer space and not hover kind of on the <br />edge of it. Well sit back, and relax 
    because we’ll give you a <br />truly out of this world experience!</p>

    <button>Explore</button>
    </article>
   </div>
  )
}

export default App
