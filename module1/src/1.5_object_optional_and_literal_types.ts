{
  const user: { 
    firstName: string; 
    middleName?: "Hasan"; 
    lastName: string 
  } = {
    firstName: "Md. Nazmul",
    lastName: "Hasan",
  };
  console.log(user);

  let person: {
    readonly firstName: "John",   // Literal and Readonly
    middleName?: string,          // Optional
    lastName: string,             // Regular string
    isMarried: boolean            // Boolean type
  } = {
    firstName: "John",            // Literal type, must be "John"
    lastName: "Doe",
    isMarried: false
  };
  console.log(person)
}