import BarComponent from "../components/BarComponent"
import ChartComponent from "../components/ChartComponent"
import SimpleLineComponent from "../components/SimpleLineComponent"
import Navbar from "../layouts/Navbar"


const Dart = () =>{

    return(
        <div>
            <Navbar logoText="Overview"/>
            <div className="container">
                <div className="left-column">
                <ChartComponent/>
                <SimpleLineComponent/>
                </div>
                <div className="right-column">
                    <BarComponent/>
                </div>
            </div>
    </div>
    )

}

export default Dart;