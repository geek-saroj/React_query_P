import * as yup from 'yup';

const validate = () => {
  

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
});

// Object to be validated
const data = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};

// Validate the object against the schema
schema.validate(data)
  .then(function (validData) {
    console.log(validData); // Valid data
  })
  .catch(function (err) {
    console.error(err); // Validation error
  });
}
export default validate