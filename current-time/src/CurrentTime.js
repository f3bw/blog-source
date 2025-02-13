import React, { useEffect } from "react";

const CurrentTime = () => {
  useEffect(() => {
    function initDynamicCurrentTime() {
      const defaultTimezone = "Europe/Amsterdam";

      const formatNumber = (number) => number.toString().padStart(2, "0");

      const createFormatter = (timezone) => {
        return new Intl.DateTimeFormat([], {
          timeZone: timezone,
          timeZoneName: "short",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
      };

      const parseFormattedTime = (formattedDateTime) => {
        const match = formattedDateTime.match(/(\d+):(\d+):(\d+)\s*([\w+]+)/);
        if (match) {
          return {
            hours: match[1],
            minutes: match[2],
            seconds: match[3],
            timezone: match[4],
          };
        }
        return null;
      };

      const updateTime = () => {
        document.querySelectorAll("[data-current-time]").forEach((element) => {
          const timezoneAttr = element.getAttribute("data-current-time");
          const timezone =
            timezoneAttr && timezoneAttr !== "true"
              ? timezoneAttr
              : defaultTimezone;
          const formatter = createFormatter(timezone);
          const now = new Date();
          const formattedDateTime = formatter.format(now);

          const timeParts = parseFormattedTime(formattedDateTime);
          if (timeParts) {
            const { hours, minutes, seconds, timezone } = timeParts;

            const hoursElem = element.querySelector(
              "[data-current-time-hours]"
            );
            const minutesElem = element.querySelector(
              "[data-current-time-minutes]"
            );
            const secondsElem = element.querySelector(
              "[data-current-time-seconds]"
            );
            const timezoneElem = element.querySelector(
              "[data-current-time-timezone]"
            );

            console.log("Updating time:", {
              hours,
              minutes,
              seconds,
              timezone,
            });

            if (hoursElem) hoursElem.textContent = formatNumber(hours);
            if (minutesElem) minutesElem.textContent = formatNumber(minutes);
            if (secondsElem) secondsElem.textContent = formatNumber(seconds);
            if (timezoneElem) timezoneElem.textContent = timezone;
          }
        });
      };

      updateTime();
      setInterval(updateTime, 1000);
    }

    initDynamicCurrentTime();
  }, []);

  return (
    <p data-current-time="Europe/Amsterdam">
      <span data-current-time-hours>9</span>:
      <span data-current-time-minutes>00</span>:
      <span data-current-time-seconds>24</span>
      &nbsp;
      <span data-current-time-timezone>CET</span>
    </p>
  );
};

export default CurrentTime;
