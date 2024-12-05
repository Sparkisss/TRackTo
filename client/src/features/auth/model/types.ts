import React from "react"

export interface AuthObserverProps {
    children: React.ReactNode;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
}

  