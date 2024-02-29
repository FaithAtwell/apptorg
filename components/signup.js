
// import { useState } from 'react';
// export default function SignupPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const handleSignup = (e) => {
//         e.preventDefault();
//         // Implement signup logic here
//     };
//     return (
//         <div>
//             <h1>Sign Up</h1>
//             <form onSubmit={handleSignup}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <input type="password" placeholder="Re-enter" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <input type="name" placeholder="name" value={title} onChange={(e) => setName(e.target.value)} />
//                 <input type="phone" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
//                 <input type="address" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
//                 <input type="age" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     ); 
// }

// pages/signup.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/Signup.module.css';

const Signup = () => {
  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
          phone: '',
          address: '',
          age: ''
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
          confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
          name: Yup.string().required('Name is required'),
          phone: Yup.string().required('Phone is required'),
          address: Yup.string().required('Address is required'),
          age: Yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
              <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <Field type="tel" name="phone" placeholder="Phone" />
              <ErrorMessage name="phone" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <Field type="text" name="address" placeholder="Address" />
              <ErrorMessage name="address" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <Field type="number" name="age" placeholder="Age" />
              <ErrorMessage name="age" component="div" className={styles.error} />
            </div>
            <button type="submit" disabled={isSubmitting}>Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
