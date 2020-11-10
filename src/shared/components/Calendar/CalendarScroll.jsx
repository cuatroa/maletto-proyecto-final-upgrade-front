import React, { useState, useContext } from "react";
import { Calendar } from "primereact/calendar";
import "./CalendarScroll.scss";
import { InfoContext } from "../../../shared/contexts/InfoContext";


export const CalendarScroll = (props) => {
  //Parámetros de la fecha a elegir
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = month === 0 ? 11 : month - 1;
  let prevYear = prevMonth === 11 ? year - 1 : year;
  let nextMonth = month === 11 ? 0 : month + 1;
  let nextYear = nextMonth === 0 ? year + 1 : year;

  const [InfoContext, setInfoContext] = useContext(InfoContext);

  //Se establece parámetros para compartir datos entre componentes
  const date1 = props.date1;
  const date2 = props.date2;
  const setDate1 = props.setDate1;
  const setDate2 = props.setDate2;

  /**
   * Se utiliza los parámetros de minDate/maxDate - biblioteca react-datepicker --save
   * Devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año
   * Devuelve el año del objeto de fecha especificado acorde al tiempo local
   */
  let minDate = new Date();
  minDate.setMonth(month);
  minDate.setFullYear(prevYear);

  let maxDate = new Date();
  maxDate.setMonth(nextMonth);
  maxDate.setFullYear(nextYear);

  /**
   * Se crea una array para almacenar la fecha actual
   * Se genera un bucle para establecer unos parámetros
   */
  let invalidDates = [today];

  const [calendar2, setCalendar2] = useState(true);
  const [calendar1, setCalendar1] = useState(false);

  const dateTemplate = (date) => {
    if (date.day > 10 && date.day < 15) {
      return (
        <div
          style={{
            backgroundColor: "#1dcbb3",
            color: "#ffffff",
            fontWeight: "bold",
            borderRadius: "50%",
            width: "2em",
            height: "2em",
            lineHeight: "2em",
            padding: 0,
          }}
        >
          {date.day}
        </div>
      );
    } else {
      return date.day;
    }
  };

  return (
    <main>
      <div className="calendar__structure">
        {/*Establecemos los parámetros que afectaran a nuestros calendarios*/}
        <section className="calendar__format">
          <Calendar
            className="calendar1  icon-calendar"
            value={date1}
            placeholder="Depósito"
            onChange={(e) => { setDate1(e.value); setCalendar2(false); }}
            minDate={minDate}
            maxDate={calendar1 ? date2 : ''}
            dateFormat="dd/mm/yy"
            showTime={true}
            showIcon={true}
            stepMinute={date1 ? date1.getMinutes() % 5 == 0 ? 5 : 1 : 1}
          />
        </section>
        <section className="calendar__format">
          <Calendar
            className="calendar2 icon-calendar"
            value={date2}
            onChange={(e) => { setDate2(e.value); setCalendar1(true); }}
            minDate={date1 > minDate ? date1 : minDate}
            dateFormat="dd/mm/yy"
            placeholder="Retirada"
            showTime={true}
            showIcon={true}
            stepMinute={date2 ? date2.getMinutes() % 5 == 0 ? 5 : 1 : 1}
            disabled={calendar2}
          />
        </section>
      </div>
    </main>
  );
};
