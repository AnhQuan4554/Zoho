const getResult = async (module) => {
  try {
    const res = await ZOHO.CRM.API.getAllRecords({
      Entity: module,
      sort_order: "desc",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

ZOHO.embeddedApp.on("PageLoad", async function () {
  const rs = await getResult("Leads");

  var dataRender = [];
  let data = null;
  data = rs.map((item) => ({
    title: item.Company,
    start: item.Modified_Time,
    description: [
      {
        id: item.id,
        lastName: item.Last_Name,
      },
    ],
  }));
  console.log(data);
  // handle calender
  var calendarEl = document.getElementById("calendar");
  var events = [
    {
      title: rs[0].Modified_Time,
      start: "2023-05-01",
      backgroundColor: "#FF0000",
    },
    {
      title: rs[1].Modified_Time,
      start: "2023-05-05",
    },
    {
      title: rs[2].Modified_Time,
      start: "2023-05-10",
    },
  ];
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: data, // Sử dụng mảng dữ liệu sự kiện để hiển thị tên người trong lịch
  });

  calendar.render();
  // end handle calendar
});
ZOHO.embeddedApp.init();
