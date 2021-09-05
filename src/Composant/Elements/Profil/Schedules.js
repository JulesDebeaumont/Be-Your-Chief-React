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
        <>
        { Object.values(schedules).length > 2
        ?
            <div className="ProfileMerchantSchedules"><b>Schedules :</b>
                <ul><br/>
                    <li hidden = {schedules.monday === undefined ? "hidden" : "" }>
                        Monday : {schedules.monday}
                    </li>
                    <li hidden = {schedules.tuesday === undefined ? "hidden" : "" }>
                        Tuesday : {schedules.tuesday}
                    </li>
                    <li hidden = {schedules.wednesday === undefined ? "hidden" : "" }>
                        Wednesday : {schedules.wednesday}
                    </li>
                    <li hidden = {schedules.thursday === undefined ? "hidden" : "" }>
                        Thursday : {schedules.thursday}
                    </li>
                    <li hidden = {schedules.friday === undefined ? "hidden" : "" }>
                        Friday :  {schedules.friday}
                    </li>
                    <li hidden = {schedules.saturday === undefined ? "hidden" : "" }>
                        Saturday : {schedules.saturday}
                    </li>
                    <li hidden = {schedules.sunday === undefined ? "hidden" : "" }>
                        Sunday : {schedules.sunday}
                    </li>
                </ul>
            </div>
        :
        null}
        </>
    );  
}

Schedules.propTypes =
{
    schedules: PropTypes.object,
}

export default Schedules;