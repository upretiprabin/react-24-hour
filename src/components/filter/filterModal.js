import React, {useState} from 'react';
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ModalLayout from "../modal/ModalLayout";
import {connect} from "react-redux";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {setFilter} from "../../redux/actions/FilterActions";

const handleSelect = (checked,filterId,filterData) =>{
    console.log("checked",checked)
let filterList = filterData.map((data)=>{
    if(data.id === filterId)
        data.show = checked
    return data;
})
setFilter(filterList)
}

const FilterModal = ({filter}) =>{
    let filterData = filter.filterList;

    return (
        <ModalLayout modalIcon={<FontAwesomeIcon icon={faFilter} title={"Filter"}/>}>
            <div>
                <h5>Filter</h5>
                <FormGroup>
                    {filterData && filterData.map((data,index)=>{
                        return(
                            <FormControlLabel key={index} control={
                                <Checkbox color="primary" checked={data.show} onChange={(event,checked)=>{handleSelect(checked,data.id,filterData)}} value={data.id} />
                            } label={data.label}
                            />
                        );
                    })}
                </FormGroup>
            </div>
        </ModalLayout>
    );
}
// map state to props
const mapStateToProps = ({ filter }) => {
    return { filter };
};

export default connect(mapStateToProps)(FilterModal);