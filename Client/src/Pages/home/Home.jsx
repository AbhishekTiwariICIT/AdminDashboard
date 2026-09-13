import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table'

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
            <div className="charts">
                <Featured/>
                <Chart/>
            </div>
            <div className="listContainer">
                <div className="listTitle">Latest transaction</div>
                <Table/>
            </div>
        </div>

    </div>


    )
}

export default Home