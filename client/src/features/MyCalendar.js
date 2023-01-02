import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector } from "react-redux";
import { getUser } from "./authentication/authenticationSlice";

const localizer = momentLocalizer(moment)

export const MyCalendar = (props) => {
  const user = useSelector(getUser);

  return (
    <div>
      {user.givenName && (
        <div>
          {`${user.givenName} ${user.familyName}' calendar`}
        </div>
      )}

      <Calendar
        localizer={localizer}
        // events={""}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}
