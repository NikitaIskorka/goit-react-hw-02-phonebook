import React, { Component } from 'react'

class ContactForm extends Component {
    state = {
        name: ''
    }


    handleInputChange = (e) => {
        console.log(e.currentTarget.value);
        this.setState({
            name: e.currentTarget.value
        })
    }

    render() {
        return (<><form>
            <label htmlFor="">Name
                <input
                    onChange={this.handleInputChange}
                    value={this.state.name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                /></label>
            <button type='submit'>Add contact</button></form>
        </>
        )
    }
}


export default ContactForm