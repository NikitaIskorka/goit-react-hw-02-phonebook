

const Contacts = ({ contacts }) => {
    return (<ul>
        {contacts.map(contact => {
            return (
                <li id={contact}>{contact}</li>
            )
        })}
    </ul>)
}
export default Contacts