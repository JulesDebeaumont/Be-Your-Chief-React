import PropTypes from 'prop-types';

export function Schedules(props)
{
    const { schedules } = props;

    /*
    const allMerchantSchedules = [];

    for (const [key, value] of Object.entries(schedules))
    {
      allMerchantSchedules.push(
         <li hidden = {value === "" ? "hidden" : "" } key={key}>{key} : {value}</li>
      )
    }

    allMerchantSchedules.shift();
    allMerchantSchedules.shift();
    
    */


    return(
        <div className="ProfileMerchantSchedules"><b>Schedules :</b>
            <ul><br/>
                <li hidden = {schedules.monday === "" ? "hidden" : "" }>
                    Monday : {schedules.monday}
                </li>
                <li hidden = {schedules.tuesday === "" ? "hidden" : "" }>
                    Tuesday : {schedules.tuesday}
                </li>
                <li hidden = {schedules.wednesday === "" ? "hidden" : "" }>
                    Wednesday : {schedules.wednesday}
                </li>
                <li hidden = {schedules.thursday === "" ? "hidden" : "" }>
                    Thursday : {schedules.thursday}
                </li>
                <li hidden = {schedules.friday === "" ? "hidden" : "" }>
                    Friday :  {schedules.friday}
                </li>
                <li hidden = {schedules.saturday === "" ? "hidden" : "" }>
                    Saturday : {schedules.saturday}
                </li>
                <li hidden = {schedules.sunday === "" ? "hidden" : "" }>
                    Sunday : {schedules.sunday}
                </li>
            </ul>
        </div>
    );  
}

Schedules.propTypes =
{
    schedules: PropTypes.object,
}

export default Schedules;