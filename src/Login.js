import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';

function Login() {
    return (
        <div className={'login-page'}>
            <div className={'login-page_item'}>
                <h2>Welcome!</h2>
                <div className={'login-page_button'}>
                    <GoogleOutlined /> Login with Google
                </div>
            </div>
        </div>
    )
}

export default Login;

