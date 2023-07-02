import mongoose from "mongoose";

let account_number = Math.floor(Math.random() * 9000000000) + 1000000000;

let firstR = Math.floor(Math.random() * 9000);
let lastR = Math.floor(Math.random() * 90000);

let routing_number = firstR + "-" + lastR;

const ALBET = makeid(1);
let tcc_code = `FT${Math.floor(Math.random() * 900)}`;
let imf_code = `FTB${Math.floor(Math.random() * 9000)}`;
let cot_code = `${ALBET}${Math.floor(Math.random() * 9000)}L`;
let atc_code = `AT${Math.floor(Math.random() * 9000)}`;

function makeid(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a username"],
      unique: true,
    },
    name: { type: String, required: [true, "Please add a name"] },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: { type: String, required: [true, "Please add a password"] },
    phoneNumber: { type: String, required: [true, "Please add a phoneNumber"] },
    address: { type: String, required: [true, "Please add a valid address"] },
    profilePicture: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    zip_code: { type: String },
    occupation: { type: String },
    social_security: { type: String },
    date_of_birth: { type: String },
    account_number: { type: Number, default: account_number },
    routing_number: { type: String, default: routing_number },
    account_type: {
      type: String,
      required: [true, "Please add a valid account type"],
    },
    balance: { type: Number, default: 0 },
    isAdmin: { type: Boolean, default: false },
    tcc_code: { type: String, default: tcc_code },
    imf_code: { type: String, default: imf_code },
    cot_code: { type: String, default: cot_code },
    atc_code: { type: String, default: atc_code },
    tcc_code_price: { type: Number },
    imf_code_price: { type: Number },
    cot_code_price: { type: Number },
    atc_code_price: { type: Number },
    tcc_code_need: { type: Boolean, default: true },
    imf_code_need: { type: Boolean, default: true },
    cot_code_need: { type: Boolean, default: true },
    atc_code_need: { type: Boolean, default: true },
    restricted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
