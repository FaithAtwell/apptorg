
import { useState } from 'react';
export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = (e) => {
        e.preventDefault();
        // Implement signup logic here
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSignup}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

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