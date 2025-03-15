export function AppointletWidget() {
  return (
    <>
      <div
        className="appointlet-inline"
        data-appointlet-inline="https://appt.link/meet-with-dr-gini-dutt-npMJtPjD/phone-call"
      ></div>
      <script async defer src="https://js.appointlet.com/"></script>
      <link href="https://js.appointlet.com/styles.css" rel="stylesheet" />
    </>
  );
}

export default AppointletWidget;
