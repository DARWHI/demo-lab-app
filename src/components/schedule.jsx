import { staticData } from '../data';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

export const Schedule = ({ workstationId }) => {

    const allReservations = useSelector(state => state.reservations);
    const dispatch = useDispatch();

    const workstationReservations = allReservations.filter(i => i.workstationId === workstationId);

    console.log(workstationReservations)

    // 24 hours / 30 minutes per slot
    const bookingSlots = 48;
    // 5 days of bookings
    const days = 5;

    const dayArr = [...Array(days)].map((d, i) => moment().add('day', i).format('DD MMM YYYY'));

    //https://stackoverflow.com/questions/36125038/generate-array-of-times-as-strings-for-every-x-minutes-in-javascript
    var x = 30; //minutes interval
    var times = []; // time array
    var tt = 0; // start time
    var ap = ['AM', 'PM']; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
        var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
        var mm = (tt % 60); // getting minutes of the hour in 0-55 format
        times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;
    }

    const handleSlotClick = ({ slot, day }) => {
        dispatch({
            type: "BOOK_WORKSTATION",
            payload: {
                date: day,
                slot,
                username: 'admin',
                workstationId
            }
        })
    }

    return (
        <>
        Schedule
        {
            workstationId ?
            dayArr.map(day =>
                    <ul className="schedule-day" key={day}>
                        {day}
                        {
                            times.map((slot, indx) => indx < bookingSlots &&
                                <li className="timeslot" key={slot} onClick={() => handleSlotClick({ day, slot: indx })}>
                                    {slot + ' : '}
                                    {times[indx + 1] ? times[indx + 1] : '00:00AM'}
                                </li>)
                        }

                    </ul>
                )
                : <>Select a workstation from the list above to see the schedule</>
        }
        </>
    )

};