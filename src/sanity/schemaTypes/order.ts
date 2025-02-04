const order = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "user",
        title: "User",
        type: "reference",
        to: [{ type: "user" }], // Reference to User
      },
      {
        name: "orderId",
        title: "Order ID",
        type: "string",
      },
      {
        name: "items",
        title: "Ordered Items",
        type: "array",
        of: [{ type: "object", fields: [
          { name: "name", title: "Product Name", type: "string" },
          { name: "price", title: "Price", type: "number" },
          { name: "quantity", title: "Quantity", type: "number" }
        ] }],
      },
      {
        name: "totalPrice",
        title: "Total Price",
        type: "number",
      },
      {
        name: "status",
        title: "Order Status",
        type: "string",
        options: {
          list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
        },
      },
      {
        name: "shipment",
        title: "Shipment Tracking",
        type: "reference",
        to: [{ type: "shipmentTracking" }],
      },
      {
        name: "createdAt",
        title: "Order Date",
        type: "datetime",
        options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm", calendarTodayLabel: "Today" },
      },
    ],
  };
  export default order;