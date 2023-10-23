const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
},
{
    timestamps: true,
    collection: "users",
}
);

schema.pre("save", async function(next){
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password,10);
  }
  next();
})

const user = mongoose.model("user", schema);

module.exports = user
