
export const WorkStation = ({ id, deskNumber }) => {

    const isReserved = '?';

    return (
        <>
        <div>
            <div style={{ color: 'blue' }}>{id}</div>
            <div style={{ color: 'green' }}>{deskNumber}</div>
            <div style={{ color: 'red' }}>{isReserved}</div>
        </div>
        </>
    )
};