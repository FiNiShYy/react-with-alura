import './DropdownList.css'

const DropdownList = (props) => {
    console.log(props.items)

    return (
        <div className="dropdownlist">
            <label>{props.label}</label>
            <select>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )


}

export default DropdownList