import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export function EditionSchedules(props)
{
    const { copyMerchant , setCopyMerchant} = props;

    return(
        <>
        {copyMerchant.schedules !== undefined
        ?
            <div className="ProfileMerchantSchedulesEdition">
                <ul>
                    <li>
                        <label> Monday :</label>
                        <input className="ScheduleInput" type="text" value={copyMerchant.schedules.monday} placeholder="Closed" onChange={(event)=> {
                            const copyCopyMerchant = {...copyMerchant};
                            const copySchedules = {...copyMerchant.schedules};
                            const copySchedulesMonday = {...copySchedules};
                            
                            copySchedulesMonday.monday = event.target.value;
                            copyCopyMerchant.schedules= copySchedulesMonday;

                            setCopyMerchant(copyCopyMerchant);
                        }}/>
                    </li>

                    <li>
                        <label> Tuesday :</label>
                        <input className="ScheduleInput" type="text" value={copyMerchant.schedules.tuesday} placeholder="Closed" onChange={(event)=> {
                            const copyCopyMerchant = {...copyMerchant};
                            const copySchedules = {...copyMerchant.schedules};
                            const copySchedulesTuesday = {...copySchedules};
                            
                            copySchedulesTuesday.tuesday = event.target.value;
                            copyCopyMerchant.schedules= copySchedulesTuesday;

                            setCopyMerchant(copyCopyMerchant);
                        }}/>
                    </li>

                    <li>
                        <label> Wednesday :</label>
                        <input className="ScheduleInput" type="text" value={copyMerchant.schedules.wednesday} placeholder="Closed" onChange={(event)=> {
                            const copyCopyMerchant = {...copyMerchant};
                            const copySchedules = {...copyMerchant.schedules};
                            const copySchedulesWednesday = {...copySchedules};
                            
                            copySchedulesWednesday.wednesday = event.target.value;
                            copyCopyMerchant.schedules= copySchedulesWednesday;

                            setCopyMerchant(copyCopyMerchant);
                        }}/>
                    </li>

                    <li>
                        <label> Thursday :</label>
                        <input className="ScheduleInput" type="text" value={copyMerchant.schedules.thursday} placeholder="Closed" onChange={(event)=> {
                            const copyCopyMerchant = {...copyMerchant};
                            const copySchedules = {...copyMerchant.schedules};
                            const copySchedulesThursday = {...copySchedules};
                            
                            copySchedulesThursday.thursday = event.target.value;
                            copyCopyMerchant.schedules= copySchedulesThursday;

                            setCopyMerchant(copyCopyMerchant);
                        }}/>
                    </li>

                    <li>
                        <label> Friday :</label>
                        <input className="ScheduleInput" type="text" value={copyMerchant.schedules.friday} placeholder="Closed" onChange={(event)=> {
                            const copyCopyMerchant = {...copyMerchant};
                            const copySchedules = {...copyMerchant.schedules};
                            const copySchedulesFriday = {...copySchedules};
                            
                            copySchedulesFriday.friday = event.target.value;
                            copyCopyMerchant.schedules= copySchedulesFriday;

                            setCopyMerchant(copyCopyMerchant);
                        }}/>
                    </li>

                    <li>
                        <label> Saturday :</label>
                        <input className="ScheduleInput" type="text" value={copyMerchant.schedules.saturday} placeholder="Closed" onChange={(event)=> {
                            const copyCopyMerchant = {...copyMerchant};
                            const copySchedules = {...copyMerchant.schedules};
                            const copySchedulesSaturday = {...copySchedules};
                            
                            copySchedulesSaturday.saturday = event.target.value;
                            copyCopyMerchant.schedules= copySchedulesSaturday;

                            setCopyMerchant(copyCopyMerchant);
                        }}/>
                    </li>

                    <li>
                        <label> Sunday :</label>
                        <input className="ScheduleInput" type="text" value={copyMerchant.schedules.sunday} placeholder="Closed" onChange={(event)=> {
                            const copyCopyMerchant = {...copyMerchant};
                            const copySchedules = {...copyMerchant.schedules};
                            const copySchedulesSunday = {...copySchedules};
                            
                            copySchedulesSunday.sunday = event.target.value;
                            copyCopyMerchant.schedules= copySchedulesSunday;

                            setCopyMerchant(copyCopyMerchant);
                        }}/>
                    </li>

                </ul>
            </div>
            :
            null}
        </>
    );
}

EditionSchedules.propTypes =
{
    copyMerchant: PropTypes.object,
    setCopyMerchant: PropTypes.func,
}

export default EditionSchedules;