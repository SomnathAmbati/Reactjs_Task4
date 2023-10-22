import './index.css'

const TableItem = props => {
  const {user} = props

  const {
    id,
    image,
    firstName,
    lastName,
    gender,
    email,
    username,
    domain,
    ip,
    university,
  } = user
  return (
    <tr>
      <td>{id}</td>
      <td>
        <img src={image} alt="userProfile" />
      </td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td>{username}</td>
      <td>{domain}</td>
      <td>{ip}</td>
      <td> {university}</td>
    </tr>
  )
}

export default TableItem