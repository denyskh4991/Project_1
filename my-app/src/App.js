import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './App.css';

const validationSchema = yup.object().shape({
  name: yup.string().required('Це поле обов\'язкове'),
  email: yup.string().email('Введіть коректний email').required('Це поле обов\'язкове'),
  phone: yup.string().matches(/^\d{12}$/, 'Телефон повинен мати рівно 12 цифр').required('Це поле обов\'язкове'),
});

function MyForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setFormSubmitted(true);
    },
  });

  return (
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Ім'я</label>
          <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
          />
          {formSubmitted && formik.touched.name && formik.errors.name && (
              <div className="error-message">{formik.errors.name}</div>
          )}
        </div>
        <div>
          <label>Електронна пошта</label>
          <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
          />
          {formSubmitted && formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label>Телефон</label>
          <input
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
          />
          {formSubmitted && formik.touched.phone && formik.errors.phone && (
              <div className="error-message">{formik.errors.phone}</div>
          )}
        </div>
        <button type="submit">Відправити</button>
        {formSubmitted &&
            !formik.errors.name &&
            !formik.errors.email &&
            !formik.errors.phone && <div className="success-message">Форма відправлена успішно!</div>}
      </form>
  );
}

export default MyForm;