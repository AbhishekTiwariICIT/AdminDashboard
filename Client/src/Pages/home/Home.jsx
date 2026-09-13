import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'


import './home.scss'
import Widgets from '../../components/widgets/Widgets'

function Home (){

    return (

    <div className="home">
        <Sidebar/>
        <div className="homecontainer">
            <Navbar/>
            <div className="widgets">
                <Widgets type="user"/>
                <Widgets type="order"/>
                <Widgets type="earning"/>
                <Widgets type="balance"/>
              
            </div>
        </div>

    </div>


    )
}

export default Home