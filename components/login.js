
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
//             <h1>Login</h1>
//             <form onSubmit={handleSignup}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// }

// import { useState } from 'react';
// import Link from 'next/link';
// export default function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const handleLogin = (e) => {
//         e.preventDefault();
//         // Implement login logic here
//     };
//     return (
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={handleLogin}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type="submit">Login</button>
//             </form>
//             <p>Don't have an account?
//                 <Link href="/signup">
//                     <a>Sign up</a>
//                 </Link>
//             </p>
//         </div>
//     );
// }

// pages/login.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().required('Password is required')
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
            <button type="submit" disabled={isSubmitting}>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
