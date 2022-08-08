import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTimeSlotArray, setDateTime, areDatesEqual } from '../assets/utils/time-utils';

export const WorkStation = ({ id, deskNumber }) => {
    const allReservations = useSelector(state => state.reservations);

    const timeSlotArr = createTimeSlotArray();
    const date = new Date();

    const currentSlot = timeSlotArr.reduce(
        (previousValue, currentValue, indx) => {
            const start = setDateTime(new Date(), currentValue);
            const end = timeSlotArr[indx + 1]
                ?
                setDateTime(new Date(), timeSlotArr[indx + 1])
                :
                setDateTime(new Date(), timeSlotArr[0]);

            if (date > start && date < end) {
                return indx;
            }

            return previousValue;
        },
        []
    );

    const wsReservations = allReservations.filter(i => i.workstationId === id && areDatesEqual(new Date(i.date), new Date()));
    const reservationsForCurrentSlot = wsReservations.filter(i => i.slot === currentSlot);

    return (
        <>
        <div>
            <div className="workstation-id">Workstation ID: {id}</div>
            <div className="desk-number">Desk Number: {deskNumber}</div>
            <div className="reservation-container">
                Status:
                <div className={"reservation " + (reservationsForCurrentSlot.length ? "reserved" : "available")}></div>
                <div className={"reservation-text " + (reservationsForCurrentSlot.length ? "reserved" : "available")}>{(reservationsForCurrentSlot.length ? "reserved" : "available")}</div>
            </div>
        </div>
        </>
    )
};