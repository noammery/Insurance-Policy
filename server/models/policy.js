const mongoose = require(`mongoose`);

const PolicySchema = mongoose.Schema([
  {
    CreditCardNumber: {
      type: String,
      required: true,
    },
    ExpirationDate: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
    CardHolderFullName: {
      type: String,
      required: true,
    },
    PersonID: {
      type: String,
      required: true,
    },
  },
]);

const Policy = mongoose.model(`policy`, PolicySchema);
module.exports = Policy;
