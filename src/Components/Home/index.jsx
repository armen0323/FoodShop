import '../Home/style.scss';
import { HashLink } from 'react-router-hash-link';




function Home(){
    
    return(
        <section className='g-background-img home-blok'>
         <nav className='g-justify-between g-align-center nav-blok' >
                <div className='g-justify-evenly g-align-center nav-left-list'>
                   <HashLink smooth={true} to='/#' className='lists-font'> Home</HashLink>
                   <HashLink smooth={true} to='/#about' className='lists-font'> About</HashLink>
                  <HashLink smooth={true} to='/#gallery' className='lists-font'>  Gallery</HashLink>
                  <HashLink smooth={true} to='/#book' className='lists-font'>  Book-Table</HashLink>
                </div>
                <div className='nav-logo'>Food Hut</div>
                <div className='g-justify-evenly g-align-center nav-right-list'>
                <HashLink smooth={true} to='/#blog' className='lists-font'>    Blog</HashLink>
                 <HashLink smooth={true} to='/#reviews' className='lists-font'>  Reviews</HashLink>
                <HashLink smooth={true} to='/#contact' className='lists-font'>   Contact Us</HashLink>
                </div>
            </nav>
            <div className='container'>
           


       



            <div className='g-flex-direction g-justifi-align-center  home-title'>
                <h1 className='g-text-center home-food'>Food Hut</h1>
                <h2 className='g-text-center home-fresh'>Always fresh & Delightful</h2>
                <HashLink className='hash' smooth={true} to='/#' ><button className='g-justifi-align-center home-btn'>view our gallery</button></HashLink>
            </div>
            </div>
        </section>
    )
}

export default Home