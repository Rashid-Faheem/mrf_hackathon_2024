const shipmentTracking = {
    name: "shipmentTracking",
    title: "Shipment Tracking",
    type: "document",
    fields: [
      {
        name: "order",
        title: "Order",
        type: "reference",
        to: [{ type: "order" }],
      },
      {
        name: "trackingNumber",
        title: "Tracking Number",
        type: "string",
      },
      {
        name: "carrier",
        title: "Carrier",
        type: "string",
      },
      {
        name: "status",
        title: "Shipment Status",
        type: "string",
        options: {
          list: ["In Transit", "Out for Delivery", "Delivered", "Failed Delivery"],
        },
      },
      {
        name: "estimatedDelivery",
        title: "Estimated Delivery Date",
        type: "datetime",
        options: { dateFormat: "YYYY-MM-DD", calendarTodayLabel: "Today" },
      },
      {
        name: "updatedAt",
        title: "Last Updated",
        type: "datetime",
        options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm", calendarTodayLabel: "Today" },
      },
    ],
  };
  export default shipmentTracking;