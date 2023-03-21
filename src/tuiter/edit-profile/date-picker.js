import React from 'react';
import flatpickr from "flatpickr";

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.datePicker = null;
    }

    componentDidMount() {
        const {defaultDate, onChange} = this.props;
        this.datePicker = flatpickr(this.datePickerNode, {
            dateFormat: 'm/d/Y',
            defaultDate: defaultDate,
            onChange: (selectedDates, dateStr) => {
                onChange(dateStr);
            },
        });
    }

    render() {
        return (
            <div>
                <small className="text-muted">Birth date &middot; </small>
                <small className="text-primary" onClick={() => this.datePicker.open()}>Edit</small>
                <div ref={node => (this.datePickerNode = node)}></div>
            </div>
        );
    }
}

DatePicker.defaultProps = {
    defaultDate: 'today',
    onChange: () => {},
};

export default DatePicker;