import MoreVertIcon from '@mui/icons-material/MoreVert';
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () =>{
    return(
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize='small'/>
            </div>
            <div className="bottom">
                <div className="featuedChart">
                    <CircularProgressbar value={77} text={`${70}%`} strokeWidth={5} className='progressbar'/>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$402</p>
                <p className="desc">
                    Previous transaction processing. Last payment may not be included.
                </p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>


                        <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowDownIcon fontSize="small"/>


                        <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowDownIcon fontSize="small"/>


                        <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured