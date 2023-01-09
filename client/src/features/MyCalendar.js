import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./authentication/authenticationSlice";
import { useEffect } from "react";
import { getEvents } from "./events/eventsSlice";

const localizer = momentLocalizer(moment)

export const MyCalendar = (props) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.events)

  useEffect(() => {
    dispatch(getEvents(user.email))
  }, [user]);

  if (loading) {
    return <p> loading... </p>;
  }


  return (
    <div>
      {user.givenName && (
        <div>
          {`${user.givenName} ${user.familyName}' calendar`}
        </div>
      )}

      <Calendar
        localizer={localizer}
        events={entities}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}
