import React, { useEffect } from 'react';
import Head from 'next/head'
import styles from './form.module.css';
import LoginForm from '@/component/users/form/login';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';

export default function Login() {
   // const { auth, login, logout} = useAuth()

   return (
      <>
    <LoginForm/>
</>
   );
}