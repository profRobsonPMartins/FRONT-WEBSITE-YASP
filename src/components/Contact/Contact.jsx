import React, { useState } from "react";
import '../../styles/Contact.css';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Enviando a requisição POST para o backend
        fetch("https://api-terceiro-b.onrender.com/email/", { // Use localhost para testes locais
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                setMessage("Email cadastrado com sucesso!!!!");
                setEmail("")
            } else {
                setMessage("Erro ao cadastrar o email.");
            }
        })
        .catch((erro) => {
            console.log("Erro:", erro);
            setMessage("Erro de conexão com o servidor xD");
        });
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <h1>Escola Estadual Prof. Yolanda Araújo Silva Paiva</h1>
                <h3><span>Inscreva-</span>se</h3>
                <p>
                    Fique por dentro das últimas notícias e eventos da nossa Escola ao se
                    inscrever em nossa newsletter. Receba diretamente em seu e-mail informações
                    valiosas!
                </p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email*"
                        required
                    />
                    <button type="submit">Subscribe Now</button>
                </form>
                {message && <p className="response-message">{message}</p>}
            </div>
        </section>
    );
};

export default Contact;
