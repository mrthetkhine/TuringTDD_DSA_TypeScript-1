interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
interface AddressWithUnit extends BasicAddress {
  unit: string;
}
let add:AddressWithUnit = {
  name: "John",
  street: "123 Main St",
  city: "Anytown",
  country: "USA",
  postalCode: "12345",
  unit: "Apt 1",
};