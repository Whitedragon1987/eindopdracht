import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./DatePicker.module.css";


function RequestDatePicker() {
    const [date, setDate] = useState(new Date());

    return(
        <DatePicker
            showTimeSelect
            dateFormat = "MMMM d, yyyy h:mmaa"
            selected={date}
            onChange={date => setDate(date)}/>
    );
}

export default RequestDatePicker;