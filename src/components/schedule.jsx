import { staticData } from '../data';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Accordion } from './accordion';
import { createTimeSlotArray } from '../assets/utils/time-utils';

export const Schedule = ({ workstationId }) => {

    const allReservations = useSelector(state => state.reservations);
    const dispatch = useDispatch();

    const workstationReservations = allReservations.filter(i => i.workstationId === workstationId);

    // 24 hours / 30 minutes per slot
    const bookingSlots = 48;
    // 5 days of bookings
    const days = 5;

    const dayArr = [...Array(days)].map((d, i) => moment().add(i, 'day').format('DD MMM YYYY'));
    const times = createTimeSlotArray();

    const handleSlotClick = ({ slot, day }) => {
        const username = localStorage.getItem('current-user') ? localStorage.getItem('current-user') : '';

        // Rule is currently 90 minutes per ws per day to change to 90 minutes total
        // change 'workstationReservations' to 'allReservations'
        const wsForUser = workstationReservations.filter(i => i.date === day && i.username === username);

        if (wsForUser.length > 2) {
            alert('You have exceeded your reservations for this day');
            return;
        }

        dispatch({
            type: "BOOK_WORKSTATION",
            payload: {
                date: day,
                slot,
                username,
                workstationId
            }
        })
    };

    return (
        <div className="page-section">
            <div className="page-section-title">Schedule</div>
            <div className="schedule">
                {
                    workstationId ?
                        dayArr.map(day =>
                            <Accordion date={day} key={day}>
                                {
                                    times.map((slot, indx) => indx < bookingSlots &&
                                        <li className={"timeslot " + (workstationReservations.filter(x => x.date === day).find(i => (i.slot === indx)) ? "booked" : "available")}
                                            key={JSON.stringify(slot + day)}
                                            onClick={() => handleSlotClick({ day, slot: indx })}>
                                            {slot + ' : '}
                                            {times[indx + 1] ? times[indx + 1] : '00:00AM'}
                                        </li>)
                                }

                            </Accordion>
                        )
                        : <>Select a workstation from the list above to see the schedule</>
                }
            </div>
            <div />
        </div>
    )

};