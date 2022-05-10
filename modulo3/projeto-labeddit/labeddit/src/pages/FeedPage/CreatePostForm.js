import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useUnprotectedProtectedPage } from "../../hooks/useUnprotectedPage";
import { login } from "../../services/user";

const LoginForm = ({ setRightButtonText }) => {
    const { form, onChange, clear } = useForm({ email: "", password: "" });
    const navigate = useNavigate();
    useUnprotectedProtectedPage();