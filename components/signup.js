import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/signup.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
          name: '',
          age: ''
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Email is required'),
          username: Yup.string().required('Username is required'),
          password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
          confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
          name: Yup.string().required('Name is required'),
          age: Yup.number().required('Age is required').positive('Age must be a positive number')
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post('/api/signupB', values); // Changed the route to '/api/signupB'
            console.log('Signup successful:', response.data);
            router.push('/loginpage'); // Redirect to login page after successful signup
          } catch (error) {
            console.error('Error signing up:', error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" placeholder="Username" />
              <ErrorMessage name="username" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
              <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <label htmlFor="age">Age:</label>
              <Field type="number" id="age" name="age" placeholder="Age" />
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
