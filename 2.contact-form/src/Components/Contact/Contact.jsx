import './Contact.css';
import Swal from 'sweetalert2';

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // FormData'nın doğru şekilde oluşturulduğunu kontrol etmek için loglayın
        formData.append("access_key", "8770ea82-ee5e-4402-80fd-815993b8ec4d");

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const res = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: "Success",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                console.error('Error response:', res);
                Swal.fire({
                    title: "Error",
                    text: res.message || "There was an error sending your message. Please try again.",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Catch error:', error);
            Swal.fire({
                title: "Error",
                text: "There was an error sending your message. Please try again.",
                icon: "error"
            });
        }
    };

    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" className="field" placeholder='Enter your name' name='name' required />
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" className="field" placeholder='Enter your email' name='email' required />
                </div>
                <div className="input-box">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" className="field mess" name="message" placeholder='Enter your message' required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
