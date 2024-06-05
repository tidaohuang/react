import { observer } from "mobx-react-lite";
import { ContactViewModel } from "../models/ContactViewModel";
import { useState } from "react";
import { useStore } from "../stores/store";

interface Props {
    viewModel: ContactViewModel
}

export default observer(function SectionContact({ viewModel }: Props) {

    const { contentStore } = useStore();

    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('');

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [loading, setLoading] = useState(false);

    const [systemMessage, setSystemMessage] = useState('')


    return (
        <section className="section contact">
            <div className="common-header">
                {viewModel.commonHeader}
                <div className="common-subheader">{viewModel.subHeader}</div>
            </div>

            <div className="contact-form">
                <div className="contact-form-user">
                    <div className="form-group">
                        <label>{viewModel.name}</label>
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => { setName(e.target.value); setErrorName('') }}
                        />
                        <small>{errorName}</small>
                    </div>

                    <div className="form-group">
                        <label>{viewModel.email}</label>
                        <input type="email" className="form-control"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setErrorEmail('') }}
                        />
                        <small>{errorEmail}</small>
                    </div>
                </div>


                <div className="form-group">
                    <label>{viewModel.message}</label>
                    <textarea className="form-control"
                        value={message}
                        onChange={(e) => { setMessage(e.target.value); setErrorMessage('') }}
                    ></textarea>
                    <small>{errorMessage}</small>
                </div>

                <button className={`btn ${loading ? 'loading' : ''} btn-secondary`} disabled={loading}
                    onClick={async () => {

                        let valid = true;

                        if (name == undefined || name.length == 0) {
                            setErrorName("Field: 'name' is required.");
                            valid = false;
                        }
                        if (email == undefined || email.length == 0) {
                            setErrorEmail("Field: 'email' is required.")
                            valid = false;
                        } else {
                            const regexp = new RegExp(/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
                            if (!regexp.test(email)) {
                                setErrorEmail("Field: 'email' is invalid.")
                                valid = false;
                            }
                        }
                        if (message == undefined || message.length == 0) {
                            setErrorMessage("Field: 'message' is required.")
                            valid = false;
                        }

                        if (valid) {
                            setLoading(true)
                            const success = await contentStore.sendEmail(email, name, message);
                            if (success) {
                                setSystemMessage('Your message is sent successfully!');
                                setLoading(false);
                                setName('');
                                setEmail('');
                                setMessage('');
                            }
                        }

                    }}>
                    {viewModel.btnText}
                </button>

                <div className="system-message">
                    {systemMessage}
                </div>
            </div>

            <p className="contact-form-meta">
                {viewModel.meta} <br />
                email: <span className="hightlight">henry.2039@gmail.com</span> <br />
                phone: <span className="hightlight">+886-905-335-539</span>
            </p>

            <div className="cv-download">
                <button className="cv-download-btn">
                    <img src="./favicon.svg" alt="" />
                    <span>{viewModel.btnDownload}</span>
                </button>
            </div>


        </section>
    )
})