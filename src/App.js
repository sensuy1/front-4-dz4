import React, { useState } from "react";

export default function MyForm() {
    const [formValues, setFormValues] = useState({
        "ФИО": "",
        "Возраст": "",
        "Почта": "",
        "Телефонный номер": "+996 "
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        fetch('/some-api', { method: form.method, body: formData })

        const formjson = Object.fromEntries(formData.entries())
        console.log(formjson)
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                ФИО: <input type="text" name="ФИО" value={formValues["ФИО"]} onChange={handleChange} />
            </label>
            <hr />
            <label>
                Возраст: <input type="number" name="Возраст" value={formValues["Возраст"]} onChange={handleChange} />
            </label>
            <hr />
            <label>
                Электронная почта: <input type="email" name="Почта" value={formValues["Почта"]} onChange={handleChange} />
            </label>
            <hr />
            <p>
                <label>
                    Номер телефона: <input type="tel" name="Телефонный номер" value={formValues["Телефонный номер"]} onChange={handleChange} />
                </label>
            </p>
            <div>
                <strong>REALTIME:</strong>
                <pre>{JSON.stringify(formValues, null, 2)}</pre>
            </div>
            <button type="reset" style={{ margin: 5 }}>
                Сбросить форму
            </button>
            <button type="submit">Отправить форму</button>
        </form>
    )
}
