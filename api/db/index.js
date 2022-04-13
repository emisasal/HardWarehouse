const { connect } = require("mongoose");

const { MONGO_URI } = process.env

const connection = async () => {
    try {
      await connect(MONGO_URI);
      console.log("Database is connected");
    } catch (error) {
      console.log(error);
    }
}

connection()


