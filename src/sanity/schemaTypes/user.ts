const user = {
    name: "user",
    title: "User",
    type: "document",
    fields: [
      {
        name: "fullName",
        title: "Full Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule: { email: () => { (): any; new(): any; required: { (): any; new(): any; }; }; }) => Rule.email().required(),
      },
      {
        name: "address",
        title: "Address",
        type: "string",
      },
      {
        name: "city",
        title: "City",
        type: "string",
      },
      {
        name: "postalCode",
        title: "Postal Code",
        type: "string",
      },
      {
        name: "country",
        title: "Country",
        type: "string",
      },
      {
        name: "password",
        title: "password",
        type: "string",
      },
      
      {
        name: "orders",
        title: "Orders",
        type: "array",
        of: [{ type: "reference", to: [{ type: "order" }] }], // Linking orders
      },
    ],
  };
  export default user;