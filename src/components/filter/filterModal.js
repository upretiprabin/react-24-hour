import React, {useState} from 'react';
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ModalLayout from "../modal/ModalLayout";
import {connect} from "react-redux";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {setFilter} from "../../redux/actions/FilterActions";
import exchangesImage from "../../images/exchanges.png";
import gamesImage from "../../images/games.png";
import marketPlaceImage from "../../images/marketPlace.png";
import defiImage from "../../images/defi.png";
import collectiblesImage from "../../images/collectibles.png";
import utilitiesImage from "../../images/utilities.png";

const handleSelect = (checked,filterId,filterData,setState,setFilter) =>{
    let filterList = filterData.map((data)=>{
        if(data.id === filterId)
            data.show = checked
        return data;
    })
    setFilter(filterList);
    setState(checked);
}

const getShowFlag = (id,data) =>{
    return data.filter((d)=>d.id===id)[0]?.show
}

const FilterModal = ({filter,setFilter}) =>{
    let filterData = filter.filterList;
    const [isAllExperienceChecked,setIsAllExperienceChecked] = useState(getShowFlag(1,filterData));
    const [isExchangesChecked,setIsExchangesChecked] = useState(getShowFlag(2,filterData));
    const [isGamesChecked,setIsGamesChecked] = useState(getShowFlag(3,filterData));
    const [isMarketPlaceChecked,setIsMarketPlaceChecked] = useState(getShowFlag(4,filterData));
    const [isDefiChecked,setIsDefiChecked] = useState(getShowFlag(5,filterData));
    const [isCollectiChecked,setIsCollectiChecked] = useState(getShowFlag(6,filterData));
    const [isUtilitiesChecked,setIsUtilitesChecked] = useState(getShowFlag(7,filterData));

    const selectedFilters = filterData.filter((filter)=>filter.show)?.length
    return (
        <ModalLayout modalIcon={<FontAwesomeIcon icon={faFilter} title={"Filter"}/>}>
            <div>
                <h5>Filter <span className='number-tag'>{selectedFilters}</span></h5>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isAllExperienceChecked} onChange={(event,checked)=>{handleSelect(checked,1,filterData,setIsAllExperienceChecked,setFilter)}} value={1} />
                    } label={<span><span className={"ml-2"}>All Experiences</span></span>}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isExchangesChecked} onChange={(event,checked)=>{handleSelect(checked,2,filterData,setIsExchangesChecked,setFilter)}} value={2} />
                    } label={<span><img className={"filter-image"} src={exchangesImage}/><span className={"ml-2"}>Exchanges</span></span>}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isGamesChecked} onChange={(event,checked)=>{handleSelect(checked,3,filterData,setIsGamesChecked,setFilter)}} value={3} />
                    } label={<span><img className={"filter-image"} src={gamesImage}/><span className={"ml-2"}>Games</span></span>}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isMarketPlaceChecked} onChange={(event,checked)=>{handleSelect(checked,4,filterData,setIsMarketPlaceChecked,setFilter)}} value={4} />
                    } label={<span><img className={"filter-image"} src={marketPlaceImage}/><span className={"ml-2"}>Marketplace</span></span>}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isDefiChecked} onChange={(event,checked)=>{handleSelect(checked,5,filterData,setIsDefiChecked,setFilter)}} value={5} />
                    } label={<span><img className={"filter-image"} src={defiImage}/><span className={"ml-2"}>Defi</span></span>}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isCollectiChecked} onChange={(event,checked)=>{handleSelect(checked,6,filterData,setIsCollectiChecked,setFilter)}} value={6} />
                    } label={<span><img className={"filter-image"} src={collectiblesImage}/><span className={"ml-2"}>Collectibles</span></span>}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isUtilitiesChecked} onChange={(event,checked)=>{handleSelect(checked,7,filterData,setIsUtilitesChecked,setFilter)}} value={7} />
                    } label={<span><img className={"filter-image"} src={utilitiesImage}/><span className={"ml-2"}>Utilities</span></span>}
                    />
                </FormGroup>
            </div>
        </ModalLayout>
    );
}
// map state to props
const mapStateToProps = ({ filter }) => {
    return { filter };
};

export default connect(mapStateToProps,{setFilter})(FilterModal);