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
                    } label={"All Experiences"}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isExchangesChecked} onChange={(event,checked)=>{handleSelect(checked,2,filterData,setIsExchangesChecked,setFilter)}} value={2} />
                    } label={"Exchanges"}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isGamesChecked} onChange={(event,checked)=>{handleSelect(checked,3,filterData,setIsGamesChecked,setFilter)}} value={3} />
                    } label={"Games"}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isMarketPlaceChecked} onChange={(event,checked)=>{handleSelect(checked,4,filterData,setIsMarketPlaceChecked,setFilter)}} value={4} />
                    } label={"Marketplace"}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isDefiChecked} onChange={(event,checked)=>{handleSelect(checked,5,filterData,setIsDefiChecked,setFilter)}} value={5} />
                    } label={"Defi"}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isCollectiChecked} onChange={(event,checked)=>{handleSelect(checked,6,filterData,setIsCollectiChecked,setFilter)}} value={6} />
                    } label={"Collectibles"}
                    />
                    <FormControlLabel control={
                        <Checkbox color="primary" checked={isUtilitiesChecked} onChange={(event,checked)=>{handleSelect(checked,7,filterData,setIsUtilitesChecked,setFilter)}} value={7} />
                    } label={"Utilities"}
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