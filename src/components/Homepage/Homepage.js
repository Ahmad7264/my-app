import "./Homepage.css"

function Homepage() {
    return ( 
     <div className="homepage_container">
        <div className="homepage_left">
            <p className="homepage_left_h1">
                <span className="red_color">Hi,</span> I'm Mohammad
            </p>
            <p className="homepage_left_h2">Dilshad</p>
            <p className="homepage_left_h3">Full Stack Developer  </p> 
        <p className="homepage_left_des">When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum 
        will create your gibberish texts for you.</p>
      <div>
        <a href="#" target="_blank">
        <img  src="https://img.icons8.com/nolan/64/github.png" 
        alt="github"
        className="homepage_logo"/>
        </a>
        <a href="#" target="_blank">
        <img 
         src="https://img.icons8.com/nolan/64/linkedin-circled.png" 
         alt="linkedin-circled"
         className="homepage_logo"/>
        </a>
        <div>
            <a href="mailto:john@gmail.com" >
             <button className="homepage_left-button">Get In Touch</button>
            </a>
        </div>
      </div>
      </div>

        <div className="homepagae_right">
            <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="gif" />
        </div>
        
     </div>
    
    );
}

export default Homepage;