const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose
      .connect(process.env.MONGOOSE_CONNECT, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error) {
    console.log(`Database connection error:- ${error}`);
  }
})();
