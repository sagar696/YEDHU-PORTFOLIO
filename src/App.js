
import './App.css';
import '../src/assets/css/styles.css';
import Waitfor from './Components/common/waiting_for/waiting'
import AppDesign from './Components/App design/App_design';
import Footer from '../src/Components/footer/Footer'; // almost completed
import Preloader from './Components/preloader/loader'
import Project from '../src/Components/common/project_info/project'; //completed design , pending : font-size , alignment
import ImageSlider from '../src/Components/common/image_slider/slider'
import Websites from '../src/Components/Websites/Websites'; // completed 
import Banner from '../src/Components/common/Banners/banner_websites';
import Ourservices from '../src/Components/Our Work/ourservices/service';
import Contactus from '../src/Components/Contact Us/Contact_us'; //design completed , functionalities pending
import DigitalMarketing from '../src/Components/Digital Marketing/Digital_Marketing'; //css from website.css
import Aboutus from '../src/Components/aboutus/aboutus';


function App() {
  return (
    <div className="App">
 
   <Aboutus/>
   

    </div>
  );
}

export default App;
