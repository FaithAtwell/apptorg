import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/Login.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          usernameOrEmail: '',
          password: ''
        }}
        validationSchema={Yup.object({
          usernameOrEmail: Yup.string().required('Username or Email is required'),
          password: Yup.string().required('Password is required')
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setLoading(true);
          try {
            const response = await axios.post('/api/login', values);
            console.log('Login successful:', response.data);
            router.push('/calendar'); // Redirect to CalendarPage.js after successful login
          } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid username/email or password');
          } finally {
            setLoading(false);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="usernameOrEmail">Username or Email:</label>
              <Field type="text" id="usernameOrEmail" name="usernameOrEmail" placeholder="Username or Email" />
              <ErrorMessage name="usernameOrEmail" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className={styles.error} />
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <button type="submit" disabled={isSubmitting || loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
