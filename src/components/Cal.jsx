import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import "../css/Cal.css";

export default function Cal() {
  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi({ namespace: "meet" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="cal-float-wrap">
      <button
        type="button"
        className="cal-float-btn"
        data-cal-namespace="meet"
        data-cal-link="devajuw/meet"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}'
        aria-label="Book a meeting — opens scheduling"
      >
        Book a meeting 📆
      </button>
    </div>
  );
}
