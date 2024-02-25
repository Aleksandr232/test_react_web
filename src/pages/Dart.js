import BarComponent from "../components/BarComponent"
import ChartComponent from "../components/ChartComponent"
import Navbar from "../layouts/Navbar"


const Dart = () =>{

    return(
        <div>
            <Navbar logoText="Overview"/>
            <BarComponent/>
            <ChartComponent/>
        </div>
    )

}

export default Dart;