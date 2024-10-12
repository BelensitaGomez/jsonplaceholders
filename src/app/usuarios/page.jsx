import axios from "axios";
import Link from "next/link";
async function getUsuarios(){
    const url="https://jsonplaceholder.typicode.com/users"
    const usuarios=await axios.get(url);
    //console.log(universidades.data);
    return usuarios.data;
}
export default async function Usuarios(){
     const usuarios=await getUsuarios();
    return(
        <>
        <h1>Usuarios</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>

                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((usuario,i)=>(
                        <tr key="{i}">
                            <td>{i+1}</td>
                            <td>
                            <Link href={`/usuarios/${usuario.id}`}>
                            {usuario.name}
                            </Link>
                            </td>
                            <td>{usuario.username}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
        </>
    );
}