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

  const handleLogin = async (values, { setSubmitting }) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/login', values);
      console.log('Login successful:', response.data);
      router.push('/CalendarPage');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid username or password');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={Yup.object({
          username: Yup.string().required('Username is required'),
          password: Yup.string().required('Password is required')
        })}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
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
