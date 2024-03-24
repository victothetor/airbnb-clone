'use client';
import React, { useState, useEffect } from 'react';
import SignupModal from "./modal/signUpModal";
import LoginModal from "./modal/loginModal";

const NavBar = () => {
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    // Check local storage for login status on component mount
    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        const storedUserEmail = localStorage.getItem("userEmail");
        const storedUserPassword = localStorage.getItem("userPassword");
        if (storedUserName && storedUserEmail && storedUserPassword) {
            setUserName(storedUserName);
            setUserEmail(storedUserEmail);
            setUserPassword(storedUserPassword);
        }
    }, []);

    const openSignupModal = () => {
        setShowSignupModal(true);
    };
    
    const closeSignupModal = () => {
        setShowSignupModal(false);
    };

    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    const closeLoginModal = () => {
        setShowLoginModal(false);
    };

    const handleSignupSubmit = async (formData) => {
        // Handle the form submission here

        const response = await fetch('/api/user/sign-up', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: formData.name,
                userEmail: formData.email,
                userPassword: formData.password,
            }),
        });

        if (response.ok) {
            setUserName(formData.name);
            setUserEmail(formData.email);
            // No longer needed to store the password and last user in local
            // setUserPassword(formData.password);
            // localStorage.setItem("lastLoginUserName", formData.name); 
            // localStorage.setItem("lastLoginUserEmail", formData.email);
            // localStorage.setItem("lastLoginUserPassword", formData.password);
            closeSignupModal(); // Close the modal after form submission
        } else {
            const resposeBody = await response.json()
            alert("Error: " + resposeBody.message)
        }
    };

    const handleLoginSubmit = async (formData) => {
        // Handle the login form submission here
        // You can perform authentication or any other necessary logic
        // based on the form data
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userEmail: formData.email,
                userPassword: formData.password,
            }),
        });
        const resposeBody = await response.json();
        const userName = resposeBody.userName;
        const userEmail = resposeBody.userEmail;

        if (response.ok) {
            // Remove all local storage 
            localStorage.setItem("userName", userName); 
            localStorage.setItem("userEmail", userEmail);

            setUserName(userName);
            setUserEmail(userEmail);
            // No need to store user password in localStorage
            // setUserPassword(lastLoginUserPassword);

            // Close the modal after form submission
            closeLoginModal();
        } else {
            alert("Wrong email or password");
        }
    };

    const handleSignOut = () => {
        setUserName("");
        setUserEmail("");
        setUserPassword("");
        localStorage.removeItem("userName"); // Remove the user name from local storage
        localStorage.removeItem("userEmail"); // Remove the user email from local storage
        localStorage.removeItem("userPassword"); // Remove the user password from local storage
    };
    return (
        <nav class="navbar">
            <div class="logo">
                <img src="/airbnb.png" alt="Airbnb Logo"/>
            </div>
            {userName ? (
                <div className="signed-in nav-buttons items-center">
                    <span className="user-name">{userName}</span>
                    <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
                </div>
                ) : (
            <div class="nav-buttons">
                <button class="login-button" onClick={openLoginModal}>Login</button>
                <button class="signup-button" onClick={openSignupModal}>Sign Up</button>
            </div>
                )}
            {showSignupModal && <SignupModal onClose={closeSignupModal} onSubmit={handleSignupSubmit}/>}
            {showLoginModal && <LoginModal onClose={closeLoginModal} onSubmit={handleLoginSubmit}/>}
        </nav>
    )
        
};

export default NavBar;