export const GET_SHEDULE = "GET_SCHEDULE";

const getShedule = dates => ({
    type: "GET_SCHEDULE",
    dates, 
});

export default getShedule;